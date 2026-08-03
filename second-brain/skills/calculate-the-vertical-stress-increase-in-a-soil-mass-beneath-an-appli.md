---
title: Calculate the vertical stress increase in a soil mass beneath an applied load
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Calculate the vertical stress increase in a soil mass beneath an applied load

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 10, §§10.4–10.13 (point, line, strip, embankment, circular and rectangular loadings; influence chart for vertical pressure), with the averaging rule in §11.16), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The increase in vertical stress at a chosen depth and offset caused by a foundation, embankment or surcharge, ready for use in settlement calculation.

## Inputs

- Load geometry and intensity: point load, line load, strip load, embankment cross-section, circular area or rectangular area
- Depth below the loaded area and horizontal offset of the point of interest
- For rectangular areas, the plan dimensions relative to the point (subdivided so the point lies under a corner)
- Assumption of a homogeneous, isotropic, elastic half-space and its acceptability for the profile

## Procedure

1. Identify the load type and select the corresponding elastic (Boussinesq-based) solution from the source: point load, vertical or horizontal line load, vertical strip load, linearly increasing strip load, embankment loading, circular area, or rectangular area.
2. For a rectangular loaded area, divide the plan so that the point of interest lies beneath a corner of each rectangle, obtain the influence factor for each from the published chart or table using the two dimensionless side ratios, and superpose (adding for rectangles that cover the point, subtracting for rectangles outside the loaded area).
3. For an embankment, use the published influence factor as a function of the ratios of the crest and slope widths to depth, and superpose left and right halves.
4. For an arbitrary loaded plan shape, use the Newmark influence chart: plot the loaded area to a scale in which the depth equals the chart's unit length, centre the plan on the point of interest, count the chart elements covered, and multiply the count by the chart's influence value and the applied pressure.
5. For settlement calculation, evaluate the stress increase at the top, middle and bottom of each compressible layer and take a weighted average (top plus four times middle plus bottom, divided by six).
6. Add the stress increases from all separate loads by superposition.

## Decision rules

- Use the corner-subdivision rule for rectangles — the published influence factors are for the corner, not the centre.
- The elastic solutions are independent of the soil's modulus, so they apply regardless of stiffness, but they assume homogeneity: a stiff crust over soft soil or a rigid base at shallow depth will change the real distribution significantly.
- For a flexible foundation the contact pressure is uniform and settlement is dished; for a rigid foundation the settlement is uniform and the contact pressure is non-uniform. Choose the case that matches the structure.
- Beyond a depth of roughly two to three times the loaded width the stress increase is usually small enough to truncate the settlement calculation — state the truncation depth used.

## Checks

- Check the computed stress increase directly beneath the centre of a large loaded area approaches the applied pressure at shallow depth.
- Check the superposition signs when subdividing rectangles for a point outside the loaded area.
- Check the depth datum: stress increase is measured from the founding level, not the ground surface.

## Common errors

- Using centre influence factors with the corner-based charts.
- Applying an elastic solution across a layer boundary where a much stiffer or much softer layer exists, without noting the error.
- Evaluating the stress increase only at the mid-depth of a thick compressible layer and treating it as the average.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Every influence factor chart and table referenced here is reproduced in the source — read the values from the book, not from memory.

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
