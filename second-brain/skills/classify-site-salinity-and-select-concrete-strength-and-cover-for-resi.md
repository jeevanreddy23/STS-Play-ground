---
title: Classify site salinity and select concrete strength and cover for residential slabs and footings
type: skill
tags: [skill, salinity]
confidence: high
updated: 2026-08-01
---

# Classify site salinity and select concrete strength and cover for residential slabs and footings

> **Source:** `INDUSTRY_GUIDE_T56_Residential_Slabs_and_Footings_in_Saline_Environments.pdf` (Sections 3.5-3.6 (Tables 1-2, pp. 4-5) and 6.1-6.2 (Table 4 and cover recommendations, pp. 9-11)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A concrete grade and reinforcement cover matched to the site's ECe salinity class so slabs and footings achieve their design life in saline ground.

## Inputs

- Soil ECe values with depth (from EC1:5 x texture factor or saturation extract)
- Soil permeability class (sands vs silts/clays) and pH
- Footing system type (stiffened raft with membrane, strip/pad footings, retaining walls)
- Design life expectation (nominal 50 years for houses; 10-20 years may suffice for sheds/small walls)

## Procedure

1. Establish the salinity class from ECe in dS/m per the Richards-based table (T56 Table 2, p. 5): non-saline <2, slightly saline 2-4, moderately saline 4-8, very saline 8-16, highly saline >16; soils are generally regarded saline above ECe 4 dS/m.
2. Select minimum concrete grade from the salinity class (T56 Table 4, p. 10): N20 for non-saline and slightly saline, N25 moderately saline, N32 very saline, above N40 for highly saline.
3. Select cover to reinforcement (T56 Section 6.2.3, p. 11): membrane-protected slabs/internal beams 20 mm to internal surfaces and 30 mm to the membrane face; unprotected perimeter beams/strip footings 40 mm non-aggressive, 45 mm moderately saline, 50 mm very saline, 55 mm highly saline.
4. For strip and pad footings (rarely membrane-wrapped), design the concrete itself for site exposure; only reduce strength/cover if the member is completely encased in membrane.
5. Check pH/acidity separately: the strength table is a saline-conditions guide and may be inadequate in highly acidic soils; AS 2159 treats permeability classes differently (the guide notes ~25 MPa minimum in low-permeability silts/clays vs ~32 MPa in permeable sands where groundwater replenishes at the concrete face).
6. Where salt type matters (e.g. suspected magnesium/ammonium sulphates, classified as more severe than calcium/sodium/potassium sulphates), commission ion analysis rather than relying on total-EC alone.

## Decision rules

- Treat the plastic membrane as an additional safeguard, not the primary durability measure — codes permit 20 MPa on the basis of a perfect membrane, but specifying strength/cover for the actual exposure is the more robust approach, especially for strip/pad footings.
- Because standard concrete grades step ~25% apart, small ECe uncertainties rarely change the selected grade — do not over-refine the salinity estimate for this purpose.
- For sites with potential (not current) salinity hazard, design for the hazard to exist within the 50-year design life rather than betting on guarantees that conditions will not change.
- Urban saline groundwater is typically well below seawater concentration (worst Wagga Wagga bores ~33% of seawater chloride) — design for measured site exposure, not marine defaults, unless data says otherwise.

## Checks

- EC measurement method (EC1:5 vs ECe saturation extract) and conversion factors documented before classification.
- Aggressivity classification cross-checked against AS 2159 exposure tables and the project spec.
- Cover selections compatible with AS 2870 details for the chosen footing system.

## Common errors

- Classifying from raw EC1:5 without texture conversion, understating the class.
- Relying on the membrane to justify minimum-grade concrete in strip/pad footings that cannot practically be wrapped.
- Ignoring soil permeability: the same salinity is more aggressive in sands (replenished exposure) than clays.
- Applying the saline-soil table to acid sulfate or highly acidic ground without additional measures.

## Caveats

- Classification and aggressivity calls must be verified against the source document, current AS editions and the project specification — T56 tables are industry recommendations, not code minima.
- The guide itself flags that an arbitrary ECe cutoff is a simplification of building impact; salt type, water movement and wetting/drying govern actual attack.
- EC vs ECe distinction: T56 uses ECe for classification but quotes some comparators (drinking water 2.5 dS/m, seawater ~59 dS/m) as plain EC — do not mix these scales.
- Related guidance merged from building-in-saline-environment-080145.pdf (Australian Standards section, pp. 16-17).

## Standards cited

AS 2870 Residential Slabs and Footings, AS 3600 Concrete Structures; AS 2159 Piling - Design and Installation; AS 3735 Concrete Structures for Retaining Liquids, AS 1379 Specification and Supply of Concrete, National Construction Code Vol 2; BRE Special Digest 1 (aggressive ground, for sulfate-dominated cases)

## Related

- [[AS 2159 piling]]
- [[AS 2870 residential site classification]]
- [[Groundwater observations]]
- [[Library - salinity and sodic soils]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
