---
title: Build a complete soil description and borehole record to the Look convention
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Build a complete soil description and borehole record to the Look convention

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 2 Soil classification and description, Sections 2.1-2.22 (Tables 2.1 to 2.22), pp 19-32), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Borehole and test pit logs where every descriptor a designer needs is present, in the right order, and where field descriptions are validated by laboratory classification rather than left as opinion.

## Inputs

- Field observations: soil type, consistency, moisture, colour, structure, origin
- Drilling method and equipment record, water level observations with time and method
- Field index tests (hand tests, pocket penetrometer, sedimentation jar test)
- Laboratory validation: particle size distribution, Atterberg limits, moisture content
- Project referencing data (site, location, test number, coordinates, elevation, inclination, dates)

## Procedure

1. Set the information hierarchy using Table 2.1: referencing first, then drilling information, then soil or rock type, then classification symbol, then strength/consistency, then description detail, then origin and structure. All items are required - the ranking is precedence, not permission to omit.
2. Lay out the log from the Table 2.2 (final log) and Table 2.3 (field log) templates. Look argues for a deliberately different field template - landscape, with space for field observations - because the designer reads the final log in a different sequence than the logger writes it.
3. Record drilling method, casing, flush and sampling with the Table 2.4 symbol set and the Table 4.2 boring types and Table 4.3 sampling symbols, and always attach the symbol legend to the log so a third party can read it.
4. Record water level with the Table 2.5 conventions, including the method and time of observation and the weather at the time; the standing level in a hole drilled with flush is not the piezometric level.
5. Classify soil type by particle size using Table 2.6 and describe with the major/minor component convention of Table 2.7 - two main components with the last term the predominant one, minor components described separately rather than stacked into a three-term name.
6. Do a field identification with Table 2.8 and, where the fines fraction is ambiguous, run the jar sedimentation test per Table 2.9 as an initial split between sand, silt and clay. Confirm with sieve and hydrometer before the description is relied on.
7. Assign a Unified Soil Classification symbol from Table 2.10, then validate it in the laboratory. Look is blunt that without a laboratory validation test the classification is an opinion - borderline cases such as silty sand versus sandy silt must be tested.
8. Add particle description (Table 2.11), grading (Table 2.12), colour (Table 2.13 with a colour chart), plasticity (Table 2.14 confirmed by Atterberg limits per Table 2.15), moisture condition (Table 2.19), structure (Table 2.18) and origin (Table 2.20).
9. Describe consistency of cohesive soils from Table 2.16 using tactile criteria supported by pocket penetrometer, and of non-cohesive soils from Table 2.17 using SPT N - noting that Table 2.17's N values are a first approximation on uncorrected N and behave as an upper bound in coarse granular material.
10. Where the profile is residual, use Tables 2.21 and 2.22 to record the parent rock and the mode of occurrence, and expect the residual profile to grade rather than to show the distinct layering of transported soils.

## Decision rules

- Atterberg tests are run on the fraction passing the 425 micron sieve - if a large proportion of the sample is coarser, the plasticity index alone misrepresents the mass, so pair it with the weighted plasticity index approach in Table 7.6.
- Structure is a design-relevant descriptor, not decoration: Look notes fissured clay may be designed at a substantially reduced fraction of intact strength, so record fissuring explicitly.
- N values above about 50 are commonly treated as rock, and Table 2.17 densities should not be extrapolated beyond that band.
- Colour on its own carries little direct design value; use it to infer moisture regime, drainage, weathering and origin, and standardise it against a chart.
- Distinguish natural moisture content from moisture added during drilling - they are different observations and only one is reportable as the ground condition.

## Checks

- Every log carries its symbol legend and full referencing block
- Percentage of logged strata with a laboratory-validated USC symbol
- Consistency descriptors cross-checked between tactile assessment, pocket penetrometer and SPT
- Water level entries record method and elapsed time
- Residual profiles identify parent rock type

## Common errors

- Issuing a USC symbol with no laboratory classification behind it
- Using three descriptors for a soil name instead of two plus separate minor components
- Reading Table 2.17 N-value bands off corrected N or in gravelly soils where they over-read density
- Recording a single water level with no note of when or how it was measured
- Omitting structure and fabric terms that later control the design strength

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Symbol sets are illustrative; each consultant and road authority maintains its own variant, so map to the project convention.
- Consistency and density bands differ between British, Australian and US practice at the extremes - state which convention the log follows.

## Standards cited

AS 1726 Geotechnical site investigations, AS 1289 series (classification and index testing), ASTM D2487 Unified Soil Classification System

## Related

- [[AS 1726 soil and rock description]]
- [[Rock weathering classes]]
- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
