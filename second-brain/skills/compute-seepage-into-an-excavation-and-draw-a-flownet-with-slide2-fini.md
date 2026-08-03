---
title: Compute seepage into an excavation and draw a flownet with Slide2 finite element groundwater analysis
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Compute seepage into an excavation and draw a flownet with Slide2 finite element groundwater analysis

> **Source:** `Tutorial_14_Cofferdam_Seepage.pdf` (Pages 14-2 to 14-9 (model, BCs, discharge sections, flownet, pumping exercise)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Steady-state seepage quantity through defined discharge sections (e.g. flow entering a sheet-piled cofferdam) and a flownet of equipotentials and flow lines, benchmarked against a textbook solution

## Inputs

- Geometry (drawn or imported from DXF) including thin regions for sheet piles or cut-offs
- Saturated permeability Ks per material (anisotropy via K2/K1 and angle if needed)
- Water levels defining total head boundary conditions

## Procedure

1. In Project Settings set units (including time units) and Groundwater Method = Steady State FEA
2. Define materials, then switch to groundwater mode (Analysis > Steady State Groundwater Mode) and set hydraulic properties: e.g. soil Ks = 4e-7 m/s; sheet pile Ks = 1e-20 m/s to represent impermeability — never zero, which causes numerical instability
3. Assign the sheet-pile material to the thin pile regions
4. Mesh (Mesh > Mesh Setup; defaults of 3-noded triangles and 1500 elements suffice) using Discretize then Mesh
5. Set boundary conditions (Mesh > Set Boundary Conditions): Total Head equal to the ponded water level on submerged segments; Zero Pressure on surfaces at atmospheric pressure such as the excavation floor; defaults elsewhere are no-flow external boundaries and unknown at the surface
6. Add Discharge Sections (Discharge > Add Section) across the planes where flow quantity is wanted; the volumetric flow rate normal to each section is reported in Interpret
7. Run Compute (groundwater) only, then Interpret (groundwater): read pressure head contours, discharge values and flow vectors
8. For a flownet: contour Total Head with Contour Options mode = Filled (with lines) for equipotentials, then Groundwater > Lines > Add Multiple Flow Lines along an entry face (e.g. 10 evenly spaced starts)

## Decision rules

- Model impermeable inclusions with a very low but finite Ks (1e-20) rather than zero
- Use the unsaturated permeability Model = Simple unless a specific suction-permeability function is justified
- Pumping/dewatering inside the excavation can be simulated by replacing the zero-pressure floor BC with Total Head below floor level

## Checks

- Mass balance: total downward discharge from the ponded side should equal the upward discharge between the piles
- Benchmark: the worked example reproduces Craig (1997) problem 2.4 (2.01e-6 vs 2.0e-6 m3/s); exact values shift slightly with discharge line position
- Flow vectors should wrap around the pile toes with the highest velocities directly beneath them

## Common errors

- Setting cut-off permeability to zero and destabilising the solution
- Forgetting the zero-pressure condition on the exposed excavation floor
- Placing discharge sections where they clip boundaries, distorting the reported flow

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
