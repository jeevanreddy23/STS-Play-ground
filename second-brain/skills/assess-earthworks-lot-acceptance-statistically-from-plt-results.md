---
title: Assess earthworks lot acceptance statistically from PLT results
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Assess earthworks lot acceptance statistically from PLT results

> **Source:** `PLT Calculations for AX01a.pdf` (Section 2, pp. 5-6), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can decide, per the German ZTV E-StB scheme, whether an inspection lot of compacted ground passes based on randomly located test results.

## Inputs

- Defined inspection lot: one layer compacted under uniform conditions with a uniform requirement, of known area or trench length
- Required 10% minimum quantile TM for the criterion (e.g. deformation modulus or degree of compaction)
- Test results x_i from randomly selected positions

## Procedure

1. Delimit the inspection lot precisely and choose the number of test points n from the lot size: n = 4 for up to 1000 m2 (or 100 m trench length), rising by one per additional 1000 m2 band to n = 9 at 5000-6000 m2 (Table 1, p. 6).
2. Locate test points by a random selection process within the lot.
3. Compute the mean x-bar and standard deviation s of the results.
4. Form the quality number Q = (x-bar - TM) / s (equation 3, p. 6).
5. Accept the lot if Q >= k, with acceptability constant k = 0.88 for these lot sizes; otherwise reject the entire lot and have the contractor rework it.

## Decision rules

- The statistical method suits any ground but is particularly recommended for large lots, lots where uniformity of compaction matters, quick-turnaround test methods, and trial compactions (p. 5-6).
- Rejection applies to the whole lot area, not just failing points.

## Checks

- Confirm n matches the lot-size table before testing.
- Verify the requirement is expressed as a 10% minimum quantile before applying the Q formula.

## Common errors

- Placing test points by judgement instead of random selection, which invalidates the statistics.
- Applying the quantile-based Q test to base-course requirements that are actually minimum values with different deviation rules (p. 8).

## Caveats

- This is the German road-earthworks framework; it does not automatically transfer to Australian specifications.
- Table 1 in the source only covers lots up to 6000 m2 / 600 m of trench.

## Standards cited

ZTV E-StB 09, ZTV A-StB 97/06, ZTV SoB-StB 07

## Related

- [[Library - plate load testing]]
- [[Skills]]
