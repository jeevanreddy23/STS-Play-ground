---
title: Back-analyse material strength from a known slope failure in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Back-analyse material strength from a known slope failure in Slide2

> **Source:** `Tutorial_23_Back_Analysis_Material_Properties.pdf` (Pages 23-2 to 23-10 (scenarios, sensitivity sampler, probabilistic scatter plot)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Strength parameters at failure: a single unknown (c or phi) recovered from a sensitivity plot at FS = 1, or the full c-phi combination line recovered from a probabilistic scatter plot

## Inputs

- Model with the observed failure surface defined (non-circular through a weak layer in the tutorial)
- Known strengths for non-failing materials
- Plausible ranges for the unknown weak-layer parameters

## Procedure

1. Confirm the model reproduces failure with best-estimate parameters (Spencer FS approximately 0.99 for the observed surface)
2. Single unknown: define the parameter as a sensitivity variable with min/max spanning its plausible range, compute, open the Sensitivity Plot for that variable only, and use Sampler > Edit Sampler to snap along the curve to FS = 1 (e.g. cohesion = 5.5 kPa at phi = 15; or phi = 15.3 degrees at c = 5 kPa)
3. Two unknowns: enable Probabilistic Analysis, give both c and phi Uniform distributions over their full ranges (uniform sampling covers the whole space; standard deviation is not applicable), compute, then Scatter Plot c vs phi with Highlight Data = FS in a narrow band (e.g. 0.99-1.01)
4. Show Highlighted Data Only: the highlighted band is the locus of (c, phi) pairs giving failure; read the fitted line parameters (alpha = intercept, beta = slope; here phi = -0.58c + 18.2) or drag the sampler along it
5. Validate by substituting a point from the line (e.g. c = 2, phi = 17) into the model and confirming FS approximately 1

## Decision rules

- Sensitivity back-analysis handles one variable at a time (all others fixed at means); probabilistic back-analysis handles two simultaneously
- Changing a variable's mean changes the deterministic FS, since deterministic runs use means — keep means at best estimates
- If the target FS falls outside the sensitivity plot's output range, widen the variable's min/max and re-run (trial and error is expected)
- The c-phi locus was linear in this example but need not be; bracket any target FS (e.g. 1.19-1.21) the same way
- The method extends to other strength models (Hoek-Brown, anisotropic) and other inputs such as support properties

## Checks

- The back-calculated pair must reproduce FS approximately 1 (or the target FS) when input deterministically
- With uniform uncorrelated sampling, the scatter plot should fill the whole c-phi rectangle evenly

## Common errors

- Using a Normal distribution for back-analysis sampling, concentrating samples near the mean and starving the tails
- Forgetting that a sensitivity curve conditions on all other parameters equalling their means

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
