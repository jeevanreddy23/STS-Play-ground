---
title: Assign soil state, unit weight, stress history and suction parameters before analysis
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Assign soil state, unit weight, stress history and suction parameters before analysis

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 7 Soil properties and state of the soil, Sections 7.1-7.25 (Tables 7.1 to 7.25), pp 85-100), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A parameter set that describes the state of the soil - density, unit weight, overconsolidation ratio, lateral stress, suction and its likely seasonal change - so that strength and stiffness values are interpreted in the right state rather than as fixed properties.

## Inputs

- Soil classification, plasticity and fines content
- Moisture condition and depth to water table
- CPTu net cone resistance, DMT horizontal stress index, or shear wave velocity where available
- Undrained strength profile and effective overburden stress
- Site climate: annual rainfall, Thornthwaite Moisture Index, and depth of active zone
- Compaction condition where the soil is placed fill

## Procedure

1. Decide first whether the material behaves as a sand or a clay using Table 7.1. Look's threshold is a fines content of roughly thirty percent, depending on gradation, above which the fines govern. Where the governing behaviour is uncertain, design for both models rather than picking one.
2. Record the state of the soil with Table 7.2 - density, moisture, stress history and structure all shift the properties of the same material, so a property quoted without a state is not usable.
3. Assign unit weights from Table 7.3 by material type, taking care to use saturated unit weight below the water table and within the capillary zone, and buoyant unit weight where uplift or effective stress calculations require it. Note compacted rock fill has a lower unit weight than the same rock in situ.
4. Use colour (Table 7.4), plasticity mineralogy (Table 7.5 with the A-line and U-line relationships), weighted plasticity index (Table 7.6) and grading effects (Table 7.7) as consistency checks on the classification and as reactivity indicators.
5. Assign effective strength parameters: Table 7.8 for granular friction by size, type and compaction, and Table 7.9 for cohesive soils, distinguishing peak from critical state and allowing for long-term softening and loss of effective cohesion.
6. Establish stress history. Enter Table 7.10 for overconsolidation ratio bands and their causes. Derive preconsolidation stress independently from CPTu net cone resistance (Table 7.11), from DMT (Table 7.12) and from shear wave velocity (Table 7.13) - each table has separate guidance for intact versus fissured clays, and only the electric piezocone is accurate for the CPT route.
7. Derive overconsolidation ratio from DMT horizontal stress index (Table 7.14) and from the undrained strength ratio (Tables 7.16 and 7.17), noting the friction angle dependence of the strength-ratio route and that it applies to unstructured, uncemented clays.
8. Get lateral stress from DMT via Table 7.15 - and treat a low horizontal stress index as a warning of a possible pre-existing slip surface in a slope investigation.
9. For unsaturated and reactive ground, work the suction chain: Table 7.18 for the suction scale sign posts, Table 7.19 for typical suction by material and moisture state, Table 7.20 for capillary rise by soil type, Table 7.21 for Australian equilibrium suctions, Table 7.22 for suction change by climate, and Table 7.23 for active zone depth by climate using the Thornthwaite Moisture Index.
10. Where the material will be compacted, close with Tables 7.24 and 7.25: optimum moisture content and maximum dry density are reference points for a specific compactive effort, not targets, and compaction wet of optimum produces lower suction while heavier compaction induces higher suction - which matters directly for later movement of reactive fills.

## Decision rules

- Never quote a strength or stiffness without the state it applies to (density, moisture, stress history).
- Preconsolidation and overconsolidation correlations split between intact and fissured clays - identify the fabric first, because the fissured branches use different parameter ranges.
- A horizontal stress index near the normally consolidated value in a slope investigation is a flag, not a parameter.
- For long-term analyses in overconsolidated fissured clay, treat effective cohesion as unreliable; where zero cohesion causes numerical instability, use a small value and document it as a numerical device, not a strength.
- Equilibrium moisture content, not optimum moisture content, determines the long-term state of a compacted reactive fill - and the two coincide only in certain climates.

## Checks

- Overconsolidation ratio derived by at least two independent routes and reconciled
- Unit weights consistent between the effective stress profile, the settlement calculation and the stability model
- Weighted plasticity index computed where a large coarse fraction was removed for Atterberg testing
- Active zone depth and equilibrium suction consistent with the site climate zone
- Peak versus critical state strength choice stated explicitly and matched to the limit state

## Common errors

- Applying intact-clay preconsolidation correlations to fissured clay
- Using dry unit weight below the water table
- Treating optimum moisture content as the design long-term moisture state of a reactive fill
- Adopting peak effective cohesion in a long-term cutting
- Ignoring the fines threshold and applying sand correlations to a soil whose fines control behaviour

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Suction and active-zone tables are Australian climate specific and drawn from an earlier AS 2870 edition - check the current edition.
- Stress-history correlations are drawn from international databases and can be poor in structured, cemented or residual soils.

## Standards cited

AS 2870 Residential slabs and footings (soil suction, climate zones, active zone), AS 1289 series, AS 1726

## Related

- [[AS 1726 soil and rock description]]
- [[AS 2870 residential site classification]]
- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
