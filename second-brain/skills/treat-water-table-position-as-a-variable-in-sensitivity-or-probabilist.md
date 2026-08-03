---
title: Treat water table position as a variable in sensitivity or probabilistic slope analysis in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Treat water table position as a variable in sensitivity or probabilistic slope analysis in Slide2

> **Source:** `Tutorial_10_Water_Table_Statistics.pdf` (Pages 10-2 to 10-17 (sensitivity, probabilistic setup, normalized variables, ponded water, tension crack note)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Factor of safety expressed as a function of groundwater level — including the critical water table elevation at FS = 1 — or a probability of failure with water table as a random variable

## Inputs

- Slope model with (or without) an existing deterministic water table
- Maximum water table boundary geometry (often the ground surface) and minimum boundary geometry
- For probabilistic runs: a statistical distribution and normalized standard deviation for water table elevation

## Procedure

1. Enable Sensitivity and/or Probabilistic Analysis on the Statistics page of Project Settings
2. Draw the Maximum Water Table (Statistics > Water Table > Draw Max Water Table) snapping to slope vertices, and the Minimum Water Table; once two of mean/min/max exist the third is auto-generated from the Normalized Mean (default 0.5 places the mean midway everywhere)
3. If a deterministic water table already exists, set 'Use Deterministic Water Table As' (Mean/Min/Max) in Water Table Statistics and draw only the remaining boundary
4. The water table position is controlled by a single normalized random variable in [0,1]: 0 = minimum boundary, 1 = maximum boundary
5. For sensitivity: Compute varies the normalized elevation in 50 equal increments and plots FS vs normalized location; use the Sampler to find the elevation at FS = 1 (0.57 in the worked example)
6. For probabilistic: assign a distribution (e.g. Normal) and a normalized standard deviation (about 0.17 spans min-to-max at 3 sigma; the tutorial uses 0.15), then Compute and inspect histograms and scatter plots of water table location vs FS

## Decision rules

- The Mean water table is what the deterministic analysis uses; the sensitivity/probabilistic runs act on the Global Minimum from that deterministic run
- Consider an Exponential distribution to represent infrequent high water tables (standard deviation equals the mean by definition, so none is entered)
- For ponded water above the slope, ensure the Minimum boundary includes a horizontal segment with the same lateral extent as the Maximum's ponded surface so generated water surfaces stay horizontal; ponded water is created in analysis but not drawn on screen

## Checks

- With water table as the only random variable, the scatter plot of location vs FS is a clean line (no scatter) and matches the sensitivity plot — scatter appears only when other variables are added
- Highest FS should occur at normalized location 0 and lowest at 1; anything else indicates a boundary mix-up

## Common errors

- Forgetting the normalized standard deviation applies to the [0,1] variable, not to metres of elevation
- Expecting ponded water to be displayed graphically during probabilistic water table runs

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer
- Variable tension crack boundaries are handled identically to water tables and the crack water level can itself be a random variable

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
