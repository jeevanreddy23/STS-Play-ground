---
title: Estimate socket side shear from unconfined compressive strength with roughness and mass-stiffness corrections
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Estimate socket side shear from unconfined compressive strength with roughness and mass-stiffness corrections

> **Source:** `Pells Paper on Foundations on sandstone and shale in The Sydney Region.pdf` (Section 4.2 and Figures 2-4 (pp 21-23)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A peak average side-shear resistance for a rock socket derived from tau = alpha x beta x qu, with geology-specific alpha and a modulus-ratio reduction, instead of a generic worldwide best-fit value.

## Inputs

- Average substance UCS (qu) of sidewall rock
- Sidewall roughness class (R1-R4) and cleanliness state
- Ratio of mass modulus to intact modulus (for the beta reduction factor)
- Local test data where available (e.g. Hawkesbury Sandstone dataset in the paper's Figure 3)

## Procedure

1. Start from the empirical relation tau(ave,peak) = alpha x qu (Williams & Pells 1981; Horvath 1982; Rowe & Armitage 1984), reading alpha from the paper's Figure 2 for the general dataset.
2. Prefer geology-specific data: for clean Hawkesbury Sandstone sockets of roughness R2 or better, alpha of at least about 0.2 applies, substantially above the worldwide best-fit line.
3. Apply the mass-stiffness reduction: tau(ave,peak) = alpha x beta x qu, with beta estimated from the Emass/Eintact chart (Figure 4).
4. Recognise the correlations are near-best-fit (correlation coefficient above 80%), not lower bounds; treat accordingly in reliability terms.
5. For uplift sockets and anchors, apply the ultimate side-shear values with a geotechnical reduction factor of 0.5 and only where sidewalls are clean with R2+ roughness; percussion-drilled holes may be assumed adequately rough if properly cleaned, but diamond-cored holes may not.

## Decision rules

- Smeared or bentonite-cast sockets plot far below the clean-socket trend; do not use clean-socket alpha values for them.
- Where site or geology-specific data exist, they override worldwide correlations.

## Checks

- Roughness at least R2 confirmed to justify non-brittle plastic behaviour.
- beta consistent with the defect-controlled mass modulus actually adopted elsewhere in the design.

## Common errors

- Using the worldwide best-fit alpha for Hawkesbury Sandstone (materially conservative or misleading).
- Forgetting the beta reduction in heavily defected rock.
- Assuming assessable roughness in small-diameter anchor holes.

## Caveats

- Roughness-model detail (asperity angle at chord length twice the design displacement) is summarised, not fully specified, in this paper.
- Design reference only: alpha/beta selections must be verified against the source figures and reviewed by a qualified engineer before use.

## Standards cited

Williams & Pells (1981); Rowe & Armitage (1984); Seidel & Haberfield (1995, 1999) roughness research

## Related

- [[Rock socket length]]
- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
