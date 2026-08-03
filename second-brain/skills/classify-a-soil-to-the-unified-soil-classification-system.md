---
title: Classify a soil to the Unified Soil Classification System
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Classify a soil to the Unified Soil Classification System

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 5, §5.5 (Unified Soil Classification System) with the plasticity chart in §4.7 and §5.5), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A USCS group symbol and group name for a soil, defensible against the criteria table and reproducible by another engineer from the same test data.

## Inputs

- Percent gravel, percent sand and percent fines from a particle-size distribution
- Uniformity coefficient and coefficient of gradation for coarse-grained soils
- Liquid limit and plasticity index of the fraction passing 0.425 mm
- Field observations of colour, odour and organic content

## Procedure

1. Split coarse from fine on the fines percentage: 50% or more passing the 0.075 mm sieve makes the soil fine-grained.
2. For coarse-grained soils, decide gravel versus sand on whether more than half the coarse fraction is retained on the 4.75 mm sieve.
3. For a coarse soil with a low fines content, apply the gradation criteria on Cu and Cc to separate well graded from poorly graded.
4. For a coarse soil with a high fines content, plot the fines on the plasticity chart to decide silty (M) versus clayey (C) behaviour.
5. For an intermediate fines content, assign the appropriate dual symbol.
6. For fine-grained soils, split low from high plasticity on the liquid limit threshold, then use position relative to the A-line to separate clay from silt; the A-line and U-line equations are stated in the source.
7. Screen for organic soils by comparing the liquid limit of the oven-dried sample with that of the not-dried sample, and classify highly organic soils separately.
8. Assign the group name using the percent sand and gravel modifiers.

## Decision rules

- Points plotting in the hatched zone of the plasticity chart between the A-line and the low plasticity index band take a dual symbol.
- Never classify from grading alone when the fines content is significant — the plasticity of the fines controls behaviour.
- A liquid limit ratio (oven-dried to not-dried) below the published threshold indicates an organic soil regardless of where it plots.

## Checks

- Check that the fines used for the limits testing came from the same sample as the grading.
- Check the classification against the field description (a soil logged as a stiff clay that classifies as SM warrants re-examination).
- Check the group name modifiers are consistent with the measured sand and gravel percentages.

## Common errors

- Using percent finer than 0.075 mm on the total sample where the criterion refers to the coarse fraction, or vice versa.
- Classifying on visual identification alone and presenting the result as a laboratory classification.
- Applying USCS symbols in an Australian report where AS 1726 descriptive classification is expected.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The full criteria table, plasticity chart boundaries and group-name flow charts are reproduced in the source — work from those, not from recollection.
- Australian reports normally classify and describe to AS 1726; USCS symbols are supplementary.

## Standards cited

ASTM D2487, ASTM D2488, AS 1726

## Related

- [[AS 1726 soil and rock description]]
- [[Soil description order]]
- [[Skills]]
