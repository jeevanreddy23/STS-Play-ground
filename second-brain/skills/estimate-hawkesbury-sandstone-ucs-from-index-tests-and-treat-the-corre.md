---
title: Estimate Hawkesbury Sandstone UCS from index tests and treat the correlations as screening tools
type: skill
tags: [skill, parameters, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Estimate Hawkesbury Sandstone UCS from index tests and treat the correlations as screening tools

> **Source:** `substanceAndMassPropertiesForTheDesignOfEngineeringStructuresInTheHawkesburySandstone.pdf` (Sections 2.3 (point load, Brazilian; pp 6-7, Table 6) and 2.4 (sonic velocity; pp 7-8)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Preliminary UCS estimates from point load, Brazilian tensile or sonic velocity data, with correlation scatter explicitly acknowledged.

## Inputs

- Point load Is50 results (axial or diametral) with saturation state
- Brazilian tensile strengths
- Laboratory or field P-wave velocities
- The paper's correlation figures and ranges (Sections 2.3-2.4)

## Procedure

1. For saturated point load tests use the Robson (1978) best fits: UCS about 20 x Is50 (axial, range roughly 15-29) and about 24 x Is50 (diametral, range roughly 14-35); note anisotropy index near 1.1 saturated, 1.3 oven-dry.
2. For Brazilian tensile strength, use the ratio study results (Ferry 1983 and related data): UCS is roughly an order of magnitude times tensile strength, with site datasets in the paper spanning about 7-13; read the exact ratios from Section 2.3.2 and Table 6.
3. Use P-wave velocity correlations (Figures 5a-5c) only comparatively - e.g. field/lab velocity ratio as an index of in situ jointing - since specimen preparation for velocity testing is as demanding as for UCS testing.
4. Always calibrate the chosen multiplier against a subset of direct UCS tests from the same site and saturation condition.
5. Report every derived UCS with the correlation used and its published range.

## Decision rules

- The point load test behaves close to a pure tensile measure here; do not stack a point-load-to-UCS conversion on top of a tensile-to-UCS conversion.
- Do not use generic worldwide Is50 multipliers (e.g. 22-24 as universal) without checking the local range.

## Checks

- Saturation state of index specimens matches the design (saturated) basis.
- Derived values fall within the class-consistent UCS range for the material logged.

## Common errors

- Averaging axial and diametral point load results without separating them.
- Predicting UCS from sonic velocity for design rather than for jointing comparison.
- Dropping the published scatter range when quoting a single multiplier.

## Caveats

- OCR garbled several numeric ratios (e.g. the tensile multiplier near Figure 4); confirm every coefficient against the published paper.
- Design reference only: correlations must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

ISRM point load test method, ASTM/AS Brazilian tensile test methods

## Related

- [[Rock strength classes]]
- [[Skills]]
