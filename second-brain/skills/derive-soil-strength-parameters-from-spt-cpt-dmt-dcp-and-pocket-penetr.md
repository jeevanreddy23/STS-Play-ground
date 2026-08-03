---
title: Derive soil strength parameters from SPT, CPT, DMT, DCP and pocket penetrometer data using Look Chapter 5
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Derive soil strength parameters from SPT, CPT, DMT, DCP and pocket penetrometer data using Look Chapter 5

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 5 Soil strength parameters from classification and testing, Sections 5.1-5.25 (Tables 5.1 to 5.25), pp 59-72), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Undrained strengths, friction angles and CBR estimates from field tests, each bracketed by at least two independent methods and each recorded with the correlation used and its stated limits.

## Inputs

- Corrected and uncorrected SPT N values with soil type and sand fineness/grading
- CPT/CPTu records: cone resistance, sleeve friction, friction ratio, pore pressure and cone type
- DMT intermediate parameters (material index, horizontal stress index, dilatometer modulus)
- DCP blow rates with hammer configuration
- Pocket penetrometer readings and where they were taken
- Effective overburden stress profile and soil classification (plasticity, sand/gravel content, residual or transported)

## Procedure

1. Open with the caution in Table 5.1: the trend to substitute correlations for laboratory testing produces conservative and sometimes simply wrong designs, and the correlations that follow are bracketing tools rather than measurements.
2. For cohesive soils, get a first undrained strength from pocket penetrometer readings via Table 5.2, remembering the reading is roughly twice the undrained strength and that the tool has no scale effect and misreads in gravelly clay. Never take pocket penetrometer readings on SPT split-spoon samples and treat them as in-situ strength.
3. Get a second undrained strength from SPT via Table 5.3, which is built on an undrained-strength-to-N multiplier. Look records that published multipliers vary substantially with plasticity between different authors, so treat the table as a band and calibrate locally.
4. In residual soils, switch to Table 5.4 - the strength-to-N relationship is parent-rock specific, some parent materials correlate poorly, and one case is driven by overburden rather than by N.
5. Get a third undrained strength from CPT via Tables 5.18 and 5.19 using a cone factor. Look flags the cone factor as the dominant source of interpretation uncertainty and requires site calibration for critical work.
6. Cross-check the undrained strength against effective overburden using the normally consolidated undrained strength ratio in Table 5.24, and adjust for test mode using Table 5.25, which shows how the strength ratio changes with the mode of shearing. A ratio well above the normally consolidated value indicates heavy overconsolidation, not a strong soil in the ordinary sense.
7. For granular soils, take friction angle from SPT with Table 5.5 (clean medium sand), then apply Look's adjustment direction for clayey sand (reduce) and gravelly sand (increase). For fine and coarse sands use Table 5.6 with the corrected N.
8. Adjust for the things that matter as much as density: use Table 5.8 for angularity and grading, Table 5.9 to build a critical state (constant volume) friction angle from a base value plus angularity and grading increments, and Table 5.10 to add a density-related increment for the peak angle. Use the critical state angle where large strains or long-term conditions govern.
9. Correct for age. Table 5.7 shows recent fills behave differently from natural deposits at the same corrected N - a fill at a given corrected N corresponds to a denser description than the natural-deposit tables imply.
10. For sands from CPT, use Table 5.20 for a preliminary friction angle, noting the result varies with effective overburden and sand type. From DMT, use Table 5.23 for sand strength and Table 5.22 for lateral stress; the horizontal stress index also flags possible slip surfaces at low values in slope investigations.
11. Classify soil behaviour type from CPT with Table 5.16, and use friction ratio alone (Table 5.17) only as a preliminary indication. From DMT use the material index with Table 5.21.
12. For shallow subgrade work, take strength and CBR from DCP: Table 5.11 for soil and rock parameters (noting DCP energy is a fraction of SPT energy and the cone shape penetrates more easily), Table 5.13 for a general DCP-CBR relationship, Table 5.14 for soil-type-specific relationships, and Table 5.15 for an allowable bearing capacity that already contains a factor of safety.
13. Present each parameter as a range with the derivation method attached. Where two methods disagree, report the disagreement and the reason rather than averaging.

## Decision rules

- Bracket every parameter with at least two independent derivations - Look's stated method for the whole book.
- Overburden correction is not applied to N in clays.
- DCP-CBR correlations weaken above roughly ten blows per 100 mm; above that, treat the CBR as indicative only.
- Cap subgrade CBR from DCP for clays at the low ceilings Look states, regardless of what the arithmetic produces.
- Where fines exceed roughly thirty percent of a granular soil, the fines govern the strength and granular correlations no longer apply.
- Use the critical state friction angle, not the peak, where the design permits strain to accumulate (cuttings, long-term slopes, large-displacement interfaces).

## Checks

- Undrained strength from at least two of pocket penetrometer, SPT, CPT and vane, plotted together against depth
- Undrained strength ratio against effective overburden checked for plausibility
- Friction angles checked against typical ranges for the soil type in Table 7.8
- Whether corrected or uncorrected N was required by each table used
- DCP-derived CBR checked against classification-based CBR from Table 5.12

## Common errors

- Applying a single undrained-strength-to-N multiplier across all plasticities
- Using transported-soil correlations in residual soils
- Adopting a peak friction angle in a long-term cutting analysis
- Reading a pocket penetrometer value as the undrained strength without halving
- Producing CBR values above the physical ceilings for clays because the correlation allowed it

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Correlations are region and material specific; Look repeatedly requires local calibration for critical design.
- Different tables in this chapter can produce different answers from the same data - that spread is the intended output, not an error to be averaged away.

## Standards cited

AS 1289.6.3.1 / 6.3.2 (SPT, DCP), AS 1289.6.1.1 CBR, ISO 22476-1 (CPT) and 22476-11 (DMT)

## Related

- [[DCP testing]]
- [[Library - RMS and TfNSW specifications]]
- [[Soil description order]]
- [[Skills]]
