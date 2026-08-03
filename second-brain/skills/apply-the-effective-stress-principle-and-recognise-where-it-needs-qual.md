---
title: Apply the effective stress principle and recognise where it needs qualification
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Apply the effective stress principle and recognise where it needs qualification

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 16 (The Effective Stress Concept), including the derivation of the stress balance across a plane and the discussion of contact area ratios, partial saturation and osmotic effects), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A correctly computed effective stress for a soil element, with an explicit judgement about whether the simple total-stress-minus-pore-pressure form is adequate for the material and condition in hand.

## Inputs

- Total stress on the plane of interest
- Pore water pressure as measured by a standpipe or transducer in equilibrium with the pore fluid
- Degree of saturation and, for partly saturated soil, whether pore air pressure differs from pore water pressure
- Soil type, particularly whether it is a granular soil with small particle contact areas or an active clay

## Procedure

1. Compute effective stress on the plane as total stress minus pore water pressure, using the pore pressure measured by a device in equilibrium with the pore fluid at that point.
2. Understand what the simple form assumes: writing the normal stress across a plane in terms of mineral contact stress, pore water pressure and pore air pressure, as the source does, shows the simple expression follows because in a saturated soil the mineral contact area ratio is very small and the water carries almost the whole area.
3. For saturated granular soils, accept the simple form: the source notes contact area ratios of the order of a few percent at most, so the correction is negligible.
4. For partly saturated soils, recognise that pore air and pore water pressures differ and that effective stress is not defined by a single simple subtraction; use an explicit partly saturated formulation, or treat the suction contribution as a temporary bonus that must not be relied upon in design.
5. For active clays, recognise that interparticle electrical repulsion and osmotic effects contribute to the stress balance, so measured pore pressure and the stress genuinely controlling behaviour can differ; treat conclusions drawn from effective stress in such soils with corresponding caution.
6. Use effective stress, not total stress, for every strength and compressibility calculation in which drainage occurs, and use consistent effective stress parameters with it.

## Decision rules

- Behaviour of soil is controlled by effective stress; changes in total stress matter only through the effective stress and pore pressure changes they cause.
- Never rely on suction in a partly saturated soil for permanent design strength — it is lost on wetting, and the wetting event is usually the trigger for the failure being designed against.
- Where pore pressure cannot be measured or reliably predicted, a total stress (undrained) analysis with undrained strengths may be the more defensible route for the short term; state which framework is in use and do not mix them.
- Pore pressures must be measured with a device whose response time suits the soil's permeability; a slow-responding standpipe in a clay does not give the current pore pressure.

## Checks

- Check pore pressures against installed instrumentation rather than an assumed hydrostatic profile, particularly where artesian or perched conditions are possible.
- Check the degree of saturation assumption for any soil above the water table on which strength is being relied.
- Check that effective stress parameters and effective stresses are used together throughout an analysis.

## Common errors

- Subtracting a pore pressure from a total stress in a partly saturated soil and treating the result as a valid effective stress.
- Combining effective stress strength parameters with total stresses.
- Assuming a hydrostatic pore pressure profile where seepage or an underlying aquifer makes it non-hydrostatic.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

None cited in the source passage.

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
