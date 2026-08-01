---
title: Run a probabilistic slope stability analysis in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Run a probabilistic slope stability analysis in Slide2

> **Source:** `Tutorial_08_Probabilistic_Analysis.pdf` (Slide 2018 Tutorial Manual, Tutorial 8 (whole tutorial; Eqns 1-3 for PF and RI)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Probability of failure, mean FS and reliability index for the critical slip surface, with input random variables (cohesion, phi, unit weight) defined statistically and convergence verified.

## Inputs

- A working deterministic Slide2 model
- Statistical distributions for chosen input parameters: mean, standard deviation, relative min/max (Normal used in the tutorial)
- Sampling settings (defaults: Latin Hypercube, 1000 samples, Analysis Type = Global Minimum)
- Optional cohesion-phi correlation coefficient (tutorial default -0.5)

## Procedure

1. Enable Probabilistic Analysis in Project Settings > Statistics.
2. Define random variables via Statistics > Materials using the Add wizard: pick properties (cohesion, phi, unit weight), choose distributions, then enter standard deviation and RELATIVE min/max for each.
3. Compute — the deterministic analysis runs first, then the probabilistic re-computation of the Global Minimum surface N times with sampled inputs.
4. Interpret: read FS(mean), PF (fraction of samples with FS < 1) and RI beside the slip centre; the Info Viewer lists the best-fit FS distribution indicating whether Normal or Lognormal RI applies.
5. Explore Histogram plots (highlight FS < 1 subset), Cumulative plots (Sampler at FS = 1 reads PF directly) and Scatter plots (input vs FS relationships, correlation coefficient, regression line).
6. Check a Convergence Plot of PF/mean FS; if not stabilised, increase the number of samples and rerun.
7. Optionally apply a negative cohesion-phi correlation in Material Statistics > Correlation and recompute — realistic correlation typically reduces PF for this model.

## Decision rules

- Set relative min/max at least ~3 standard deviations for Normal variables so the distribution is not truncated.
- A reliability index of at least ~3 is the commonly recommended minimum assurance of safe design (tutorial guidance).
- Use the RI (Normal vs Lognormal) matching the best-fit FS distribution reported in Info Viewer.
- Latin Hypercube gives Monte-Carlo-comparable results with far fewer samples; use Monte Carlo only deliberately.
- Analysis Type = Global Minimum probabilistically analyses only the deterministic critical surface — the probabilistic critical surface may differ (Overall Slope option exists for that).

## Checks

- Convergence plot flat at the final PF/mean FS values; else increase samples.
- Sampled statistics approach input statistics as sample count grows.
- Pseudo-random vs random seed setting understood — pseudo-random gives reproducible results.

## Common errors

- Entering absolute instead of relative min/max values for distributions.
- Ignoring cohesion-phi correlation, generating unrealistic parameter combinations and overstating PF.
- Quoting PF from an unconverged run with too few samples.
- Assuming PF from the deterministic global minimum surface covers the whole slope's failure probability.

## Caveats

- Sample of a 31-tutorial local Slide2 series (spatial variability is Tutorials 33-34).
- Slide 2018 menus; verify against installed version.

## Standards cited

Rocscience Slide2 Help, Probabilistic Analysis section

## Related

- [[Skills]]
- [[Skills]]
