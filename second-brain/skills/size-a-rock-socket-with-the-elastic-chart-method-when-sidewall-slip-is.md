---
title: Size a rock socket with the elastic chart method when sidewall slip is not permitted
type: skill
tags: [skill, piling-rock, ocr-source]
confidence: high
updated: 2026-08-01
---

# Size a rock socket with the elastic chart method when sidewall slip is not permitted

> **Source:** `The Design Of Socketed Piles In Rock by pells.pdf` (Section 6.1 with Figures 8-9 and worked example (pp 1-315 to 1-316)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A conservative socket length and diameter satisfying strength and serviceability limit states with all behaviour kept elastic, using the load-proportion and settlement-influence charts.

## Inputs

- Strength limit state load S* and long-term serviceability load
- Serviceability settlement limit (typically 5-15 mm at pile head if unspecified)
- Ultimate side shear, elastic-limit end bearing and ultimate end bearing stresses
- Pile modulus Ep and rock mass modulus Er (with reduction factor for serviceability)

## Procedure

1. Select a trial diameter D and compute the socket length that would carry all of S* in side shear alone (Lmax).
2. On the elastic load-distribution chart (base load proportion vs L/D for various Ep/Er), draw the straight line from 100% base load to Lmax/D; every point on it satisfies the side-shear limit.
3. Intersect that line with the curve for the assessed mean Ep/Er to obtain the design L/D and the base load proportion.
4. Read the settlement influence factor from the companion chart and compute settlement as rho = (P I) / (Er D) form given in the paper, applying the serviceability modulus reduction factor and the serviceability load.
5. Check the serviceability base pressure stays below the linear-elastic end-bearing limit.
6. Compute ultimate geotechnical strength Rug from ultimate side shear plus ultimate end bearing, and verify phi_g x Rug >= S*.
7. Repeat quickly for other diameters to optimise.

## Decision rules

- Adopt this method when sidewall slip must not occur, or when end-bearing capacity is too uncertain to rely on; expect materially longer sockets than slip-based design (6.9 m vs 4.7 m in the worked example).
- Charts shown assume uniform rock modulus; use the extended chart sets for differing base/shaft moduli or recessed sockets.

## Checks

- Chart axes and Ep/Er curve selection consistent with the assessed moduli.
- Settlement computed with the serviceability load, not S*.

## Common errors

- Using the strength load in the settlement check.
- Skipping the linear-elastic base-pressure check at serviceability.
- Forgetting the modulus reduction factor for long-term settlement.

## Caveats

- Chart figures are not legible in the OCR; the method requires the published charts or equivalent equations.
- Design reference only: chart readings and factors must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

Rowe & Pells (1980) theoretical basis, AS 2159-1995 phi_g framework (Section 5 of the same paper)

## Related

- [[Rock socket length]]
- [[AS 2159 piling]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
