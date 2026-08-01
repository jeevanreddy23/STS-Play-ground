---
title: Compute the size-corrected point load strength index Is(50) from test data
type: skill
tags: [skill, testing, youtube-source]
confidence: high
updated: 2026-08-01
---

# Compute the size-corrected point load strength index Is(50) from test data

> **Source:** [YouTube — Point Load Test Part 2: Data Analysis](https://www.youtube.com/watch?v=FPrjUBPRHFM&t=87s) (01:27-06:01). A YouTube lecture — learning
> material, not an approved design procedure. Equations and numbers were
> heard through auto-captions; read them off the video before use, and
> verify anything design-relevant against the standard and the project
> specification. Engineering conclusions need qualified review.

**Outcome.** A normalised point load strength index Is(50) for each valid test, from peak load and sample dimensions, for both diametral and axial loading configurations

## Inputs

- Peak failure load P (kN) per test
- Sample dimensions: core diameter D for diametral tests; thickness D and width/diameter W for axial tests

## Procedure

1. Determine the equivalent diameter De: for a diametral test on core loaded perpendicular to the axis, De simply equals the core diameter (De = 51 mm in the example)
2. For an axial test, compute the loaded area A = W times D (51.6 x 39.4 = 2033 mm2 in the example), then De from the equivalent-area relation De = square root of (4A / pi), about 50.9 mm in the example
3. Compute the uncorrected point load strength: peak load times 1000 divided by De squared (the factor 1000 reconciles kN with mm units); this gave 1.23 and 0.26 (MPa) for the two rocks
4. Apply the size correction to normalise to a 50 mm reference diameter: multiply by (De/50) raised to the power 0.45, giving Is(50) values of 1.241 and 0.27 in the example
5. Report Is(50); it can then be correlated to unconfined compressive strength (covered in a companion video)

## Decision rules

- A markedly low Is(50) may reflect weathering or an invalid failure mode from the test rather than intrinsic strength — check the test video/record before reporting
- A spreadsheet with the formulas pre-built is the practical way to process multiple tests

## Checks

- De route matches the loading configuration (direct diameter for diametral, equivalent-area formula for axial)
- Units consistent: P in kN, dimensions in mm, with the factor of 1000 applied once
- Size correction applied after, not instead of, the uncorrected index calculation

## Common errors

- Using the core diameter as De for an axial test instead of the equivalent-area formula
- Dropping or double-applying the factor of 1000 in the mixed kN/mm units
- Skipping the (De/50)^0.45 normalisation, making results from different sample sizes incomparable

## Caveats

- YouTube lecture — learning material, not an approved design procedure; verify against project specification and current standards
- Some caption digits are unreliable (50.878 vs 50.78 for De; 0.26 vs 0.27 progression) — equation shown on screen — read from the video and recompute
- The Is(50)-to-UCS correlation factor is not given in this video

## Standards cited

None cited in the source passage.

## Related

- [[Rock weathering classes]]
- [[Rock strength classes]]
- [[Skills]]
