---
title: Assess the onset depth of rockburst and spalling in a tunnel
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: medium
updated: 2026-08-01
---

# Assess the onset depth of rockburst and spalling in a tunnel

> **Source:** [YouTube — Rock Bursting & Spalling Hazard in Tunnels: Step-by-Step Assessment](https://www.youtube.com/watch?v=_J4nvrgEphQ&t=0s) (00:00-05:12). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** An estimate of the depth below which brittle problems (rockburst, spalling) can be expected for a tunnel in strong rock, from an empirical crack-initiation stress and the overburden gradient

## Inputs

- Unconfined compressive strength of the intact rock (100 MPa in the hard granite example)
- Rock density (2.9 g/cm3 in the example) to form unit weight
- An empirical correlation between intact strength and the stress at which cracking initiates, taken by the lecturer from work he attributes to Hoek and Marinos, compiled from case studies

## Procedure

1. Confirm the rock qualifies: rockburst and spalling occur only in high-strength, high-quality rock at great depth
2. Compute the crack-initiation stress from the empirical linear correlation in the referenced chart — in the worked example, a small negative constant plus roughly 0.42 times the UCS gives about 39.3 MPa for UCS = 100 MPa; equation shown on screen, read from the video
3. Set the vertical principal stress equal to that crack-initiation stress
4. Convert density to unit weight (density times 9.81, kN/m3) and solve depth = crack-initiation stress divided by unit weight, converting MPa to kPa first
5. The example yields a threshold depth of about 1380 m — tunnels at or below this depth in that granite can expect rockburst/spalling problems

## Decision rules

- If the rock is weak or heavily jointed, this brittle-failure screening does not apply — the failure mode will be different
- Tunnels planned shallower than the computed threshold depth are not expected to see spalling/rockburst for that rock strength

## Checks

- Track units through the calculation: MPa to kPa (times 10^3) before dividing by unit weight in kN/m3 to get metres
- Compare the computed initiation stress with the case-study scatter in the source chart rather than treating the line as exact

## Common errors

- Applying the correlation to weak or jointed rock where brittle spalling is not the governing mechanism
- Dividing MPa directly by kN/m3 without the unit conversion, giving a depth wrong by a factor of 1000
- Using density instead of unit weight in the overburden calculation

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The correlation coefficients are read from the video and may be garbled by auto-captions — equation shown on screen, read from the video and check the cited Hoek/Marinos source
- The method assumes vertical stress from gravity alone; high horizontal in-situ stresses would change the assessment and are not covered in the lecture

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
