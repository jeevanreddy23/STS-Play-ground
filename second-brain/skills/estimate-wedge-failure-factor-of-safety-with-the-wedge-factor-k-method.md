---
title: Estimate wedge failure factor of safety with the wedge factor K method
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: medium
updated: 2026-08-01
---

# Estimate wedge failure factor of safety with the wedge factor K method

> **Source:** [YouTube — Wedge Failure Explained — Rock Slope Stability](https://www.youtube.com/watch?v=fCrM4c2Kk5Q&t=0s) (00:02-06:48). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A quick friction-only factor of safety for a rock wedge formed by two intersecting discontinuity planes, identifying whether the wedge is stable

## Inputs

- Orientations of the two wedge-forming discontinuity planes: angles theta A and theta B between each plane and a reference through the wedge geometry (example: 45 and 48 degrees)
- Trend and plunge of the line of intersection of the two planes (plunge used as the sliding inclination; example plunge 53 degrees)
- Friction angle along the discontinuities (example 30 degrees); cohesion assumed zero

## Procedure

1. Identify the two planes forming the wedge on the plan view and the line of intersection on the cross-section; sliding occurs along the intersection line, not a single failure plane
2. Distinguish trend from plunge in the given orientation pair: the three-digit number is the trend (direction), the two-digit number is the plunge (inclination) — use the plunge as the sliding angle beta
3. Compute the wedge factor K from the wedge geometry: sum of the sines of theta A and theta B divided by the sine of their sum (example: (sin 45 + sin 48) / sin 93 = about 1.45)
4. Compute the factor of safety as K times tan(friction angle) divided by tan(plunge of the intersection line) (example: 1.45 times tan 30 / tan 53 = about 0.63)
5. Interpret: below 1 the wedge is unstable — there is insufficient friction to hold it

## Decision rules

- K greater than 1 reflects the wedging effect: a wedge confined by two planes is more stable than an equivalent planar block at the same inclination
- This hand method excludes cohesion and water pressure; when either matters, or geometry is complex, move to software analysis
- A friction angle around 30 degrees is a common field assumption for clean discontinuities when no test data exist

## Checks

- Verify which given angle is plunge vs trend before computing (two-digit vs three-digit convention)
- Check that unused given data (e.g. slope face dip/dip direction) was genuinely not required rather than forgotten

## Common errors

- Using the trend or the slope face angle instead of the intersection-line plunge in the tangent ratio
- Applying the method with cohesion or water present and over-reporting stability (adding water would lower the result further)

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Simplified friction-only formulation; groundwater uplift on both planes and cohesion are deliberately excluded
- The exact definition of the theta angles relative to the crest is shown on the on-screen sketch — read from the video; captions garble it

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
