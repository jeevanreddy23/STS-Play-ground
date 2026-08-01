---
title: Estimate lateral response of a rock socket with the Carter and Kulhawy elastic solutions
type: skill
tags: [skill, piling-rock, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Estimate lateral response of a rock socket with the Carter and Kulhawy elastic solutions

> **Source:** `The Design Of Socketed Piles In Rock by pells.pdf` (Section 7 with equations 14-17 and Figures 11-12 (pp 1-319 to 1-320)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Elastic lateral displacement and head rotation estimates for a laterally loaded rock socket, with the shaft correctly categorised as flexible, rigid or intermediate, and honest treatment of the weak state of ultimate lateral capacity methods.

## Inputs

- Lateral load and head moment at rock level
- Socket length L, diameter D, bending rigidity (EI) of the shaft
- Rock mass shear modulus (from Er and Poisson's ratio) and the modified modulus G*
- Overlying soil profile, if any

## Procedure

1. Classify the shaft as flexible or rigid using the L/D versus stiffness-ratio criteria chart (Figure 12 of the paper); each regime has its own closed-form displacement and rotation equations.
2. Apply the flexible-pile equations or rigid-pile equations accordingly, taking the exact expressions from the published paper (the OCR of the equations here is unreliable).
3. For intermediate-stiffness shafts, take displacements as 1.25 times the maximum of the flexible-case and rigid-case results.
4. Where soil overlies rock, assume a distribution of soil reactions, analyse the embedded-in-soil portion as a determinate beam, transfer forces and moments to rockhead, then apply the rock-socket equations.
5. Treat ultimate lateral capacity separately and cautiously: the paper concludes methods for lateral ultimate strength are poorly developed; p-y computer methods are an alternative with documented limitations.

## Decision rules

- Solutions for laterally loaded piles in soil do not cover short stiff sockets in rock; do not extrapolate soil methods.
- If lateral loading is a serious design driver, expect to supplement closed forms with finite element analysis (as done for the Sydney Monorail).

## Checks

- Flexible/rigid classification verified before choosing equations.
- G* computed with the specified Poisson adjustment, not raw shear modulus.

## Common errors

- Using flexible-pile equations for short rigid sockets or vice versa.
- Reporting elastic lateral results as if they bounded ultimate capacity.
- Ignoring the 1.25 factor in the intermediate regime.

## Caveats

- Equation exponents and coefficients were badly garbled by OCR; the published equations are mandatory before any calculation.
- Ultimate lateral strength assessment remains poorly established per the source; treat any capacity estimate as provisional.
- Design reference only: verify against the source and obtain qualified review before use.

## Standards cited

Carter & Kulhawy (1987), Wyllie (1992) p-y alternative

## Related

- [[Rock socket length]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
