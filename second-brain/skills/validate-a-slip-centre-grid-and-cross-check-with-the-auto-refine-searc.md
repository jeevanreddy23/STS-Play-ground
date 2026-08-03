---
title: Validate a slip-centre grid and cross-check with the Auto Refine search in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Validate a slip-centre grid and cross-check with the Auto Refine search in Slide2

> **Source:** `Tutorial_04_Composite_Surfaces.pdf` (Pages 4-5 to 4-9 (grid edge observation, grid editing, Auto Refine search)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Confidence that the reported Global Minimum is the true critical surface, by checking grid-edge behaviour, adjusting grid position/radius increment, and comparing independent search methods

## Inputs

- A computed circular grid search result
- Ability to edit the grid (stretch corners, move, add grids) and Surface Options

## Procedure

1. In Interpret, inspect where the Global Minimum slip centre sits within the grid and view the grid safety-factor contours
2. If the centre is at or near a grid edge, return to the modeller and stretch a corner (right-click a grid corner > Move To), move the whole grid, or add a second/larger grid
3. Increase the Radius Increment in Surface Options (e.g. to 20) to generate more circles per grid point
4. Re-run and confirm the low-FS contour region is now contained within the grid
5. As an independent check, create a scenario using the Auto Refine Search (no grid or focus objects required); it progressively refines the search along the slope surface and often finds an equal or lower minimum with fewer surfaces
6. Also consider the Slope Search method driven by Slope Limits

## Decision rules

- A Global Minimum centre on the grid edge means the true minimum may lie outside — always modify the grid and re-run
- Never conclude the true Global Minimum has been found from a single search; a stability analysis is only as good as the searching technique, so vary methods and parameters for both circular and non-circular surfaces

## Checks

- Grid contours of minimum FS should close within the grid, not run off its edge
- Exact FS values shift slightly with grid corner positions — small differences between re-runs are expected
- In the worked example Auto Refine found FS 0.693 vs 0.698 from the adjusted grid search

## Common errors

- Reporting a Global Minimum whose slip centre sits on the grid boundary
- Comparing FS between runs without noting that grid geometry changed

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
