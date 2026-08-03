---
title: Analyse the stability of an infinite slope with and without seepage
type: skill
tags: [skill, slope-stability]
confidence: medium
updated: 2026-08-01
---

# Analyse the stability of an infinite slope with and without seepage

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 15, §§15.2–15.4 (factor of safety definitions, stability of infinite slopes, infinite slope with steady-state seepage)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A factor of safety for a shallow translational failure on a long uniform slope, and the maximum stable depth or slope angle, for both dry and steady-seepage conditions.

## Inputs

- Slope angle and depth to the potential failure plane (typically a soil-rock or soil-stiff layer interface)
- Effective cohesion and friction angle of the soil above the plane
- Bulk and saturated unit weights
- Groundwater condition: dry, or steady seepage parallel to the slope with the water table at or below the surface

## Procedure

1. Isolate a slice of the slope of unit width bounded by two vertical faces and the failure plane; note that the forces on the two vertical faces are equal and opposite for an infinite slope and cancel.
2. Resolve the slice weight into components normal and tangential to the failure plane to obtain the normal and driving shear stresses on the plane.
3. For the dry case, compute the available shear strength on the plane from the effective cohesion and the normal stress times the tangent of the friction angle, and take the factor of safety as available strength over driving stress.
4. For steady seepage parallel to the slope with the water table at the surface, replace the normal stress by the effective normal stress: the pore pressure on the plane is set by the seepage condition, and the resulting expression reduces the frictional contribution by the ratio of submerged to saturated unit weight.
5. For a cohesionless soil, the factor of safety reduces to the ratio of the tangent of the friction angle to the tangent of the slope angle, dry; with full seepage that frictional term is further multiplied by the ratio of submerged to saturated unit weight, roughly halving the factor of safety.
6. Where cohesion is present, solve for the critical depth at which the factor of safety equals unity, and compare it with the actual depth to the interface.
7. Repeat for the design range of water table positions, including the wettest credible condition.

## Decision rules

- Full seepage parallel to the slope roughly halves the available frictional resistance for a typical soil — always check the saturated case for a slope that can become saturated.
- The infinite slope model is appropriate where the failure surface is long relative to its depth and roughly parallel to the ground surface: colluvium over rock, a weathered mantle, or a shallow fill layer on a slope. It is not appropriate for a short steep cut.
- Cohesion allows a finite critical depth; a cohesionless slope has a factor of safety independent of depth, so a cohesionless slope steeper than its friction angle (or its seepage-reduced equivalent) cannot stand at any depth.
- Where seepage emerges at the face or is not slope-parallel, use the general expression with the actual pore pressures rather than the standard seepage case.

## Checks

- Check the pore pressures used against installed piezometers or an assessed wettest credible groundwater condition.
- Check whether the cohesion assumed is genuine effective cohesion or apparent cohesion from suction, which is lost on saturation.
- Check the failure plane assumed corresponds to a real interface identified in the ground model.

## Common errors

- Relying on apparent cohesion from partial saturation, which disappears in the very rainfall event that triggers failure.
- Applying the infinite slope model to a slope with a short, deep-seated failure geometry.
- Using bulk unit weight where saturated and submerged values are needed under seepage.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Rock weathering classes]]
- [[Groundwater observations]]
- [[Skills]]
