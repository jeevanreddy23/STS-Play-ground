---
title: Derive grading parameters and judge gradation from a particle-size distribution curve
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Derive grading parameters and judge gradation from a particle-size distribution curve

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 2, §2.8 (particle-size distribution curve), with the size boundaries in §2.4), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Values of D10, D30, D60, uniformity coefficient and coefficient of gradation, plus a well-graded / poorly graded / gap-graded verdict and the gravel, sand and fines percentages needed for classification.

## Inputs

- A plotted particle-size distribution curve (percent finer vs log particle size)
- The size boundaries in use for gravel, sand, silt and clay (state the system: Unified, AASHTO or Australian)

## Procedure

1. Read the particle diameters corresponding to 10%, 30% and 60% finer off the curve; D10 is the effective size.
2. Compute the uniformity coefficient Cu as D60 divided by D10.
3. Compute the coefficient of gradation (curvature) Cc as D30 squared divided by the product of D60 and D10.
4. Read the percent finer at the gravel/sand boundary and at the sand/fines boundary and subtract to obtain the gravel, sand and combined silt-plus-clay percentages.
5. Inspect the curve shape for a flat step (gap grading) as well as reading the two coefficients.

## Decision rules

- A soil with a wide spread of sizes and a smooth curve is well graded; Das quotes a threshold of roughly Cu greater than about 4 for gravels and about 6 for sands with Cc between 1 and 3.
- A curve concentrated over a narrow size band (low Cu) is poorly graded / uniform.
- A curve with a distinct flat portion is gap graded even if Cu is large — do not call it well graded on Cu alone.
- Use D10 as the first-order index for drainage and permeability screening, not as a design permeability.

## Checks

- Check that D10 actually falls within the sieved range — if the curve does not reach 10% finer, D10 (and therefore Cu and Cc) is an extrapolation and must be flagged.
- Check the size boundaries used match the classification system being applied later.
- Cross-check the fines percentage against the mass passing the 0.075 mm sieve measured directly.

## Common errors

- Reading D-values off a linear rather than logarithmic size axis.
- Quoting Cu and Cc for a soil with a large fines content, where the coefficients have little meaning.
- Confusing the coefficient of gradation with the uniformity coefficient when applying classification criteria.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Threshold values for well-graded soils differ slightly between classification systems — use the criteria of the system you are classifying to.

## Standards cited

ASTM D2487, AS 1726

## Related

- [[AS 1726 soil and rock description]]
- [[Soil description order]]
- [[Skills]]
