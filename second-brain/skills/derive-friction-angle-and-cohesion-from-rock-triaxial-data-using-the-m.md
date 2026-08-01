---
title: Derive friction angle and cohesion from rock triaxial data using the Mohr-Coulomb criterion in principal-stress form
type: skill
tags: [skill, rock-mechanics, youtube-source]
confidence: medium
updated: 2026-08-01
---

# Derive friction angle and cohesion from rock triaxial data using the Mohr-Coulomb criterion in principal-stress form

> **Source:** [YouTube — Using Mohr-Coulomb Failure Criteria for Rocks — Triaxial Test Data Analysis](https://www.youtube.com/watch?v=ULxCl4myxoE&t=31s) (00:31-10:42). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** Friction angle, cohesion, and unconfined compressive strength for a rock from multiple triaxial tests, via a linear fit of sigma-1 at failure against sigma-3

## Inputs

- Triaxial results for several tests (six in the example): confining pressure sigma-3 and major principal stress at failure sigma-1 for each
- Spreadsheet with trendline capability (or graph paper)

## Procedure

1. Use the principal-stress form of Mohr-Coulomb for rocks: sigma-1 at failure equals sigma-3 times tangent-squared of (45 degrees plus half the friction angle) plus sigma-c; rocks are analysed in principal stresses rather than shear strength because fresh hard rock's shear strength is very high
2. Plot sigma-1 at failure (y) against sigma-3 (x) for all tests and fit a straight failure envelope; take slope and intercept from the trendline equation
3. The intercept is the unconfined compressive strength sigma-c (31.67 MPa in the example) — where the envelope crosses the sigma-1 axis
4. The slope equals tangent-squared of (45 + phi/2): take its square root, take the arctangent, subtract 45, and double the remainder to get the friction angle (slope 4.56 gave phi of about 39.8 degrees in the example)
5. Recover cohesion from the relation sigma-c = 2c times tangent(45 + phi/2), using the fitted sigma-c and phi (about 7.6 MPa in the example)

## Decision rules

- Take sigma-c from the fit through all tests, not from the single unconfined (sigma-3 = 0) test — six points give a more accurate value than one (the lone unconfined test read 25 MPa vs the fitted 31.67 MPa)
- For soils the shear-stress form of Mohr-Coulomb is used instead; the principal-stress form is the rock convention

## Checks

- Slope and intercept both come from the same fitted envelope
- Angle arithmetic checked: sqrt of slope, then arctan, then subtract 45, then multiply by 2
- Back-substitute phi and c to confirm the envelope reproduces the unconfined intercept

## Common errors

- Reporting the single sigma-3 = 0 test result as the UCS when a multi-test fit is available
- Forgetting to square-root the slope before taking the arctangent
- Mixing up which fitted constant is sigma-c (intercept) and which is the friction term (slope)

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Auto-captions garble several numbers (e.g. '1.667' for 31.67, '9 39.8', '90.9 degrees', tentative cohesion of about 7.6 MPa which the lecturer himself asks viewers to check) — equation shown on screen — read from the video and recompute
- The lecture does not state whether stresses are total or effective; laboratory rock triaxial data here is treated as-measured — confirm the stress basis for your own data

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
