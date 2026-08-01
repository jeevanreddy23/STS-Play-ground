---
title: Run a flexural-toppling kinematic analysis in Dips
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Run a flexural-toppling kinematic analysis in Dips

> **Source:** [YouTube — Kinematic Analysis of Toppling in Rock Mass](https://www.youtube.com/watch?v=swYSosPn4Mk&t=0s) (00:00-10:35). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A screening verdict on toppling risk for a rock cut, from the percentage of poles falling in the critical zone defined by the slip limit and lateral limits

## Inputs

- Pole plot of discontinuity data from site investigation (about 300 poles in the example)
- Slope face dip and dip direction (45 / 135 in the example)
- Friction angle of the dominant joints (35 degrees in the example)
- Lateral limits about the slope dip direction (plus/minus 30 degrees, attributed by the lecturer to Goodman)

## Procedure

1. Load the data and confirm dip / dip direction format (not trend/plunge)
2. Add a plane for the slope face using its dip and dip direction
3. Add the slip limit plane: same dip direction as the slope, with dip equal to slope dip minus friction angle (45 - 35 = 10 in the example); poles beyond this limit represent steeply inclined planes that can contribute to toppling
4. Add a cone defining the lateral limits: the cone trend is derived from the slope dip direction rotated 90 degrees, plunge 0, with an included angle covering plus/minus 30 degrees about the slope dip direction — exact cone entries shown on screen, read from the video
5. The critical zone is where steep poles fall within the lateral limits opposite the slope face; count poles in the zone and divide by the total to get a percentage
6. Shortcut: Analysis > Kinematic Analysis > Toppling, enter slope dip, dip direction, friction angle and lateral limits; the software shades the critical flexural toppling zone and reports count, total and percentage

## Decision rules

- A critical-pole percentage above about 6 percent raises a red flag and warrants a more thorough toppling investigation (the example returned 20 of 303 poles = 6.6 percent, flagged as a concern)
- Toppling candidates are discontinuities dipping steeply into the slope, roughly parallel to the slope face within the lateral limits

## Checks

- Cross-check the manual plane-and-cone construction against the built-in kinematic analysis output
- Verify the friction angle entered matches the investigation value (the lecturer initially mistyped 30 for 35)

## Common errors

- Computing the slip limit with the wrong sign (it is slope dip minus friction angle)
- Leaving the project in trend/plunge format while entering dip / dip direction values
- Manually counting poles when the software reports the percentage directly

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The cone trend arithmetic in the auto-captions is garbled (135 plus 90 stated as 125) — equation shown on screen, read from the video
- The plus/minus 30 degree lateral limit and ~6 percent threshold are lecture rules of thumb; confirm against your project's adopted criteria

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
