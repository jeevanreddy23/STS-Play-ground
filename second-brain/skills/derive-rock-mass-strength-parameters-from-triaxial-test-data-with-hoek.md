---
title: Derive rock mass strength parameters from triaxial test data with Hoek-Brown fitting in RSData
type: skill
tags: [skill, testing, youtube-source]
confidence: high
updated: 2026-08-01
---

# Derive rock mass strength parameters from triaxial test data with Hoek-Brown fitting in RSData

> **Source:** [YouTube — From Triaxial Tests to Rock Mass Strength — RSData Tutorial](https://www.youtube.com/watch?v=e8becyULDC0&t=0s) (00:00-13:11). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Intact rock parameters (UCS, mi) fitted from triaxial data and scaled rock mass parameters (rock mass UCS, tensile strength, cohesion, friction angle) for a specific slope application

## Inputs

- Triaxial test results as sigma3/sigma1 pairs at failure (example set: 0/78, 5/124.5, 10/145.5, 20/196, 30/230.5, 40/262.5 MPa)
- Geological Strength Index GSI of the rock mass (given, or selected from the GSI chart using block structure and joint surface condition)
- Disturbance factor D from the excavation method (tunnels vs slopes tables)
- Application details: slope height and unit weight (average 27 kN/m3 if unmeasured)

## Procedure

1. Open RSData with the rock template and enter the triaxial sigma3/sigma1 pairs in the triaxial test table
2. Apply calibration to the dataset and select the generalized Hoek-Brown criterion with linear regression curve fitting (vertical, absolute residuals in the example)
3. Read the fitted intact parameters: unconfined compressive strength (example about 88.5 MPa) and mi (example about 12); note the fit initially assumes GSI 100, i.e. intact material with no discontinuities
4. Set GSI to the rock mass value (example 75, blocky structure); if unknown, pick from the built-in GSI chart using discontinuity set count and surface condition
5. Set the disturbance factor from the application table — for a slope excavated mechanically with minimal disturbance the example used 0.7
6. Set the failure envelope range for the application: choose slopes, enter unit weight and slope height (example 40 m) so the stress range matches the problem
7. Read the rock mass parameters: rock mass UCS and tensile strength drop sharply from intact values (example: tensile from about 10-11 MPa to 0.7 MPa; UCS from 88.5 to about 14 MPa), along with equivalent cohesion and friction angle

## Decision rules

- Prefer laboratory-derived mi over tabulated mi by lithology; use the table only when no test data exist
- GSI 100 means intact sample scale — never carry intact parameters directly into rock mass design
- Choice of curve-fit method (linear regression vs alternatives) changes results only slightly; document which was used
- Disturbance factor depends on excavation method and application (tunnel vs slope); mechanical excavation is at the low-disturbance end of the slope options

## Checks

- Confirm the fitted curve passes sensibly through the test points before accepting UCS and mi
- Verify the parameter panel switches from intact-rock to rock-mass labelling after GSI and D are applied
- Check the envelope stress range corresponds to the actual slope height

## Common errors

- Using intact UCS in rock mass stability calculations
- Leaving GSI at 100 or D at zero when the field mass is jointed and disturbed
- Fitting with a stress range unrelated to the application, biasing equivalent cohesion and friction

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Triaxial data are total principal stresses at failure; drainage conditions of the tests are not stated in the lecture
- The lecturer's disturbance-factor menu wording is partly garbled in captions (0.7 vs 1.0 options) — read the on-screen table from the video

## Standards cited

None cited in the source passage.

## Related

- [[Rock strength classes]]
- [[Skills]]
