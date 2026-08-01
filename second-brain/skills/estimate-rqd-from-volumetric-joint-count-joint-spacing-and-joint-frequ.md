---
title: Estimate RQD from volumetric joint count, joint spacing, and joint frequency
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Estimate RQD from volumetric joint count, joint spacing, and joint frequency

> **Source:** [YouTube — How To Estimate RQD using Joint Count, Joint Spacing, Joint Frequency](https://www.youtube.com/watch?v=41_VCOcINN8&t=28s) (00:28-06:29). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** An RQD estimate from field joint surveys (without core) via the volumetric joint count correlation, plus conversions between joint count, spacing, and frequency

## Inputs

- Volumetric joint count Jv (joints per cubic metre), or per-set counts of joints over measured scanline lengths
- Average joint spacing where frequency is needed

## Procedure

1. If Jv is given directly, estimate RQD with the empirical correlation RQD = 115 minus 3.3 times Jv (e.g. Jv = 7.6 gives RQD of about 89.9%)
2. If instead each joint set was surveyed as a count over a length, build Jv by summing count-per-metre for every set (e.g. 8 joints/1 m + 10 joints/2 m + 21 joints/3 m gives about 20 joints/m3)
3. Apply the same correlation to the summed Jv (Jv = 20 gives RQD of about 49%)
4. For joint frequency, take the reciprocal of average joint spacing in metres (spacing 5.8 cm = 0.058 m gives about 17 joints per metre)

## Decision rules

- The correlation works well at high RQD; below roughly RQD 20 it may not perform well — treat low-end results with caution
- These are empirical estimates for classification-system inputs (e.g. RMR), not replacements for measured core RQD

## Checks

- Each set's contribution to Jv is count divided by its own measured length, not raw counts added together
- Spacing converted to metres before taking the reciprocal for frequency

## Common errors

- Adding raw joint counts from scanlines of different lengths without normalising to per-metre
- Using the correlation at very low RQD and treating the output as reliable
- Confusing joint count per metre (frequency) with joint spacing (its reciprocal)

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The lecturer presents RQD = 115 - 3.3 Jv as an empirical correlation from a large data set without naming its author on audio

## Standards cited

None cited in the source passage.

## Related

- [[Soil description order]]
- [[Skills]]
