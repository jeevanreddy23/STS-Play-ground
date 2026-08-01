---
title: Fit Hoek-Brown intact-rock parameters (sigma-ci, mi, tensile strength) from triaxial test data
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: medium
updated: 2026-08-01
---

# Fit Hoek-Brown intact-rock parameters (sigma-ci, mi, tensile strength) from triaxial test data

> **Source:** [YouTube — Hoek-Brown Failure Criteria for Rock — Examples and Solutions](https://www.youtube.com/watch?v=9sb4QWHgzGw&t=28s) (00:28-08:15). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Unconfined compressive strength, the material constant mi, and an estimated tensile strength for intact rock, obtained by linearising the intact-rock special case of the Hoek-Brown criterion against triaxial results

## Inputs

- Triaxial test results for several samples (six in the example): confining pressure sigma-3 and major principal stress sigma-1 at failure for each test
- Spreadsheet with linear trendline capability (or graph paper)

## Procedure

1. Use the intact-rock special case of the generalized Hoek-Brown criterion: set s = 1 and alpha = 0.5, and use mi in place of mb (intact samples have no discontinuities)
2. For each test compute (sigma-1 minus sigma-3) squared and plot it against sigma-3 at failure
3. Fit a straight line of best fit through the points and read its slope and intercept from the trendline equation
4. The intercept equals sigma-ci squared, so sigma-ci is the square root of the intercept (about 16.6 MPa in the example)
5. The slope equals mi times sigma-ci, so mi = slope divided by sigma-ci (about 31.2 in the example)
6. Estimate tensile strength from the criterion's tensile expression using mi, sigma-ci and s = 1; the result carries a negative sign by convention and was about 0.5 MPa in magnitude in the example

## Decision rules

- s = 1 and alpha = 0.5 apply only to intact rock (lab-scale samples or exposures without discontinuities); jointed rock masses need the generalized criterion with mb, s, alpha from rock mass characterisation
- Harder rock geology gives higher mi — mi varies with rock type
- Tensile strength from this fit is negative (tension); report magnitude with the sign convention stated

## Checks

- Intercept and slope are taken from the fit through all tests, not from any single test
- Back-substitute the fitted sigma-ci and mi into the criterion and confirm the test points are reasonably reproduced

## Common errors

- Plotting (sigma-1 minus sigma-3) unsquared, which destroys the linearisation
- Applying intact-rock constants (s = 1) to a jointed rock mass
- Dividing the slope by the intercept instead of by sigma-ci (the square root of the intercept) when computing mi

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Auto-captions state the slope inconsistently (570 vs 517.78) and garble parts of the tensile-strength expression — equation shown on screen — read from the video
- The lecture does not discuss effective vs total stresses for the triaxial data; confirm the stress basis of your own test data before fitting

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
