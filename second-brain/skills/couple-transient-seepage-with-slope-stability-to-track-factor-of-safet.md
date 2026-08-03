---
title: Couple transient seepage with slope stability to track factor of safety through drawdown in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Couple transient seepage with slope stability to track factor of safety through drawdown in Slide2

> **Source:** `Tutorial_19_Transient_+_Slope_Stability.pdf` (Pages 19-2 to 19-7 (BC setup, transient function, SF vs time)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Factor of safety versus time for a dam under gradual reservoir drawdown, revealing the minimum-FS moment that a steady-state analysis would miss

## Inputs

- Dam model with Steady State FEA as the initial-state groundwater method
- A drawdown schedule (total head vs time)
- Hydraulic properties including Ks per material (e.g. dam 1e-5 m/s, foundation 1e-8 m/s) and water content model

## Procedure

1. In Project Settings confirm failure direction matches the analysed face, Groundwater Method = Steady State FEA (initial state), and tick Calculate SF for every transient stage
2. Restrict the slip surface search to major crest-to-toe failures using Slope Limits if shallow surfaces are not of interest
3. In the Steady State Groundwater tab apply the initial Total Head BC (20 m) to the submerged boundary segments, unticking 'Apply to steady state AND transient analysis' so the transient stage can override it
4. In the Transient Groundwater tab create a transient BC function (Set Transient Boundary Conditions > New, Type = Total Head with Time) describing the drawdown schedule and apply it to the same segments
5. Set hydraulic properties (Simple model relates permeability and water content to suction) and Compute from the Slope Stability tab so groundwater and stability both run
6. In Interpret enable the 'Slope Stability and Groundwater' display, step through stages, and plot Data > Graph SF with Time for chosen methods (e.g. Bishop and Janbu)

## Decision rules

- The FS minimum occurs when the stabilising water weight is gone but excess pore pressures have not yet dissipated (FS about 1.5 at day 6 in the example, recovering by day 50) — design must consider this transient minimum, not just initial and final steady states
- Geometry can only be edited in Slope Stability mode; groundwater meshing/BCs belong to the groundwater tabs

## Checks

- Verify the final stage approaches steady state by adding a later stage and confirming FS stabilises
- Overlay all stage water tables (Display Options > FEA water > All Stages) to confirm the drawdown progressed as intended

## Common errors

- Leaving the initial BC applied to both steady state and transient, blocking the drawdown function
- Forgetting to tick Calculate SF per stage, producing groundwater results with no stability output
- Judging dam safety from the steady-state FS alone

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
