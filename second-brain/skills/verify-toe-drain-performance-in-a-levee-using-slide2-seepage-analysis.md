---
title: Verify toe drain performance in a levee using Slide2 seepage analysis
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Verify toe drain performance in a levee using Slide2 seepage analysis

> **Source:** `Tutorial_15_Levee_with_Toe_Drain.pdf` (Pages 15-2 to 15-6 (BCs, interpretation, modelling comments)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Demonstration that a horizontal toe drain keeps the phreatic surface from daylighting on the downstream face, with a flownet, using the correct drain boundary condition

## Inputs

- Levee section with drain zone geometry and hydraulic properties (foundation may be treated as impermeable)
- Upstream ponded water depth (e.g. 18 m) for the total head boundary

## Procedure

1. With Groundwater Method = Steady State FEA and the model meshed (6-noded elements in the tutorial), set Total Head = pond level on the upstream submerged segments
2. Apply a Zero Pressure boundary condition along the top of the toe drain to represent the drained (atmospheric) condition
3. Compute groundwater only and open Interpret
4. Check the phreatic surface (pink line): success means it stays inside the levee and exits at the drain, not on the downstream face
5. Build a flownet: contour Total Head with filled-with-lines contours, then add multiple flow lines from the upstream face

## Decision rules

- The zero-pressure BC acts as a sink and is what actually enforces the drainage — not the drain material's high permeability; without the BC, flow does pass through the drain material and results may be similar for some models, but in general apply the zero-pressure BC to guarantee drainage at the intended location
- If only groundwater results are needed and the base is impermeable, the levee alone can be modelled; keep the base material when a slope stability analysis must also consider surfaces passing through it
- Drain configurations (horizontal, inclined, plus low-permeability cores around 1e-11 m/s) can be compared by re-running variants

## Checks

- Discharge velocity contours may legitimately show no flow inside the drain when the zero-pressure BC is present — do not misread this as an error
- Confirm the phreatic surface does not intersect the downstream slope for the design pond level

## Common errors

- Relying on high drain permeability alone to create the drainage condition
- Removing the base from a combined seepage-plus-stability model and losing deep slip surfaces

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
