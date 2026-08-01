---
title: Select field density test method by oversize
type: skill
tags: [skill, monitoring]
confidence: high
updated: 2026-08-01
---

# Select field density test method by oversize

> **Source:** `b030.pdf` (Clauses 6.4.1 and 6.4.3, Table B30.5), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A valid in-situ density / relative compaction result using the test method appropriate to the material's oversize fraction and layer thickness.

## Inputs

- Percentage by mass retained on the 37.5 mm sieve for the fill
- Layer thickness
- Material type (cohesive, cohesionless, one-size or gap-graded)

## Procedure

1. Determine the oversize fraction retained on the 37.5 mm sieve for the lot.
2. Choose the density method from the applicability table: nuclear gauge or sand replacement for low-oversize material; sand replacement only for moderate oversize; fixed-volume extractive method for fine-medium cohesionless, one-size or gap-graded materials.
3. Compute relative compaction per the ratio test method and report the characteristic value per the quality-system spec.

## Decision rules

- Oversize <= 20%: nuclear gauge or sand replacement permitted; 20-40%: sand replacement only (no nuclear gauge); > 40%: relative compaction is invalid - report only the oversize percentage (b030 Table B30.5).
- Do not use the nuclear gauge where layer thickness exceeds 300 mm (b030 Clause 6.4.3).

## Checks

- Field moisture methods T121/T180 only used after correlation against the oven method for the materials being compacted.
- Results rounded to nearest 0.1% and characteristic value computed per RMS Q.

## Common errors

- Reporting a relative compaction number for material with more than 40% oversize.
- Nuclear gauge probe depths mismatched to layer thickness.
- Using an uncorrelated rapid moisture method.

## Caveats

- Verify edition currency; the same logic appears in other RMS earthworks specs but limits must be confirmed per contract.
- Contract documents override.

## Standards cited

RMS T119, RMS T165, RMS T166, RMS T173, RMS Q

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
