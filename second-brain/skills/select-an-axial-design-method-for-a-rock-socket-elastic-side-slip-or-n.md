---
title: Select an axial design method for a rock socket: elastic, side-slip, or non-linear
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Select an axial design method for a rock socket: elastic, side-slip, or non-linear

> **Source:** `The Design Of Socketed Piles In Rock by pells.pdf` (Pells, 8th ANZ Geomechanics Conf, Hobart 1999, pp 1-307 to 1-314; Sections 3-4 and 6 intro; ROCKET comparison Figures 5-7 and Table 2), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A justified choice among the three accepted socket design families (elastic; Rowe & Armitage side-slip; non-linear/ROCKET-type), matched to construction quality, data availability and whether sidewall slip may be mobilised.

## Inputs

- Rock mass moduli adjacent to sidewall and beneath base (Es, Eb)
- Average UCS at sidewall and base
- Sidewall roughness class and cleanliness assurance
- For fundamental-parameter methods: the 8 ROCKET inputs (rock c and phi, residual friction, diameter, mass modulus, Poisson's ratio, roughness geometry, initial normal stress)

## Procedure

1. Confirm the three prerequisites of all modern methods: equivalent Young's moduli, average UCS, and sidewall roughness knowledge.
2. If sidewall slip is not to be mobilised (or end-bearing capacity is uncertain), use the conservative elastic method.
3. If slip may be mobilised with assured cleanliness and R2+ roughness, use the Rowe & Armitage chart method - the author's recommended state of practice - or the equivalent Carter & Kulhawy closed-form equations.
4. Consider non-linear fundamental-parameter analysis (ROCKET, successor to the Williams method) only with good knowledge of all 8 input parameters and their sensitivities; the program was primarily calibrated on Melbourne Mudstone and gave mixed first-pass predictions even in well-characterised Hawkesbury Sandstone.
5. For roughness-based computations, use the asperity angle at a chord length of about twice the design displacement (e.g. ~20 mm chords for 10 mm displacement).
6. Cross-check: in a reviewed Sydney CBD socket, Rowe & Armitage, Carter & Kulhawy and ROCKET gave practically identical settlements (6-10 mm), while the elastic method demanded double the socket length.

## Decision rules

- Sockets needing base resistance require full sidewall slip; all the safety margin then sits in end bearing.
- R2 or better roughness is required for the non-brittle (elasto-plastic) sidewall assumption underpinning the slip methods.
- Without confidence in the 8 fundamental parameters, chart-based methods give a better 'feel' and are quicker for design.

## Checks

- Same mass modulus basis used consistently across side shear, settlement and load-sharing calculations.
- ROCKET results checked for its computational truncation quirks (displacement capped at half the roughness chord length; chord lengths limited to 10% of diameter).

## Common errors

- Treating ROCKET as broadly calibrated outside Melbourne-mudstone-like materials.
- Using slip-based designs where construction QC of cleanliness is not assured.
- Reading shear resistance from asperity data at the wrong chord length.

## Caveats

- Reflects 1999 state of practice; check subsequent literature for ROCKET calibration progress.
- Design reference only: the method choice and parameters must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

Rowe & Armitage (1984); Carter & Kulhawy (1987); Seidel & Haberfield (1995/1999), AS 2159-1995

## Related

- [[Rock socket length]]
- [[AS 2159 piling]]
- [[Rock strength classes]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
