/**
 * Calculation tests. These check arithmetic and the propagation of unknowns
 * against hand-worked numbers — deliberately with no scene, no React and no
 * DOM, so a passing test says the engineering is right rather than that
 * something rendered.
 */

import { describe, expect, it } from 'vitest';
import {
  compareToDesign,
  deriveDatumRL,
  effectiveTopRL,
  pileGeometry,
  pileLength,
  rlToSceneY,
  rockheadRL,
  sceneYToRL,
  socketCompliance,
  socketLength,
  toeRLFromDepth,
} from './calc';
import {
  PileDesign,
  PileRecord,
  emptyPile,
  manual,
  missing,
  conflicting,
} from './schema';

/** A pile with levels typical of the Lidcombe job: platform 24.5, toe 21.8. */
function pileA(): PileRecord {
  const p = emptyPile('P1');
  p.position = { x: manual(0), y: manual(0), accuracy: 'manual' };
  p.groundRL = manual(24.5);
  p.toeRL = manual(21.8);
  p.topOfBedrockRL = manual(23.5);
  p.diameter = manual(0.6);
  p.requiredSocketLength = manual(1.0);
  p.foundingMaterial = manual('weathered siltstone');
  return p;
}

describe('pileLength', () => {
  it('is top RL minus toe RL', () => {
    const r = pileLength(pileA());
    expect(r.value).toBe(2.7);
    expect(r.state).toBe('calculated');
  });

  it('uses a separate pile-top RL in preference to the platform', () => {
    const p = pileA();
    p.pileTopRL = manual(24.2);
    expect(pileLength(p).value).toBe(2.4);
  });

  it('is missing — not zero — when the toe is unknown', () => {
    const p = pileA();
    p.toeRL = missing<number>();
    const r = pileLength(p);
    expect(r.value).toBeNull();
    expect(r.state).toBe('missing');
  });

  it('is missing when the toe level is conflicting', () => {
    const p = pileA();
    p.toeRL = conflicting([
      { value: 21.8, source: { file: 'report.docx' } },
      { value: 21.2, source: { file: 'schedule.xlsx' } },
    ]);
    expect(pileLength(p).value).toBeNull();
  });

  it('handles negative RLs below datum without sign trouble', () => {
    const p = pileA();
    p.groundRL = manual(-1.5);
    p.toeRL = manual(-4.9);
    expect(pileLength(p).value).toBe(3.4);
  });

  it('survives a very deep pile', () => {
    const p = pileA();
    p.groundRL = manual(12.0);
    p.toeRL = manual(-33.4);
    expect(pileLength(p).value).toBe(45.4);
  });
});

describe('effectiveTopRL', () => {
  it('falls back to platform level and says so', () => {
    const r = effectiveTopRL(pileA());
    expect(r.value).toBe(24.5);
    expect(r.state).toBe('calculated');
    expect(r.note).toMatch(/platform/i);
  });

  it('is missing when neither level exists', () => {
    const p = emptyPile('X');
    expect(effectiveTopRL(p).state).toBe('missing');
  });
});

describe('socketLength', () => {
  it('is rockhead RL minus toe RL', () => {
    expect(socketLength(pileA()).value).toBe(1.7);
  });

  it('prefers a directly reported socket over the derived value', () => {
    const p = pileA();
    p.constructedSocketLength = manual(1.5);
    const r = socketLength(p);
    expect(r.value).toBe(1.5);
    expect(r.state).toBe('manual');
  });

  it('is an asserted zero when the toe stops at rockhead', () => {
    const p = pileA();
    p.toeRL = manual(23.5);
    const r = socketLength(p);
    expect(r.value).toBe(0);
    expect(r.state).toBe('calculated');
  });

  it('is zero when the toe never reached rock', () => {
    const p = pileA();
    p.topOfBedrockRL = manual(20.0);
    expect(socketLength(p).value).toBe(0);
  });

  it('is missing when rockhead was not recorded', () => {
    const p = pileA();
    p.topOfBedrockRL = missing<number>();
    const r = socketLength(p);
    expect(r.value).toBeNull();
    expect(r.state).toBe('missing');
  });
});

describe('rockheadRL', () => {
  it('back-calculates from toe plus reported socket, marked calculated', () => {
    const p = pileA();
    p.topOfBedrockRL = missing<number>();
    p.constructedSocketLength = manual(1.4);
    const r = rockheadRL(p);
    expect(r.value).toBe(23.2);
    expect(r.state).toBe('calculated');
  });

  it('stays missing with neither route available', () => {
    const p = pileA();
    p.topOfBedrockRL = missing<number>();
    expect(rockheadRL(p).state).toBe('missing');
  });
});

describe('toeRLFromDepth', () => {
  it('derives the toe from platform level and total depth', () => {
    const p = pileA();
    p.toeRL = missing<number>();
    p.totalDepth = manual(2.7);
    const r = toeRLFromDepth(p);
    expect(r.value).toBe(21.8);
    expect(r.state).toBe('calculated');
  });

  it('does not override a reported toe RL', () => {
    const p = pileA();
    p.totalDepth = manual(9.9);
    expect(toeRLFromDepth(p).value).toBe(21.8);
  });
});

describe('socketCompliance', () => {
  it('passes a socket that meets the requirement', () => {
    const r = socketCompliance(pileA());
    expect(r.verdict).toBe('compliant');
    expect(r.shortfall).toBeCloseTo(0.7, 5);
  });

  it('fails an insufficient socket and quantifies the shortfall', () => {
    const p = pileA();
    p.requiredSocketLength = manual(2.5);
    const r = socketCompliance(p);
    expect(r.verdict).toBe('non-compliant');
    expect(r.shortfall).toBeCloseTo(-0.8, 5);
  });

  it('is indeterminate — never a pass — when the requirement is unknown', () => {
    const p = pileA();
    p.requiredSocketLength = missing<number>();
    expect(socketCompliance(p).verdict).toBe('indeterminate');
  });

  it('is indeterminate when the achieved socket cannot be established', () => {
    const p = pileA();
    p.topOfBedrockRL = missing<number>();
    expect(socketCompliance(p).verdict).toBe('indeterminate');
  });
});

describe('compareToDesign', () => {
  const design: PileDesign = {
    id: 'P1',
    designToeRL: manual(21.5),
    designDiameter: manual(0.6),
    designSocketLength: manual(1.0),
  };

  it('reports a toe higher than design as a warning', () => {
    const r = compareToDesign(pileA(), design);
    expect(r.toeDifference).toBeCloseTo(-0.3, 5);
    expect(r.warnings.join(' ')).toMatch(/higher than design/i);
  });

  it('is quiet when the pile was taken deeper than design', () => {
    const p = pileA();
    p.toeRL = manual(21.0);
    const r = compareToDesign(p, design);
    expect(r.toeDifference).toBeCloseTo(0.5, 5);
    expect(r.warnings.join(' ')).not.toMatch(/higher than design/i);
  });

  it('flags a diameter that differs from design', () => {
    const p = pileA();
    p.diameter = manual(0.45);
    expect(compareToDesign(p, design).warnings.join(' ')).toMatch(/Diameter/);
  });

  it('says so plainly when there is no design record', () => {
    const r = compareToDesign(pileA(), undefined);
    expect(r.toeDifference).toBeNull();
    expect(r.warnings[0]).toMatch(/No design record/);
  });
});

describe('scene mapping', () => {
  it('sends higher RL to higher Y', () => {
    expect(rlToSceneY(24.5, 24.5)).toBe(0);
    expect(rlToSceneY(21.8, 24.5)).toBeCloseTo(-2.7, 6);
    expect(rlToSceneY(26.0, 24.5)).toBeCloseTo(1.5, 6);
  });

  it('round-trips through the inverse at any exaggeration', () => {
    for (const vex of [1, 3, 7.5]) {
      const y = rlToSceneY(18.35, 24.5, vex);
      expect(sceneYToRL(y, 24.5, vex)).toBeCloseTo(18.35, 6);
    }
  });

  it('scales depth but never inverts it', () => {
    const shallow = rlToSceneY(21.8, 24.5, 1);
    const deep = rlToSceneY(21.8, 24.5, 5);
    expect(deep).toBeLessThan(shallow);
    expect(deep / shallow).toBeCloseTo(5, 6);
  });

  it('takes the datum from the highest known ground level', () => {
    const a = pileA();
    const b = pileA();
    b.id = 'P2';
    b.groundRL = manual(25.9);
    expect(deriveDatumRL([a, b])).toBe(25.9);
  });

  it('returns no datum when no level is known', () => {
    expect(deriveDatumRL([emptyPile('X')])).toBeNull();
  });
});

describe('pileGeometry', () => {
  it('builds a drawable cylinder from complete data', () => {
    const { geometry, blockers } = pileGeometry(pileA(), 24.5, 1);
    expect(blockers).toEqual([]);
    expect(geometry).not.toBeNull();
    expect(geometry!.radius).toBe(0.3);
    expect(geometry!.topY).toBe(0);
    expect(geometry!.toeY).toBeCloseTo(-2.7, 6);
    expect(geometry!.rockheadY).toBeCloseTo(-1.0, 6);
    expect(geometry!.length).toBe(2.7);
    expect(geometry!.socket).toBe(1.7);
  });

  it('refuses to place a pile with no coordinates, and names the blocker', () => {
    const p = pileA();
    p.position = { x: missing<number>(), y: missing<number>(), accuracy: 'unverified' };
    const { geometry, blockers } = pileGeometry(p, 24.5);
    expect(geometry).toBeNull();
    expect(blockers).toContain('position');
  });

  it('refuses to guess a diameter', () => {
    const p = pileA();
    p.diameter = missing<number>();
    const { geometry, blockers } = pileGeometry(p, 24.5);
    expect(geometry).toBeNull();
    expect(blockers).toContain('diameter');
  });

  it('draws a pile with unknown rockhead, leaving the socket undivided', () => {
    const p = pileA();
    p.topOfBedrockRL = missing<number>();
    const { geometry } = pileGeometry(p, 24.5);
    expect(geometry).not.toBeNull();
    expect(geometry!.rockheadY).toBeNull();
    expect(geometry!.socket).toBeNull();
  });

  it('keeps geometry consistent across differing diameters and levels', () => {
    const a = pileA();
    const b = pileA();
    b.id = 'P2';
    b.diameter = manual(0.45);
    b.groundRL = manual(23.0);
    b.toeRL = manual(20.0);
    const ga = pileGeometry(a, 24.5, 3).geometry!;
    const gb = pileGeometry(b, 24.5, 3).geometry!;
    expect(ga.radius).toBe(0.3);
    expect(gb.radius).toBe(0.225);
    expect(gb.topY).toBeCloseTo(-4.5, 6);
    expect(gb.toeY).toBeCloseTo(-13.5, 6);
    expect(gb.length).toBe(3);
  });
});
