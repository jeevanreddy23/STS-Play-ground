---
title: Apply the Sarma method with vertical or non-vertical slices in Slide2
type: skill
tags: [skill, slope-stability]
confidence: medium
updated: 2026-08-01
---

# Apply the Sarma method with vertical or non-vertical slices in Slide2

> **Source:** `Tutorial_26_Sarma_Non-Vertical_Slices.pdf` (Pages 26-2 to 26-6 (method setup, non-vertical option, slice angle options)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A fully rigorous limit equilibrium analysis (force and moment equilibrium on every slice) using inclined slice boundaries where a vertical-slice idealisation is questionable, cross-checked against Spencer and GLE

## Inputs

- Slope model (any slip surface shape is admissible)
- Choice of slice-angle scheme for the non-vertical variant

## Procedure

1. Enable GLE/Morgenstern-Price, Spencer and Sarma in Project Settings > Methods and run the vertical-slice case; the three rigorous methods should give similar FS
2. Create a second scenario and additionally enable the Sarma Non-Vertical Slices option on the Methods page
3. Compute and use Query > Show Slices to view the inclined slice geometry, and Query Slice Data for per-slice forces
4. Adjust Sarma options if needed: convergence settings (as for vertical methods), interslice strength options, and the Slice Angles scheme

## Decision rules

- The default slice-angle scheme is Optimized by Global Minimum (the program finds the critical slice angle set, constrained so slices cannot cross, for the Global Minimum surface only); Optimize for All Surfaces is available at extra cost; user-defined schemes are Bisection, Weighted Normal Average and Vertical
- Sarma satisfies horizontal and vertical force equilibrium and moment equilibrium per slice and applies to any surface shape — use it as a rigorous cross-check on Spencer/GLE

## Checks

- Vertical-slice Sarma, Spencer and GLE FS values should agree closely on the same surface; large divergence signals convergence or modelling issues

## Common errors

- Assuming slice-angle optimisation was applied to every surface when the default optimises only the Global Minimum

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
