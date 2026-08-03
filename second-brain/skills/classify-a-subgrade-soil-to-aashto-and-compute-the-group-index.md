---
title: Classify a subgrade soil to AASHTO and compute the group index
type: skill
tags: [skill, pavements]
confidence: medium
updated: 2026-08-01
---

# Classify a subgrade soil to AASHTO and compute the group index

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 5, §5.4 (AASHTO classification and group index), with §5.6 comparing AASHTO and Unified), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An AASHTO group and subgroup with its group index, giving a highway subgrade quality rating for pavement work.

## Inputs

- Percent passing the 2.00 mm, 0.425 mm and 0.075 mm sieves
- Liquid limit and plasticity index of the fraction passing 0.425 mm
- Percentage of material coarser than 75 mm, recorded but excluded from the classification

## Procedure

1. Exclude cobbles and boulders coarser than 75 mm from the classification sample, but record their proportion.
2. Decide granular versus silt-clay on whether 35% or less passes the 0.075 mm sieve.
3. Work the classification table strictly left to right and take the first group whose criteria the data satisfy — the system is one of elimination, not best fit.
4. Within the silt-clay groups, use liquid limit and plasticity index to separate the silty from the clayey groups, and apply the stated plasticity index versus (liquid limit minus 30) rule to split the two A-7 subgroups.
5. Compute the group index from the standard expression combining the percent passing 0.075 mm, the liquid limit and the plasticity index; round to the nearest whole number and report zero if the calculation is negative.
6. Report the group index in parentheses after the group symbol.

## Decision rules

- Apply the term silty where the plasticity index of the fines is at or below 10, and clayey where it is 11 or above.
- A higher group index means a poorer subgrade; group index is capped at zero on the low side.
- For the A-2 subgroups, only the second term of the group index expression applies — follow the source's note rather than the full formula.

## Checks

- Check the classification is consistent with a parallel USCS classification of the same soil; systematic mismatch usually traces to a sieve or limits error.
- Check the group index computation used percent passing 0.075 mm expressed as a whole number percentage.
- Check that oversize material was recorded and reported.

## Common errors

- Selecting the group that best fits rather than the first that fits from the left.
- Reporting a negative group index instead of zero.
- Using AASHTO subgrade ratings directly as design CBR or modulus values.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Australian pavement design uses AS 1726 classification with design CBR from AS 1289.6.1.1 or Austroads methods — AASHTO groups are not a substitute.

## Standards cited

AASHTO M145, ASTM D3282, Austroads Guide to Pavement Technology Part 2

## Related

- [[Soil description order]]
- [[Skills]]
