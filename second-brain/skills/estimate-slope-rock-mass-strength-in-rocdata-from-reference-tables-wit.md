---
title: Estimate slope rock mass strength in RocData from reference tables without lab data
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Estimate slope rock mass strength in RocData from reference tables without lab data

> **Source:** [YouTube — Estimating Slope Rock Mass Strength Using RocData](https://www.youtube.com/watch?v=pl_eT7byNAY&t=0s) (00:01-05:33). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Rock mass strength parameters (rock mass UCS, tensile strength, cohesion and friction angle) for an excavated slope, built entirely from reference tables when no laboratory tests exist

## Inputs

- Rock type (sandstone in the example) and its UCS if known (60 MPa given); otherwise a rock-type strength range from the built-in table
- Rock mass description for GSI: structure (very blocky) and discontinuity surface condition (good) — about 56 in the example
- Hoek-Brown constant mi from the rock-type reference (about 17 for sandstone)
- Excavation description for the disturbance factor (slopes application; good blasting gave D = 0.7, poor blasting gives 1.0)
- Slope height (35 m) and unit weight converted from density (2.3 g/cm3, about 0.022-0.023 MN/m3)

## Procedure

1. Start a new file and work through the reference-data fields in order
2. Enter sigma_ci directly if the UCS is known; otherwise pick the rock type from the table and note it only gives a range (e.g. 50-100 MPa with an average) — a rough estimate
3. Pick GSI from the structure/surface-condition chart (very blocky + good in the example lands around the mid-50s; plus or minus about 5 points between assessors is acceptable)
4. Pick mi from the rock-type table, drilling down by rock class and texture if the exact type is uncertain
5. Set the disturbance factor using the slopes application: match the blasting quality description (good blasting 0.7 in the example; poor blasting 1.0)
6. Set the application to slope and enter slope height and unit weight so the principal stress range is adjusted
7. Read the outputs: rock mass UCS (dropped from 60 MPa intact to about 2.4 MPa in the example), tensile strength (small, negative), and cohesion and friction angle for slope stability use

## Decision rules

- Reference-table estimation is acceptable for preliminary work when no lab data exist, but it is explicitly an estimate, not precise data
- A few points of GSI disagreement between assessors is tolerable; document the descriptive basis (structure and surface condition) behind the pick
- Slope disturbance factors are typically high (0.7-1.0) compared with TBM tunnels — do not reuse tunnel D values for blasted slopes

## Checks

- Compare the entered UCS with the table range for the rock type as a plausibility check
- Confirm the density-to-unit-weight conversion before entering it
- Note how far rock mass UCS falls below intact UCS — a large drop is expected for very blocky rock and signals that intact values must not be used in slope design

## Common errors

- Using the intact UCS in slope stability instead of the reduced rock mass value
- Applying a tunnel disturbance factor to a blasted slope
- Entering density where the software expects unit weight in MN/m3

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Table values quoted in captions (GSI around 56, mi around 17, D = 0.7) are read from the video and should be re-read from the software's own reference tables
- Outputs are effective-stress Hoek-Brown estimates; groundwater and drainage conditions are not covered in the lecture

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
