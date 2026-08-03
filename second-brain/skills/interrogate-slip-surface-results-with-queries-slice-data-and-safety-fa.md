---
title: Interrogate slip surface results with queries, slice data and safety factor mapping in Slide2 Interpret
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Interrogate slip surface results with queries, slice data and safety factor mapping in Slide2 Interpret

> **Source:** `Tutorial_02_Materials_and_Loading.pdf` (Pages 2-10 to 2-19 (Query, Show Slices, Show Values, Graph SF along Slope, Maximum output exercise)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Detailed understanding of how a critical slip surface behaves — base stresses, pore pressures, interslice forces per slice, and which parts of the slope face are associated with low safety factors

## Inputs

- A computed Slide2 model with results open in Interpret

## Procedure

1. Right-click the Global Minimum surface and select Add Query (the surface turns black to show a query exists)
2. Use Query > Graph Query to plot slice data (e.g. Base Normal Stress, Base Cohesion, Pore Pressure) against distance, slice number or X coordinate
3. Use Query > Show Slices to display the actual slices (default 50, set in Project Settings)
4. Use Query > Query Slice Data to click individual slices and read the full force balance, with force arrows drawn on the slice
5. Use Query > Show Values Along Surface to draw bar plots of any slice quantity directly along the slip surface
6. Use Data > Graph SF along Slope to plot factor of safety against slope-face position from every surface intersection, tiling the graph beside the model to locate low-FS zones
7. Optionally refine the search by setting Slope Limits around the low-FS zones identified and re-running

## Decision rules

- With Data Output = Standard, queries are only available for the Global Minimum; set Data Output = Maximum in Project Settings if you need queries on the minimum surface at every grid point
- Some plotted quantities (e.g. Slice Weight) do not vary with analysis method while others (e.g. Base Normal Stress) do; 'No Data' appears if the selected method has a different minimum surface from the queried one

## Checks

- Base Cohesion and Base Friction Angle plots should step between the values of the materials each slice base sits in — a quick confirmation that material assignment along the surface is correct
- The SF-along-slope graph highlights slope regions likely to be involved in failure; use it to check the search covered them

## Common errors

- Running with Maximum data output routinely — compute time and output file size grow substantially
- Expecting query data for non-global-minimum surfaces without changing the Data Output setting

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
