---
title: Check Ev2 and Ev2/Ev1 against German subgrade and base course requirements
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Check Ev2 and Ev2/Ev1 against German subgrade and base course requirements

> **Source:** `PLT Calculations for AX01a.pdf` (Section 2, pp. 6-8 (Table 2)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can compare measured moduli with the ZTV E-StB / ZTV SoB-StB acceptance values for formation levels, frost protection layers and unbound base courses, and use PLT as a stand-in for density testing on coarse soils.

## Inputs

- Measured Ev1, Ev2 and Ev2/Ev1 values
- Layer type (formation level, frost protection layer, unbound base course) and traffic class
- Soil group and, where relevant, base course material and thickness

## Procedure

1. For formation level under heavy-to-medium traffic on a frost-proof subgrade/subbase, require Ev2 of at least 120 MN/m2; for light traffic at least 100 MN/m2 (pp. 6-7).
2. For a frost-susceptible subgrade/subbase, require at least Ev2 = 45 MN/m2 at formation level, or at least 70 MN/m2 after professional soil improvement (p. 7).
3. To substitute PLT for density testing on coarse-grained or mixed-grained soil with under 15% fines, check Ev2 against the lower limit and Ev2/Ev1 against the upper limit in the allocation table: e.g. soil groups GW/GI need Ev2 >= 100 MN/m2 with Ev2/Ev1 <= 2.3 for DPr >= 100%, or Ev2 >= 80 with ratio <= 2.5 for DPr >= 98%; groups GE/SE/SW/SI need Ev2 >= 80 with ratio <= 2.3 for DPr >= 100%, or Ev2 >= 70 with ratio <= 2.5 for DPr >= 98% (Table 2, p. 7).
4. Allow a higher Ev2/Ev1 ratio when Ev1 already reaches 60% of the tabulated Ev2 requirement (p. 7).
5. For unbound base courses, apply the SoB-StB values, e.g. gravel base >= 20 cm thick on a formation with Ev2 >= 120 MN/m2 needs Ev2 >= 150 MN/m2 and >= 25 cm needs >= 180 MN/m2; crushed stone >= 15 cm needs >= 150 and >= 20 cm needs >= 180 (classes SV, I-IV); lower tiers apply to classes V-VI (pp. 7-8). Ratio limits there are Ev2/Ev1 <= 2.2 when DPr >= 103% is specified, else <= 2.5.
6. Treat base-course values as minimums, not quantiles: with fewer than five results every value must meet the minimum; with five or more, one value among the five closest-spaced locations may fall short by at most 10% (p. 8).

## Decision rules

- Choose the quantile-based check (ZTV E-StB) for earthworks lots and the minimum-value check (ZTV SoB-StB) for unbound base courses.
- PLT-for-density substitution only applies to coarse/mixed soils with fines below 15% by mass.

## Checks

- Confirm both the Ev2 floor and the Ev2/Ev1 ceiling are satisfied before assigning a degree of compaction.
- Confirm the underlying formation modulus tier (Ev2 >= 120 or >= 100 MN/m2) before selecting the base course requirement.

## Common errors

- Judging compaction on Ev2 alone and ignoring the Ev2/Ev1 ratio limit.
- Forgetting the concession that permits high ratios when Ev1 is already at least 0.6 times the required Ev2.

## Caveats

- German construction classes (SV, I-VI) and soil groups (GW, GI, GE, SE, SW, SI) follow German classification; mapping to other systems needs care.
- These are contractual German road values, cited here from a manufacturer's paper, and are not requirements of DIN 18134 itself.

## Standards cited

ZTV E-StB 09, ZTV SoB-StB 07, DIN 18134:2001-09

## Related

- [[Library - plate load testing]]
- [[Skills]]
