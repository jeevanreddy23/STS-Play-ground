---
title: Run a parameter sensitivity analysis on a slope model in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a parameter sensitivity analysis on a slope model in Slide2

> **Source:** `Tutorial_09_Sensitivity_Analysis.pdf` (Pages 9-2 to 9-10 (setup, plots, sampler, seismic sensitivity, sensitivity vs probabilistic)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Sensitivity curves of factor of safety versus each input parameter (strength, unit weight, seismic coefficient), identifying which inputs control stability and the critical value giving FS = 1

## Inputs

- A Slide2 model with a located Global Minimum surface
- Minimum and maximum values for each parameter to vary (distributions and standard deviations are not used)

## Procedure

1. Tick Sensitivity Analysis on the Statistics page of Project Settings
2. Define variables in Statistics > Materials (same dialog as probabilistic variables, but only mean/min/max apply)
3. Compute: the deterministic run executes first to find the Global Minimum, then each variable is stepped in uniform increments between its min and max while all other variables are held at their means, recalculating FS of the Global Minimum each step
4. In Interpret open Statistics > Sensitivity Plot and tick the variables to plot
5. Use the right-click Sampler to read exact curve coordinates, e.g. the friction angle at FS = 1 (26.2 degrees in the worked example)
6. To test seismic sensitivity, use Statistics > Seismic Load with a mean horizontal coefficient and relative min/max (mean 0.1 with +/-0.1 sweeps 0 to 0.2); the sampler then reads the critical seismic coefficient (about 0.067 at FS = 1)

## Decision rules

- A steep sensitivity curve means FS is sensitive to that parameter; a flat curve means insensitive — prioritise investigation and testing on the steep-curve parameters
- Plot multiple variables together only for ranking (x-axis becomes Percent of Range: 0 = min, 100 = max, 50 always = mean); plot one variable alone to get real units on the axis
- Sensitivity varies one parameter at a time; a probabilistic analysis samples all random variables simultaneously — do not conflate the two. Both can be run together, in which case sensitivity reuses the probabilistic variables' min/max and ignores their distributions

## Checks

- All multi-variable curves must intersect at Percent of Range = 50 (the mean); if not, the setup is wrong
- The sensitivity run is performed only on the deterministic Global Minimum surface — confirm that surface is representative before relying on the curves

## Common errors

- Reading a multi-variable percent-of-range plot as if the x-axis were in parameter units
- Expecting statistical distributions to influence sensitivity results

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Borehole log conventions]]
- [[Skills]]
