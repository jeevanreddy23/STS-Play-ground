---
title: Choose the in-situ test and the class of interpretation method before mobilising
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Choose the in-situ test and the class of interpretation method before mobilising

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 1 Introduction - Codes of practice (pp 5-12), Interpretation methods Classes I to IV (pp 12-16, Figure 1.9), Scope and purposes (pp 16-17)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A site characterisation plan in which each test is chosen for the parameter it can actually resolve, and each parameter is derived by an interpretation method whose class (rigorous, numerical, approximate analytical, empirical) is stated and defensible.

## Inputs

- Design parameters required: horizontal stress, stress history, shear strength, stiffness at a stated strain, consolidation characteristics
- Expected ground: clay, sand, intermediate-permeability silt, bonded or residual soil, weak rock
- Whether undisturbed sampling is feasible in the material
- Project stage, budget and the consequence of parameter error
- Access constraints: onshore, nearshore, offshore, restricted access

## Procedure

1. Decide first whether the test result will be used directly (an empirical correlation to foundation performance) or to derive a fundamental parameter. Schnaid's stated preference is the latter: relate blow count or cone resistance to shear strength and shear stiffness rather than straight to bearing capacity or pile settlement, then design from parameters.
2. Screen every candidate correlation against the three Wroth and Houlsby requirements the book adopts: there must be a physical reason the properties are related; there must be a background theory however idealised; and the relationship must be expressed in dimensionless variables so continuum scaling laws apply. A correlation failing all three is a local regression, usable only where it was fitted.
3. Classify the interpretation method you intend to use. Class I is rigorous analytical; Class II numerical with close approximation; Class III approximate analytical (bearing capacity and cavity expansion families), which needs validation by calibration chamber or centrifuge testing; Class IV is empirical, calibrated against structure performance and laboratory tests. Record the class alongside every parameter you issue.
4. Recognise that Class I and II solutions are rarely achievable for penetration problems because the controlling factors cannot be isolated, so most practical work sits in Class III supported by physical modelling, or Class IV.
5. Because the number of controlling soil parameters exceeds the number of measured variables in any single test, combine measurements. The book's recurring device is to use ratios of independent measurements from one probe - small-strain stiffness to cone resistance, small-strain stiffness to energy-corrected blow count, cone resistance to pressuremeter limit pressure, and strength paired with energy measurement - to reduce the degrees of freedom.
6. Match test to material. Vane for undrained strength in saturated soft clay and other low-permeability fine-grained materials; CPTu for stratigraphy, thin-layer detection and clay parameters; SPT where sampling is needed or the material defeats other probes; pressuremeter where in-situ horizontal stress or a stiffness-strain relationship is required; dilatometer for stress history and constrained modulus; seismic modules on any of them for small-strain stiffness.
7. For sands, note the book's position that calibration chamber testing is the practical basis for correlations because rigorous analysis is difficult, whereas for clays chamber testing is unfeasible on time grounds and calibration against well-documented test sites is more reliable. Judge a sand correlation by the chamber database behind it and a clay correlation by the reference sites behind it.
8. For residual, bonded and structured materials, expect published correlations built on fresh uncemented sediments to mislead, and plan a combination of techniques plus geophysics rather than a single test.
9. Confirm each intended test complies with the relevant international reference test procedure and national standard - the interpretation methods in the book are stated to apply only to tests performed strictly to those procedures.
10. Write the plan so each design parameter names: the test, the interpretation method, its class, and the independent cross-check.

## Decision rules

- No single in-situ test resolves stress state, stress history, strength, stiffness and consolidation simultaneously - plan a combination.
- Never apply an interpretation method outside the drainage condition it assumes.
- A correlation that is not dimensionless does not scale - do not carry it to a different stress level or probe size.
- Where a Class III solution is used, name the chamber or centrifuge database that validates it.
- Empirical (Class IV) methods remain legitimate in unusual geomaterials and poorly defined ground, but must be labelled as such.

## Checks

- Every required design parameter mapped to at least one test that resolves it plus one independent cross-check
- Interpretation class recorded for each parameter
- Applicable standard and reference test procedure named for each test
- Drainage condition assumed by each interpretation confirmed against the ground's permeability
- Combination of measurements planned where a single measurement underdetermines the parameter

## Common errors

- Using a direct empirical design method and a parameter-based method interchangeably without noticing they encode different assumptions
- Transferring a sand correlation calibrated in a chamber on fresh sand to a bonded or aged deposit
- Reporting a parameter without stating how it was derived
- Running one test type and deriving five parameters from it
- Applying interpretation methods to tests that did not follow the reference procedure

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Standards cited are those current at publication (2009); confirm current editions, particularly the EN ISO 22476 series.
- The interpretation-class framework is the author's own taxonomy - use it as a documentation discipline, not as a formal classification.

## Standards cited

ISSMGE International Reference Test Procedures (IRTP), Eurocode 7 Part 2 / Part 3, ASTM D1586, D5778, D2573; BS 1377 Part 9

## Related

- [[Rock weathering classes]]
- [[Soil description order]]
- [[Skills]]
