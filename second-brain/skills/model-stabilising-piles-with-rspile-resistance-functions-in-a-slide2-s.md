---
title: Model stabilising piles with RSPile resistance functions in a Slide2 slope analysis
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Model stabilising piles with RSPile resistance functions in a Slide2 slope analysis

> **Source:** `Tutorial_30_Analyzing_Pile_Resistance_for_Slope_Stabilization_using_RSPile.pdf` (Pages 30-2 to 30-18 (theory, RSPile setup, import, verification)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Slope stability with pile resistance computed from p-y (lateral) and t-z/q-z (axial) load transfer curves: resistance functions built in RSPile, imported into Slide2, and verified against a stand-alone RSPile run

## Inputs

- Slope model with pile support elements placed (weak-layer, non-circular search in the tutorial)
- Soil load-transfer data per layer: p-y curves, t-z curves, q-z end-bearing curves (or built-in curve models)
- Pile section/material properties and length
- Maximum allowable soil displacement (default 25 mm) or choice of Ultimate mode

## Procedure

1. Understand the mechanism: soil displacement tangent to the slip surface is applied to the pile from ground to the slip depth; its axial and lateral components produce internal axial force and shear at the sliding depth, and their resultant is the resistance force applied at the pile/surface intersection opposing sliding; resistance is tabulated over many sliding depths and angles and linearly interpolated
2. In Slide2 open Properties > Define Support, choose the RSPile support type, and launch the RSPile utility
3. In RSPile set Project Settings to Axially/Laterally Loaded and matching units; define soil materials (layer thicknesses and unit weights are re-initialised from the Slide2 profile at each pile, so one RSPile file serves multiple piles; unit weight is total unit weight, with effective weight auto-computed below the water table); for user-defined materials enter the p-y curve and t-z curve point by point (q-z omitted where end bearing is neglected)
4. Set up the borehole layering, define pile properties, add a single pile of the required length, save the .rspile2 file
5. Back in Slide2's Define Support Properties choose the RSPile file, match Slide materials to RSPile materials, set Resistance Type (Axial, Lateral, or Axial and Lateral) and Soil Displacement mode (Maximum 25 mm default, or Ultimate which ramps displacement until peak resistance)
6. Compute; in Interpret use Show Slices to see the blue resistance arrows at each pile/surface intersection (532.5 and 544 kN in the example)
7. To verify: in RSPile apply a displacement profile reproducing the Slide2 loading (components split by the slip surface angle, e.g. 25 mm at 1.4 degrees gives 24.99 mm lateral, 0.61 mm axial), graph Beam Shear Force and Axial Force, take the resultant at the sliding depth and interpolate (535 kN vs Slide2's 544 kN — within 2%)

## Decision rules

- The resistance direction always opposes sliding but is not necessarily tangent to the slip surface; each surface gets its own resistance depending on intersection depth and angle
- Maximum mode caps displacement at a serviceability tolerance; Ultimate mode gives peak capacity — choose to match design intent
- Complex depth-varying displacement profiles are only available in stand-alone RSPile, not through the Slide2 import

## Checks

- Verify at least one pile's resistance against a stand-alone RSPile run with the matching displacement profile; a few percent discrepancy from double linear interpolation is normal
- Confirm the Slide/RSPile material matching dialog paired the correct layers

## Common errors

- Mismatching units between Slide2 and RSPile
- Expecting Slide2 to honour a custom displacement profile defined in RSPile
- Ignoring which resistance components (axial/lateral) are enabled when comparing runs

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
