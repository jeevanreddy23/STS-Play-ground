---
title: Measure soil salinity by EC1:5 and classify it using field texture
type: skill
tags: [skill, salinity, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Measure soil salinity by EC1:5 and classify it using field texture

> **Source:** `Salinity and textural classification.pdf` (pp. 1-3 (procedure, multiplier table, salinity rating table)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A repeatable field/lab workflow converting a 1:5 soil:water EC reading into an ECe value and salinity class via texture-based multipliers.

## Inputs

- Air/oven-dried soil crushed and sieved to pass 425 um (enough for ~100 g+ of fines)
- Distilled water, clean jars, 5 mL teaspoon measure, 25 mL syringe
- Calibrated EC meter with buffer solution
- Texture assessment kit (hand, water bottle) and the texture/ribbon reference table

## Procedure

1. Dry the sample, crush with mortar and pestle (or compaction mould and hammer for hard clays) and sieve to minus 425 um.
2. Place one level teaspoon (5 mL) of dried, sieved soil in a clean jar; add 25 mL distilled water (1:5 soil:water by volume); agitate and stand for 30 minutes.
3. Calibrate the EC meter against buffer solution, then measure and record EC1:5 for each jar.
4. Texture the same soil by bolus: wet ~25 g in the palm until it just fails to stick, form a bolus, then press a ribbon between thumb and forefinger; classify from ribbon length and feel (e.g. sands give minimal ribbon, light clay ~50-75 mm, medium/heavy clay ~75 mm or more) per the AS 1547 texture table.
5. Convert: ECe = EC1:5 x texture multiplier — 17 for sands/loamy/clayey sands, 14 for sandy loams, 10 for loams, 9 for clay loams/light clays group, 8 for light medium clay, 7 for medium clay, 6 for heavy clay.
6. Assign the salinity class from ECe in dS/m: non-saline <2, slightly saline 2-4, moderately saline 4-8, then the two upper classes to >16 (see caveat on class naming).
7. Optionally estimate permeability (m/day) from the textural class using the AS 1547-derived table if needed for effluent/drainage design.

## Decision rules

- Always keep EC1:5, ECe and ECw distinct in records; only ECe (texture-corrected) feeds the salinity class.
- Clay-dominated soils are hardest to texture — add water slowly and re-add soil if over-wetted before judging ribbon length.
- If texture is uncertain across a class boundary, report the ECe range for both multipliers rather than a single value.

## Checks

- EC meter calibrated against buffer before each batch.
- Enough dried fines prepared (the procedure sheet targets at least ~108 g of -425 um material).
- Jars cleaned/drained between samples to avoid carryover.
- Multiplier used is recorded next to each result.

## Common errors

- Reporting raw EC1:5 as the soil salinity (understates true salinity several-fold, most severely in sandy soils).
- Texturing a different subsample than the one tested for EC.
- Skipping the 30-minute stand time, giving unstable readings.
- Using tap water instead of distilled water.

## Caveats

- Classification and aggressivity calls must be verified against the source document and the project spec.
- This is a rough OCR of a workshop procedure sheet: its rating table reads 'Highly Saline 8 to 15.99, Very Saline >16', which swaps the class names relative to booklet3siteinvestigationsforurbansalinity (2).pdf and INDUSTRY_GUIDE_T56 (both: Very Saline 8-16, Highly Saline >16) — treat the class names above 8 dS/m as unreliable in this sheet and defer to the Richards convention.
- Multiplier tables in the merged sources agree closely but not identically (e.g. sands 17 here and in T56 vs a smudged '17'/'1710' OCR artifact in booklet3); confirm against a clean copy before contractual use.
- Same skill also taught in booklet3siteinvestigationsforurbansalinity (2).pdf Appendix 1 and INDUSTRY_GUIDE_T56_Residential_Slabs_and_Footings_in_Saline_Environments.pdf Section 3.5-3.6 (both recorded here as secondary sources).

## Standards cited

AS 1547 (texture Table A1 and effluent permeability values, as cited in the procedure), Richards (1954) USDA Handbook 60 (ECe class basis)

## Related

- [[Library - salinity and sodic soils]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
