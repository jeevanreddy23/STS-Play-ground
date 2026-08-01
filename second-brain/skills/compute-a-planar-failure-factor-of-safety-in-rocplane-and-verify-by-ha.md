---
title: Compute a planar-failure factor of safety in RocPlane and verify by hand
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Compute a planar-failure factor of safety in RocPlane and verify by hand

> **Source:** [YouTube — RocPlane Tutorial: Slope Safety Factor for Planar Failure](https://www.youtube.com/watch?v=EJ4-rpbmkD4&t=0s) (00:00-05:32). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A deterministic factor of safety for a rock block sliding on a single failure plane, cross-checked against a hand calculation

## Inputs

- Slope height (12 m in the example) measured on site
- Unit weight (22 kN/m3, entered as 0.022 MN/m3)
- Slope face angle measured with a geological compass (64 degrees in the example)
- Failure plane angle (42 degrees) from site measurement
- Upper face angle (zero in the example because the crest was a straight line; enter the measured low angle if one exists)
- Mohr-Coulomb strength of the failure plane: friction angle 33 degrees, cohesion 10 kPa entered as 0.01 MPa

## Procedure

1. Check Project Settings: metric units with stress in MPa, and deterministic analysis when single values are known rather than ranges
2. Enter the geometry in Input Data: slope height, slope face angle, failure plane angle, and upper face angle
3. Enter unit weight converted from kN/m3 to MN/m3
4. Select the Mohr-Coulomb strength model and enter friction angle and cohesion, converting cohesion from kPa to the MPa field
5. Compute and read the factor of safety (0.992 in the example)
6. Verify against the closed-form hand calculation for planar failure — the same example gives the identical 0.992 by hand

## Decision rules

- Deterministic analysis is appropriate when each parameter has a single known value; use probabilistic settings if you hold ranges for cohesion, friction angle or unit weight
- Set the upper face angle to zero when the slope profile above the crest is a straight continuation with no bench

## Checks

- Reproduce the software result with the hand formula at least once to confirm inputs are interpreted correctly
- Double-check the two unit conversions: kN/m3 to MN/m3 for unit weight, and kPa to MPa for cohesion

## Common errors

- Entering cohesion in kPa into an MPa field (a factor-of-1000 error)
- Leaving default geometry values (e.g. a default upper face angle) unchanged instead of the measured ones

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Drainage and water pressure are not addressed in this example; the computed factor of safety assumes a dry plane unless water is added
- The hand-calculation formula is in a companion video — equation shown on screen, read from the video

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
