---
title: Compute the factor of safety of a planar rock slope failure with tension crack by hand
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Compute the factor of safety of a planar rock slope failure with tension crack by hand

> **Source:** [YouTube — Planar Failure of Rock Slopes — Full Stability Analysis](https://www.youtube.com/watch?v=fYyTzq4rUPs&t=0s) (00:01-19:35). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A hand-calculated factor of safety for a planar failure surface behind a slope crest, including geometry-derived tension crack depth, failure plane length and block weight

## Inputs

- Slope height H and slope face angle
- Failure plane angle
- Rock mass unit weight, cohesion and friction angle (from site or laboratory investigation)
- Unit weight of water if pore pressures are considered
- Tension crack depth z (given, or estimated from geometry)
- Optional: seismic coefficient, anchor force and inclination

## Procedure

1. Estimate tension crack depth z from slope geometry using the published expression combining slope height with the cotangent of the face angle and the tangent of the failure plane angle (worked example: H = 12 m, face 60 degrees, plane 35 degrees gives z about 4.35 m)
2. Compute failure plane length A = (H - z) / sin(failure plane angle) (example: about 13.34 m); cohesion acts along this full length
3. Compute block weight per metre width from the published weight formula using unit weight, H, z/H ratio and the cotangents of the plane and face angles (example: about 1241.4 kN/m)
4. If water is present, compute the uplift force U on the failure plane from water unit weight, water depth in the crack, and plane length (example: about 284.6 kN/m for a fully filled crack) and the horizontal crack water force V from water unit weight times crack water depth squared over two (example: about 92.8 kN/m)
5. Assemble the factor of safety as resisting over driving: numerator is cohesion times A plus (normal component of weight, minus seismic normal reduction, minus U, minus V times sin of plane angle, plus anchor normal contribution) times tan(friction angle); denominator is the downslope weight component plus seismic driving term plus V times cos of plane angle minus anchor driving reduction
6. Evaluate for the load case at hand, setting absent terms to zero

## Decision rules

- Factor of safety above 1 indicates stability; below 1 indicates the block can fail
- Water in the tension crack acts twice: U reduces frictional resistance and V adds driving force — include both
- The tension crack depth need not be surveyed if face and plane angles are known; it can be estimated from geometry

## Checks

- Confirm all forces are expressed per metre width of slope so units are consistent (kN/m)
- Check that omitted effects (seismic, water, anchor) are explicitly zeroed rather than left in with stale values
- Compare the dry-slope result against software (RocPlane reproduces 1.54 for this example)

## Common errors

- Applying cohesion over the slope height instead of over the failure plane length A
- Dropping either U or V when water is present
- Sign errors on the seismic terms, which reduce the numerator and increase the denominator simultaneously

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The full factor-of-safety expression and the z and W formulas are shown on screen — read from the video; captions garble the algebra
- Analysis is limit-equilibrium on a 1 m wide slice with water treated as explicit boundary forces (U, V); drainage assumptions beyond crack fill percentage are not stated

## Standards cited

None cited in the source passage.

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
