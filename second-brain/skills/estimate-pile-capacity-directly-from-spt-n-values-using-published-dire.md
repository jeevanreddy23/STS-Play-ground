---
title: Estimate pile capacity directly from SPT N values using published direct methods and reconcile them
type: skill
tags: [skill, piling-rock, ocr-source]
confidence: low
updated: 2026-08-01
---

# Estimate pile capacity directly from SPT N values using published direct methods and reconcile them

> **Source:** `SPT direct methods for prediction of pile bearing capacity in the present study.pdf` (Table 1 (page 1): summary of Meyerhof (1976), Bazaraa & Kurkur (1986), Decourt (1995) and a geometric-mean-N method), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Preliminary unit base and shaft resistance estimates from SPT-based direct methods (Meyerhof 1976; Bazaraa & Kurkur 1986; Decourt 1995; a geometric-mean N method), applied with the correct N-averaging zones and pile-type coefficients.

## Inputs

- SPT N profile through and below the pile embedment
- Pile type (driven vs bored), diameter D and embedment depth
- Soil type (sand/granular vs clay) for coefficient selection
- The methods' comparison table (Table 1 of the source)

## Procedure

1. For each method, average N over the zone that method prescribes around the pile base (e.g. Meyerhof between about 10D above and 5D below the base; other methods use different windows such as 1D above/3.75D below, or a geometric mean over about 8D above/4D below) and along the shaft for the shaft term.
2. Apply the method-specific coefficients for unit base resistance (MPa) and unit shaft resistance (kPa), which differ between driven and bored piles and between granular and cohesive soils.
3. Compute base and shaft resistance for at least two or three methods and compare the spread rather than adopting one blindly.
4. Carry the resulting range into design with an explicit factor of safety or resistance factor per the governing code, and validate against static analysis or load tests where possible.

## Decision rules

- Bored piles take substantially lower coefficients than driven piles in every method; never reuse driven-pile coefficients for bored piles.
- Method-to-method scatter is expected; a wide spread signals that direct SPT methods alone are insufficient for the site.

## Checks

- N values corrected (energy, and overburden where the method assumes it) per the original method's convention.
- Averaging windows scaled by the actual pile diameter.

## Common errors

- Using a single N value at toe level instead of the prescribed averaging zone.
- Mixing arithmetic and geometric averaging conventions between methods.
- Treating direct-method output as a verified capacity rather than a screening estimate.

## Caveats

- The OCR of this table is heavily garbled: coefficients, subscripts and averaging windows are unreliable as extracted. All numbers must be taken from the original table or the primary references.
- Only a single table page was available; the study context is unknown.
- Design reference only: values require verification against the source and qualified review before use.

## Standards cited

Original method publications (Meyerhof 1976; Decourt 1995; Bazaraa & Kurkur 1986)

## Related

- [[Bored pier inspection]]
- [[Skills]]
