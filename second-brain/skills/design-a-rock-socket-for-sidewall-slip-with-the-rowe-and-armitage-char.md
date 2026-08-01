---
title: Design a rock socket for sidewall slip with the Rowe and Armitage chart procedure
type: skill
tags: [skill, piling-rock, ocr-source]
confidence: high
updated: 2026-08-01
---

# Design a rock socket for sidewall slip with the Rowe and Armitage chart procedure

> **Source:** `The Design Of Socketed Piles In Rock by pells.pdf` (Section 6.2 and worked example (pp 1-316 to 1-318); Rowe & Armitage charts reproduced pp 1-322 to 1-327), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An efficient socket design that mobilises non-brittle sidewall slip while keeping base response within its linear-elastic limit, typically saving significant socket length over elastic design.

## Inputs

- Same parameter set as elastic design: S*, serviceability load and settlement limit, tau(ave,peak), elastic-limit and ultimate end bearing, Ep, Er (and Eb where base rock differs)
- The Rowe & Armitage chart set for the applicable Eb/Er ratio (reproduced at the end of the paper)

## Procedure

1. Choose the chart matching the base-to-shaft modulus ratio (the charts explicitly cover Eb/Er of 0.5, 1, 2 and 5).
2. Draw the same side-shear-limit straight line as in elastic design for the trial diameter.
3. Compute the maximum base load at the linear-elastic end-bearing limit (elastic-limit pressure times base area) and express it as a horizontal line of base-load proportion.
4. Take the intersection of the two lines as the design point, giving L/D and the settlement influence factor.
5. Predict serviceability settlement with the reduced modulus and check it against the limit; then verify phi_g x Rug >= S* as usual.
6. Only push beyond the linear base-response region with strong justification such as site-specific test data and major economic benefit.

## Decision rules

- This is the author's recommended design tool: chart-based, fast, and transparent about geometric and geotechnical sensitivities.
- Non-brittle slip requires R2+ roughness; the elasto-plastic (purely cohesive interface) assumption is safe only then.
- The Carter & Kulhawy closed-form equations reproduce the charts and extend beyond their parameter range, at the cost of the graphical insight.

## Checks

- Worked-example order of magnitude: 18 MN strength load on a 0.75 m socket gave L/D ~6.3 with settlement ~7 mm, versus L/D ~9.2 elastically.
- Design constrained by the governing criterion identified (in the example, the base linearity limit, not ULS or SLS).

## Common errors

- Using ultimate end bearing instead of the linear-elastic limit to set the base-load cap.
- Applying the method with uninspected or smeared sockets.
- Mixing charts for the wrong Eb/Er ratio.

## Caveats

- Numeric values in the OCR'd worked example are partly corrupted; rework the example from the published paper before relying on it as a benchmark.
- Design reference only: chart readings and factors must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

Rowe & Armitage (1984) GEDT-11-84, Carter & Kulhawy (1987) EPRI report

## Related

- [[Rock socket length]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Skills]]
