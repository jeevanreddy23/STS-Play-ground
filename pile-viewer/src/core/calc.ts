/**
 * Deterministic pile geometry.
 *
 * No rendering, no React, no I/O — so these can be tested against hand
 * calculations independently of anything drawn on screen. Every function
 * returns a Field, which means a missing input produces a `missing` output
 * rather than a zero. A pile with no toe RL has no length; it does not have a
 * length of nought.
 */

import {
  Field,
  PileDesign,
  PileRecord,
  hasValue,
  missing,
} from './schema';

/** Wrap a computed number, recording that it was derived rather than read. */
function calculated(value: number, note?: string): Field<number> {
  return { value: round3(value), state: 'calculated', note };
}

/** Levels are metres to millimetre precision; kill float dust at the boundary. */
export function round3(n: number): number {
  return Math.round(n * 1000) / 1000;
}

/**
 * The RL of the top of the pile. Falls back to the platform level when a
 * separate pile-top RL was not recorded, which is the normal case for a pile
 * cast to platform level — flagged so the assumption is visible.
 */
export function effectiveTopRL(p: PileRecord): Field<number> {
  if (hasValue(p.pileTopRL)) return p.pileTopRL;
  if (hasValue(p.groundRL)) {
    return {
      value: p.groundRL.value,
      state: 'calculated',
      note: 'Assumed equal to platform RL — no separate pile-top RL recorded.',
    };
  }
  return missing<number>('No pile-top RL and no ground RL.');
}

/**
 * Pile length = top RL − toe RL.
 *
 * Returns missing when either level is absent or conflicting. A negative result
 * means the levels are the wrong way round, which is a data fault, not a pile:
 * it is surfaced as an error by validate.ts rather than silently absolute-valued.
 */
export function pileLength(p: PileRecord): Field<number> {
  const top = effectiveTopRL(p);
  if (!hasValue(top) || !hasValue(p.toeRL)) {
    return missing<number>('Needs pile-top (or ground) RL and toe RL.');
  }
  return calculated(top.value - p.toeRL.value);
}

/**
 * Socket length as constructed = top-of-bedrock RL − toe RL.
 *
 * Prefers a directly reported socket length over the derived one, because the
 * inspector measured it on site and we did not. When the toe sits at or above
 * rockhead the socket is zero — a real, asserted zero, distinct from missing.
 */
export function socketLength(p: PileRecord): Field<number> {
  if (hasValue(p.constructedSocketLength)) return p.constructedSocketLength;
  if (!hasValue(p.topOfBedrockRL) || !hasValue(p.toeRL)) {
    return missing<number>('Needs top-of-bedrock RL and toe RL, or a reported socket length.');
  }
  const raw = p.topOfBedrockRL.value - p.toeRL.value;
  if (raw <= 0) {
    return calculated(0, 'Toe at or above proved rockhead — no socket.');
  }
  return calculated(raw);
}

/**
 * Rockhead RL, taking the reported value first and otherwise back-calculating
 * from toe RL and a reported socket length. The fallback is `calculated`, not
 * `extracted`, so it can never be mistaken for something a document stated.
 */
export function rockheadRL(p: PileRecord): Field<number> {
  if (hasValue(p.topOfBedrockRL)) return p.topOfBedrockRL;
  if (hasValue(p.toeRL) && hasValue(p.constructedSocketLength)) {
    return calculated(
      p.toeRL.value + p.constructedSocketLength.value,
      'Back-calculated from toe RL + reported socket length.',
    );
  }
  return missing<number>('Needs top-of-bedrock RL, or toe RL with a socket length.');
}

/**
 * Toe RL derived from platform level and a reported total depth, for reports
 * that give depths below ground rather than levels.
 */
export function toeRLFromDepth(p: PileRecord): Field<number> {
  if (hasValue(p.toeRL)) return p.toeRL;
  const top = effectiveTopRL(p);
  if (hasValue(top) && hasValue(p.totalDepth)) {
    return calculated(
      top.value - p.totalDepth.value,
      'Derived from platform RL − reported total depth.',
    );
  }
  return missing<number>('Needs toe RL, or platform RL with total depth.');
}

export type ComplianceVerdict =
  | 'compliant'
  | 'non-compliant'
  | 'indeterminate';

export interface SocketCompliance {
  verdict: ComplianceVerdict;
  required: Field<number>;
  achieved: Field<number>;
  /** Achieved − required. Null when either side is unknown. */
  shortfall: number | null;
  reason: string;
}

/**
 * Compare constructed socket against the design requirement.
 *
 * `indeterminate` is a first-class answer. If we do not know what was required,
 * we do not get to say the pile passed — the tool reports that it cannot tell,
 * and the engineer decides.
 */
export function socketCompliance(p: PileRecord): SocketCompliance {
  const achieved = socketLength(p);
  const required = p.requiredSocketLength;

  if (!hasValue(required)) {
    return {
      verdict: 'indeterminate',
      required,
      achieved,
      shortfall: null,
      reason: 'No required socket length on record.',
    };
  }
  if (!hasValue(achieved)) {
    return {
      verdict: 'indeterminate',
      required,
      achieved,
      shortfall: null,
      reason: 'Constructed socket length cannot be established.',
    };
  }
  const diff = round3(achieved.value - required.value);
  return {
    verdict: diff >= 0 ? 'compliant' : 'non-compliant',
    required,
    achieved,
    shortfall: diff,
    reason:
      diff >= 0
        ? `Achieved ${achieved.value} m against ${required.value} m required.`
        : `Short by ${Math.abs(diff)} m against ${required.value} m required.`,
  };
}

export interface DesignComparison {
  toeDifference: number | null;
  socketDifference: number | null;
  diameterDifference: number | null;
  /** Human-readable flags for anything the engineer should look at. */
  warnings: string[];
}

/**
 * Constructed against design. Positive toe difference means the pile was taken
 * deeper than designed.
 */
export function compareToDesign(
  p: PileRecord,
  d: PileDesign | undefined,
): DesignComparison {
  const warnings: string[] = [];
  if (!d) {
    return {
      toeDifference: null,
      socketDifference: null,
      diameterDifference: null,
      warnings: ['No design record for this pile.'],
    };
  }

  let toeDifference: number | null = null;
  if (hasValue(d.designToeRL) && hasValue(p.toeRL)) {
    toeDifference = round3(d.designToeRL.value - p.toeRL.value);
    if (toeDifference < 0) {
      warnings.push(
        `Toe is ${Math.abs(toeDifference)} m higher than design RL ${d.designToeRL.value}.`,
      );
    }
  } else {
    warnings.push('Toe RL cannot be compared — design or constructed level missing.');
  }

  let socketDifference: number | null = null;
  const achieved = socketLength(p);
  if (hasValue(d.designSocketLength) && hasValue(achieved)) {
    socketDifference = round3(achieved.value - d.designSocketLength.value);
    if (socketDifference < 0) {
      warnings.push(
        `Socket ${Math.abs(socketDifference)} m short of design ${d.designSocketLength.value} m.`,
      );
    }
  }

  let diameterDifference: number | null = null;
  if (hasValue(d.designDiameter) && hasValue(p.diameter)) {
    diameterDifference = round3(p.diameter.value - d.designDiameter.value);
    if (Math.abs(diameterDifference) > 0.001) {
      warnings.push(
        `Diameter ${p.diameter.value} m differs from design ${d.designDiameter.value} m.`,
      );
    }
  }

  return { toeDifference, socketDifference, diameterDifference, warnings };
}

/* ---------- scene mapping ---------- */

/**
 * RL → scene Y. One function, used by every piece of geometry, so elevation
 * direction can never disagree between piles, surfaces and labels.
 *
 * Vertical exaggeration is a viewing aid: sites are tens of metres wide and
 * piles only a few metres deep, so at 1× the piles are invisible stubs. It is
 * applied here and nowhere else, and it never touches the underlying data.
 */
export function rlToSceneY(rl: number, datumRL: number, verticalExaggeration = 1): number {
  return (rl - datumRL) * verticalExaggeration;
}

/** Inverse of rlToSceneY, for picking and section lines. */
export function sceneYToRL(y: number, datumRL: number, verticalExaggeration = 1): number {
  return y / verticalExaggeration + datumRL;
}

/**
 * Choose the scene datum from the data rather than assuming one. The highest
 * known ground level becomes Y = 0, so the site sits at and below the origin
 * and the camera framing is stable as piles are added.
 */
export function deriveDatumRL(piles: PileRecord[]): number | null {
  const levels: number[] = [];
  for (const p of piles) {
    const top = effectiveTopRL(p);
    if (hasValue(top)) levels.push(top.value);
    if (hasValue(p.groundRL)) levels.push(p.groundRL.value);
  }
  if (levels.length === 0) return null;
  return Math.max(...levels);
}

/** Everything the scene needs for one pile, or null when it cannot be drawn. */
export interface PileGeometry {
  id: string;
  x: number;
  y: number;
  radius: number;
  topY: number;
  toeY: number;
  /** Y of rockhead, when known — splits shaft from socket. */
  rockheadY: number | null;
  length: number;
  socket: number | null;
}

/**
 * Build drawable geometry, or explain why not.
 *
 * A pile needs a position, a top level, a toe level and a diameter before it
 * can be a cylinder. Anything less and it is listed as undrawable with the
 * reason, rather than appearing at the origin with a guessed size — a pile in
 * the wrong place is worse than a pile absent.
 */
export function pileGeometry(
  p: PileRecord,
  datumRL: number,
  verticalExaggeration = 1,
): { geometry: PileGeometry | null; blockers: string[] } {
  const blockers: string[] = [];
  const top = effectiveTopRL(p);
  const toe = toeRLFromDepth(p);

  if (!hasValue(p.position.x) || !hasValue(p.position.y)) blockers.push('position');
  if (!hasValue(top)) blockers.push('pile-top RL');
  if (!hasValue(toe)) blockers.push('toe RL');
  if (!hasValue(p.diameter)) blockers.push('diameter');
  if (blockers.length > 0) return { geometry: null, blockers };

  const topY = rlToSceneY(top.value!, datumRL, verticalExaggeration);
  const toeY = rlToSceneY(toe.value!, datumRL, verticalExaggeration);
  const rh = rockheadRL(p);
  const socket = socketLength(p);

  return {
    geometry: {
      id: p.id,
      x: p.position.x.value!,
      y: p.position.y.value!,
      radius: p.diameter.value! / 2,
      topY,
      toeY,
      rockheadY: hasValue(rh) ? rlToSceneY(rh.value, datumRL, verticalExaggeration) : null,
      length: round3(top.value! - toe.value!),
      socket: hasValue(socket) ? socket.value : null,
    },
    blockers: [],
  };
}
