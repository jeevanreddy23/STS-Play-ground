---
title: Interpret dilatometer results for soil type, stress history, strength, stiffness and direct design
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Interpret dilatometer results for soil type, stress history, strength, stiffness and direct design

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 6 - Interpretation of test results (pp 250), Soil characterization (pp 250-252, Figures 6.7 to 6.9), Geotechnical parameters in clay (pp 252-260), Geotechnical parameters in sand (pp 260-264, Figure 6.16), Direct applications: laterally loaded piles (pp 264-267), settlement of shallow foundations (pp 267-269, Figure 6.21), soil liquefaction (pp 269-272)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Soil type and unit weight, overconsolidation ratio, at-rest earth pressure coefficient, undrained strength, constrained modulus and friction angle from DMT indices, plus settlement, lateral pile response and liquefaction screening from the direct applications.

## Inputs

- Material index, horizontal stress index and dilatometer modulus profiles
- Effective vertical stress profile with the unit weight assumption
- Shear wave velocity profile where a seismic dilatometer was used
- Independent strength or oedometer data for calibration where available
- For direct applications: footing geometry and stress increment, or pile diameter and lateral load; or seismic demand for liquefaction

## Procedure

1. Accept the epistemic basis. DMT interpretation is predominantly empirical, built by calibrating the pressure readings against verified parameters. Closed-form solutions exist only under heavily simplified assumptions, and numerical modelling is difficult because a proper analysis must treat blade penetration and membrane inflation as a genuinely three-dimensional problem rather than the axisymmetric idealisation available for a cone. Expect site-specific components in the correlations and some scatter.
2. Identify soil type and estimate unit weight from the material index together with the dilatometer modulus, using the published chart. The material index gives a clear indication of soil type - clay deposits occupy a low band, sands a higher one. Unit weight from the chart is what lets the effective stress profile be computed, which every normalised parameter then depends on, so check it against any available samples.
3. Read stress history from the horizontal stress index profile. Its shape mirrors the overconsolidation ratio profile with depth, and the standard uncemented-clay relationship converts one to the other through a power law. A typical soft clay profile shows the index falling from high values near the surface to a low uniform value, which is a desiccated overconsolidated crust over a normally consolidated deposit - the pattern is diagnostic and should be read before any number is quoted.
4. Derive the at-rest earth pressure coefficient in clay from the horizontal stress index using the published correlation, and treat it as one of the better in-situ routes to that parameter while acknowledging its empirical basis.
5. Derive undrained shear strength in clay from the horizontal stress index and effective vertical stress through the normalised strength ratio framework, and calibrate against vane or laboratory strengths where available.
6. Derive the constrained modulus from the dilatometer modulus with a correction factor that depends on the material index and horizontal stress index. This is the parameter the DMT is strongest at, and it is the one the settlement application uses.
7. In sand, derive the friction angle from the horizontal stress index. The original approach rests on the proportionality between the lift-off pressure and penetration resistance and requires an independent rough estimate of the at-rest coefficient, which is awkward because that is itself unknown; more recent work relates friction angle to the horizontal stress index directly. Numerical analysis shows the rigidity index also has a significant influence on the horizontal stress index, so friction angles derived without regard to stiffness carry a systematic error, and the displacement generating the index may be elastic in stiff soil but plastic in softer soil.
8. In sand, also derive the state parameter and stiffness, using the seismic module for small-strain stiffness where available.
9. For settlement of shallow foundations, use the one-dimensional calculation: sum, over discretised layers, the vertical stress increment computed elastically divided by the DMT constrained modulus, times the layer thickness. The recommendation is to use the one-dimensional formula in all cases - one-dimensional and three-dimensional calculations generally give similar answers, and the emphasis should be on accurate determination of simple parameters coupled with simple calculations. The result represents settlement under working conditions at a moderate factor of safety, because the constrained modulus reflects an operative rather than a small-strain stiffness.
10. This settlement route is particularly valuable in clean uncemented sand where undisturbed samples cannot be retrieved, and can also give a first estimate of primary settlement in clay, treating the DMT constrained modulus as an average oedometer modulus over the expected stress range.
11. For laterally loaded piles - the application the dilatometer was originally developed for - derive load-transfer curves relating soil reaction to pile deflection from DMT parameters. In clay the reference deflection is a function of undrained strength, pile diameter, dilatometer modulus and a coefficient, and the ultimate lateral resistance is an ultimate resistance coefficient times undrained strength times diameter, with the coefficient varying with depth and effective stress.
12. For liquefaction, use the horizontal stress index as the resistance index against published triggering curves, alongside the CPT and SPT routes, noting that the DMT is sensitive to horizontal stress and therefore to the aging and prestressing effects that other indices miss.
13. Cross-check the DMT profile against the CPT or SPT profile at the same location. Divergence between the strength-based and stress-based indices is itself a structure and stress-history signal.

## Decision rules

- Read the horizontal stress index profile shape before quoting overconsolidation ratios - the shape carries more information than any single value.
- Calibrate DMT undrained strength against an independent strength measurement.
- Derive friction angle in sand with the stiffness influence acknowledged, not from the horizontal stress index alone.
- Use the one-dimensional settlement calculation with the DMT constrained modulus; do not substitute a small-strain modulus.
- The settlement predicted is a working-load settlement at a moderate factor of safety, not an ultimate-state deformation.

## Checks

- Unit weight from the classification chart checked against samples where available
- Overconsolidation profile compared against oedometer preconsolidation pressures
- Undrained strength compared against vane or laboratory data
- Constrained modulus compared against oedometer moduli over the design stress range
- DMT, CPT and SPT profiles at the same location overlaid and divergences explained

## Common errors

- Quoting overconsolidation ratios from a horizontal stress index profile without checking the unit weight and pore pressure assumptions behind the effective stress profile
- Using the DMT constrained modulus in a small-strain analysis or the seismic modulus in the settlement calculation
- Deriving sand friction angles without regard to the rigidity index influence
- Applying uncemented-clay overconsolidation correlations to cemented or structured deposits
- Treating the one-dimensional settlement result as an ultimate or long-term creep-inclusive value

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- DMT correlations are empirical and partly site specific; scatter between predicted and measured values is expected.
- Correlations for overconsolidation ratio and earth pressure coefficient are stated for uncemented clays and do not apply to structured or cemented deposits.

## Standards cited

EN ISO 22476-5, ASTM D6635, Eurocode 7 Part 2 and Part 3

## Related

- [[Skills]]
- [[Skills]]
