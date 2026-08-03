---
title: Run a non-circular Block Search along a weak layer in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a non-circular Block Search along a weak layer in Slide2

> **Source:** `Tutorial_03_Non-Circular_Surfaces.pdf` (Pages 3-3 to 3-12 (Block Search setup, projection angles, Optimize Surfaces, random number options)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Location of the critical non-circular (piece-wise linear) slip surface following a weak layer, typically with a lower factor of safety than any circular search finds

## Inputs

- A slope model containing a linear or irregular weak layer
- Coordinates for a Block Search polyline placed inside the weak layer
- Optional ranges for left and right projection angles

## Procedure

1. In Surfaces > Surface Options set Surface Type = Non-Circular and Search Method = Block Search
2. Add a Block Search Polyline (Surfaces > Block Search > Add Polyline) along the weak layer; keep the default 'Any Line Segment' point-generation option to maximise coverage
3. Compute; each generated surface follows the polyline between two randomly generated points and projects to the ground surface at the projection angles
4. Refine by entering projection angle ranges in Surface Options (e.g. Left 125-155 degrees, Right 25-55 degrees, measured counter-clockwise from the positive X axis) and re-run — this typically lowers the critical FS further
5. Enable the Optimize Surfaces checkbox in Surface Options and re-run: optimisation inserts vertices and can find a significantly lower Global Minimum (0.797 circular -> 0.762 block -> 0.705 with angles -> 0.67 optimized in the worked example)
6. Use Data > All Surfaces and Data > Filter Surfaces (e.g. FS below 1) to review the population of unstable surfaces

## Decision rules

- Prefer the Polyline object for weak layers: it forces the surface to follow the polyline between two generated points, while Window/Line/Point objects only guarantee a single vertex each
- A polyline may be a single segment; two points are still generated on it
- Keep Project Settings > Random Numbers = Pseudo-Random for reproducible search results; switch to Random only to test sensitivity of the search to sampling (results then differ each run)

## Checks

- Compare the block-search Global Minimum against the circular-search result on the same model; for weak-layer geometries the non-circular FS should be lower
- Confirm the optimized surface tracks the bottom of the weak layer with extra inserted vertices
- The axis points shown above the slope are best-fit circle centres used for moment equilibrium of each non-circular surface — they are outputs, not search objects

## Common errors

- Trying to trace an irregular weak layer with multiple co-linear Block Search Lines instead of a single polyline
- Overlapping other search objects with a polyline object (not permitted)
- Accepting the first block-search result without testing projection angle ranges or surface optimisation

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
