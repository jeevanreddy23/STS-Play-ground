---
title: Select permeability, consolidation and dewatering parameters for soil and rock
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Select permeability, consolidation and dewatering parameters for soil and rock

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 8 Permeability and its influence, Sections 8.1-8.23 (Tables 8.1 to 8.23), pp 101-111), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A permeability and consolidation parameter set bracketed by grain size, classification and in-situ dissipation data, with a dewatering method and drawdown radius selected to match.

## Inputs

- Particle size distribution including effective size and uniformity coefficient
- USC classification and fines content
- CPTu dissipation records (time to fifty percent dissipation, pore pressure sensor position)
- Compaction condition and moulding moisture content for compacted clays
- Rock: joint spacing, aperture and Lugeon/packer test results
- Overburden or consolidation pressure regime

## Procedure

1. Bracket permeability three ways. Start with Table 8.1 typical values by material, then Table 8.4 using Hazen's grain-size relationship, then Table 8.5 by USC classification. Hazen applies only to coarse-grained, reasonably uniformly graded material within a limited effective-size range, and is inaccurate for gap-graded or stratified soils.
2. Convert units deliberately with Table 8.2 - metres per second is conventional but metres per day is often more meaningful to a client and to a dewatering contractor. Table 8.3 compares soil permeability with other engineering materials for scale.
3. Prefer in-situ measurement where it matters. Enter Table 8.6 with the measured time to fifty percent dissipation to read permeability, and Table 8.18 to read the coefficient of consolidation. Look states dissipation testing is more reliable than laboratory consolidation testing for the coefficient of consolidation, because the laboratory specimen misses the sand lenses that dominate drainage. Record the pore pressure sensor position - the correlations assume a particular position.
4. Apply the modifiers. Table 8.7 for the reduction in permeability under consolidation pressure (coarse materials are less affected); Table 8.8 for the disproportionate effect of a small percentage of fines on a filter sand; Table 8.9 and 8.10 for compacted clays, where compacting wet of optimum can reduce permeability by around two orders of magnitude relative to dry of optimum.
5. For consolidation, use Table 8.15 to relate permeability and coefficient of consolidation, Table 8.16 for typical values, Table 8.17 for the variation with liquid limit, Table 8.19 for time factors and Table 8.20 to convert to a drainage time for the deposit thickness and drainage boundary conditions.
6. For rock, estimate mass permeability from Table 8.21, apply the joint effect from Table 8.22 (aperture and spacing dominate, not matrix permeability), and interpret packer testing with Table 8.23 - a Lugeon is defined as a specified water loss per metre of test section at a specified pressure and maps to an approximate permeability. Below one Lugeon there are too few open joints to accept water.
7. Select the dewatering method from Table 8.12 by soil type - the applicable ranges for sumps, wellpoints, deep wells and vacuum or electro-osmotic methods do not overlap much - and take the drawdown radius of influence from Table 8.13.
8. Sanity-check the water balance with Table 8.14 typical hydrological values and, for open channels and canals, the comparison of channel flow with seepage in Table 8.22 of Chapter 15.

## Decision rules

- Permeability is the most variable parameter in the book's scope - present a range spanning at least an order of magnitude unless in-situ testing narrows it.
- Granular material stops being free draining once fines exceed a modest percentage, and well-compacted granular material with fines can be low permeability - specify and test the fines content where drainage is the function.
- Use in-situ dissipation data in preference to oedometer-derived coefficient of consolidation where lensing is likely.
- In rock, matrix permeability is largely irrelevant; joint aperture, spacing and connectivity govern.
- Compacted clay liner permeability is controlled by moulding moisture content as much as by density - specify moisture relative to optimum, not density alone.

## Checks

- Permeability bracketed by grain size, classification and in-situ test, with the spread reported
- Coefficient of consolidation from dissipation testing compared against the liquid-limit-based estimate
- Drainage time computed for the correct drainage path length and boundary condition
- Dewatering method within its applicable soil range in Table 8.12
- Packer test pressures and section lengths recorded so Lugeon values are reproducible

## Common errors

- Applying Hazen's relationship outside its grain-size and uniformity limits
- Using laboratory consolidation coefficients in a layered alluvial profile with sand partings
- Specifying a filter sand by grading envelope without controlling fines
- Selecting wellpoints in ground outside their applicable permeability range
- Reporting rock permeability from core-scale testing rather than from packer testing across joint sets

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The Lugeon-to-permeability equivalence is approximate and test-configuration dependent.
- Compacted clay permeability data cited is from specific local clays and should be confirmed by project-specific testing for liner design.

## Standards cited

AS 1289.6.7 series (permeability), ISO 22282 Geohydraulic testing (including water pressure tests in rock), AS 1289.6.6.1 Determination of the one-dimensional consolidation properties

## Related

- [[Groundwater observations]]
- [[Soil description order]]
- [[Skills]]
