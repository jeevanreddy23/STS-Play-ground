---
title: Simulate rockfall trajectories and bench effectiveness in RocFall
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Simulate rockfall trajectories and bench effectiveness in RocFall

> **Source:** [YouTube — Rockfall Analysis using RocFall — Barriers and Ditch Analysis](https://www.youtube.com/watch?v=1H6aQIb9TBM&t=0s) (00:00-10:53). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A statistical picture of where falling rocks end up on a benched rock slope, used to judge whether a bench catches rocks or lets them reach the toe

## Inputs

- Slope geometry coordinates from site investigation (or drawn manually with length/angle feedback)
- Slope material with normal restitution coefficient (from the built-in material library or custom, e.g. a custom sandstone)
- Rock properties: density (reference values by geology, e.g. basalt around 2700 kg/m3) or measured/estimated mass, or a shape assumption (e.g. sphere of given radius)
- Seeder location and initial horizontal velocity of the falling rocks

## Procedure

1. Set view limits to match the coordinate extent of the slope being analysed
2. Draw the slope profile (including any bench) using Slope > Add Slope, finishing with a right-click
3. Assign a slope material via the material library; add a custom material if your investigation data differ from the presets, and set the normal restitution coefficient
4. Add a statistical distribution (typically normal) with a standard deviation to the restitution coefficient so all simulated rocks are not identical; the same can be done for friction angle and tangential restitution
5. Assign the material to the entire slope, or assign different materials to different slope segments
6. Place a seeder at the most dangerous location — rocks sitting right at the crest edge — and set the number of rocks (e.g. 50) rather than a single rock
7. Give the seeder an initial horizontal velocity with a normal distribution and standard deviation; rotational velocity can also be varied
8. Define the rock type: set density from the geology reference or enter a measured mass, again with a distribution
9. Run the analysis and open Graphs > End Points to see the distribution of final resting positions
10. Use the animation of individual rock paths to understand bounce behaviour for specific rocks

## Decision rules

- If most rocks stop on the bench, the bench is effective; rocks that bounce over the bench and run to the toe drive the need for further protection
- Rocks that come to rest close to the bench edge should be treated as a future hazard — rain or wind can move them over the edge later
- The higher the normal restitution coefficient, the more the rocks bounce

## Checks

- Always simulate a population of rocks with distributed parameters, not a single deterministic rock
- Compare simulated behaviour with observed fallen-rock positions on site where available

## Common errors

- Using a single rock with fixed properties, which hides the spread of outcomes
- Forgetting to assign the material to the slope after defining it in the library

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Specific coefficient and distribution values in the demo are illustrative, not recommendations; use site-specific data where possible

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
