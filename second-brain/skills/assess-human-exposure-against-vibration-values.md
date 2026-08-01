---
title: Assess human exposure against vibration values
type: skill
tags: [skill, monitoring]
confidence: high
updated: 2026-08-01
---

# Assess human exposure against vibration values

> **Source:** `vibrationguide0643.pdf` (Sections 2.3-2.5, Tables 2.2-2.4, Appendix A), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A pass/exceedance assessment of measured or predicted building vibration against preferred and maximum human-comfort values, including dose calculation for intermittent sources.

## Inputs

- Triaxial rms acceleration spectra (1-80 Hz) or time histories
- Receiver category and day/night period
- Event schedule for intermittent sources

## Procedure

1. Apply the axis-appropriate frequency weighting to the 1/3-octave rms acceleration spectrum and combine to an overall weighted rms value per axis (root of sum of squared weighted band values).
2. For continuous/impulsive vibration, compare each axis's overall weighted value to the preferred and maximum values for the receiver and period.
3. For intermittent vibration, compute the vibration dose value (fourth-root of the time integral of the fourth power of weighted acceleration), summing repeated events by the fourth-power combination rule, and compare with the acceptable-dose table; the estimated-VDV screening method may be used for repeated similar events but true VDV is preferred.
4. As a screening shortcut, the overall unweighted rms may be conservatively compared to preferred values.
5. If preferred values are exceeded, scope mitigation; values up to the maximum need justification after all feasible and reasonable measures; beyond maximum, negotiate with the affected community; short-term works (around one week) with high social worth may justify higher values with best management practice and consultation.

## Decision rules

- Continuous-vibration preferred values for residences: z-axis 0.010 m/s2 daytime and 0.007 m/s2 night-time (maxima double), with lower values for critical areas and higher for offices/workshops (vibrationguide0643 Table 2.2).
- Impulsive-vibration preferred values are substantially higher for residences (e.g. z-axis 0.30 daytime / 0.10 night-time m/s2) except in critical areas where continuous values persist (vibrationguide0643 Table 2.2).
- Intermittent-vibration acceptable VDVs (m/s^1.75) for residences: 0.20 day / 0.13 night preferred, doubling to the maxima (vibrationguide0643 Table 2.4).
- People are more sensitive to z-axis vibration; combine and compare all three axes with the correct weighting per posture (Section 4.2).

## Checks

- Crest factor limits observed when using rms-based estimation for varying signals.
- Assessment report includes instrumentation, methodology, site map, criteria, predictions vs criteria, mitigation discussion and compliance method (Section 4.7).
- Prediction methods validated and stated with assumptions and expected accuracy; scenarios at start and 10 years.

## Common errors

- Comparing unweighted spectra directly to the weighted criteria (only valid as a conservative screen).
- Summing VDVs linearly instead of by fourth powers.
- Using daytime criteria for night works.

## Caveats

- Values cited from the referenced tables of the 2006 guideline only; confirm against current policy before use.
- Non-mandatory amenity goals; project consent conditions override.

## Standards cited

BS 6472-1992, BS 6841-1987, ISO 2631.1-1997

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
