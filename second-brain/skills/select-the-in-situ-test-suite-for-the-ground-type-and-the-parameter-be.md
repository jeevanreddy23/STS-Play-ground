---
title: Select the in-situ test suite for the ground type and the parameter being targeted
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Select the in-situ test suite for the ground type and the parameter being targeted

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 4 Field sampling and testing, Sections 4.1-4.5 and 4.10-4.20 (Tables 4.1 to 4.5, 4.10 to 4.20), pp 45-58; cross-reference Chapter 10 Section 10.3 (Table 10.3), p 126), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A field testing programme in which each test is chosen because it measures the parameter that governs the design, in ground where that test works, with known variability - rather than by habit or rig availability.

## Inputs

- Target design parameters (undrained strength, friction angle, modulus, permeability, consolidation, stress history)
- Expected ground profile: granular, cohesive, residual, bonded, weak rock
- Access, production rate and programme constraints
- Whether continuous profiling or discrete-depth parameter measurement is needed
- Required confidence and project geotechnical category

## Procedure

1. Start with Table 4.4 (types of field testing) and Table 4.5 (comparison of in-situ tests) to shortlist tests by what each actually measures and by the ground it suits.
2. Match test to ground behaviour. CPT and CPTu (Table 4.10) for profiling, lensing detection and continuous data in alluvial and soft ground; SPT (Tables 4.6-4.9) where sampling is also required or in ground the cone cannot penetrate; vane (Tables 4.13-4.14) for undrained strength in soft clay; dilatometer (Table 4.11) for stress history and lateral stress, ideally alongside a CPT; pressuremeter (Table 4.12) where in-situ deformation modulus is the target and the stress range can be matched.
3. Match test to parameter. For stress history and lateral stress prefer DMT and CPTu; for coefficient of consolidation prefer a CPTu dissipation test, which Look notes has proven more reliable than deriving the parameter from an oedometer; for modulus at a defined strain use the pressuremeter or a plate test rather than a penetration correlation.
4. Weight the shortlist by measurement variability. Section 10.3 (Table 10.3) ranks in-situ test variability including equipment, procedure and random components - the SPT is high variability, the electric cone and dilatometer among the lowest. Where a parameter drives the design, prefer the lower-variability test or increase the number of SPTs accordingly.
5. For shallow and pavement work, add the fast surface tools: DCP (Table 4.15) for continuous shallow profiling, light falling weight deflectometer (Table 4.16) for in-situ modulus, and Clegg impact soil tester (Table 4.17) for finding weak spots in compacted layers.
6. Use the walk-over and drive-over strength inference tables (4.18, 4.19, 4.20) as a free first-pass assessment of near-surface strength and trafficability - footprint depth under a person of known mass and shoe size, and rut depth under known plant, bracket the surface strength before any equipment is committed.
7. Record the exact configuration of each test: cone type (electric versus mechanical - they interpret differently), cone area and net area ratio, pore pressure sensor position, vane dimensions and shape, DCP hammer mass and drop height. Nearly every correlation in Chapters 5 and 7 is configuration specific.
8. Plan dissipation tests deliberately - they take minutes to hours and must be built into the production rate, which otherwise assumes continuous pushing.

## Decision rules

- Do not select a test whose result then has to be converted twice to reach the design parameter if a test exists that measures it more directly.
- The CPT is the profiling tool of choice for identifying thin layers and lenses; boreholes at the same spacing will miss them.
- Where the cone may refuse (very dense or cemented sands, weak rock), plan a rig with enough reaction mass or pair the CPT with boreholes rather than accepting a truncated profile.
- Direct-reading shear vanes are limited to shallow depths; deeper testing requires torque measurement at the head with rod friction accounted for.
- Mechanical and electric cone data must not be pooled - the classification and strength correlations differ.

## Checks

- Every design parameter traced to at least one test that measures it, plus one independent cross-check
- Test configuration recorded in enough detail to apply the Chapter 5 and 7 correlations
- Variability class of the governing test considered against the number of tests performed
- Dissipation tests scheduled where consolidation or permeability governs
- Refusal risk assessed before committing to a CPT-only programme

## Common errors

- Running SPTs alone in soft clay where the vane or CPTu gives far better strength data
- Interpreting mechanical cone data with electric cone correlations
- Omitting the pore pressure sensor position from the record, which makes the CPTu corrections ambiguous
- Building a programme on a test with high inherent variability without increasing the number of tests
- Not budgeting time for dissipation testing, then abandoning it under programme pressure

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Production rates quoted are Queensland/Australian and highly dependent on access, weather and tides.
- Test variability rankings are from published statistical studies and may not represent a particular contractor's equipment and crew.

## Standards cited

AS 1289.6.3.1 Standard penetration test, AS 1289.6.3.2 Dynamic cone penetrometer, ISO 22476 series Geotechnical investigation and testing - field testing

## Related

- [[DCP testing]]
- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
