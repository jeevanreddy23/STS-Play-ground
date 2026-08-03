---
title: Check a slope design against Eurocode 7 partial factor combinations in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Check a slope design against Eurocode 7 partial factor combinations in Slide2

> **Source:** `Tutorial_21_Slope_Design_with_Eurocode_7.pdf` (Pages 21-2 to 21-8 (both combinations, partial factor verification)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Over-design factors for Eurocode 7 Design Approach 1 Combinations 1 and 2, verified against how the partial factors actually modified slice weights and material strengths in the analysis

## Inputs

- A conventional slope/dam model (the tutorial uses an earth dam downstream slope with steady-state FEA groundwater)
- Choice of Eurocode 7 design approach (all three are available; DA1 is demonstrated)

## Procedure

1. Run the unfactored analysis first for a traditional FS baseline (1.37 in the example)
2. Duplicate the scenario, open Project Settings > Design Standard and select Eurocode 7 - Design Approach 1, Combination 1; View Partial Factors shows unfavourable permanent actions factored by 1.35 with material factors of 1.0
3. Compute; Interpret now reports the over-design factor Gamma (ratio of resisting to driving force under the applied partial factors) instead of FS — Gamma greater than 1 satisfies the GEO limit state (1.210 here)
4. Duplicate again for Combination 2: action factors 1.0, material factors above 1.0 (strength reduction); compute (Gamma = 1.094 in the example, between Smith's published 1.07-1.14)
5. Verify factor application: Show Values Along Surface > Slice Weight in the C1 run shows weights about 1.35 times the unfactored run; in the C2 run Base Cohesion reads 9.6 = 12/1.25 and base friction angle 16.23 degrees = atan(tan 20 / 1.25)

## Decision rules

- The 1.25 material partial factor applies to the coefficient of shearing resistance tan(phi), not to phi itself
- Both combinations of Design Approach 1 must be satisfied; report Gamma per combination rather than a single lumped FS
- Slice weights will not be exactly 1.35 times the baseline because critical surfaces and slice discretisation differ slightly between runs

## Checks

- Gamma greater than 1 for every required combination
- Spot-check factored strengths along the surface against hand calculations of c/gamma_c and atan(tan phi / gamma_phi)

## Common errors

- Dividing phi (degrees) by the partial factor instead of factoring tan(phi)
- Reading the reported Gamma as a conventional factor of safety
- Checking only one combination of Design Approach 1

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

BS EN 1997-1 (Eurocode 7: Geotechnical design - Part 1)

## Related

- [[Skills]]
- [[Skills]]
