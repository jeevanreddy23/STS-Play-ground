---
title: Estimate joint shear strength with Barton's criterion for a tunnel or slope
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Estimate joint shear strength with Barton's criterion for a tunnel or slope

> **Source:** [YouTube — Barton's Equation for Rock Shear Strength: Practical Tunnel Example](https://www.youtube.com/watch?v=RroplBKUT8E&t=0s) (00:01-09:35). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** The shear strength of a jointed rock mass at a given depth, computed from joint roughness, joint wall strength, residual friction angle and normal stress

## Inputs

- Joint roughness coefficient JRC, measured on the joint surfaces (a range such as 16-18 is very rough; use the average)
- Joint wall compressive strength JCS, estimated with a Schmidt hammer correlation; often taken approximately equal to the intact rock UCS
- Residual friction angle, from a tilt test or assumed by rock geology (commonly about 25-30 degrees, sometimes slightly higher; 31 degrees in the worked granite example)
- Normal stress on the joint at the depth of interest, from unit weight times depth
- Rock density (to convert to unit weight) and depth of the block or tunnel

## Procedure

1. Convert density to unit weight by multiplying by gravitational acceleration (9.81), giving kN/m3
2. Compute normal stress at the depth of interest as unit weight times depth, and convert to MPa
3. If a groundwater table is present above the depth of interest, deduct pore water pressure from the total normal stress before using it; in the worked example the granite was dry so no deduction was made
4. Apply Barton's criterion: shear strength equals normal stress times the tangent of (residual friction angle plus JRC times the base-10 logarithm of JCS divided by normal stress) — equation shown on screen, read from the video
5. Use the average JRC when a range is reported (e.g. average of 16-18 is 17)

## Decision rules

- The greater the normal stress, the greater the computed shear strength — always evaluate at the actual depth of the block or opening
- Porous, water-bearing rocks such as sandstone need the groundwater check; a few tight joints in fresh granite may justify assuming dry conditions

## Checks

- Confirm each input has its own basis: JRC from surface profiling, JCS from Schmidt hammer, residual friction angle from tilt test or a documented assumption
- Verify unit conversions: density in g/cm3 to unit weight in kN/m3, then stress in kPa converted to MPa

## Common errors

- Using density where unit weight is required
- Forgetting to subtract pore pressure when groundwater is present
- Using peak lab friction angle instead of the residual friction angle the criterion expects

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Equation symbols are mangled by auto-captions — read the exact form of Barton's criterion from the video or a textbook before using it
- The normal stress here is an effective stress once pore pressure is deducted; total vs effective basis must be kept consistent with the groundwater assumption
- The worked answer (about 3.9 MPa shear strength at 90 m depth in granite) is example-specific

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Groundwater observations]]
- [[Skills]]
