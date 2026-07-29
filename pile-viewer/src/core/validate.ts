/**
 * Engineering validation and cross-document reconciliation.
 *
 * This layer sits between extraction and rendering. Its job is to refuse to let
 * unsound data reach the viewer silently: contradictions are surfaced, not
 * resolved by picking a winner, and anything the tool cannot establish is
 * reported as unknown rather than assumed.
 */

import {
  Alternative,
  Field,
  PileProject,
  PileRecord,
  Provenance,
  ValueState,
  conflicting,
  hasValue,
  needsReview,
} from './schema';
import { effectiveTopRL, socketCompliance, socketLength, toeRLFromDepth } from './calc';

export type Severity = 'error' | 'warning' | 'info';

export interface Issue {
  severity: Severity;
  pileId?: string;
  field?: string;
  message: string;
  /** What the engineer has to do; blank when it is purely informational. */
  action?: string;
}

/* ---------- source priority ---------- */

/**
 * Document classes in descending trust. Configurable because it is a project
 * decision, not a law — a signed inspection record may outrank a superseded
 * drawing on a job where the drawings lag construction.
 */
export type SourceClass =
  | 'approved-structural-drawing'
  | 'approved-pile-schedule'
  | 'signed-inspection-report'
  | 'field-inspection-record'
  | 'geotechnical-report'
  | 'unverified-note';

export const DEFAULT_SOURCE_PRIORITY: SourceClass[] = [
  'approved-structural-drawing',
  'approved-pile-schedule',
  'signed-inspection-report',
  'field-inspection-record',
  'geotechnical-report',
  'unverified-note',
];

export interface ClassifiedValue<T> {
  value: T;
  sourceClass: SourceClass;
  source: Provenance;
  confidence?: number;
}

/**
 * Reconcile competing values for one field.
 *
 * Priority alone is not allowed to decide. When the leading candidates disagree
 * the field is marked conflicting and both are kept, because a higher-priority
 * document is only better if it is also the current revision for this pile —
 * something the tool cannot confirm on its own. Priority is used to order the
 * alternatives for review, not to silently discard one.
 */
export function reconcile<T>(
  candidates: ClassifiedValue<T>[],
  priority: SourceClass[] = DEFAULT_SOURCE_PRIORITY,
  equals: (a: T, b: T) => boolean = (a, b) => a === b,
): Field<T> {
  if (candidates.length === 0) return { value: null, state: 'missing' };

  const ranked = [...candidates].sort(
    (a, b) => priority.indexOf(a.sourceClass) - priority.indexOf(b.sourceClass),
  );

  const distinct: ClassifiedValue<T>[] = [];
  for (const c of ranked) {
    if (!distinct.some((d) => equals(d.value, c.value))) distinct.push(c);
  }

  if (distinct.length === 1) {
    const only = ranked[0];
    return {
      value: only.value,
      state: 'extracted',
      source: only.source,
      confidence: only.confidence,
      note:
        candidates.length > 1
          ? `Agreed across ${candidates.length} sources.`
          : undefined,
    };
  }

  const alternatives: Alternative<T>[] = distinct.map((d) => ({
    value: d.value,
    source: d.source,
    confidence: d.confidence,
  }));
  return conflicting(
    alternatives,
    `${distinct.length} sources disagree; highest-priority source is ${ranked[0].sourceClass}. Engineer to confirm which revision governs.`,
  );
}

/* ---------- per-pile validation ---------- */

function levelIssues(p: PileRecord): Issue[] {
  const out: Issue[] = [];
  const top = effectiveTopRL(p);
  const toe = toeRLFromDepth(p);

  if (hasValue(top) && hasValue(toe) && toe.value >= top.value) {
    out.push({
      severity: 'error',
      pileId: p.id,
      field: 'toeRL',
      message: `Toe RL ${toe.value} is not below pile-top RL ${top.value}.`,
      action: 'Check whether depths were entered as levels, or the sign is reversed.',
    });
  }

  if (hasValue(p.topOfBedrockRL) && hasValue(top) && p.topOfBedrockRL.value > top.value) {
    out.push({
      severity: 'error',
      pileId: p.id,
      field: 'topOfBedrockRL',
      message: `Rockhead RL ${p.topOfBedrockRL.value} is above the platform RL ${top.value}.`,
      action: 'Confirm the rockhead level and its datum.',
    });
  }

  if (hasValue(p.topOfBedrockRL) && hasValue(toe) && p.topOfBedrockRL.value < toe.value) {
    out.push({
      severity: 'warning',
      pileId: p.id,
      field: 'topOfBedrockRL',
      message: `Rockhead RL ${p.topOfBedrockRL.value} is below the toe RL ${toe.value} — the pile did not reach rock.`,
      action: 'Confirm founding material and whether the pile is acceptable.',
    });
  }

  // Cross-check the two independent routes to the toe, when both exist.
  if (hasValue(p.toeRL) && hasValue(p.totalDepth) && hasValue(top)) {
    const impliedToe = top.value - p.totalDepth.value;
    if (Math.abs(impliedToe - p.toeRL.value) > 0.05) {
      out.push({
        severity: 'warning',
        pileId: p.id,
        field: 'totalDepth',
        message: `Reported toe RL ${p.toeRL.value} disagrees with platform RL − total depth (${impliedToe.toFixed(2)}).`,
        action: 'Reconcile the reported depth against the levels.',
      });
    }
  }

  return out;
}

function socketIssues(p: PileRecord): Issue[] {
  const out: Issue[] = [];
  const compliance = socketCompliance(p);

  if (compliance.verdict === 'non-compliant') {
    out.push({
      severity: 'error',
      pileId: p.id,
      field: 'constructedSocketLength',
      message: `Socket short of requirement. ${compliance.reason}`,
      action: 'Refer to the design engineer before acceptance.',
    });
  }
  if (compliance.verdict === 'indeterminate') {
    out.push({
      severity: 'warning',
      pileId: p.id,
      field: 'requiredSocketLength',
      message: `Socket compliance cannot be assessed. ${compliance.reason}`,
      action: 'Supply the required socket length from the approved drawing or schedule.',
    });
  }

  // A reported socket that contradicts the levels is a data fault worth raising.
  const derived =
    hasValue(p.topOfBedrockRL) && hasValue(p.toeRL)
      ? p.topOfBedrockRL.value - p.toeRL.value
      : null;
  if (
    derived !== null &&
    hasValue(p.constructedSocketLength) &&
    Math.abs(derived - p.constructedSocketLength.value) > 0.05
  ) {
    out.push({
      severity: 'warning',
      pileId: p.id,
      field: 'constructedSocketLength',
      message: `Reported socket ${p.constructedSocketLength.value} m disagrees with rockhead − toe (${derived.toFixed(2)} m).`,
      action: 'Confirm which of the socket length or the levels is correct.',
    });
  }

  return out;
}

function completenessIssues(p: PileRecord): Issue[] {
  const out: Issue[] = [];

  if (!hasValue(p.position.x) || !hasValue(p.position.y)) {
    out.push({
      severity: 'warning',
      pileId: p.id,
      field: 'position',
      message: 'No plan position — pile cannot be placed in the model.',
      action: 'Enter coordinates, or locate the pile on a calibrated drawing.',
    });
  } else if (p.position.accuracy === 'unverified' || p.position.accuracy === 'drawing-derived') {
    out.push({
      severity: 'info',
      pileId: p.id,
      field: 'position',
      message: `Position is ${p.position.accuracy} — not survey accuracy.`,
    });
  }

  const required: Array<[keyof PileRecord, string]> = [
    ['diameter', 'diameter'],
    ['toeRL', 'toe RL'],
    ['foundingMaterial', 'founding material'],
  ];
  for (const [key, label] of required) {
    const f = p[key] as Field<unknown>;
    if (!hasValue(f) && !(key === 'toeRL' && hasValue(toeRLFromDepth(p)))) {
      out.push({
        severity: 'warning',
        pileId: p.id,
        field: String(key),
        message: `No ${label} recorded.`,
        action: `Enter the ${label} or cite the source document.`,
      });
    }
  }

  // Anything flagged for review is reported once, generically.
  const reviewable: Array<[string, Field<unknown>]> = [
    ['toeRL', p.toeRL],
    ['topOfBedrockRL', p.topOfBedrockRL],
    ['diameter', p.diameter],
    ['requiredSocketLength', p.requiredSocketLength],
    ['groundRL', p.groundRL],
  ];
  for (const [name, f] of reviewable) {
    if (f.state === 'conflicting') {
      out.push({
        severity: 'error',
        pileId: p.id,
        field: name,
        message: f.note ?? 'Sources disagree on this value.',
        action: 'Resolve the conflict and mark the field verified.',
      });
    } else if (f.state === 'inferred') {
      out.push({
        severity: 'warning',
        pileId: p.id,
        field: name,
        message: `Value is inferred, not stated by a source. ${f.note ?? ''}`.trim(),
        action: 'Confirm against the source document.',
      });
    } else if (needsReview(f) && f.state === 'extracted') {
      out.push({
        severity: 'info',
        pileId: p.id,
        field: name,
        message: `Low extraction confidence (${((f.confidence ?? 0) * 100).toFixed(0)}%).`,
        action: 'Check the value against the cited source.',
      });
    }
  }

  return out;
}

export function validatePile(p: PileRecord): Issue[] {
  return [...levelIssues(p), ...socketIssues(p), ...completenessIssues(p)];
}

/* ---------- project validation ---------- */

export interface ProjectValidation {
  issues: Issue[];
  errorCount: number;
  warningCount: number;
  /** Pile IDs that cannot be drawn, with the reason. */
  undrawable: Array<{ id: string; blockers: string[] }>;
  /** True when nothing blocks an engineer signing the model off. */
  fitForVerification: boolean;
}

export function validateProject(project: PileProject): ProjectValidation {
  const issues: Issue[] = [];

  const seen = new Map<string, number>();
  for (const p of project.piles) {
    seen.set(p.id, (seen.get(p.id) ?? 0) + 1);
  }
  for (const [id, count] of seen) {
    if (count > 1) {
      issues.push({
        severity: 'error',
        pileId: id,
        message: `Pile ID "${id}" appears ${count} times.`,
        action: 'Merge the records or correct the IDs before relying on the model.',
      });
    }
  }

  const designIds = new Set(project.design.map((d) => d.id));
  for (const p of project.piles) {
    issues.push(...validatePile(p));
    if (designIds.size > 0 && !designIds.has(p.id)) {
      issues.push({
        severity: 'info',
        pileId: p.id,
        message: 'No matching design record — design vs constructed unavailable.',
      });
    }
  }

  const undrawable: Array<{ id: string; blockers: string[] }> = [];
  for (const p of project.piles) {
    const blockers: string[] = [];
    if (!hasValue(p.position.x) || !hasValue(p.position.y)) blockers.push('position');
    if (!hasValue(effectiveTopRL(p))) blockers.push('pile-top RL');
    if (!hasValue(toeRLFromDepth(p))) blockers.push('toe RL');
    if (!hasValue(p.diameter)) blockers.push('diameter');
    if (blockers.length) undrawable.push({ id: p.id, blockers });
  }

  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.filter((i) => i.severity === 'warning').length;

  return {
    issues,
    errorCount,
    warningCount,
    undrawable,
    fitForVerification: errorCount === 0 && undrawable.length === 0,
  };
}

/* ---------- summary for the UI ---------- */

export interface FieldStateSummary {
  state: ValueState;
  count: number;
}

export function summariseStates(project: PileProject): FieldStateSummary[] {
  const counts = new Map<ValueState, number>();
  const bump = (s: ValueState) => counts.set(s, (counts.get(s) ?? 0) + 1);

  for (const p of project.piles) {
    for (const key of [
      'groundRL',
      'pileTopRL',
      'toeRL',
      'topOfBedrockRL',
      'diameter',
      'totalDepth',
      'requiredSocketLength',
      'constructedSocketLength',
      'foundingMaterial',
      'bedrockClass',
      'groundwaterRL',
    ] as const) {
      bump((p[key] as Field<unknown>).state);
    }
  }
  return [...counts.entries()]
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count);
}

/** Socket compliance rolled up for the overview filters. */
export function complianceBreakdown(project: PileProject) {
  let compliant = 0;
  let nonCompliant = 0;
  let indeterminate = 0;
  for (const p of project.piles) {
    const v = socketCompliance(p).verdict;
    if (v === 'compliant') compliant++;
    else if (v === 'non-compliant') nonCompliant++;
    else indeterminate++;
  }
  return { compliant, nonCompliant, indeterminate };
}

/** Piles where a socket exists at all — used by the "socketed" filter. */
export function socketedCount(project: PileProject): number {
  return project.piles.filter((p) => {
    const s = socketLength(p);
    return hasValue(s) && s.value > 0;
  }).length;
}
