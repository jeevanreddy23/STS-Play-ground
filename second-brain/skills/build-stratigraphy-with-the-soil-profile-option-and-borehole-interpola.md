---
title: Build stratigraphy with the Soil Profile option and borehole interpolation in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Build stratigraphy with the Soil Profile option and borehole interpolation in Slide2

> **Source:** `Tutorial_25_Soil_Profile_Modeling.pdf` (Pages 25-2 to 25-16 (workflow, borehole editor, multi-scenario hierarchy)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A master geological profile (drawn or interpolated from boreholes) over which multiple slope excavation geometries can be superimposed and analysed without redrawing the stratigraphy

## Inputs

- Layer boundary geometry, or vertical borehole logs with layer thicknesses/elevations
- Profile extents (left, right, top, bottom)
- External boundary geometry for each excavation/slope case

## Procedure

1. Enable Use Soil Profile in Project Settings; a Profile workflow tab appears and profile editing only works in Profile mode
2. Enter Profile Extents in the sidebar (dotted rectangle)
3. Define profile boundaries either explicitly (Boundaries > Add Soil Profile Boundary, entering coordinate pairs) or from boreholes (Profile > Borehole Editor: boreholes are vertical; layers by thickness or elevation; interpolation Linear by default or Thin Plate Spline for smooth boundaries)
4. Assign materials to the regions between profile boundaries by right-click Assign, and mark ground-surface regions with Assign Materials > Excavate
5. Switch to the Geometry tab (profile shows semi-transparent) and add the External Boundary either as a polyline or as a rectangular clipping window; the profile is cropped by the external boundary; keep the external boundary within the profile extents
6. Run the surface search (Auto Refine in the example) and compute; to study alternative cuts, duplicate the Group and edit the external boundary (e.g. Move To a new toe vertex) — the shared soil profile stays fixed

## Decision rules

- Use the Soil Profile for complex layering with multiple excavation scenarios (e.g. staged pit cutbacks); for simple fixed geometry it is easier to model directly in Geometry mode
- With Multi Scenario, the hierarchy is: profile constant for all groups; external boundary constant per group; everything else per scenario
- Interpolated (borehole) profile boundaries cannot be edited directly — change interpolation settings or add explicit boundaries on top
- Turn off Interpolate Top Surface to stop the ground surface being auto-interpolated through borehole collars, then draw it explicitly

## Checks

- Verify material regions after cropping by the external boundary look geologically sensible
- Profile boundaries and Geometry-mode material boundaries are independent entities — know which mode you are in before editing
- In the worked example steepening the cut from 31 to 45 degrees dropped FS from 1.287 to 0.904 with an unchanged profile

## Common errors

- Trying to edit the profile while in Geometry mode
- Making the external boundary larger than the profile extents
- Attempting to drag borehole-interpolated boundaries

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Borehole log conventions]]
- [[Skills]]
