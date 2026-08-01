---
title: Derive granular soil friction angle from corrected SPT blow counts
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Derive granular soil friction angle from corrected SPT blow counts

> **Source:** `8 Determination of Geotechnical Parameters.pdf` (CIRIA Report 143, Section 8.1.1 (pp 78-79) and Figures 36-37), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A design effective friction angle for sands and gravels from SPT resistance, corrected for hammer energy and overburden, with awareness of the triaxial versus plane-strain distinction.

## Inputs

- Measured SPT N values with hammer/energy details
- Vertical effective stress at each test depth
- Soil description (grading, angularity, mineralogy)
- Peck, Hanson & Thornburn chart and Mitchell et al (1978) stress-dependent correlation

## Procedure

1. Correct measured N for both energy delivery and overburden pressure before entering any friction-angle chart.
2. Read phi' from the Peck, Hanson & Thornburn chart (Figure 36a of the report) for routine design; use the Mitchell et al correlation (Figure 36b) where explicit vertical-stress dependence is wanted.
3. Recognise the chart tends to underestimate phi', making it a safe basis for routine design.
4. Decide whether the application needs the triaxial or plane-strain angle: retaining walls, slopes and long footings are plane-strain problems, where phi' typically runs roughly 10% above the triaxial value.
5. Sanity-check the result against the constituents of granular strength: critical state angle (about 33 degrees for quartz sands up to about 37 for feldspathic, and higher for well-graded sands) plus a density-dependent dilatancy component.

## Decision rules

- If the deposit is cemented or aged, standard density-based correlations may not apply.
- Compare SPT-derived phi' with values from other in-situ or laboratory tests wherever possible before adoption.

## Checks

- Correction convention (N1, N60, (N1)60) stated explicitly with every value.
- Derived phi' within the plausible band for the soil's grading and angularity.

## Common errors

- Entering charts with uncorrected field N.
- Using triaxial-based phi' unmodified in plane-strain problems (conservative but potentially uneconomic).
- Ignoring stress-level dependence of the dilatancy contribution.

## Caveats

- UK-practice document; check compatibility with local SPT equipment and energy ratios.
- Design reference only: correlations must be verified against the source figures and reviewed by a qualified engineer before use.

## Standards cited

Peck, Hanson & Thornburn (1974); Bolton (1986); Stroud (1989) review

## Related

- [[Skills]]
- [[Skills]]
