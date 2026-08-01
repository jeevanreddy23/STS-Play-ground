---
title: Estimate jointed rock shear strength with the Barton-Bandis criterion in RocData
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Estimate jointed rock shear strength with the Barton-Bandis criterion in RocData

> **Source:** [YouTube — Jointed Rock Slope Shear Strength using RocData](https://www.youtube.com/watch?v=J3RKca33gIE&t=0s) (00:00-07:25). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Equivalent cohesion and friction angle for a jointed rock mass, plus shear strength at a specified depth, for use in slope stability analysis

## Inputs

- Joint roughness coefficient JRC (measured range, or estimated by comparing joint surfaces to the Barton roughness chart)
- Joint wall compressive strength JCS (measured, e.g. via Schmidt hammer, or estimated from rock description)
- Residual friction angle (from shear box tests, or from published reference values by lithology and wet/dry state)
- Slope height and rock density/unit weight to set the normal stress range
- Depth of interest for a spot shear strength estimate

## Procedure

1. Start a new RocData project and select the Barton-Bandis failure criterion in project settings
2. Select the residual friction angle from the built-in reference values matching the lithology and moisture state (example: wet siltstone about 31 degrees; typical range roughly 25-30 for many rocks)
3. Enter the JRC range and let the software average it (example: 12-14 averaged to 13)
4. Enter the measured JCS value (example: 35 MPa); if unmeasured, estimate from rock description tables
5. Set the application to slope and enter slope height and unit weight so the normal stress range matches field conditions (density 2.5 g/cc entered as about 0.024-0.025 MN/m3 equivalent)
6. Read the fitted equivalent cohesion and friction angle from the shear stress vs normal stress plot
7. For strength at a given depth, compute the normal stress at that depth from unit weight times depth, then use the plot sampler to read the shear strength at that normal stress (example: 0.49 MPa normal at 20 m depth gave about 0.7 MPa shear strength)

## Decision rules

- No shear box data available: use published residual friction angles for the lithology rather than guessing
- JRC estimated visually from the Barton chart is acceptable; a 2-point difference in JRC has only a small effect on the result
- Small density differences have negligible effect on the fitted strength; only large density contrasts matter
- Note the criterion gives zero shear strength at zero normal stress (separated joint blocks), which is why the curve passes through the origin

## Checks

- Confirm the shear stress-normal stress curve starts at the origin as expected for a jointed criterion
- Sanity-check the fitted friction angle against the input residual friction angle and roughness

## Common errors

- Entering unconfined compressive strength of intact rock where the joint wall strength JCS is required
- Setting a normal stress range unrelated to the actual slope height, which biases the fitted cohesion and friction angle

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- The Barton-Bandis equation itself is shown on screen — read from the video; captions garble it
- Water condition is handled only through the choice of wet vs dry residual friction angle; no explicit pore pressure is applied in this exercise

## Standards cited

None cited in the source passage.

## Related

- [[Weathered siltstone]]
- [[Skills]]
