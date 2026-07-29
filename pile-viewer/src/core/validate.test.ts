/**
 * Validation and reconciliation tests — the safety net that stops unsound data
 * reaching the viewer without a flag on it.
 */

import { describe, expect, it } from 'vitest';
import {
  ClassifiedValue,
  Issue,
  reconcile,
  validatePile,
  validateProject,
  complianceBreakdown,
} from './validate';
import {
  PileProject,
  PileRecord,
  emptyPile,
  manual,
  missing,
  extracted,
  inferred,
} from './schema';

function goodPile(id = 'P1'): PileRecord {
  const p = emptyPile(id);
  p.position = { x: manual(10), y: manual(4), accuracy: 'manual' };
  p.groundRL = manual(24.5);
  p.toeRL = manual(21.8);
  p.topOfBedrockRL = manual(23.5);
  p.diameter = manual(0.6);
  p.requiredSocketLength = manual(1.0);
  p.foundingMaterial = manual('weathered siltstone');
  p.acceptance = manual('accepted');
  return p;
}

function project(piles: PileRecord[]): PileProject {
  return { name: 'test', piles, design: [] };
}

const errors = (issues: Issue[]) => issues.filter((i) => i.severity === 'error');

describe('validatePile — levels', () => {
  it('accepts a sound pile without errors', () => {
    expect(errors(validatePile(goodPile()))).toHaveLength(0);
  });

  it('catches a toe that is not below the platform', () => {
    const p = goodPile();
    p.toeRL = manual(26.0);
    expect(errors(validatePile(p))[0].message).toMatch(/not below/i);
  });

  it('catches depths mistakenly entered as levels', () => {
    const p = goodPile();
    p.groundRL = manual(0);
    p.toeRL = manual(2.7); // a depth, not an RL
    expect(errors(validatePile(p)).length).toBeGreaterThan(0);
  });

  it('catches rockhead above the platform', () => {
    const p = goodPile();
    p.topOfBedrockRL = manual(30);
    expect(errors(validatePile(p)).some((i) => /above the platform/i.test(i.message))).toBe(true);
  });

  it('warns when the pile never reached rock', () => {
    const p = goodPile();
    p.topOfBedrockRL = manual(19.0);
    const w = validatePile(p).filter((i) => i.severity === 'warning');
    expect(w.some((i) => /did not reach rock/i.test(i.message))).toBe(true);
  });

  it('warns when reported depth disagrees with the levels', () => {
    const p = goodPile();
    p.totalDepth = manual(3.9); // implies toe 20.6, not 21.8
    expect(
      validatePile(p).some((i) => /disagrees with platform RL/i.test(i.message)),
    ).toBe(true);
  });
});

describe('validatePile — sockets', () => {
  it('errors on an insufficient socket', () => {
    const p = goodPile();
    p.requiredSocketLength = manual(2.5);
    expect(errors(validatePile(p)).some((i) => /short of requirement/i.test(i.message))).toBe(true);
  });

  it('warns rather than passing when the requirement is unknown', () => {
    const p = goodPile();
    p.requiredSocketLength = missing<number>();
    const issues = validatePile(p);
    expect(errors(issues)).toHaveLength(0);
    expect(issues.some((i) => /cannot be assessed/i.test(i.message))).toBe(true);
  });

  it('warns when a reported socket contradicts the levels', () => {
    const p = goodPile();
    p.constructedSocketLength = manual(0.4); // levels imply 1.7
    expect(validatePile(p).some((i) => /disagrees with rockhead/i.test(i.message))).toBe(true);
  });
});

describe('validatePile — completeness and trust', () => {
  it('warns when the pile has no plan position', () => {
    const p = goodPile();
    p.position = { x: missing<number>(), y: missing<number>(), accuracy: 'unverified' };
    expect(validatePile(p).some((i) => /cannot be placed/i.test(i.message))).toBe(true);
  });

  it('notes drawing-derived positions as sub-survey accuracy', () => {
    const p = goodPile();
    p.position = { x: manual(1), y: manual(2), accuracy: 'drawing-derived' };
    expect(validatePile(p).some((i) => /not survey accuracy/i.test(i.message))).toBe(true);
  });

  it('warns on a missing diameter', () => {
    const p = goodPile();
    p.diameter = missing<number>();
    expect(validatePile(p).some((i) => /No diameter recorded/i.test(i.message))).toBe(true);
  });

  it('raises an inferred value for confirmation', () => {
    const p = goodPile();
    p.diameter = inferred(0.6, 'Assumed from the typical detail.');
    expect(validatePile(p).some((i) => /inferred, not stated/i.test(i.message))).toBe(true);
  });

  it('flags low-confidence extraction', () => {
    const p = goodPile();
    p.toeRL = extracted(21.8, { file: 'r.pdf', page: 2 }, 0.4);
    expect(validatePile(p).some((i) => /Low extraction confidence/i.test(i.message))).toBe(true);
  });

  it('treats a conflicting field as an error to resolve', () => {
    const p = goodPile();
    p.toeRL = reconcile<number>([
      { value: 21.8, sourceClass: 'signed-inspection-report', source: { file: 'r.docx' } },
      { value: 21.2, sourceClass: 'approved-pile-schedule', source: { file: 's.xlsx' } },
    ]);
    expect(errors(validatePile(p)).some((i) => i.field === 'toeRL')).toBe(true);
  });
});

describe('reconcile', () => {
  const agree: ClassifiedValue<number>[] = [
    { value: 21.8, sourceClass: 'signed-inspection-report', source: { file: 'r.docx' } },
    { value: 21.8, sourceClass: 'approved-pile-schedule', source: { file: 's.xlsx' } },
  ];

  it('adopts a value all sources agree on', () => {
    const f = reconcile(agree);
    expect(f.value).toBe(21.8);
    expect(f.state).toBe('extracted');
    expect(f.note).toMatch(/Agreed across 2/);
  });

  it('refuses to pick a winner when sources disagree', () => {
    const f = reconcile<number>([
      { value: 21.8, sourceClass: 'signed-inspection-report', source: { file: 'r.docx' } },
      { value: 21.2, sourceClass: 'approved-structural-drawing', source: { file: 'd.pdf', revision: 'C' } },
    ]);
    expect(f.value).toBeNull();
    expect(f.state).toBe('conflicting');
    expect(f.alternatives).toHaveLength(2);
  });

  it('orders alternatives by source priority for review', () => {
    const f = reconcile<number>([
      { value: 21.8, sourceClass: 'unverified-note', source: { file: 'n.txt' } },
      { value: 21.2, sourceClass: 'approved-structural-drawing', source: { file: 'd.pdf' } },
    ]);
    expect(f.alternatives![0].value).toBe(21.2);
    expect(f.note).toMatch(/approved-structural-drawing/);
  });

  it('is missing with no candidates at all', () => {
    expect(reconcile<number>([]).state).toBe('missing');
  });

  it('keeps the single source when only one exists', () => {
    const f = reconcile([agree[0]]);
    expect(f.value).toBe(21.8);
    expect(f.note).toBeUndefined();
  });
});

describe('validateProject', () => {
  it('detects duplicate pile IDs', () => {
    const v = validateProject(project([goodPile('P1'), goodPile('P1')]));
    expect(v.issues.some((i) => /appears 2 times/.test(i.message))).toBe(true);
    expect(v.fitForVerification).toBe(false);
  });

  it('lists undrawable piles with their blockers', () => {
    const p = goodPile('P9');
    p.diameter = missing<number>();
    p.position = { x: missing<number>(), y: missing<number>(), accuracy: 'unverified' };
    const v = validateProject(project([goodPile('P1'), p]));
    const entry = v.undrawable.find((u) => u.id === 'P9')!;
    expect(entry.blockers).toEqual(expect.arrayContaining(['position', 'diameter']));
    expect(v.fitForVerification).toBe(false);
  });

  it('is fit for verification when every pile is sound and drawable', () => {
    const v = validateProject(project([goodPile('P1'), goodPile('P2')]));
    expect(v.errorCount).toBe(0);
    expect(v.undrawable).toHaveLength(0);
    expect(v.fitForVerification).toBe(true);
  });

  it('handles a large pile group without choking', () => {
    const many = Array.from({ length: 500 }, (_, i) => goodPile(`P${i + 1}`));
    const v = validateProject(project(many));
    expect(v.errorCount).toBe(0);
    expect(v.fitForVerification).toBe(true);
  });
});

describe('complianceBreakdown', () => {
  it('counts compliant, non-compliant and indeterminate separately', () => {
    const ok = goodPile('P1');
    const short = goodPile('P2');
    short.requiredSocketLength = manual(2.5);
    const unknown = goodPile('P3');
    unknown.requiredSocketLength = missing<number>();

    expect(complianceBreakdown(project([ok, short, unknown]))).toEqual({
      compliant: 1,
      nonCompliant: 1,
      indeterminate: 1,
    });
  });
});
