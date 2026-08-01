---
title: Derive Hoek-Brown rock mass strength from triaxial lab data in RocData
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Derive Hoek-Brown rock mass strength from triaxial lab data in RocData

> **Source:** [YouTube — Estimating Rock Mass Strength using RocData — Practical Example](https://www.youtube.com/watch?v=dbswu_RMNUU&t=0s) (00:01-09:33). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Rock mass strength parameters (rock mass UCS, tensile strength, and equivalent Mohr-Coulomb cohesion and friction angle) for a tunnel, fitted from triaxial test data and scaled by GSI and disturbance

## Inputs

- Triaxial test pairs of confining pressure (sigma 3) and major principal stress at failure (sigma 1) for several intact core samples
- Geological Strength Index from site investigation (85 in the example basalt)
- Excavation method for the disturbance factor (TBM excavation gives minimal disturbance, D = 0)
- Application type and depth (tunnel at about 100 m in the example) and unit weight (software default around 27 kN/m3 average for rock if no data)

## Procedure

1. Set Project Settings to the generalized Hoek-Brown criterion
2. Enter the lab data as sigma 3 / sigma 1 pairs in the spreadsheet-style input
3. Choose the curve-fit algorithm — linear regression with vertical error summation and absolute error type is the lecturer's usual choice; the alternatives give similar results
4. Read the fitted intact parameters: sigma_ci (intact UCS) and mi; sanity-check mi against the typical value for the rock type
5. Synchronize the fitted material, then open the reference tables: sigma_ci and mi are locked from the fit and cannot be edited
6. Enter GSI directly if known, or pick it from the structure/surface-condition table (e.g. blocky with good surfaces)
7. Set the disturbance factor from the tables: choose the tunnels option and the excavation description (TBM = minimal disturbance, D = 0; heavily disturbed = 1)
8. Set the application to tunnel and enter the depth so the principal stress range is adjusted appropriately
9. Read the outputs: rock mass UCS, rock mass tensile strength (reported negative because tensile), Hoek-Brown constants, and equivalent Mohr-Coulomb cohesion and friction angle for use in slope or shear-strength work

## Decision rules

- Use D = 0 only when excavation genuinely causes minimal disturbance (e.g. TBM); blast damage pushes D toward 1
- GSI = 100 means discontinuities do not reduce strength and rock mass UCS equals the intact UCS; lowering GSI collapses strength rapidly (in the demo, dropping GSI from 85 to about 50 cut rock mass UCS from 149 MPa intact to single digits)
- Request Mohr-Coulomb equivalents when downstream analysis (e.g. limit-equilibrium slope stability) needs cohesion and friction angle

## Checks

- Compare fitted mi with published typical values for the rock type (about 17.8 fitted vs typical basalt values in the example)
- Run a GSI sensitivity sweep to see how strongly discontinuities control the rock mass strength before fixing a single value

## Common errors

- Forgetting to synchronize the fitted material before applying reference-table inputs
- Leaving the application set to the wrong case (slope vs tunnel), which changes the stress adjustment
- Treating the intact fitted UCS as the rock mass strength

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Some lab data values in the auto-captions are garbled (e.g. the last sigma 1 entries) — read the exact test data from the video description or screen
- The depth entered in the demo shifts between 100 and 110 m in the captions; confirm from the problem text
- Hoek-Brown outputs are effective-stress rock mass estimates; drainage conditions are not discussed in the lecture

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
