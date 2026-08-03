---
title: Apply overburden, energy, rod, sampler and borehole corrections to SPT N values
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Apply overburden, energy, rod, sampler and borehole corrections to SPT N values

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 4, Sections 4.6-4.9 (Tables 4.6, 4.7, 4.8 after Skempton 1986, and 4.9 after Skempton 1986 and Tokimatsu & Seed 1987), pp 48-52), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A defensible (N1)60 for use in granular soil correlations, with every applied factor documented, and a clear statement of where corrections do and do not apply.

## Inputs

- Raw field N with seating and test drive blow counts recorded separately
- Depth of test and depth to groundwater
- Assumed or measured unit weights above the test depth
- Hammer type and release mechanism (donut/safety, free-fall/trip/rope-and-pulley) and country of practice
- Rod length below the anvil at the test depth
- Sampler type (standard, or US sampler without liners) and borehole diameter
- Soil type - fine sand, coarse sand, silty sand, clay

## Procedure

1. Compute the effective overburden pressure at test depth from unit weights and the water table position - Look's Table 4.8 also gives an approximate depth-to-pressure mapping for several water table depths, computed on an assumed saturated unit weight, so recompute for the actual profile rather than reading depth directly.
2. Enter Table 4.8 with effective overburden pressure and the soil type (fine sand versus coarse sand have different columns) to read the overburden correction factor CN. Apply as the overburden-corrected value No = CN x N. This correction is for granular materials only.
3. Enter Table 4.9 with hammer type, release mechanism and country to read the hammer factor CH; with rod length below anvil to read the rod factor CR; with sampler configuration to read Cs; and with borehole diameter to read CB. Multiply these to get the equipment/energy correction CER.
4. Form the corrected value as (No)60 = CN x CER x N, normalising to sixty percent energy ratio. Record each factor used, not just the product, so a reviewer can retrace it.
5. Apply the fine/silty sand below-water-table dilation correction: above a threshold N, replace N with a reduced value using Look's halving rule for the excess above that threshold, to remove the artificial increase caused by negative pore pressure generation during driving.
6. Do not apply an overburden correction to N in clays - Section 5.3 states it is not required. Do not apply a borehole diameter correction in cohesive soils either.
7. Handle refusal and rock explicitly. Use the Table 4.7 conventions: full N for a completed 300 mm test drive after a 150 mm seating drive; partial penetration recorded as blows over the measured penetration, covering both seating and test drive; and an inferred N* where the value is extrapolated. Section 4.7 notes that raw N above about fifty adds little quantitative value in residual soil or extremely weathered rock, and that N* needs to be extrapolated to a much higher value before it is quantitatively useful to a designer.
8. Maintain borehole water balance below the water table - a head deficiency blows the base of the hole, loosens the soil, and produces a low, non-representative N. Record whether balance was maintained; if it was not, the result is not correctable.
9. State on the log whether N values are raw or corrected, and which correction set was used. Mixing the two across a project is the most common source of downstream parameter error.

## Decision rules

- Overburden correction applies to granular soils only; energy correction applies to all soils.
- Rod-length correction is applied on the length below the anvil, and is significant at shallow depth where short rods reflect energy - this is exactly where near-surface pavement and footing decisions are made.
- Whether inferred N* belongs on a factual log is contested; if it is shown, label it unambiguously and state the extrapolation basis.
- A low N below the water table in fine or silty sand should first be checked for a water balance failure before it is accepted as a soil property.
- Do not chain a corrected N into a correlation that was itself derived on uncorrected N (Table 2.17 density bands and Table 5.3 clay strength are examples where the base is uncorrected).

## Checks

- Each of CN, CH, CR, Cs, CB recorded per test, with source table cited
- Water table depth and unit weights used in the effective stress calculation stated
- Energy ratio basis (sixty percent) stated explicitly on the parameter sheet
- Corrected versus uncorrected status matched to the requirement of each downstream correlation
- Hammer energy measured directly for critical projects rather than taken from the equipment table

## Common errors

- Applying overburden correction in clay
- Using an unmodified overseas hammer factor for a locally built rig with a different release
- Ignoring rod-length correction for shallow tests, over-reading near-surface density
- Feeding corrected N into a correlation calibrated on field N (and the reverse)
- Accepting a low N caused by base blow-out as evidence of loose soil

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Correction factor sets differ between published sources; state which set was used and stay internally consistent.
- Measured hammer energy is preferable to a tabulated factor wherever the SPT governs the design.

## Standards cited

AS 1289.6.3.1 Standard penetration test, ASTM D1586, ISO 22476-3

## Related

- [[Rock weathering classes]]
- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
