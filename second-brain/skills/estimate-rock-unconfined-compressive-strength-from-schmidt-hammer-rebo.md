---
title: Estimate rock unconfined compressive strength from Schmidt hammer rebound data
type: skill
tags: [skill, testing, youtube-source]
confidence: high
updated: 2026-08-01
---

# Estimate rock unconfined compressive strength from Schmidt hammer rebound data

> **Source:** [YouTube — Schmidt Hammer Test Part 2: Data analysis](https://www.youtube.com/watch?v=zeEkG3j_JyE&t=0s) (00:00-06:21). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A defensible UCS estimate (as a range, in MPa) for a rock surface from ten field rebound readings, with or without a measured rock density

## Inputs

- Ten Schmidt hammer rebound readings from the same rock surface
- Rock density (g/cm3) if known; otherwise assume an average rock unit weight
- Rebound-hardness vs UCS correlation chart with unit-weight lines

## Procedure

1. Take about ten rebound readings on the rock surface (field procedure covered in the companion video)
2. Discard the single highest and single lowest readings, then average the remaining eight to get the design rebound hardness
3. Convert density to unit weight: multiply density by gravitational acceleration (e.g. 2.35 g/cm3 gives roughly 23.1 kN/m3)
4. Enter the correlation chart at the averaged rebound hardness on the hardness axis
5. Move to the sloping line corresponding to the rock unit weight on the chart's unit-weight axis
6. Read the unconfined compressive strength off the strength axis at the intersection and report it as an approximate range in MPa

## Decision rules

- If rock density is unknown (common in the field), assume an average rock unit weight of 27 kN/m3 rather than skipping the estimate
- Report a strength range (e.g. about 67-69 MPa); small differences in chart reading are acceptable

## Checks

- Confirm exactly the highest and lowest of the ten readings were removed before averaging
- Confirm units: unit weight in kN/m3, strength in MPa

## Common errors

- Quoting a falsely precise single value (e.g. 67.532 MPa) — the test only gives an estimate range, and over-precision shows misunderstanding of the method
- Averaging all ten readings without trimming the extremes
- Using density directly on the chart instead of converting to unit weight

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The correlation chart itself is shown on screen — read exact chart form and axes from the video; lecturer does not name its origin
- UCS from rebound hardness is an empirical estimate only, not a substitute for laboratory strength testing

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
