---
title: Select and run a multi-stage total-stress rapid drawdown method in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Select and run a multi-stage total-stress rapid drawdown method in Slide2

> **Source:** `Tutorial_17_Rapid_Drawdown.pdf` (Pages 17-2 to 17-6 (envelope theory, method differences, Pilarcitos results)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Dam stability after rapid drawdown assessed with the Duncan-Wright-Wong (3-stage), Lowe-Karafiath (2-stage) or Army Corps (2-stage) method, with correctly specified undrained strength envelopes

## Inputs

- Dam model with initial reservoir level (the tutorial reproduces the Pilarcitos Dam failure case)
- Undrained strength envelope parameters from IC-U triaxial tests: either total-stress R envelope (cR, phiR) or Kc = 1 envelope (d, psi)

## Procedure

1. Establish the pre-drawdown baseline (FS 2.5 for the full reservoir in the worked example); suppress trivially shallow toe surfaces by setting a minimum surface depth in Surface Options if needed
2. Select the drawdown method in Project Settings > Groundwater; note the Undrained Strength Interpolation Scheme default is VandenBerge & Wright (2016)
3. In Material Properties > Rapid Drawdown Parameters > Define Strength enter cR and phiR (Duncan-Wright-Wong and Lowe-Karafiath want the Kc = 1 envelope; Army Corps wants the R envelope — Slide2 converts automatically whichever you enter, via the published closed-form relations)
4. Compute each method as its own group/scenario and compare in Interpret

## Decision rules

- Lowe-Karafiath interpolates the envelope between the Kc = 1 (isotropically consolidated) undrained envelope and the drained envelope using each slice's pre-drawdown Kc
- Duncan-Wright-Wong adds a third stage: wherever post-drawdown effective stress gives a drained strength lower than the undrained strength, the drained strength is substituted and the analysis re-run — so its FS is never higher than Lowe-Karafiath's (1.047 vs 1.051 in the example)
- The Army Corps method combines the R envelope with the effective stress envelope to avoid crediting elevated strengths from negative pore pressures; it is markedly conservative (FS 0.822 here) which matches the general view of the method
- A computed FS near 1 for Duncan-Wright-Wong reproduces the observed 1969 Pilarcitos failure — a useful validation anchor

## Checks

- Entering the equivalent envelope in the other form (e.g. d = 64 lb/ft2, psi = 24.4 degrees instead of cR/phiR) must reproduce the same results
- Rank check: Army Corps lowest, Duncan-Wright-Wong at or slightly below Lowe-Karafiath

## Common errors

- Believing envelope form matters to the outcome — Slide2 converts between R and Kc = 1 envelopes internally
- Comparing methods across scenarios with different search settings

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
