---
title: Measure SPT energy and apply overburden, energy and rod-length corrections
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Measure SPT energy and apply overburden, energy and rod-length corrections

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 2 SPT - Wave propagation analysis and The wave equation (pp 23-27), The mechanics of dynamic penetration tests (pp 26-30, Figure 2.6), Dynamic penetration force (pp 30-34, Figures 2.7-2.8), Measurements and corrections: Overburden pressure (pp 34-36, Table 2.2, Figure 2.9), Energy measurements (pp 36-37, Figures 2.10-2.11, Tables 2.4-2.5), Strain rate effect (pp 37-38)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Energy-corrected and stress-normalised blow counts derived from measured force and velocity where the SPT governs, with the wave-propagation reasons for the corrections understood rather than applied as black-box factors.

## Inputs

- Raw field N with seating and test drive counts
- Effective vertical stress profile and reference stress used for normalisation
- Instrumented measurement of force and acceleration below the anvil, or a documented energy calibration for the rig
- Rod length below the anvil at each test depth, rod area and material
- Whether the deposit is normally or overconsolidated, and whether it is sand or clay

## Procedure

1. Understand what the correction is correcting. Each hammer blow propagates as an elastic compression wave down the rod string; force and particle velocity are proportional through the rod impedance, which is the product of modulus and area divided by wave speed, and wave speed follows from modulus and density. Energy arriving at the sampler, not the nominal potential energy of the hammer, drives the sampler.
2. Measure energy properly where it matters. Record force with a load cell and acceleration with a pair of piezoelectric accelerometers mounted symmetrically on the load cell, integrating acceleration to velocity, and compute the transmitted energy as the time integral of the product of force and velocity. Use an acquisition system with adequate dynamic range for the accelerations a hammer impact produces, and monitor the signal in real time.
3. Set the integration window deliberately. For a long rod string the energy is delivered essentially within the first wave travel period (twice the rod length divided by wave speed) and integrating over that window is adequate. For shorter rods and for loose soils where the blow produces large permanent penetration, the hammer separates from the rod and re-impacts, and later impacts well beyond the first travel period add further energy that does contribute to penetration - integrating only to the first period underestimates the delivered energy.
4. Normalise the measured N to the internationally accepted reference of sixty percent of the hammer's potential energy, by scaling the measured N in proportion to the ratio of the measured energy ratio to the reference ratio. A rig delivering more than the reference energy produces a lower blow count and its N must be scaled up, and the reverse.
5. Where direct measurement is not available, use a documented energy efficiency for the exact hammer, anvil and release combination. The book's compilations show energy efficiency varying substantially with hammer type, anvil mass and release method, and also between nominally identical rigs, so a generic factor carries real uncertainty.
6. Normalise for overburden in granular soils. Penetration resistance increases roughly linearly with depth while, at constant vertical effective stress, it increases roughly with the square of relative density; the depth correction removes the stress effect so that resistances at different depths become comparable in density terms. Several published correction expressions exist, differing between normally consolidated and overconsolidated sands and between density ranges - select one, state it, and apply it consistently.
7. Check the correction is doing work. Schnaid's worked illustration is that a shallow low blow count and a deep much higher blow count in the same uniform sand normalise to nearly the same value - if the corrected profile still trends strongly with depth in a uniform deposit, the correction or the profile assumption is wrong.
8. Do not apply overburden correction in clay. Apply energy correction in all soils.
9. Allow for rod length effects. Rod length changes the timing and number of impacts contributing to penetration, which is the physical basis for the empirical rod-length factors used elsewhere; short rods at shallow depth are the case most affected.
10. Allow for strain rate. Field penetration strain rates are orders of magnitude above laboratory test rates, and the SPT sits at the extreme end; mobilised shear strength in a fast field test can substantially exceed a laboratory reference strength. In practice engineers assume either fully drained penetration in cohesionless soil or fully undrained penetration in cohesive soil, which is an approximation that fails in silts and in permeable sands where excess pore pressures do develop at SPT rates.
11. Report the corrected value with its full definition - energy reference, correction expression used, reference stress - and keep the raw values alongside.

## Decision rules

- Where the SPT governs a design, measure the energy rather than assume it.
- Apply overburden correction only in granular soils; apply energy correction everywhere.
- Choose one published overburden correction expression appropriate to the sand's stress history and density and use it throughout the project.
- Feed a correlation with the same corrected quantity it was calibrated on - some correlations are built on energy-corrected N only, some on stress-normalised and energy-corrected N.
- Where a blow produces large permanent penetration, expect multiple impacts and set the energy integration accordingly.

## Checks

- Energy calibration certificate or measured energy record for the rig, hammer and anvil used
- Corrected profile checked for residual depth trend in uniform deposits
- Correction expressions and reference stress documented on the parameter sheet
- Raw and corrected values both retained and distinguishable
- Rod length below anvil recorded per test

## Common errors

- Applying a generic energy ratio from a textbook table to a rig with a different anvil
- Integrating the energy record over only the first wave travel period in loose soil
- Applying overburden correction in clay
- Mixing energy-corrected and stress-normalised values in the same correlation
- Treating the drained/undrained assumption as exact in silty soils

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Published overburden correction expressions disagree with each other; the choice materially changes the normalised value at shallow and at great depth.
- Energy efficiency data cited is from specific national practices and equipment - it does not substitute for a project calibration.

## Standards cited

ASTM D4633 (energy measurement in penetration tests), ASTM D1586, AS 1289.6.3.1

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
