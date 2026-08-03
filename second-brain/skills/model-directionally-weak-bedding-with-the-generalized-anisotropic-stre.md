---
title: Model directionally weak bedding with the Generalized Anisotropic strength type in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Model directionally weak bedding with the Generalized Anisotropic strength type in Slide2

> **Source:** `Tutorial_20_Generalized_Anisotropic.pdf` (Pages 20-2 to 20-13 (material function, slice checks, non-circular search, probabilistic run)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A slope material whose strength depends on slice base orientation (weak parallel to bedding), analysed with a non-circular search that finds the bedding-following failure, plus a probabilistic assessment of bedding strength uncertainty

## Inputs

- Sub-material definitions (e.g. Soil Mass and Bedding, both Mohr-Coulomb with different c and phi)
- Angular range over which bedding strength applies (e.g. within plus/minus 10 degrees of horizontal)
- For probabilistic runs: distribution parameters for the uncertain bedding property

## Procedure

1. Define the sub-materials, then set a third material's Strength Type = Generalized Anisotropic and build the angular function: e.g. Soil Mass to -10 degrees, Bedding from -10 to +10 degrees, Soil Mass from +10 to 90 degrees (angles from horizontal)
2. Assign the generalized material to the slope region
3. Compute with circular surfaces first; use Query Slice Data to confirm each slice's Base Material follows its base angle (bedding material where the base is near-horizontal) and Graph Query of Base Cohesion to see the strength switching
4. Switch Surfaces > Surface Options to Non-Circular with Auto Refine Search and re-run: the critical surface then seeks out the weak bedding (FS fell from 1.48 circular to 1.26 non-circular in the example) with a characteristic sub-horizontal slip joined to the surface by a steep incline
5. For uncertainty: enable Probabilistic Analysis (Global Minimum type), add the bedding friction angle as a Normal random variable (mean 20, sd 5, min/max at 3 sigma via the 3x Std Deviation button), compute, and read PF; histogram FS with Highlight Data below 1 to link failures to low sampled phi

## Decision rules

- Choose Generalized Anisotropic over Anisotropic Function when sub-materials need different failure criteria (e.g. mixing Hoek-Brown and Mohr-Coulomb) or when probabilistic analysis is required — Anisotropic Function supports neither
- Always test non-circular surfaces for anisotropic materials; circular-only searches overestimate FS because they cannot follow the weak orientation
- Overall Slope probabilistic type re-searches per sample and is more rigorous but much slower than Global Minimum type

## Checks

- Mean probabilistic FS should sit close to the deterministic FS (1.263 vs 1.258 in the example) when the mean inputs match
- Latin Hypercube sampling yields a smooth FS distribution; extreme raggedness suggests too few samples

## Common errors

- Leaving the search circular and reporting the higher FS
- Defining angular ranges without covering the full -90 to +90 span, leaving orientations with undefined strength

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
