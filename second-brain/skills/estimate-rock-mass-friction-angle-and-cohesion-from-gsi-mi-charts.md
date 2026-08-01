---
title: Estimate rock mass friction angle and cohesion from GSI-mi charts
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: high
updated: 2026-08-01
---

# Estimate rock mass friction angle and cohesion from GSI-mi charts

> **Source:** [YouTube — Rock Mass Strength: How to Estimate Cohesion & Friction Angle Fast](https://www.youtube.com/watch?v=6zrvca6LBlQ&t=0s) (00:00-06:11). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Quick chart-based estimates of rock mass friction angle and cohesion suitable for preliminary slope stability analysis, without running software

## Inputs

- Rock type (to look up the Hoek-Brown intact material constant mi from a published table)
- Geological Strength Index (GSI) from rock mass structure and joint surface condition
- Average unconfined compressive strength (UCS / sigma_ci) of intact core samples from lab tests

## Procedure

1. Identify the rock type and read its mi value from a reference table (e.g. basalt has a high mi because it is a hard rock)
2. Assess GSI from the rock mass structure (e.g. blocky) and discontinuity surface condition (e.g. fair)
3. On the friction-angle chart, enter with the GSI value, find where it intersects the curve for the rock's mi, and read off the rock mass friction angle
4. On the cohesion chart, which plots the ratio of cohesion to intact UCS (c/sigma_ci) against GSI for lines of mi, read off the ratio at the same GSI and mi
5. Multiply the ratio by the intact UCS to get rock mass cohesion in the same stress units as the UCS

## Decision rules

- Reading the friction angle to the nearest degree is enough; a 1-2 degree spread between readers is acceptable
- Small differences in the cohesion ratio read from the chart are acceptable; the method is an estimate, not a precise value

## Checks

- Sanity-check the inputs against the geology: a UCS far below the fresh-rock typical range (e.g. basalt at 14 MPa when fresh basalt often exceeds 100 MPa) together with a moderate GSI indicates a weathered rock mass, so a low cohesion result is consistent
- Cross-check chart estimates against software such as RocData if available

## Common errors

- Using intact-rock lab strength directly as rock mass strength instead of scaling through the charts
- Confusing sigma_ci (intact UCS) with rock mass UCS when forming the cohesion ratio

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Chart values are read from the video's screen — obtain the published Hoek-Brown/GSI charts and mi tables rather than relying on transcript numbers
- Stress basis and drainage are not stated; the charted cohesion and friction angle derive from Hoek-Brown fitting of intact/rock-mass strength, treat as effective-stress rock mass parameters and confirm before use

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
