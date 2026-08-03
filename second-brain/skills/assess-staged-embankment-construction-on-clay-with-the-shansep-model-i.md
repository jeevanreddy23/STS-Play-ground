---
title: Assess staged embankment construction on clay with the SHANSEP model in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Assess staged embankment construction on clay with the SHANSEP model in Slide2

> **Source:** `Tutorial_31_Staged_Embankment_on_Clay_-_SHANSEP_method.pdf` (Pages 31-2 to 31-5 (SHANSEP setup, staged factors, short vs long term)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Short-term and long-term factors of safety for an embankment built in lifts on soft clay, with undrained strength tied to vertical effective stress through user-specified consolidation (vertical stress) factors per lift

## Inputs

- Embankment-on-clay model: clay foundation as SHANSEP material, lifts as Mohr-Coulomb materials
- Degree of excess pore pressure dissipation attributable to each lift at the analysis time (vertical stress factor per lift, 0 to 1)
- Non-circular search settings (Cuckoo search; Spencer and GLE methods in the tutorial)

## Procedure

1. Set the clay's Strength Type to SHANSEP; its undrained strength derives from vertical effective stress (per the SHANSEP formulation in the help)
2. Enable 'Material dependent vertical stress' for the clay and press Define to enter a vertical stress factor for each embankment material: the factor is the fraction of that lift's weight transferred to effective vertical stress in the clay (the remainder is carried as excess pore pressure)
3. End-of-construction case: first lift factor 0.3 (30% dissipated during construction of lift 2), second lift factor 0.0 (its full weight goes to excess pore pressure) — compute for the short-term FS (about 1.13)
4. Intermediate consolidation: raise the factors (0.8 and 0.4 = 80%/40% dissipation) and re-compute (FS about 1.5)
5. Long-term case: untick material dependent vertical stress so both lifts' full weights increase clay effective stress — compute (FS 1.57)

## Decision rules

- The engineer must supply the dissipation percentages for the current geometry and construction timing — Slide2 does not compute consolidation time-rates here
- A vertical stress factor of 0 means a lift contributes nothing to clay strength gain; 1 (or the option off) means full consolidation under that lift
- The governing case is normally end-of-construction of the latest lift (1.13 vs 1.57 long-term in the example)

## Checks

- FS must increase monotonically as vertical stress factors increase toward the fully consolidated case
- Confirm the critical non-circular surface engages the clay foundation, not just the fill

## Common errors

- Analysing only the long-term condition and missing the much lower end-of-construction FS
- Confusing the vertical stress factor (fraction consolidated) with a pore pressure coefficient

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
