---
title: Calculate Ev1 and Ev2 deformation moduli from a PLT load-settlement curve
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Calculate Ev1 and Ev2 deformation moduli from a PLT load-settlement curve

> **Source:** `PLT Calculations for AX01a.pdf` (Section 1, pp. 2-5 (equations 1 and 2)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can fit the measured load-settlement data and compute the first- and second-cycle strain moduli the way the AX01 evaluation does, and check machine output by hand.

## Inputs

- Paired normal stress / settlement readings for each loading cycle
- Loading plate radius r in mm
- Maximum average normal stress of the cycle, sigma_0max, in MN/m2

## Procedure

1. Fit each loading cycle with a second-degree polynomial s = a0 + a1*sigma0 + a2*sigma0^2, finding a0, a1, a2 by least squares (p. 5).
2. When fitting the first loading cycle, exclude the origin point s = 0 from the regression (p. 5).
3. Compute the modulus from the secant slope between 0.3*sigma_0max and 0.7*sigma_0max, which reduces to Ev = 1.5*r / (a1 + a2*sigma_0max) in MN/m2 (p. 5).
4. Label the first-cycle result Ev1 and the second-cycle result Ev2, and form the ratio Ev2/Ev1 as the compaction indicator.

## Decision rules

- Use sigma_0max of the cycle being evaluated in the secant formula.
- Ev2/Ev1 serves as the compaction parameter; Ev1 and Ev2 characterise stiffness (p. 11).

## Checks

- The fitted polynomial should track the measured curve smoothly; the worked example gives Ev1 = 43 MN/m2 and Ev2 = 94 MN/m2 for its curve (p. 4).
- Hand-calculated values should match the AX01 electronic evaluation for the same data.

## Common errors

- Including the s = 0 origin point when regressing the first cycle.
- Mixing up which cycle's sigma_0max belongs in the formula, since the second cycle stops at a lower peak stress.

## Caveats

- The formula assumes units of mm for r and MN/m2 for stress; using other units silently corrupts the result.
- The document is an equipment maker's technical paper describing the DIN 18134 approach, not the standard itself; consult the current DIN 18134 for normative wording.

## Standards cited

DIN 18134:2001-09, E DIN 18134:2010-04

## Related

- [[Library - plate load testing]]
- [[Skills]]
