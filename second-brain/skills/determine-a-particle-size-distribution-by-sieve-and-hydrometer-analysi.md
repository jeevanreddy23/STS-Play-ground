---
title: Determine a particle-size distribution by sieve and hydrometer analysis
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Determine a particle-size distribution by sieve and hydrometer analysis

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 2, §2.7 (sieve analysis, hydrometer analysis) with §2.6 for Gs), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A continuous grading curve for a soil from gravel size down to clay size, ready for classification and filter/permeability work.

## Inputs

- Representative oven-dried soil sample of adequate mass for the maximum particle size
- Nest of standard sieves with a pan, mechanical shaker and balance
- Sedimentation cylinder, ASTM 152H-type hydrometer, dispersing agent and thermometer for the fines fraction
- Specific gravity of solids (Gs) and test temperature (both enter the sedimentation constant)

## Procedure

1. Oven-dry the sample and break down aggregations without crushing individual grains; for cohesive soils make a slurry and wash through the finest sieve, then oven-dry and weigh each retained fraction separately.
2. Shake the dry soil through the sieve nest arranged coarse to fine over a pan; weigh the mass retained on each sieve and in the pan.
3. Sum all retained masses to a total, then form the cumulative mass retained above each sieve and subtract from the total to get mass passing; express as percent finer.
4. For the material finer than the 0.075 mm sieve, disperse a weighed sample (commonly about 50 g) in a 1000 mL sedimentation cylinder with a deflocculant and take hydrometer readings at a schedule of elapsed times.
5. Convert each hydrometer reading to an equivalent particle diameter using Stokes' law in the form D = K sqrt(L/t), where L is the effective sedimentation depth for the reading, t the elapsed time and K a constant that depends on Gs and water viscosity (temperature) — take K and L from the tables in the source.
6. Convert each reading to percent finer of the whole sample using the hydrometer correction and the fraction of the total sample that passed the 0.075 mm sieve.
7. Plot percent finer (arithmetic) against particle size (log scale) and join the sieve and hydrometer branches into one curve.

## Decision rules

- Use sieving for particles coarser than about 0.075 mm and sedimentation for finer material; do not attempt to sieve below the finest standard sieve.
- Wash-sieve rather than dry-sieve whenever the soil contains plastic fines that will not break down.
- Expect and accept a small step or offset where the sieve and hydrometer branches overlap — sieving reports an intermediate particle dimension while sedimentation reports an equivalent settling sphere diameter.

## Checks

- Check the sum of retained masses against the initial dry mass; losses beyond a small percentage invalidate the run.
- Check that the sample mass suits the maximum particle size present (too small a sample biases the coarse end).
- Check the temperature correction was applied to the hydrometer readings, and that the same Gs was used for the sedimentation constant as reported for the soil.

## Common errors

- Reporting hydrometer percentages against the sedimentation sub-sample rather than against the whole sample, so the two branches do not join.
- Crushing weak gravel or shale particles during lump breaking, shifting the curve fine.
- Ignoring the deflocculant, so clay flocs settle as silt-sized particles and the clay fraction is under-reported.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Sieve designations and aperture sizes, sedimentation constants and effective-depth values are tabulated in the source — read them from the book or the governing test standard.
- Australian practice uses AS 1289.3.6.1 / 3.6.3 rather than the ASTM procedures described here; apertures and sample masses differ.

## Standards cited

ASTM D422 (superseded) / ASTM D6913, D7928, AS 1289.3.6.1, AS 1289.3.6.3

## Related

- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
