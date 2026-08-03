---
title: Select, install and calibrate a pressuremeter for the ground and the parameter required
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Select, install and calibrate a pressuremeter for the ground and the parameter required

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 5 Pressuremeter tests - Types of instruments (pp 176-182, Figures 5.1 to 5.4), Calibration procedures (pp 182-183, Figure 5.5), Experimental results (pp 183-185, Figures 5.6-5.7); elastic unloading limit (p 204, Figure 5.20)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A pressuremeter programme in which the installation method matches the parameter being sought, the probe geometry satisfies the cavity expansion assumption, and all three calibration families have been carried out so the corrected curve is meaningful.

## Inputs

- Target parameters: in-situ horizontal stress, shear modulus, strength, or a stiffness degradation curve
- Ground conditions including hardness - soft clay through to hard soils and soft rocks
- Probe type available: pre-bored, self-boring, push-in or cone-mounted, driven
- Probe geometry: expanding length to diameter ratio, pressure capacity
- Measurement system: volume change or strain arms
- Programme and budget constraints

## Procedure

1. Check the probe geometry against the analysis. The expanding length must exceed a stated multiple of the diameter so the probe can be modelled as an infinitely long cylindrical cavity; a shorter probe breaks the assumption underlying every interpretation method.
2. Match pressure capacity to the ground. Instrument capacities span a wide range, with the upper end intended for hard soils and soft rocks; a probe that reaches its capacity before limit pressure gives no limit pressure.
3. Choose installation by the parameter. A pre-bored probe is lowered into a preformed hole and is simple and cheap, but the borehole wall has been unloaded before testing. A self-boring probe cuts its own way in with the aim of minimal disturbance, and is the technique the book identifies as the most appropriate for determining in-situ horizontal stress. A push-in or cone-mounted probe is driven into the ground - simple and economical, giving a continuous penetration profile alongside the expansion data, but the ground is disturbed, so large strain analysis is required. A driven probe hammered into hard soils and soft rocks uses conventional coring or dynamic probing rigs to keep costs down.
4. For the pre-bored Menard type, understand the measurement chain: gas pressure applied at the surface, displacement inferred from the change in volume of a water-filled central cell, with upper and lower guard cells inflated to keep the central cell expanding radially as a cylinder. Two pressure gauges of different sensitivity give resolution at low and high pressures.
5. For self-boring probes, control the installation. Adjust the jetting pressure to the total overburden pressure, and set the internal cutter position relative to the shoe according to the ground - near the leading edge in stiff clay and dense sand, and set back by about the probe radius in soft clay and medium dense sand. The book is direct that the balance of thrust, cutter speed, drilling fluid pressure and flow rate is hard to achieve, which is why self-boring is time consuming and expensive.
6. Know the measurement system's implications: French self-boring devices infer radial strain from volume change while British devices use strain-gauged feeler arms; the arms give individual readings that will disagree with each other near lift-off.
7. Carry out all three calibration families before testing. Calibrate absolute pressure and displacement transducers periodically, reporting repeatability, non-linearity and hysteresis against the instrument's stated accuracy. Calibrate system compliance by expanding the probe inside a thick-walled steel cylinder to the maximum anticipated working pressure - for volume systems this captures compression of the probe, lines and control unit; for radial systems it captures membrane thickness change. Calibrate membrane stiffness by inflating the probe in air at an expansion rate similar to the field test.
8. Take the compliance calibration seriously for stiffness work. Unload-reload loops in stiff soils produce small strain amplitudes, where inaccuracies in the measuring system produce large modulus errors. Run the compliance calibration by performing unload-reload loops in the steel cylinder in the same manner as the field test, obtain a system modulus at various cavity pressures, and correct the measured modulus by combining the measured and system compliances in series. A further minor correction accounts for the finite length of the probe.
9. Apply the corrections in the right order: subtract membrane stiffness from the recorded inflation pressure first, then correct the shear modulus for compliance and for finite probe length.
10. Note the book's blunt position that pressuremeter testing is almost worthless without proper instrument calibration - and that membrane stiffness calibration has serious implications for interpretation in soft clay while being less critical in stiff clay and dense sand.
11. Plan the test control mode. Menard tests are stress controlled with equal pressure increments held for a fixed interval and volume readings at set times within it, aiming for expansion to about twice the initial cavity volume. For strain-arm devices, a fixed strain rate records too few points in the stiff initial elastic phase while a fixed stress increment lets the strain rate run away after yield - so run stress controlled in the elastic phase and switch to strain controlled once the soil yields. In clay, use a rate high enough to guarantee undrained shear.
12. Plan unload-reload loops during expansion to obtain shear modulus, and keep each loop within the elastic range - in sand the permissible change in cavity effective stress during elastic unloading depends on the friction angle and on the cavity stress at which unloading begins, so the allowable loop size grows as the test progresses.
13. Consider adding geophones to the pressuremeter rod. Combining a small-strain modulus with the strain range the self-boring pressuremeter covers builds a shear modulus degradation curve, which is what lets an operational design stiffness be selected.

## Decision rules

- If in-situ horizontal stress is the target, use a self-boring probe; pre-bored and push-in devices disturb the stress state.
- An uncalibrated pressuremeter produces numbers, not parameters.
- Keep unload-reload loops within the elastic range; oversized loops contaminate the modulus with plastic strain.
- Match the control mode to the phase of the test - stress controlled while elastic, strain controlled after yield.
- Where the probe reaches capacity before limit pressure, the limit pressure must be extrapolated and that extrapolation stated.

## Checks

- Expanding length to diameter ratio verified against the cavity expansion requirement
- Transducer, compliance and membrane calibrations all current and documented
- Compliance calibration performed with loops mimicking the field procedure
- Cutter position and jetting pressure recorded for self-boring installations
- Loop sizes checked against the elastic unloading limit for the cavity stress at which each began
- Test control mode and strain rate recorded

## Common errors

- Using a pre-bored test to estimate in-situ horizontal stress
- Skipping compliance calibration and reporting inflated stiff-soil moduli
- Running loops so large they enter the plastic range
- Self-boring with the cutter mis-set for the ground, disturbing or plugging the shoe
- Reporting a limit pressure that was extrapolated without saying so

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Self-boring installation quality is operator dependent and is not always achievable even with skilled crews.
- Menard-type parameters are only valid when obtained by the standard Menard procedure - a non-standard test cannot be used with the Menard design rules.

## Standards cited

ASTM D4719 (pre-bored pressuremeter), EN ISO 22476-4 to 22476-6, BS 5930 / BS 1377 Part 9

## Related

- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
