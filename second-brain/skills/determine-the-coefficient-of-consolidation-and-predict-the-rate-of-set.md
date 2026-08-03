---
title: Determine the coefficient of consolidation and predict the rate of settlement
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Determine the coefficient of consolidation and predict the rate of settlement

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 11, §11.14 (time rate of consolidation) and §11.15 (determination of the coefficient of consolidation: logarithm-of-time and square-root-of-time methods, plus the hyperbola and early-stage log-t methods)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A coefficient of consolidation for each stress increment and a time-settlement prediction (time to a given degree of consolidation, or settlement at a given time) for the field layer.

## Inputs

- Time-deformation readings for each oedometer load increment
- Specimen height during each increment and its drainage condition (one-way or two-way)
- Field layer thickness and field drainage boundary conditions
- Total primary consolidation settlement from the settlement calculation

## Procedure

1. Logarithm-of-time method: plot dial reading against log time for the increment; extend the straight primary and secondary portions to their intersection to get the reading at 100% primary consolidation; use the parabolic correction (pick two times in the ratio one to four on the early curve, measure the deformation difference, and set that same difference above the first point) to get the reading at 0% consolidation; take the reading midway between them as 50% consolidation and read the corresponding time.
2. Compute the coefficient of consolidation from the theoretical time factor for 50% consolidation, the square of the drainage path length for the specimen, and the measured time at 50%.
3. Square-root-of-time method: plot dial reading against the square root of time; fit a straight line to the early linear portion; draw a second line from the same origin with abscissae 1.15 times those of the first; the intersection of that second line with the curve gives the time for 90% consolidation.
4. Compute the coefficient of consolidation from the theoretical time factor for 90% consolidation, the square of the drainage path length, and the measured time at 90%.
5. Compare values from the two constructions and from successive load increments, and select a design value for the stress range that matters, noting the coefficient generally varies with stress level and decreases as liquid limit increases.
6. Scale to the field: compute the field time factor using the field drainage path (half the layer thickness for two-way drainage, the full thickness for one-way), then use the time factor versus degree of consolidation relationship to convert between time and degree of consolidation.
7. Multiply the degree of consolidation by the total primary settlement to obtain settlement at any time.

## Decision rules

- The drainage path length enters squared, so misjudging one-way versus two-way drainage changes the predicted time by a factor of four — confirm the field boundary conditions from the borehole logs.
- Use the specimen's average height during the increment, not the initial height, for the specimen drainage path.
- Field coefficients of consolidation are commonly larger than laboratory values because of fabric, sand lenses and horizontal drainage; back-analysis of field monitoring is more reliable where available.
- Where the log-time and root-time constructions disagree substantially, treat the result as uncertain and report a range.

## Checks

- Check the time-deformation curve shows a recognisable primary and secondary portion; a curve without a clear break gives an unreliable coefficient.
- Check the drainage path assumed for the specimen matches the actual porous stone arrangement.
- Check the predicted field time against any available monitoring or case history for the same deposit.

## Common errors

- Using the initial specimen height rather than the average height during the increment.
- Assuming two-way field drainage when the underlying stratum is impermeable.
- Applying a single coefficient of consolidation across a stress range where it varies by an order of magnitude.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Time factor values for each degree of consolidation are tabulated in the source — use those values.

## Standards cited

ASTM D2435, AS 1289.6.6.1

## Related

- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
