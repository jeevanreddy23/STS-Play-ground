---
title: Run a flat dilatometer test and compute the intermediate parameters
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Run a flat dilatometer test and compute the intermediate parameters

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 6 Flat dilatometer test - Equipment and procedures (pp 243-249, Figures 6.1 to 6.6), Intermediate DMT parameters: material index, horizontal stress index, dilatometer modulus (pp 249-250)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Corrected lift-off and expansion pressures from a properly calibrated dilatometer, converted to the three index parameters that all DMT interpretation rests on, with the membrane calibration and timing controlled.

## Inputs

- Dilatometer blade with membrane, control unit with low and high range gauges, push rods and gas supply
- Membrane calibration readings taken in free air before and after each sounding
- Gauge zero offset when vented to atmosphere
- Equilibrium pore pressure and effective vertical stress profile
- Penetration rate and the time between reaching depth and taking readings

## Procedure

1. Understand the working principle. The blade is pushed to depth; a flexible circular steel membrane on one face is then inflated with gas. An electrical contact behind the membrane is grounded at rest and produces an audible signal; when internal pressure just exceeds the external horizontal stress the membrane lifts and the signal stops, giving the first reading; when the membrane centre has moved a fixed small distance the contact re-closes and the signal resumes, giving the second reading. A third, optional closing reading is taken on slow deflation, which in sand approximates the pore pressure.
2. Drive the blade at a constant rate within the standard range, then inflate promptly. The reference practice requires the first reading within a short fixed interval after reaching test depth and the second reading within a similar interval after the first, with the whole sequence taking around a minute. Tests within those limits give an essentially drained response in sand and an undrained response in clay; in intermediate-permeability silts partial drainage occurs and interpretation becomes uncertain.
3. Calibrate the membrane before and after every sounding. Determine the external pressure needed in free air to hold the membrane against its seat, and the internal pressure needed in free air to lift the membrane centre by the fixed travel, using the control unit and a syringe to generate vacuum and pressure. The book states this is essential, particularly in soft soils, where the calibration values are of the same order as the readings themselves.
4. Apply the acceptance limits. The reference standard sets ranges within which the two membrane calibration values must lie before the blade is inserted, and a maximum permitted change in either value between the start and end of the sounding. A membrane failing those limits is replaced, and a sounding whose calibration drifted beyond the permitted change is not acceptable.
5. Convert readings to the two corrected pressures using the standard expressions, which combine both raw readings, both membrane calibration values and the gauge zero offset - the lift-off pressure is not simply the first reading corrected, it is a weighted combination of both readings.
6. Compute the three index parameters. The material index is the difference between the two corrected pressures divided by the effective lift-off pressure (lift-off less equilibrium pore pressure), and indicates soil type. The horizontal stress index is the effective lift-off pressure normalised by effective vertical stress, and carries the stress history information. The dilatometer modulus is a fixed multiple of the difference between the two corrected pressures, and carries the compressibility information.
7. Recognise what each pressure means physically: the lift-off pressure is inherently related to in-situ horizontal effective stress and therefore to preconsolidation pressure and stress history, while the difference between the two pressures is the basis for evaluating compressibility.
8. Present the standard output set: material index, constrained modulus, undrained shear strength and horizontal stress index side by side against depth, with a fifth shear wave velocity panel where a seismic dilatometer is used.
9. Consider the seismic dilatometer where stiffness matters. It houses two receivers at a fixed spacing to measure shear wave velocity, giving small-strain shear modulus from the same sounding - an independent stiffness measurement that supports dynamic soil-structure interaction and seismic assessment.
10. Note the reproducibility that makes the test useful: the working principle is simple and the results are highly reproducible, which is what allows a largely empirical interpretation framework to be trusted.

## Decision rules

- Calibrate the membrane before and after every sounding; a sounding without both calibrations is not interpretable.
- Replace any membrane whose free-air calibration values fall outside the acceptance ranges.
- Keep the interval from reaching depth to taking readings inside the standard limits - a delayed reading is a partially consolidated reading.
- In intermediate-permeability silts, flag the sounding as partially drained rather than interpreting it as sand or clay.
- Report the corrected pressures and the three index parameters, not just the derived geotechnical parameters.

## Checks

- Membrane calibration values before and after each sounding, both within acceptance ranges and with drift within tolerance
- Gauge zero offset recorded and applied
- Penetration rate and reading timing within the reference limits
- Equilibrium pore pressure profile documented, since both the material index and the horizontal stress index depend on it
- Unit weight assumption for the effective stress profile stated

## Common errors

- Skipping the post-sounding membrane calibration and missing a membrane that changed during the test
- Taking readings late and reading a partly consolidated response
- Computing the lift-off pressure from the first reading alone
- Using an assumed hydrostatic pore pressure profile where the site is underdrained or artesian
- Interpreting silt profiles as if drainage conditions were known

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Membrane calibration acceptance limits are those of the standard current at publication - confirm the current edition.
- The optional closing pressure approximates pore pressure in sand only.

## Standards cited

EN ISO 22476-5, ASTM D6635, Eurocode 7 Part 3

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
