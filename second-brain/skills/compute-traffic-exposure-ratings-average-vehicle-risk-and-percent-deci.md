---
title: Compute traffic exposure ratings (average vehicle risk and percent decision sight distance) for rockfall rating
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: medium
updated: 2026-08-01
---

# Compute traffic exposure ratings (average vehicle risk and percent decision sight distance) for rockfall rating

> **Source:** [YouTube — How to Perform Rockfall Hazard Assessment — Step by Step](https://www.youtube.com/watch?v=1i5D-RdYsR0&t=923s) (15:23-21:36). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Two traffic-related inputs to the rockfall hazard rating: the average vehicle risk along the affected road length and the ratio of actual to decision sight distance

## Inputs

- Traffic volume (cars per hour, or cars per day divided by 24)
- Length of road section affected by rockfall, in kilometres
- Posted speed limit
- Actual sight distance measured on site (distance from which a driver first sees a small object on the road, accounting for road curvature)
- Decision sight distance table indexed by posted speed limit

## Procedure

1. Compute average vehicle risk as traffic volume per hour multiplied by affected road length in kilometres, divided by the posted speed limit, expressed as a percentage
2. If traffic is supplied in cars per day, convert to cars per hour before applying the formula
3. Look up the decision sight distance for the posted speed limit, interpolating between tabulated speeds where needed
4. Measure the actual sight distance by driving the section and noting the distance at which a small rock-sized object first becomes visible; curves reduce it
5. Compute percent decision sight distance as actual sight distance divided by decision sight distance, times 100
6. Convert both percentages to rating points from the table, interpolating between tabulated percentages where time allows

## Decision rules

- If computed average vehicle risk exceeds 100 percent, cap it at 100 percent (maximum points) for the rating
- Lower percent decision sight distance is worse; if close to a tabulated boundary and no time to interpolate, adopt the worse (higher-point) category
- Always use the posted speed limit, not observed traffic speed

## Checks

- Confirm the road length was converted to kilometres before use
- Confirm units of traffic volume (per hour vs per day) match the formula form being used

## Common errors

- Mixing cars-per-day with a cars-per-hour formula
- Using actual driving speeds instead of the posted limit
- Measuring sight distance on the straight-line assumption when the road is curved

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Formulas and the decision-sight-distance table are shown on screen — read from the video; auto-captions garble the symbols
- Worked example values: 120 cars/hr, 0.6 km, 60 km/h limit gave 120 percent AVR (capped at 100); 72 m actual over 171 m decision distance gave about 42 percent

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
