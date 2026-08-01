---
title: Run a Monte Carlo probabilistic planar-failure analysis in RocPlane
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Run a Monte Carlo probabilistic planar-failure analysis in RocPlane

> **Source:** [YouTube — Probabilistic Rock Slope Stability Analysis — Planar Failure](https://www.youtube.com/watch?v=CVW_7MVQD2g&t=0s) (00:02-11:12). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A probability of failure and factor-of-safety distribution for a planar rock slope that reflects the measured scatter in strength and water conditions

## Inputs

- Deterministic baseline model (geometry, unit weight, strength, tension crack, water, seismic)
- Statistical distributions for uncertain inputs: cohesion, friction angle, failure plane angle, tension crack water fill — means, standard deviations and relative min/max from site or laboratory test scatter
- Number of Monte Carlo samples (example: 10,000)

## Procedure

1. Tick Probabilistic in Project Settings and set units; choose Monte Carlo sampling with the sample count
2. Keep well-known deterministic inputs fixed (slope height, face angle) and assign distributions only to genuinely uncertain parameters
3. Assign normal distributions with realistic spread: example used failure plane angle 35 plus/minus 5 degrees, cohesion mean 25 kPa with standard deviation 2 and relative min/max 5, friction angle 37 with standard deviation 2 and plus/minus 2
4. Base the spreads on the distribution of laboratory results (e.g. 10-20 tested samples), not arbitrary numbers
5. Run and read the probability of failure; inspect the factor-of-safety histogram and the cumulative probability curve (read the cumulative value at factor of safety 1 — it should equal the reported probability of failure)
6. Add water as a distributed variable: set mean percent fill of the tension crack with relative min/max reflecting seasonal variation (example: mean 50 plus/minus 25 gave zero failure probability; mean 80 with bounds 20 gave 26 percent; fixed 100 percent gave 96 percent)
7. Adjust relative min/max so the absolute maximum fill cannot exceed 100 percent — the software rejects it otherwise

## Decision rules

- Vary only parameters with real measured uncertainty; fixing well-surveyed geometry keeps the result interpretable
- Water fill percentage dominates the failure probability in this problem — invest site investigation effort there
- Interpret probability of failure together with the FS histogram, not alone

## Checks

- Cumulative probability read at factor of safety = 1 must match the reported probability of failure
- Relative min/max plus the mean must stay within physical bounds (0-100 percent for water fill)
- Zero probability of failure should correspond to a histogram entirely above factor of safety 1

## Common errors

- Setting relative min/max that push the water fill above 100 percent
- Using single deterministic values for cohesion and friction when the lab data show a range
- Confusing relative min/max (offsets from the mean) with absolute bounds

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Distribution parameters in the example are illustrative; project values must come from actual test statistics

## Standards cited

None cited in the source passage.

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
