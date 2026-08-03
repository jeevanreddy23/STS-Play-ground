---
title: Run a transient finite element groundwater analysis in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a transient finite element groundwater analysis in Slide2

> **Source:** `Tutorial_18_Transient_Groundwater.pdf` (Pages 18-2 to 18-8 (settings, stages, hydraulic functions, queries)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Time-staged pore pressure and water table evolution through an earth structure after a boundary condition change (e.g. rapid reservoir filling), with point queries of pressure vs time

## Inputs

- Model geometry with an initial groundwater state (water table, pressure grid, or steady-state FEA result)
- Observation times for each stage (e.g. 10, 100, 1000, 10000 hours)
- Hydraulic functions: permeability vs suction and volumetric water content vs suction for each material

## Procedure

1. In Project Settings set stress/time/permeability units, then on the Groundwater page tick Advanced and choose Transient Groundwater; the Method setting defines how the initial state is obtained (water surfaces here)
2. On the Transient page set the Number of Stages and the time of each; leave Calculate SF unticked for groundwater-only runs
3. In the Transient Groundwater tab, Discretize and Mesh, then set boundary conditions: Total Head for the new water level (10 m on the upstream face) and Zero Pressure on the toe drain
4. Define hydraulic properties including the water content curve: e.g. a custom function holding K = 1e-7 m/s up to 15 kPa suction then decreasing, and volumetric water content 0.4 at zero suction (porosity if saturated) decreasing with suction
5. Compute, then step through stage tabs in Interpret to watch pressure head and the pink water table advance; Display Options > Groundwater > FEA water > All Stages overlays every stage's water table
6. Add a material query point (Groundwater > Query > Add Material Query) and Graph Data vs Time, switching the horizontal axis to logarithmic for readability

## Decision rules

- A transient analysis matters when boundary conditions change and permeability is low, so steady state is reached slowly; transient pore pressures can control slope stability
- Volumetric water content = porosity times degree of saturation; its suction curve controls storage during the transient

## Checks

- Confirm the last stage approximates steady state either by adding a later stage and checking for no change, or by running a separate steady-state analysis and comparing
- Early stages should show pressure rise only near the changed boundary (the front had not reached mid-dam until about 100 hours in the example)

## Common errors

- Omitting the water content curve (required for transient, unlike steady state)
- Reading an intermediate stage as the final condition

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
