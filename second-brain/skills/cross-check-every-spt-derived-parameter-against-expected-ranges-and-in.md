---
title: Cross-check every SPT-derived parameter against expected ranges and independent tests
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Cross-check every SPT-derived parameter against expected ranges and independent tests

> **Source:** `8 Determination of Geotechnical Parameters.pdf` (CIRIA Report 143, Section 8 introduction and Table 9 (p 77)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A quality-assurance habit applied to all SPT correlations: each derived parameter validated for plausibility, corrected consistently, and traced to its correlation before entering design.

## Inputs

- The parameter-availability matrix (Table 9 of the report) mapping which parameters can be estimated per material type and which N-correction each needs
- SPT results with full test metadata
- Independent in-situ or laboratory results for the same stratum

## Procedure

1. Identify from Table 9 whether the target parameter is legitimately obtainable from SPT for the material type (granular, cohesive, weak rock, chalk) and which corrected N (N1, N60, (N1)60) the correlation requires.
2. Apply the correct correction convention before using any chart or equation.
3. Compare the derived value with the expected range for the ground conditions and with values of the same parameter from other tests.
4. Examine the factors controlling the N value at that location (drilling disturbance, groundwater, gravel-size effects) to judge, at least qualitatively, the reliability of the correlation in use.
5. Record the correlation, correction, and source of each adopted value so the provenance survives into the design report.

## Decision rules

- If an SPT-derived value falls outside the expected range and cannot be reconciled with independent data, discard or downweight it rather than average it in.
- Prefer correlations from the major reviews (e.g. Stroud 1989) over single-site relations unless the site matches the single-site geology.

## Checks

- Every reported parameter carries its correction convention and correlation citation.
- No parameter is used for a material type that Table 9 does not support.

## Common errors

- Mixing corrected and uncorrected N in one calculation chain.
- Adopting a single correlation output without any independent comparison.
- Losing correlation provenance between investigation and design reports.

## Caveats

- Design reference only: the parameter matrix and corrections must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

Stroud (1989) major correlation review

## Related

- [[Groundwater observations]]
- [[Skills]]
