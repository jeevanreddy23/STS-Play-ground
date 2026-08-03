---
title: Optimise an overall slope angle to a target factor of safety with the Slope Angle Wizard in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Optimise an overall slope angle to a target factor of safety with the Slope Angle Wizard in Slide2

> **Source:** `Tutorial_22_Slope_Angle_Optimization.pdf` (Pages 22-2 to 22-9 (wizard, FS table, interpolation, final design)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The steepest slope (e.g. open pit wall) that meets a specified FS criterion, found by generating multiple slope-angle scenarios, plotting FS vs angle, and interpolating

## Inputs

- Base slope model at the steepest candidate angle
- Toe and crest vertex coordinates
- Target FS (e.g. 1.25) and an angle decrement scheme (e.g. 4 scenarios at 4-degree steps)

## Procedure

1. Measure the existing overall angle with Tools > Dimension Angle from crest to toe (41 degrees in the example) and compute the base case (FS about 1.0 — unacceptable)
2. Run Boundaries > Slope Angle Wizard (Scenarios): pick the toe vertex then the crest vertex, keep Project Horizontally (preserves flat benches rather than rotating them), rotate clockwise to flatten, and set the number of scenarios and angle increment — this auto-creates a group per angle
3. Save (writes all groups) and Compute all new groups
4. Tabulate Bishop FS vs slope angle (41: 1.018, 37: 1.087, 33: 1.177, 29: 1.264, 25: 1.374 in the example), plot, and interpolate the angle at the target FS (about 30 degrees for FS 1.25)
5. Build the final design by duplicating the base group and applying Boundaries > Change Slope Angle by the interpolated rotation (11 degrees clockwise), then verify FS by computing

## Decision rules

- Start from the steepest geometry and flatten: Slide2 then simply crops material boundaries at the new face; steepening a shallow slope auto-extends boundaries and may need manual clean-up
- Project Horizontally is the right projection option when the slope contains horizontal benches

## Checks

- Re-measure the final overall angle with Dimension Angle after the change
- The verification run at the interpolated angle should reproduce the target FS (about 1.25 at 30 degrees)

## Common errors

- Rotating benches with the slope instead of projecting horizontally
- Interpolating from too few angle points around the target FS

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
