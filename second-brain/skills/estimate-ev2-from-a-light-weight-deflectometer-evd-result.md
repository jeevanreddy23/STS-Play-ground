---
title: Estimate Ev2 from a light weight deflectometer Evd result
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Estimate Ev2 from a light weight deflectometer Evd result

> **Source:** `Relationship Between Ev2 and Evd.xlsx` (Sheet1 (average relationship row plus the ratio 2.3 / 1 / 4 comparison rows), cross-checked against the Evd-Ev2 relationship slides in PLT Training Presentation.pptx), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can convert a dynamic deflection modulus from an LWD into an indicative static Ev2, and knows the bounds within which that conversion is defensible and where it must not be used.

## Inputs

- Dynamic deflection modulus Evd from a light weight deflectometer, in MN/m2
- Soil type (cohesive versus non-cohesive) and an indication of the degree of compaction
- Any site-specific paired LWD / static plate load test data available for calibration

## Procedure

1. Use the average published relationship Ev2 = 600 x ln(300 / (300 - Evd)), with the natural logarithm and Evd in MN/m2.
2. Bracket the answer instead of quoting a single number: also compute Ev2 from the plain ratio bounds Ev2/Evd = 1 and Ev2/Evd = 4, which is the range experience shows the ratio occupies.
3. For non-cohesive soils with Evd above about 50 MN/m2, use the ratio Ev2/Evd of approximately 2.3 as the densely compacted reference case, and compare it with the value the logarithmic expression returns.
4. Where the estimate will influence acceptance or design, run paired LWD and static plate load tests on the actual material and derive a site-specific correlation instead of relying on the generic relationship.
5. Report the LWD-derived Ev2 explicitly as an estimate, alongside the Evd it came from and the ratio implied.

## Decision rules

- The relationship does not hold at limiting values - it must not be used to demonstrate compliance with a specified Ev2 limit, only to guide expectations between tests.
- The ratio depends on soil type and degree of compaction; cohesive soils and poorly compacted layers sit well away from the 2.3 reference.
- The expression is undefined as Evd approaches 300 MN/m2 and returns nonsense above it; treat Evd values approaching that bound as outside the correlation's range.
- Where the ratio implied by a site-specific pairing falls outside 1 to 4, suspect a test problem (seating, plate size, reaction, or a stiff shallow layer) rather than a genuine correlation.

## Checks

- Confirm the logarithm is natural (ln), not base 10.
- Confirm the resulting Ev2/Evd ratio falls within 1 to 4; if it lands near 1.0 for a well-compacted granular layer, the log base is almost certainly wrong.
- Confirm both moduli are in the same units (MN/m2) before forming the ratio.
- Cross-check against the ratio bounds computed alongside the log expression.

## Common errors

- Using a base-10 logarithm in place of the natural logarithm. The source spreadsheet does exactly this - its Excel LOG() call is base 10, which returns roughly 2.3 times too low an Ev2 and drives the implied ratio down towards 1.0, inconsistent with the same sheet's own 2.3 reference row. Use LN() in Excel.
- Quoting the converted value as a compliance result rather than an estimate.
- Applying the non-cohesive 2.3 ratio to a clay subgrade.
- Extrapolating to Evd values near or above 300 MN/m2.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The formula and the ratio bands are German practice; they do not automatically transfer to Australian specifications.
- The relationship is an average of scattered data - the source deck notes there is no general relationship and recommends site-specific correlation.
- The spreadsheet as supplied contains a logarithm-base error; do not reuse its cells without correcting them.

## Standards cited

DIN 18134, TP BF-StB Teil B 8.3, ZTV E-StB

## Related

- [[Library - plate load testing]]
- [[Skills]]
