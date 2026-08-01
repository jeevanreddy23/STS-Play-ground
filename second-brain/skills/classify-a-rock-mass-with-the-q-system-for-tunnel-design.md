---
title: Classify a rock mass with the Q-system for tunnel design
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Classify a rock mass with the Q-system for tunnel design

> **Source:** [YouTube — Tunnel Q-Rating and Rock Mass Classification — Practical Example](https://www.youtube.com/watch?v=UAbXXaasrmE&t=0s) (00:01-18:24). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A Q rating for a tunnel rock mass computed from six factors, positioning the mass on the quality scale used for empirical tunnel support decisions

## Inputs

- RQD from core logging
- Number of joint sets (gives Jn)
- Joint roughness description (gives Jr)
- Joint alteration/weathering and infill description (gives Ja)
- Groundwater condition description or pressure (gives Jw)
- Stress condition: UCS of intact rock and tunnel depth (gives SRF via the sigma_c / sigma_1 ratio)

## Procedure

1. Assemble Q as three quotients: RQD/Jn (block size), Jr/Ja (inter-block shear strength), Jw/SRF (active stress including water)
2. Take RQD directly as the logged percentage (example 88)
3. Select Jn from the joint set count (example: three joint sets gives 9)
4. Select Jr by matching the surface description to the closest table category (example: rough/stepped, irregular undulating gives 3); justify the choice where two categories are close
5. Select Ja from alteration and infill: tightly closed, unweathered walls with only occasional staining matched the unaltered/surface-staining-only category, Ja = 1
6. Select Jw from groundwater description: wet but not dripping, no inflow, matched the dry-excavation/minor-inflow category, Jw = 1
7. For SRF, compute sigma_c / sigma_1 where sigma_1 is taken as the vertical stress 0.027 times depth in metres (MPa) — example: 160 / (0.027 x 150) = about 39.5, which fell in the band giving SRF = 1
8. Multiply the three quotients (example: 88/9 x 3/1 x 1/1 = about 29)

## Decision rules

- If strength is supplied as point load index, convert to UCS before the SRF ratio — do not use point load index directly
- When no unit weight is given, use the average-rock assumption of 0.027 MPa per metre depth for vertical stress
- Adjacent table categories are legitimate choices when descriptions are ambiguous; small differences in the selected numbers move Q only within a band, and the choice must be justified
- Q spans roughly 0.001 to over 1000; higher is stronger rock mass

## Checks

- Confirm each of the six factors was sourced from the description rather than defaulted
- Recompute the three quotients separately to see which block (block size, shear strength, stress) controls the rating
- Compare your Q against an independent assessor's; values should agree within a band

## Common errors

- Using point load index in place of UCS in the SRF ratio
- Confusing Ja (alteration of the joint) with Jw (water condition) when reading the description
- Forcing precision onto subjective factor choices instead of documenting the judgment

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The factor tables and band boundaries are shown on screen — read from the video; captions garble several category descriptions
- Support selection from Q is not covered in this lecture; only the rating computation

## Standards cited

Q-system of Barton and colleagues, 1974 (named by lecturer)

## Related

- [[Rock weathering classes]]
- [[Rock strength classes]]
- [[Groundwater observations]]
- [[Soil description order]]
- [[Skills]]
