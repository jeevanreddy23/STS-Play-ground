---
title: Run a slope stability analysis with a pore water pressure grid in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a slope stability analysis with a pore water pressure grid in Slide2

> **Source:** `Tutorial_05_Water_Pressure_Grid.pdf` (Slide 2018 Tutorial Manual, Tutorial 5 (whole tutorial)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A factor of safety for a slope whose pore pressures are interpolated from a discrete grid of total head (or pressure head / pore pressure) values, with ponded water modelled by a water table.

## Inputs

- Grid of X, Y, value points (total head, pressure head or pore pressure) from a flownet, field measurements or numerical seepage analysis — importable as .pwp or .dxf
- Slope geometry and material properties
- Water table polyline where ponded water exists above the slope

## Procedure

1. Set Project Settings > Groundwater > Groundwater Method to the appropriate Grid option (Total Head here); the default interpolation is Modified Chugh.
2. Add the external boundary, then add the water pressure grid (Boundaries > Water Pressure Grid), importing the .pwp file rather than typing points.
3. Display grid values or use the Property Viewer to preview the interpolated pore pressure field and sanity-check the import.
4. Add a Water Table above the external boundary to create ponded water — a pressure grid CANNOT create ponded water; it only supplies internal pore pressures, not the weight and hydrostatic forces of standing water.
5. Define material properties and ensure the Grid toggle is ON in the material's water parameters (OFF forces zero pore pressure for that material).
6. Compute and Interpret; compare Global Minimum surfaces across methods (they can differ), and use Add Query / Graph Query to plot pore pressure along the critical slip surface (values are interpolated at each slice base midpoint).

## Decision rules

- Points above the water table are assigned zero pore pressure even if grid interpolation says otherwise — useful protection when the grid is sparse.
- Choose grid type (total head vs pressure head vs pore pressure) in Project Settings to match the data source.
- Use a seepage analysis instead (Tutorial 07 workflow) when no measured grid or flownet exists.

## Checks

- Grid covers the zone slip surfaces will sample; sparse coverage produces interpolation artefacts.
- Ponded water hatch appears where expected after adding the water table.
- Queried pore pressure profile along the critical surface looks physically reasonable.

## Common errors

- Expecting the pressure grid to model ponded water loads — it does not; omit the water table and the pond's weight/hydrostatic force is lost.
- Leaving the material's grid toggle OFF, silently zeroing pore pressures.
- Assuming the Bishop and Janbu global minima are the same surface when graphing comparisons.

## Caveats

- Sample of a 31-tutorial local Slide2 series; version-specific menus (Slide 2018).

## Standards cited

Rocscience Slide2 Help (interpolation methods)

## Related

- [[Groundwater observations]]
- [[Skills]]
