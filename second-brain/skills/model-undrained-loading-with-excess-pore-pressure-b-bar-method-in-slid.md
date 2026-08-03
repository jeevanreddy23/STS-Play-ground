---
title: Model undrained loading with excess pore pressure (B-bar method) in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Model undrained loading with excess pore pressure (B-bar method) in Slide2

> **Source:** `Tutorial_12_Excess_Pore_Pressure.pdf` (Pages 12-2 to 12-10 (all four steps and exercises)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Short-term stability of an embankment on low-permeability foundation, where rapidly applied fill weight and loads generate excess pore pressure (delta-u = B-bar times delta-sigma-v) that lowers the factor of safety

## Inputs

- Embankment-on-clay geometry with an initial pore pressure definition (water table, Ru, grid or FEA)
- B-bar coefficients for each undrained (low permeability) material
- Identification of which materials and loads 'create' excess pore pressure

## Procedure

1. First run the long-term (steady state) case with no excess pore pressure as a baseline
2. In Project Settings > Groundwater tick Advanced and select the Excess Pore Pressure option
3. In Define Materials tick 'Material weight creates excess pore pressure' for the fill; assign B-bar (e.g. 1.0) to the clay layers that respond undrained
4. Compute: final pore pressure = initial pore pressure + B-bar times the change in vertical stress; FS is computed only at this final state
5. To add a rapidly applied surface load, define a vertical distributed load with 'Load creates excess pore pressure' ticked (only the vertical component generates excess pressure)
6. Verify behaviour by querying the critical surface and plotting Pore Pressure vs Initial Pore Pressure and vs Excess Pore Pressure
7. To give the fill itself an initial pore pressure, copy the fill material, assign e.g. Ru = 0.4, and re-assign the embankment region

## Decision rules

- Excess pore pressure is generated only in materials with B-bar > 0 lying beneath the triggering weight/load; a material with B-bar = 0 develops none within itself even if its own weight loads others
- Vertical seismic coefficient and line loads (vertical component) can also be flagged to create excess pore pressure
- Expect the critical surface to migrate into the underlying clay once undrained loading is on (FS dropped 2.30 -> 1.77 -> 1.47 -> 1.33 through the worked stages)

## Checks

- On the excess pore pressure plot, the portion of the surface inside the fill should read zero excess pressure when the fill's B-bar is 0
- Final pore pressure should exceed initial wherever excess pressure is generated; magnitudes can exceed the initial pressures under high fills

## Common errors

- Forgetting to enable the Advanced > Excess Pore Pressure project setting, so B-bar entries do nothing
- Assigning B-bar to the free-draining fill and wondering why pore pressures appear inside it
- Confusing this short-term staged calculation with a true time-dependent consolidation analysis

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
