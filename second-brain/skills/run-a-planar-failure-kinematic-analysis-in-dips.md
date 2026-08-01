---
title: Run a planar-failure kinematic analysis in Dips
type: skill
tags: [skill, slope-stability, youtube-source]
confidence: high
updated: 2026-08-01
---

# Run a planar-failure kinematic analysis in Dips

> **Source:** [YouTube — Planar Failure in Rock Mass — Kinematic Analysis using Discontinuity Planes](https://www.youtube.com/watch?v=JIbr6XgPANQ&t=0s) (00:01-07:15). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A screening verdict on whether a jointed rock cut is at risk of planar sliding, based on the percentage of discontinuity poles that both daylight and exceed the friction angle

## Inputs

- Pole plot of discontinuity dip / dip direction data from site investigation (about 300 poles in the example)
- Slope face dip and dip direction (45 / 135 in the example road cut)
- Friction angle on the discontinuities (35 degrees in the example)

## Procedure

1. Load the discontinuity data and confirm the orientation format is dip / dip direction
2. Add the slope face as a plane and generate its daylight envelope; only poles inside the envelope represent planes that daylight (come out at the slope face) and can slide
3. Add a friction cone drawn from the centre of the net (cone at trend 0, plunge 90) with the cone angle equal to the friction angle; poles outside this cone represent planes dipping more steeply than the friction angle
4. The critical region is the overlap: poles inside the daylight envelope and outside the friction cone
5. Count the critical poles and express them as a percentage of the total pole count
6. Shortcut: Analysis > Kinematic Analysis > Planar Sliding (no limits), enter slope dip, dip direction and friction angle; the software shades the critical zone and reports the count and percentage automatically

## Decision rules

- Both conditions must hold for planar failure: the plane daylights, and its dip exceeds the friction angle
- If the critical percentage is below about 6 percent, planar failure is not considered a significant risk for the rock mass; in the example 1 pole out of 303 (under 1 percent) meant no planar failure concern
- Steeply dipping discontinuities that do not daylight are not planar-failure candidates but may still pose a toppling risk

## Checks

- Verify the manual envelope-plus-cone construction against the software's built-in kinematic analysis result
- Check the input dialog echoes the intended slope dip, dip direction and friction angle before accepting results

## Common errors

- Counting all steep poles as critical without applying the daylight condition
- Entering trend/plunge data when the project is set to dip / dip direction, or vice versa

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The ~6 percent screening threshold is presented as a rule of thumb in the lecture; confirm the criterion adopted for your project
- Kinematic analysis screens geometry only — it says nothing about factor of safety, water pressure or block size

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
