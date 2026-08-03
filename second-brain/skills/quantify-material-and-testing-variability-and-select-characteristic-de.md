---
title: Quantify material and testing variability and select characteristic design values with the right distribution
type: skill
tags: [skill, general]
confidence: high
updated: 2026-08-01
---

# Quantify material and testing variability and select characteristic design values with the right distribution

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 10 Material and testing variability with risk assessment, Sections 10.1-10.31 (Tables 10.1 to 10.31), pp 125-142), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Characteristic values chosen from data using a defensible distribution and percentile, with the split between natural variability, measurement error and spatial/temporal variation made explicit.

## Inputs

- Population of test results for the parameter, with test type and locations
- Test method and its known variability class
- Project type, road class or structure class for the target reliability
- Whether the limit state is ultimate (strength) or serviceability (deformation)
- Number of samples per lot and lot definition where conformity testing applies

## Procedure

1. Separate the sources of scatter before analysing the data. Table 10.5 frames total variability as natural variability plus testing variability; Table 10.15 adds the design and construction process contribution; Table 10.31 shows that repeating the same test at the same nominal location, at a shifted location, and at a later date adds testing, spatial and temporal components respectively. Do not attribute all scatter to the ground.
2. Set expectations for the coefficient of variation before looking at the data: Table 10.1 for materials generally, Table 10.2 for soils by parameter (index parameters are far more repeatable than strength and compressibility), Table 10.3 for in-situ tests (SPT high, electric cone and dilatometer low), Table 10.4 for laboratory tests, Table 10.8 for road materials and Table 10.9 for deflection testing. A dataset far outside these ranges signals a problem with sampling or with the population definition, not a discovery.
3. Choose the distribution deliberately. Tables 10.10, 10.11 and 10.12 show that assuming normality on strength data produces negative characteristic values at the lower percentiles, and that a lognormal distribution is the recommended default for soil and rock strength. Use the median rather than the mean where the distribution is skewed.
4. Demonstrate the effect on the answer. Look's two worked comparisons - soaked CBR over a long linear project (Table 10.13) and point load index at a bridge pier (Table 10.14) - both show a normal-distribution characteristic value going negative or being a small fraction of the better-fit value. Repeat that comparison on project data rather than asserting it.
5. Pick the percentile from the limit state and the project reliability. Table 10.26 sets ground condition acceptance by project type, Table 10.27 gives road reliability levels by road class, and Table 10.28 relates reliability index to probability of failure. Ultimate limit states use characteristic strength values; serviceability limit states use deformation criteria and generally different percentiles.
6. For compaction and earthworks conformity, use Table 10.6 precision values and Table 10.7 compaction control guidelines - the density ratio is more repeatable than the moisture ratio, so moisture is a guide to achieving density rather than a conformity parameter in its own right.
7. For slope and landslide work, move into the risk tables: Table 10.18 tolerable risk for new versus existing slopes, Table 10.19 rock slope failure probabilities, Tables 10.20 to 10.23 for the qualitative risk matrix, likelihood, consequence and risk-level implications, Table 10.24 acceptable probability of failure by consequence, and Table 10.25 to relate factor of safety to probability of failure under a lognormal assumption.
8. Report the selected value with: number of samples, distribution used, percentile, coefficient of variation and the reason the percentile was chosen. Where fewer than four samples exist in a lot, do not compute statistics - use a minimum-value criterion instead.
9. Where prediction rather than measurement is involved, temper confidence with Tables 10.16 and 10.17: expert predictions have narrower spread than industry practice, largely because of the effort expended, and practitioner selection of design values from the same dataset varies widely.

## Decision rules

- Default to a lognormal distribution for soil and rock strength; justify any use of a normal distribution.
- A negative characteristic value is proof the distribution assumption is wrong, not a conservative outcome.
- Statistical conformity schemes require a minimum sample count per lot; below it, apply a no-value-shall-be-less-than criterion.
- Higher reliability costs construction money - set the road or project reliability level explicitly rather than defaulting to the highest.
- Layered profiles can carry different coefficients of variation per layer; do not apply a single site-wide value.

## Checks

- Coefficient of variation of the dataset compared against the expected range for that test and parameter
- Distribution fit tested, not assumed
- Characteristic value recomputed under an alternative distribution to show the sensitivity
- Sample count per lot against the statistical scheme's minimum
- Whether spatial and temporal separation of the tests matches the volume the value will be applied to

## Common errors

- Applying a normal distribution to strength data and reporting a low or negative fifth-percentile value
- Attributing all scatter to ground variability when much of it is test repeatability
- Using the mean of a skewed dataset as the characteristic value
- Running statistics on fewer samples than the scheme requires
- Pooling data across geological units to increase the sample count

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The landslide risk tables reproduce AGS 2007 structures - use the current AGS publication for actual risk assessments.
- Reliability levels vary between road authorities; confirm the project's own requirement.

## Standards cited

Eurocode 7 (characteristic value concept), AGS Practice Note Guidelines for Landslide Risk Management 2007, RMS Q / TfNSW statistical conformity schemes

## Related

- [[Rock strength classes]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
