---
title: Interpret a pressuremeter test in clay - modulus, horizontal stress, undrained strength and consolidation
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Interpret a pressuremeter test in clay - modulus, horizontal stress, undrained strength and consolidation

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 5 - Analysis of pressuremeter tests and Elastic soil (pp 185-190, Figure 5.8), Undrained analysis in elastic-plastic materials (pp 190-191), Pressuremeter tests in clay: Shear modulus (pp 194-198), In situ total horizontal stress (pp 198-199, Figure 5.15), Undrained shear strength (pp 199-201, Figures 5.16-5.18), Coefficient of horizontal consolidation (pp 201-203)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Shear modulus, in-situ total horizontal stress, undrained shear strength and horizontal consolidation coefficient extracted from a corrected pressuremeter curve using the appropriate cavity expansion analysis, with the reliability of each stated.

## Inputs

- Corrected pressure against cavity strain (or volume) curve, with membrane and compliance corrections applied
- Unload-reload loop records with their cavity pressure at initiation
- Pore pressure record during expansion where the probe is instrumented
- Installation method and its expected disturbance
- Holding test record where consolidation parameters are wanted

## Procedure

1. Understand the framework. The pressuremeter has better defined boundary conditions than any other in-situ test, so it permits more rigorous analysis: expansion of a cylindrical cavity in a homogeneous, isotropic, continuous medium with axial symmetry and radial movement only. In an elastic medium the initial cavity pressure equals the in-situ total horizontal stress, and the shear modulus is half the slope of the pressure against cavity strain curve.
2. Extract modulus by the route matching the probe. From a Menard test, take the tangent modulus from the initial linear segment between the point where the membrane makes full contact with the borehole wall and the onset of plastic behaviour, using the elastic cavity expansion relationship with an assumed Poisson's ratio. Note that in clay plastic deformation begins early, so this modulus is a low estimate of the in-situ modulus and is a large-strain, disturbance-sensitive quantity - it is an operational stiffness for semi-empirical design rules, not a fundamental parameter.
3. From a strain-arm device, take the shear modulus from unload-reload loops as half the slope of the pressure-cavity strain relationship, after correcting for system compliance and finite probe length. Record the cavity pressure and the strain amplitude of each loop - modulus depends on both.
4. Extract in-situ total horizontal stress from a self-boring test by the lift-off approach, where the cavity pressure at which the membrane starts to move equals the horizontal total stress. Examine the initial stage of the curve at a large scale and expect the individual feeler arms to indicate lift-off at appreciably different pressures, making the choice of a single value subjective. Do not use the start of the linear segment of a Menard test for this purpose - forming the borehole leaves the soil partially unsupported, so the initial pressure does not correspond to the undisturbed stress state.
5. Where clays show a marked yield point, use the alternative approach in which the yield stress at the cavity wall equals the sum of the horizontal stress and the undrained shear strength, and iterate until the measured yield point, the horizontal stress estimate and the undrained strength are mutually consistent. The method requires a clay with a significant elastic response and a clear yield point.
6. Extract undrained shear strength from the loading branch by the elastic-perfectly-plastic (Tresca) analysis, in which cavity pressure plotted against the logarithm of volumetric strain gives a straight line in the plastic stage whose slope equals the undrained shear strength. Volumetric strain is computed from current and initial cavity radii.
7. Cross-check with the unloading branch analysis, which uses the contraction part of the curve and is less sensitive to installation disturbance than the loading branch. Where loading and unloading strengths differ substantially, disturbance is the first suspect.
8. Consider that effective stress analyses also exist for pressuremeter strength interpretation and can be used where pore pressure is measured during expansion.
9. For horizontal consolidation, run a holding test with a pore pressure transducer in the probe. Expand undrained into the plastic range, then hold either the total cavity pressure or the cavity diameter constant and monitor the decay of excess pore pressure. Holding the diameter constant gives a falling pore pressure and a falling total cavity pressure; holding total pressure constant gives a falling pore pressure and a progressively increasing cavity diameter. Interpret the decay for the coefficient of horizontal consolidation.
10. Report each parameter with the analysis used, the branch of the curve it came from, the installation method, and for stiffness the strain amplitude and cavity pressure of the loop.

## Decision rules

- Do not read in-situ horizontal stress from a pre-bored test.
- Menard tangent modulus and unload-reload shear modulus are different quantities measured at different strains - never substitute one for the other.
- Where loading and unloading strength analyses disagree, prefer the unloading analysis and investigate the disturbance.
- Quote every unload-reload modulus with its strain amplitude and the cavity stress at which the loop was taken.
- Guarantee undrained conditions in clay by using a sufficiently high expansion rate; a slow test in silty clay is not an undrained test.

## Checks

- Membrane, compliance and finite length corrections all applied before interpretation
- Lift-off examined at expanded scale with all arms plotted
- Plastic branch checked for linearity in the log volumetric strain plot before the slope is taken
- Loading and unloading strength analyses compared
- Consolidation coefficient from a holding test compared against dissipation testing or laboratory data

## Common errors

- Averaging feeler arm lift-off pressures without inspecting their spread
- Using the Menard initial pressure as the in-situ horizontal stress
- Taking a strength from a non-linear plastic branch by fitting a line through curvature
- Comparing moduli from loops of different strain amplitude as if they were the same parameter
- Interpreting a slow expansion in clay as undrained

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Cavity expansion analyses assume homogeneity, isotropy and plane strain - layered or fissured clays depart from these.
- Undrained strength from a pressuremeter is a plane strain, large-displacement quantity and is not identical to a triaxial or vane strength.

## Standards cited

ASTM D4719, EN ISO 22476-6 (self-boring pressuremeter), Eurocode 7 Part 2

## Related

- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
