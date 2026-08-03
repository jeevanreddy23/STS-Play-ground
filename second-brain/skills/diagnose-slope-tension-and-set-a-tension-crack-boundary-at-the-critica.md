---
title: Diagnose slope tension and set a tension crack boundary at the critical depth in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Diagnose slope tension and set a tension crack boundary at the critical depth in Slide2

> **Source:** `Tutorial_16_Tension_Crack.pdf` (Pages 16-2 to 16-12 (diagnosis, crack boundary, sensitivity, RS2 comparison)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A model free of unrealistic soil tension: tension detected via the line of thrust and interslice forces, tension crack depth estimated three independent ways, and the FS-minimising depth found by sensitivity analysis

## Inputs

- Slope model with cohesive upper materials
- Spencer and/or GLE methods enabled (required for the thrust line)
- Material c, phi and unit weight for the analytical crack depth estimate

## Procedure

1. Enable GLE/Morgenstern-Price and Spencer in Project Settings > Methods, compute, and in Interpret select Spencer and choose Query > Show Line of Thrust
2. Diagnose tension: the thrust line passing outside the sliding mass near the crest indicates tension; confirm with Query Slice Data (negative interslice forces) and a Graph Query of Interslice Normal Force
3. Estimate crack depth three ways: (a) depth of the slice where interslice forces change sign (about 4.5 m in the example); (b) analytical zc = (2c/gamma) tan(45 + phi/2) (4.3 m); (c) sensitivity analysis for the FS minimum (5.4 m)
4. Add the boundary with Boundaries > Add Tension Crack as a horizontal line at the chosen elevation intersecting the slope face; slip surfaces reaching it terminate in a vertical crack to the surface
5. Set crack water via right-click > Tension Crack Properties: Filled is the worst case (lowest FS); Use Water Table matches the crack saturation to the model water table for consistent comparisons; Dry gives no crack water force
6. For the sensitivity search: enable Sensitivity Analysis in Project Settings, tighten Methods tolerance to 0.001, draw Min and Max tension crack boundaries with identical horizontal extents (Statistics > Tension Crack > Draw Min/Max), and read the FS-minimising normalized location from the Sensitivity Plot with the Sampler

## Decision rules

- Introduce a tension crack zone whenever tensile interslice forces are exhibited — it yields a more accurate surface and avoids numerical instability; it becomes essential when tensile zones are extensive
- The thrust line option exists only for Spencer and GLE, not Bishop or Janbu
- A filled crack governs for design conservatism; match the water table only when comparing against a no-crack model

## Checks

- After adding the crack, the thrust line must lie fully inside the sliding mass and the interslice normal force plot must show no negatives
- A non-zero interslice normal force on the last slice is expected when the crack holds water (hydrostatic force); it should be zero for a dry crack
- Cross-check with an RS2 shear strength reduction import: the tensile-failure zone depth (6-9 m) and critical SRF (about 0.79) bracketed the limit equilibrium answers

## Common errors

- Drawing max and min sensitivity boundaries with different horizontal extents
- Leaving the crack Filled when comparing to a no-crack baseline, conflating water force effects with tension removal
- Expecting the analytical formula depth to coincide with the FS-minimising depth (they differed by about 1 m in the example)

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
