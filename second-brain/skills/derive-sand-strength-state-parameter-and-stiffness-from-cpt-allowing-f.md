---
title: Derive sand strength, state parameter and stiffness from CPT, allowing for aging and cementation
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Derive sand strength, state parameter and stiffness from CPT, allowing for aging and cementation

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Granular soils (pp 119-120), Characterization of aging and cementation (pp 120-124), Shear strength (pp 124-128, Figure 3.38), State parameter (pp 128-132, Figure 3.39), Soil stiffness (pp 132-134)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Friction angle, relative density, state parameter and stiffness estimates for granular soils from cone data, with the calibration chamber basis of the correlations respected and any bonding or aging identified before those correlations are trusted.

## Inputs

- Corrected tip resistance profile and effective stress profile
- Small-strain shear modulus from a seismic module, crosshole or downhole survey
- Critical state parameters for the sand where available, or a reasoned estimate
- Grain characteristics: mineralogy, crushability, grading
- Geological setting - whether the deposit is recent, aged, cemented or residual

## Procedure

1. Start from the four concepts the book requires an engineer to hold when interpreting cone data in sand. First, the response under monotonic penetration at standard rate is essentially drained because of the high hydraulic conductivity. Second, behaviour before critical state is largely controlled by the state parameter - the difference between current void ratio and critical state void ratio at the same mean stress - which combines relative density and stress level into one quantity, playing the role overconsolidation ratio plays in sedimented clay. Third, most natural soils and soft rocks are microstructured, so at a given void ratio they sustain higher stresses than the same material without structure, and because sampling granular soils is impractical, evidence of that structure must come from field tests. Fourth, the shear strength envelope is non-linear, with curvature increasing with relative density and grain crushability.
2. Accept the calibration basis and its limits. Interpretation of cone tests in sand deals almost exclusively with non-cemented cohesionless soils, because the experience base is calibration chamber testing on fresh sands. That is the ground on which normalised tip-resistance-to-relative-density and friction angle correlations rest.
3. Screen for aging, cementation and bonding before applying those correlations. Use the ratio of small-strain shear modulus to cone tip resistance plotted against a normalised tip resistance. Because bonding raises small-strain stiffness more than penetration resistance, fresh uncemented sand occupies a defined band and bonded or aged materials plot above it. The same screening in residual soils shows the datapoints falling above and outside the uncemented sand band.
4. Where the material plots inside the fresh sand band, proceed with the standard correlations for relative density and friction angle from normalised tip resistance, stating whether the friction angle is triaxial or plane strain.
5. Where it plots outside, treat the standard correlations as inapplicable and move to the bonded geomaterial approach - express strength and stiffness as lower and upper bounds designed to bracket the recorded small-strain modulus range, rather than as single values.
6. Derive the state parameter through the ratio of small-strain stiffness to cone resistance. Since both quantities are functions of void ratio, mean stress, compressibility and structure - different functions of the same variables - their ratio carries state information that neither carries alone. This is the book's principal example of Class III interpretation improved by combining independent measurements in one sounding.
7. For stiffness, use the seismic measurement as the primary source rather than a tip resistance correlation. Small-strain shear modulus follows from shear wave velocity and mass density directly. Published stiffness expressions for sand are functions of mean effective stress and void ratio with material-dependent coefficients, so they need site data to be more than indicative.
8. Use the general observation that stiffer materials tend to be stronger, expressed as a broad ratio of maximum modulus to maximum strength that holds from soft soils to hard rocks, as an order-of-magnitude cross-check on spatial variability - not as a design correlation.
9. Accept the stated limitation: there are no reliable penetration-test-based methods for determining stress state and stress history in granular soils. Where the design needs horizontal stress in sand, plan a self-boring pressuremeter or dilatometer, knowing both carry their own uncertainty.
10. Report friction angle as a range reflecting the non-linear envelope and the stress level of the design problem, not as a single value.

## Decision rules

- Screen for bonding before applying any fresh-sand correlation.
- The state parameter, not relative density alone, characterises granular behaviour - report it where the design involves dilatancy or liquefaction.
- Use seismic measurements for stiffness in sand; tip resistance correlations for stiffness are indicative only.
- Do not attempt to derive at-rest stress or stress history in sand from the cone.
- Report friction angle at the stress level relevant to the design, acknowledging envelope curvature.

## Checks

- Small-strain stiffness to tip resistance screening plotted for every granular unit
- Friction angle convention (triaxial or plane strain) stated
- State parameter derived where dilatancy or liquefaction matters
- Correlations used identified with the chamber database behind them
- Crushable or carbonate sands identified and standard silica-sand correlations excluded

## Common errors

- Applying fresh-sand chamber correlations to aged, cemented or residual granular deposits
- Reporting a single friction angle for a strongly non-linear envelope
- Deriving stiffness from tip resistance when a seismic measurement was available in the same sounding
- Estimating at-rest earth pressure coefficient in sand from cone data
- Ignoring crushability in carbonate and volcanic sands

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The proportionality constants in the bonding screening framework depend on cementation, age, compressibility and suction and require site-specific validation.
- Calibration chamber correlations carry boundary condition and chamber size effects that are not always corrected in published forms.

## Standards cited

ISO 22476-1, Eurocode 7 Part 2, ASTM D5778

## Related

- [[Rock weathering classes]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
