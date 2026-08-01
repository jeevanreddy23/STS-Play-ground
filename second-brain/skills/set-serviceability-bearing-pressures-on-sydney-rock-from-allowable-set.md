---
title: Set serviceability bearing pressures on Sydney rock from allowable settlement and class-based mass modulus
type: skill
tags: [skill, parameters, ocr-source]
confidence: high
updated: 2026-08-01
---

# Set serviceability bearing pressures on Sydney rock from allowable settlement and class-based mass modulus

> **Source:** `PELLS MOSTYN WONG (2019) CLASSIFICATION OF SANDSTONES AND SHALES IN THE SYDNEY.pdf` (Section 4.1 and Tables 3-5 (pp 33-36); serviceability equations on p 35), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A footing bearing pressure derived explicitly from the structure's allowable settlement using class-based mass modulus, instead of blind adoption of the tabulated 1%-settlement guideline values.

## Inputs

- Rock class per the Pells classification (sandstone or shale)
- Allowable settlement for each footing from the structural engineer
- Footing geometry (rigid circular diameter D, or rectangular L by B) and rigidity
- Design Young's modulus and Poisson's ratio ranges from Tables 3 (sandstone) and 4 (shale) of the 2019 paper

## Procedure

1. Establish the rock class, then select design modulus and Poisson's ratio from Tables 3 and 4, taking lower values where strength, spacing or seam content sits at the bottom of the class range.
2. Compute serviceability bearing pressure from the allowable settlement using the rigid-footing elastic equations given in the paper (from Poulos & Davis 1974; Whitman & Richart 1967), or numerical analysis for complex cases.
3. Check the computed pressure against the second-column limits of approximately linear settlement-versus-pressure behaviour (expressed as multiples of UCS per class) before relying on elastic theory.
4. For simple sites where all footings are similar in size and 1% settlement is acceptable, the tabulated bearing-pressure guideline values in Tables 3 and 4 may be adopted directly.
5. For socketed footings mobilising both side shear and end bearing, switch to socket-specific settlement methods (Rowe & Armitage 1984; Pells 1999; Randolph 2003).

## Decision rules

- If proposed pressures exceed the tabulated guidelines substantially, the designer must confirm the adopted moduli by site-specific investigation and construction verification, including spoon testing of all footings.
- Where footing sizes differ widely, do not use the 1% guideline pressures uncritically; equal pressures on an 800 mm and a 4500 mm footing produce very different settlements and can cause unacceptable differential movement.
- Recessed-footing settlement reduction factors from elasticity theory should be treated with caution because tensile fracturing and bedding effects can invalidate them.

## Checks

- Computed settlement stays within the approximately linear pressure range for the class.
- Semi-infinite-mass elastic equations recognised as potentially conservative.
- Differential settlement between adjacent footings assessed, not just individual settlements.

## Common errors

- Treating the guideline table values as universal allowables regardless of footing size or structure sensitivity.
- Adopting upper-bound modulus values for rock at the lower end of a class.
- Applying pad-footing pressures to sockets without socket interaction analysis.

## Caveats

- Modulus ranges are broad; validity of computed settlements depends entirely on the adopted mass modulus.
- Some equation symbols were garbled in OCR; retrieve the exact expressions from the published paper before calculating.
- Design reference only: all values must be verified against the source tables and reviewed by a qualified engineer before use.

## Standards cited

Poulos & Davis (1974) elastic solutions, Rowe & Armitage (1984) socket design, AS 2159 limit state piling framework (via the 1998 companion paper)

## Related

- [[Rock socket length]]
- [[AS 2159 piling]]
- [[Rock strength classes]]
- [[Weathered siltstone]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Soil description order]]
- [[Skills]]
