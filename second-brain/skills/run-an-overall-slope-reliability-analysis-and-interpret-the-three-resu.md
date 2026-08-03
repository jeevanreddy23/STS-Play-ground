---
title: Run an Overall Slope reliability analysis and interpret the three result sets in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run an Overall Slope reliability analysis and interpret the three result sets in Slide2

> **Source:** `Tutorial_11_Overall_Slope_Reliability.pdf` (Pages 11-2 to 11-14 (method, results table, Show/Pick GM Surfaces, data tips)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A slope probability of failure and reliability index that are not tied to a single slip surface, plus identification of the Critical Probabilistic surface and comparison against the Critical Deterministic surface

## Inputs

- Slope model with material random variables defined (e.g. cohesion and phi per material, with correlation such as -0.5 between c and phi)
- Search settings (e.g. Slope Search, 1000+ surfaces) and Number of Samples

## Procedure

1. Set Probabilistic Analysis Type = Overall Slope on the Statistics page of Project Settings
2. Compute: the entire slip surface search is repeated N times, each with a fresh set of random samples, producing many different Global Minimum surfaces
3. In Interpret read the Overall Slope results in the legend (mean FS, PF, reliability index for Normal and Lognormal FS assumptions); toggle surfaces with Statistics > Show GM Surfaces
4. Display the Critical Probabilistic Surface (Statistics > Crit.Prob.Surface) — the individual surface with the lowest reliability index / highest PF; Normal and Lognormal assumptions can select different surfaces
5. Hover with Data Tips enabled over any GM surface to see what fraction of the N searches selected it and its FS range
6. Use Pick GM Surfaces to select surfaces of interest, then Histogram/Scatter Plot with Highlight Data = Selected Surfaces to see which sampled input values produced those failure modes

## Decision rules

- Ranking is systematic: Overall Slope gives the lowest reliability index / highest PF, then the Critical Probabilistic surface, then the Critical Deterministic surface (they coincide only if the surfaces are the same)
- The Critical Probabilistic surface is not necessarily the deterministic Global Minimum — check both
- GM surfaces backed by many analyses deserve design attention; surfaces located by only one or two samples represent very low occurrence probability
- Choosing which PF/RI to design against is an engineering judgement dependent on the model and analysis goals — no general rule is given
- Overall Slope runs are much slower than Global Minimum runs (potentially hours); queue them overnight via the compute engine's multiple-file capability

## Checks

- FS histograms after an Overall Slope run pool data from all GM surfaces — to see one surface's distribution use Pick GM Surfaces, or re-run with Type = Global Minimum
- Increasing the number of surfaces (e.g. 1000 to 2500) can reveal additional GM surfaces and shift PF/RI — test for convergence

## Common errors

- Quoting the Overall Slope PF as if it belonged to a specific surface
- Assuming slope PF equals the deterministic Global Minimum's PF (the assumption the Overall Slope method exists to avoid)

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
