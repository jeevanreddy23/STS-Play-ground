---
title: Calculate the Westergaard modulus of subgrade reaction from PLT data
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Calculate the Westergaard modulus of subgrade reaction from PLT data

> **Source:** `BedAnlAx01a_engl V40a.pdf` (Chapter 5, p. 11), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can derive the subgrade reaction modulus ks for pavement or airfield design from a plate load test, including the correction when a 300 mm plate is used instead of 762 mm.

## Inputs

- Initial-loading (first cycle) load-settlement curve
- Plate diameter used (762 mm or 300 mm)

## Procedure

1. On the parabola fitted to the initial loading branch, find the compressive stress sigma_0 corresponding to a mean settlement of s = 1.25 mm (p. 11).
2. With a 762 mm plate, compute ks762 = sigma_0 / s in MN/m3.
3. With a 300 mm plate, divide additionally by the empirical quotient 2.22: ks300 = sigma_0 / (s x 2.22). Literature recommends 2.22 rather than the geometric ratio 2.54 (= 762/300) (p. 11).
4. Note the AX 01a computes and prints ks automatically in DIN 18134 mode.

## Decision rules

- The 300 mm plate substitution is only reasonable when the layer beneath the plate is homogeneous to a depth of 1.5 times the plate diameter (stated 'without liability', p. 11).

## Checks

- Hand value should match the ks on the DIN-mode printout (the sample record shows 40 MN/m3).
- Confirm the stress was read from the first-loading branch, not the reload curve.

## Common errors

- Using the ideal geometric quotient 2.54 instead of the recommended 2.22.
- Reading sigma_0 at 1.25 mm off the second loading cycle.

## Caveats

- The manual flags the homogeneity condition for the 300 mm plate as information without liability.
- Units matter: ks is in MN/m3 with stress in MN/m2 and settlement implicit at 1.25 mm.

## Standards cited

DIN 18134:2012-04

## Related

- [[Library - plate load testing]]
- [[Skills]]
