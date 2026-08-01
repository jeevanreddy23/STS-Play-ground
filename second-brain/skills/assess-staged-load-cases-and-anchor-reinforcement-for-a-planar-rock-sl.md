---
title: Assess staged load cases and anchor reinforcement for a planar rock slope
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Assess staged load cases and anchor reinforcement for a planar rock slope

> **Source:** [YouTube — Planar Failure of Rock Slopes — Full Stability Analysis](https://www.youtube.com/watch?v=fYyTzq4rUPs&t=666s) (11:06-28:06). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A comparison of factor of safety across dry, water-filled, seismic and anchored cases that shows which conditions govern and what anchor force restores stability

## Inputs

- Baseline planar-failure factor of safety calculation (geometry, strength, weight, U and V formulas)
- Design seismic coefficient for the region (from local design standards; example uses 0.08 g)
- Trial anchor force and installation inclination

## Procedure

1. Case 1 — dry, static: evaluate the factor of safety with water, seismic and anchor terms zeroed (worked example result 1.54)
2. Case 2 — worst-case water: assume the tension crack 100 percent filled, compute U and V, and re-evaluate (example result 1.07)
3. Case 3 — water plus earthquake: add the seismic coefficient terms to both numerator and denominator (example result 0.92, i.e. unstable during shaking)
4. Case 4 — reinforced: add a tensioned anchor of chosen force and inclination; the anchor adds a resisting normal component through sin(anchor angle plus plane angle) times tan(friction) and subtracts a driving component through cos(anchor angle plus plane angle) (example: 400 kN at 55 degrees raised the factor of safety to 1.80)
5. Iterate anchor force and inclination against the target factor of safety and cost

## Decision rules

- Obtain the seismic coefficient from the design standard for the project region; near zero in aseismic areas, larger in seismically active countries
- Anchor inclination changes effectiveness — flatter or steeper installation angles raise or lower the factor of safety, so optimise angle as well as force
- Choose the anchor force as the smallest that meets the target factor of safety within budget

## Checks

- Confirm the factor of safety decreases monotonically as water then seismic load are added; if not, a term has the wrong sign
- Cross-check each case against software (RocPlane reproduced 1.54, 1.07, 0.92 and about 1.4 with a 400 kN bolt at 35 degree plunge)

## Common errors

- Using a seismic coefficient borrowed from another region instead of the local standard
- Adding the anchor force only to the numerator and forgetting its reduction of the driving forces
- Designing for the dry case when the seasonal worst case is a water-filled tension crack

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Pseudo-static seismic treatment only (horizontal coefficient); no dynamic analysis
- Equations shown on screen — read from the video; captions garble numbers in places

## Standards cited

None cited in the source passage.

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
