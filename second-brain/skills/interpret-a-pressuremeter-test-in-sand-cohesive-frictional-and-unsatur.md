---
title: Interpret a pressuremeter test in sand, cohesive-frictional and unsaturated soils
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Interpret a pressuremeter test in sand, cohesive-frictional and unsaturated soils

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 5 - Drained analysis in elastic-plastic materials (pp 191-194), Pressuremeter tests in sand: Shear modulus (pp 203-204, Figure 5.20), In situ total horizontal stress (pp 204-205), Drained shear strength parameters (pp 205-208, Figure 5.21), State parameter (pp 208-209, Figure 5.23), Cone pressuremeter tests in clay and sand (pp 209-217), Pressuremeter tests in cohesive-frictional soils (pp 217-222), Pressuremeter tests in unsaturated soil conditions (pp 222-227)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Drained friction and dilation angles, a state parameter and stress-dependent stiffness from a pressuremeter expansion curve in granular and cohesive-frictional ground, with the horizontal stress limitation acknowledged.

## Inputs

- Corrected pressure against cavity strain curve to a well-developed plastic stage
- Equilibrium pore pressure at test depth
- Critical state (constant volume) friction angle for the material
- Unload-reload loop records with the cavity pressure at which each began
- Whether the deposit is uncemented, bonded or unsaturated

## Procedure

1. Use the drained elastic-perfectly-plastic Mohr-Coulomb cavity expansion framework. Plot the logarithm of effective cavity pressure against the logarithm of cavity strain; in the plastic stage the relationship is a straight line whose slope carries the strength information.
2. Convert the slope to friction and dilation angles. The slope is a function of both the friction angle and the dilation angle; the link that separates them is a stress-dilatancy relationship using the material's constant volume friction angle. So a critical state friction angle must be supplied - from laboratory testing or from mineralogy and grading - before the pressuremeter can give a peak friction angle.
3. Take the state parameter directly from the same slope. Numerical analysis on a critical state model with strain hardening and softening shows the log-log expansion curve is approximately straight with a slope controlled mainly by the initial state parameter, and that this holds across sands tested in large calibration chambers. A plane strain friction angle can then be estimated from the same slope through an average friction-angle-to-state-parameter relationship.
4. Treat stiffness as stress dependent. In a pressuremeter test in sand the mean effective stress varies both with applied cavity pressure and with distance from the cavity wall, so unload-reload moduli measured at successive stages of the same test should increase steadily as the test progresses even at constant strain amplitude. Report each modulus against the cavity stress at which it was measured rather than averaging them.
5. Keep each unload-reload loop elastic. The permissible change in cavity effective stress during elastic unloading is a function of the drained friction angle and of the cavity effective stress at which unloading begins - so the allowable loop grows through the test. An oversized loop early in the test contaminates the modulus.
6. Accept the horizontal stress limitation. The book states that despite the various methods developed, the in-situ horizontal stress cannot be reliably determined in most natural sand deposits; self-boring is the most suitable technique available, but reported lift-off pressures in sand frequently match the hydrostatic pore pressure, meaning the approach grossly underestimates horizontal stress. Do not report a sand horizontal stress from lift-off without independent corroboration.
7. For cone pressuremeter tests, use the full-displacement analyses appropriate to the installation. The probe is pushed to depth as part of a cone sounding, giving a continuous penetration profile for stratigraphy and strength alongside pressuremeter stiffness and strength, but because the test is not in undisturbed ground, large strain analysis is required and separate treatments exist for clay and for sand.
8. For cohesive-frictional materials - bonded, cemented and weathered soils that carry both a friction angle and a cohesion intercept - use the cavity expansion analyses developed for that constitutive class rather than either the purely frictional or the purely cohesive analysis. Expect the cohesion intercept to be the parameter with the wider variation, since it responds to cementation and to suction.
9. For unsaturated soils, recognise that suction contributes to the measured response and that the analysis must account for it; a strength derived without regard to suction is valid only at the moisture state at the time of testing and can be lost on wetting.
10. Cross-check the derived friction angle against cone-based estimates and against the ratio of cone resistance to pressuremeter limit pressure, which the book identifies as one of the useful combined-measurement ratios.

## Decision rules

- A pressuremeter friction angle in sand requires an independent constant volume friction angle - it is not self-contained.
- Do not average unload-reload moduli taken at different cavity stresses.
- Do not report a sand in-situ horizontal stress from a lift-off pressure alone.
- Use full-displacement analyses for cone-mounted and push-in probes; small strain analyses do not apply.
- In unsaturated bonded soils, state the moisture and suction state the strength applies to and consider the wetted case separately.

## Checks

- Log-log plastic branch checked for genuine linearity before the slope is taken
- Constant volume friction angle source documented
- Loop sizes checked against the elastic unloading limit at the cavity stress of each loop
- State parameter derived and compared with a cone-based estimate
- Friction angle convention (plane strain versus triaxial) stated for the design application

## Common errors

- Assuming a default constant volume friction angle and propagating the error into peak strength and dilation
- Reporting a single stiffness from a test where stiffness demonstrably rises with cavity stress
- Using small-strain cavity expansion analysis for a pushed-in probe
- Quoting a sand horizontal stress from lift-off
- Applying uncemented-sand analyses to bonded or cemented granular material

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- State parameter and friction angle relationships from pressuremeter slope are calibration-chamber based and material dependent.
- Unsaturated soil interpretation is an active research area; treat derived parameters as moisture-state specific.

## Standards cited

ASTM D4719, EN ISO 22476-6, Eurocode 7 Part 2

## Related

- [[Rock weathering classes]]
- [[Borehole log conventions]]
- [[Skills]]
