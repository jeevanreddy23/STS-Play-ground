---
title: Calculate the safety factor of a rock slope against planar (block) failure
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Calculate the safety factor of a rock slope against planar (block) failure

> **Source:** [YouTube — How To Calculate Safety Factor of Slope against Planar Failure](https://www.youtube.com/watch?v=zuAnBDBR7ew&t=0s) (00:00-08:11). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A factor of safety against sliding of a block on a planar failure surface using the simplified dry, no-tension-crack formula, with a stability interpretation and a cohesion sensitivity check

## Inputs

- Slope height H (12 m in the example)
- Slope face angle i (64 degrees) and failure plane dip theta (42 degrees)
- Shear strength on the failure plane: cohesion c (10 kPa, near-zero, in the example) and friction angle phi (33 degrees)
- Rock unit weight (22 kN/m3), dry conditions

## Procedure

1. Confirm the geometry: the face angle must be steeper than the failure plane dip for a daylighting planar block
2. Use the simplified planar-failure safety factor formula, which is the ratio of shear strength (cohesion term plus friction term) to the driving shear stress from block weight; the cohesion term involves c, sine of the face angle, unit weight, height, sine of theta, and sine of (i minus theta), and the friction term is tangent of phi over tangent of theta
3. Keep units consistent: cohesion in kPa with unit weight in kN/m3
4. Evaluate the two terms (0.272 for the cohesion term and 0.72 for the friction term in the example) and sum them for the factor of safety (0.992)
5. Interpret the result against 1.0 and run a sensitivity check by setting cohesion to zero (FoS drops to 0.72, clearly unstable)

## Decision rules

- FoS greater than 1 indicates stable, less than 1 unstable; a value at about 1 means critical/marginally stable — a small perturbation such as some water can tip it to failure
- A failure plane dip greater than the friction angle (42 vs 33 degrees here) means friction alone cannot hold the block — cohesion is doing critical work
- If the frictional term alone gives FoS below 1, treat the slope as dependent on cohesion and flag it for mitigation design
- The same setup applies to soil masses, but this simplified formula excludes groundwater and tension cracks — use the fuller formulation when those exist

## Checks

- Angle roles not swapped: i is the face angle, theta is the failure plane dip
- Units consistent (kPa with kN/m3) throughout
- Sensitivity to cohesion evaluated before declaring a marginal slope stable

## Common errors

- Declaring a slope with FoS of about 0.99-1.0 'stable' without flagging the critical condition
- Mixing MPa cohesion with kN/m3 unit weight without converting
- Applying the dry simplified formula to a slope with groundwater or tension cracks

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The exact arrangement of the sine terms in the formula is not fully recoverable from audio — equation shown on screen — read from the video
- Dry conditions assumed (total stress basis, no pore pressure); the lecturer explicitly notes fuller setups exist with groundwater and tension cracks
- Shear strength on the plane uses Mohr-Coulomb with the plane's own c and phi, not intact rock properties

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
