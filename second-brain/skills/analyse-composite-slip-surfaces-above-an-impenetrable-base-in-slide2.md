---
title: Analyse composite slip surfaces above an impenetrable base in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Analyse composite slip surfaces above an impenetrable base in Slide2

> **Source:** `Tutorial_04_Composite_Surfaces.pdf` (Pages 4-2 to 4-5 (Composite option, boundary editing, results table)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A circular grid search whose surfaces conform to a bedrock/impenetrable lower boundary instead of being discarded, capturing composite circular-linear failure mechanisms

## Inputs

- Slope model whose external boundary lower edge represents bedrock or an impenetrable horizon
- Circular search settings (grid, radius increment)

## Procedure

1. Enable the Composite Surfaces checkbox in Surfaces > Surface Options
2. Shape the lower edge of the External Boundary to coincide with the bedrock surface (edit vertices/material boundaries so the model base is the impenetrable horizon)
3. Run the grid search; circles that would cut below the base are automatically truncated to follow the external boundary between the two intersection points
4. Interpret results as usual; the strength on the linear portion of each composite surface is taken from the material immediately above each slice base

## Decision rules

- Without the Composite option, circles extending below the external boundary are discarded and not analysed — enable it whenever a shallow strong base forces failure surfaces to flatten along it

## Checks

- Compare the composite-search FS with circular and block-search results on the same geometry; in the worked example the composite Global Minimum (0.707) was far below the plain circular result (0.797)
- After boundary edits, verify material assignments survived; re-assign with right-click Assign Material if they reset

## Common errors

- Modelling bedrock as a material layer but leaving the external boundary deeper, so the search wastes surfaces or misses the composite mechanism
- Forgetting that the composite option changes which surfaces are valid, making comparisons with earlier runs misleading unless noted

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
