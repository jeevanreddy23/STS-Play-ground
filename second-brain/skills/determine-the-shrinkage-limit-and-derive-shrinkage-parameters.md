---
title: Determine the shrinkage limit and derive shrinkage parameters
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Determine the shrinkage limit and derive shrinkage parameters

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 4, §4.4 (shrinkage limit, shrinkage ratio, volumetric and linear shrinkage), with the plasticity-chart estimate in §4.7), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Shrinkage limit, shrinkage ratio, volumetric shrinkage and linear shrinkage for a clay, plus an independent estimate of specific gravity, for use in assessing shrink-swell behaviour.

## Inputs

- Remoulded saturated soil paste at a moisture content above the plastic limit
- Shrinkage dish of known volume, coated to prevent adhesion
- Means of measuring the volume of the dried pat (mercury displacement in the classical method, or a wax/immersion alternative)
- Balance and oven

## Procedure

1. Fill the greased dish completely with wet paste, strike off level, and record the wet mass; the dish volume is the initial soil volume.
2. Air-dry then oven-dry the pat, and record the dry mass.
3. Measure the volume of the oven-dried pat by displacement.
4. Compute the initial moisture content from the wet and dry masses.
5. Compute the moisture lost purely as a result of the volume change, from the difference between initial and final volumes expressed as a water mass over the dry mass.
6. Subtract that volume-change moisture from the initial moisture content to obtain the shrinkage limit.
7. Compute shrinkage ratio as the dry mass divided by the product of final volume and the density of water; obtain an estimated Gs from the shrinkage ratio and shrinkage limit.
8. Compute volumetric shrinkage from a chosen starting moisture content using the shrinkage ratio, and convert to linear shrinkage.

## Decision rules

- Use the plasticity-chart construction (project the A-line and U-line to their intersection, join to the soil's plotted point, and read the intercept on the liquid limit axis) only as an approximate shrinkage limit when a test is not available.
- Treat mercury displacement as prohibited in most modern laboratories — use a compliant alternative volume-measurement method and say which was used.
- For a soil with significant sand content the shrinkage limit loses diagnostic value; rely on linear shrinkage or shrink-swell index instead.

## Checks

- Check the pat dried without cracking through — a cracked pat invalidates the volume measurement.
- Check the computed Gs from the shrinkage ratio against a measured or expected Gs; a large discrepancy indicates the pat was not saturated at the start or trapped air.
- Check the shrinkage limit is below the plastic limit.

## Common errors

- Starting the test at a moisture content low enough that the pat is already unsaturated, which overstates the shrinkage limit.
- Failing to grease the dish, so the pat restrains against the wall and cracks.
- Confusing volumetric shrinkage with linear shrinkage when specifying earthworks materials.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Australian reactive-soil practice uses the shrink-swell index (AS 1289.7.1.1) and AS 2870 site classification rather than shrinkage limit — do not substitute one for the other.

## Standards cited

ASTM D427 (withdrawn) / ASTM D4943, AS 1289.3.4.1, AS 2870

## Related

- [[AS 2870 residential site classification]]
- [[Skills]]
