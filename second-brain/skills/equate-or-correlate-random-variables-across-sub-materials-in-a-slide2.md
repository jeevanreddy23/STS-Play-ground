---
title: Equate or correlate random variables across sub-materials in a Slide2 probabilistic analysis
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Equate or correlate random variables across sub-materials in a Slide2 probabilistic analysis

> **Source:** `Tutorial_27_Statistical_Correlation_of_Materials.pdf` (Pages 27-2 to 27-11 (uncorrelated run, Equate, Advanced Correlation, PF comparison)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A realistic probability of failure for models where one geological material is represented by several sub-materials (e.g. anisotropic bedding domains), avoiding the unconservative PF that independent sampling produces

## Inputs

- Probabilistic model (the tutorial uses Anisotropic Linear sub-materials Sub A/B/C differing only in bedding angle, Latin Hypercube, 10000 samples, Global Minimum type)
- Random variable definitions per sub-material (c, phi with Normal distributions)
- A field-justified correlation coefficient if not fully equating (0.8 in the example)

## Procedure

1. Run the uncorrelated analysis and plot a Scatter Plot of the same property across two sub-materials (Sub A cohesion vs Sub B cohesion): a shapeless cloud reveals that one trial can pair a very low value in one domain with a very high value in another — physically implausible for the same material
2. To equate: Statistics > Materials > Equate > Add Group, select the sub-materials and the properties to tie (cohesion, phi and their secondary values); sampled values are then identical across the group each trial
3. Re-compute and compare PF: equating nearly doubled it (13.33% to 20.29%) because weak trials are now weak everywhere
4. To correlate instead: delete the equate group, open Correlation > Advanced Correlation, add property pairs with a coefficient (0.8), re-compute (PF 19.72%) and confirm the scatter plot shows the elongated correlated cloud

## Decision rules

- Failing to correlate sub-materials that represent one physical material biases PF unconservatively low — always equate or correlate them
- Equating (coefficient 1.0) is the idealistic bound; a coefficient like 0.8 is usually closer to field variability; PF decreases as the coefficient drops below 1
- Correlation coefficients can be defined between almost any two random variables across any materials
- The Anisotropic Surface option can replace multiple sub-materials with one material plus a surface, avoiding the issue structurally

## Checks

- Scatter plot after equating must be a perfect 1:1 line; after correlating, a tight elongated cloud
- PF ordering: uncorrelated < correlated (0.8) < equated

## Common errors

- Reporting the uncorrelated PF for an anisotropic material split into sub-domains
- Equating properties that genuinely differ between domains (only tie properties representing the same physical quantity)

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
