---
title: Build a multi-material slope model with a water table and distributed load in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Build a multi-material slope model with a water table and distributed load in Slide2

> **Source:** `Tutorial_02_Materials_and_Loading.pdf` (Pages 2-2 to 2-9 (model build) and 2-9 to 2-19 (interpretation)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A Slide2 model of a layered slope (including a weak layer) with pore pressure from a water table and a surface load, analysed with a circular grid search to find the critical slip circle

## Inputs

- External boundary coordinates of the slope
- Material boundary positions delineating each soil zone (e.g. a thin weak layer)
- Water table profile coordinates
- Unit weight, Mohr-Coulomb cohesion and friction angle for each material
- External load magnitude and extent (kPa over a boundary segment)

## Procedure

1. Set the Groundwater Method in Analysis > Project Settings (default Water Surfaces computes pore pressure from a water table or piezometric lines)
2. Add the External Boundary (Boundaries > Add External Boundary), placing vertices in advance where material boundaries and the water table will need to attach
3. Add Material Boundaries by snapping to pre-placed external boundary vertices (enable Snap on the status bar) to define the weak layer
4. Add the Water Table (Boundaries > Add Water Table) and in the Assign Water Table dialog tick every material whose pore pressure should come from it
5. Add a distributed load (Loading > Add Distributed Load), set magnitude, then enter its start and end points on the boundary
6. Set Surfaces > Surface Options to Grid Search and use Auto Grid (default 20 x 20 spacing) to place the slip-centre grid
7. Define materials (Properties > Define Materials) with unit weight, cohesion, phi, Water Surface = Water Table and the Hu coefficient
8. Assign the weak-layer material to its region with Properties > Assign Properties (the first-defined material is auto-assigned everywhere else)
9. Save, Compute, then open Interpret and read the Global Minimum surface and factor of safety for each analysis method

## Decision rules

- Hu = 1 means hydrostatic pore pressure below the water table; Hu = 0 means dry; intermediate Hu values approximate head loss from seepage (pressure head = Hu times vertical distance to the water table)
- The Global Minimum surface can differ between analysis methods (e.g. Bishop vs Janbu) — check each method from the toolbar drop-list rather than assuming one surface governs
- Use Data Output = Standard unless detailed slice data is needed for surfaces other than the Global Minimum; Maximum output slows computation and inflates file size

## Checks

- Confirm the water table spans every material zone that references it; where it is undefined, intersecting slip surfaces get no safety factor and are silently excluded
- Verify the weak layer region took the weak material colour after assignment
- A Global Minimum FS below 1 (0.797 in the worked example) indicates instability requiring support or redesign

## Common errors

- Drawing the water table over only part of the model, so slip surfaces at the toe are never analysed
- Forgetting to assign the weak-layer material, leaving the default (stronger) material everywhere
- Assuming the same critical surface applies to all limit equilibrium methods

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
