---
title: Interpret an AX01a printed plate bearing test record
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Interpret an AX01a printed plate bearing test record

> **Source:** `AX01 Sample Results with GPS.pdf` (Single sample record sheet (Record number 2)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can read a DIN 18134-300 test record, verify its metadata, and judge pass/fail against the nominal Ev2 and Ev2/Ev1 targets.

## Inputs

- AX01a test record (printout or Excel sheet)
- Project acceptance values for Ev2 and Ev2/Ev1

## Procedure

1. Verify the header: record and card numbers, start/end time, device number, plate diameter (300 mm), lever ratio, sensor details, and the GPS latitude/longitude confirming the test location.
2. Trace the tabulated stress/deflection pairs through first loading, unloading and second loading, and check they match the plotted curve.
3. Read the results block: maximum first-cycle stress s1max, Ev1, Ev2, Ev2/Ev1 and the Westergaard modulus.
4. Compare each actual value with its nominal target and rating - in the sample, Ev2 of 76.68 MN/m2 against a nominal 45 rates OK, while Ev2/Ev1 of 2.642 against a nominal 2.2 rates failed - and treat the test as non-conforming if any criterion fails.
5. Where the ratio fails but Ev2 comfortably exceeds the requirement, consider the concession (from the German framework) that higher ratios may be acceptable when Ev1 reaches 60% of the required Ev2, subject to the project specification.

## Decision rules

- Both the Ev2 floor and the Ev2/Ev1 ceiling must pass for compaction acceptance; a high Ev2 alone does not save a failed ratio.
- A failed ratio with adequate Ev2 typically signals further compaction of the layer is achievable.

## Checks

- Deflection at the end of unloading versus the first-cycle maximum gives the plastic (unrecovered) settlement.
- GPS coordinates match the intended test location.

## Common errors

- Reporting the test as passing because Ev2 rated OK while overlooking the failed Ev2/Ev1 rating.
- Ignoring header metadata, so records cannot be matched to test positions later.

## Caveats

- This document is a single example printout, not a procedure; the pass/fail concession comes from the companion calculations document, not this sheet.
- Nominal values (45 MN/m2, ratio 2.2) are the example's settings, not universal requirements.

## Standards cited

DIN 18134

## Related

- [[Library - plate load testing]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
