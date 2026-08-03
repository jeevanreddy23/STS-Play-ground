---
title: Analyse rapid drawdown of a reservoir with the B-bar (effective stress) method in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Analyse rapid drawdown of a reservoir with the B-bar (effective stress) method in Slide2

> **Source:** `Tutorial_13_Rapid_Drawdown.pdf` (Pages 13-2 to 13-7 (full reservoir, full drawdown, partial drawdown)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Factor of safety of a dam after full or partial rapid drawdown, accounting for negative excess pore pressure from unloading in undrained zones and drainage in free-draining zones

## Inputs

- Dam cross-section with initial (full reservoir) water table
- B-bar values for low-permeability materials (clay core, transition, foundation)
- For partial drawdown: coordinates of the drawdown water line

## Procedure

1. Analyse the full-reservoir steady state first as a baseline (FS 1.99 in the worked example)
2. In Project Settings > Groundwater tick Advanced and set Rapid Drawdown Method = Effective Stress using B-bar; the water table becomes labelled 'initial' and ponded water is removed for the FS stage
3. In Define Materials tick Undrained Behaviour with B-bar = 1 for the clay core, transition and foundation; leave free-draining granular fill unticked (its final pore pressure is zero at full drawdown)
4. Compute the full-drawdown case; the pore pressure change equals B-bar times the vertical stress change from removing the ponded water
5. For partial drawdown, add a Drawdown Line (Boundaries > Add Drawdown Line, coordinates can be pasted into the coordinate table); ponded water remains where the drawdown level is above the slope and unloading is the difference in ponded water weight between initial and drawdown tables; drained materials take their pore pressure from the drawdown table
6. Query the critical surface and plot final vs initial pore pressure and excess pore pressure to confirm the negative excess pressures

## Decision rules

- In free-draining material the plotted 'negative excess pore pressure' is simply the initial-minus-final difference from the lowered water table, not a B-bar effect
- Partial drawdown can be more critical than full drawdown (1.25 vs 1.44 in the worked example) because a residual water table keeps pore pressure in the toe fill while support from ponded water is lost — check intermediate drawdown levels for the minimum FS
- For total-stress multi-stage drawdown alternatives (Duncan-Wright-Wong, Lowe-Karafiath, Army Corps) use the multi-stage method instead

## Checks

- FS after drawdown must be below the full-reservoir FS; if not, boundary conditions or B-bar flags are wrong
- Final pore pressure should be below initial along most of the critical surface after drawdown

## Common errors

- Assigning undrained behaviour to the free-draining shell, suppressing the drainage that governs its response
- Checking only the full-drawdown state and missing a lower FS at an intermediate level

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
