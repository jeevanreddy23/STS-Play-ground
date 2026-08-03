---
title: Estimate immediate (elastic) settlement of a shallow foundation
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Estimate immediate (elastic) settlement of a shallow foundation

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 11, §11.2 (contact pressure and settlement profile) and §11.3 (relations for elastic settlement calculation), with settlement-based bearing pressure in Ch. 16 §16.9), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** An immediate settlement estimate for a footing or raft on sand or unsaturated soil, to be combined with consolidation and secondary settlement components.

## Inputs

- Foundation plan dimensions, shape and depth of embedment
- Net applied bearing pressure
- Modulus of elasticity and Poisson's ratio of the bearing stratum (from correlations, laboratory tests or in-situ tests, with the strain level stated)
- Thickness of the compressible stratum and depth to any rigid boundary
- Whether the foundation acts as flexible or rigid

## Procedure

1. Select the appropriate elastic settlement expression from the source for the foundation shape and rigidity: settlement is proportional to the net pressure and the foundation width, and inversely proportional to the soil modulus, with a shape and rigidity influence factor.
2. Apply the influence factor for the flexible case at the point of interest (centre or corner) or the rigid case for a uniformly settling foundation.
3. Apply the embedment (depth) correction factor, which reduces settlement relative to a surface footing.
4. Where a rigid boundary occurs at shallow depth, apply the correction for the finite thickness of the compressible layer.
5. For layered profiles, either use a weighted modulus over the depth of influence or subdivide into layers and sum the strain contributions.
6. Add immediate settlement to primary consolidation and secondary compression to obtain the total, and report the components separately.

## Decision rules

- The modulus used must correspond to the strain level in the ground under working load, not to a small-strain or laboratory-unload value; state the basis of the modulus.
- For a rigid foundation the settlement is uniform and lies between the flexible centre and corner values; use the rigid factor rather than averaging by hand.
- For saturated clays, immediate settlement is an undrained (constant volume) response — use undrained modulus and a Poisson's ratio of 0.5, and add consolidation settlement separately.
- For granular soils, settlement is essentially all immediate; consolidation settlement calculations do not apply and settlement-based bearing pressure methods are usually more reliable.

## Checks

- Check the depth of influence used (commonly two to three times the foundation width) against the depth of the compressible stratum.
- Check the modulus is consistent with the in-situ test used to derive it and with the stress level.
- Check differential settlement between footings, not just the maximum absolute value.

## Common errors

- Using a drained modulus for the undrained immediate settlement of a clay, double-counting the consolidation component.
- Ignoring the embedment correction and overestimating settlement for a deep footing.
- Applying a single modulus across a profile with a stiff crust or a soft layer at depth.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Influence factors, depth correction factors and typical modulus and Poisson's ratio ranges are tabulated in the source — read the numbers there.

## Standards cited

AS 2870, AS 5100.3

## Related

- [[AS 2870 residential site classification]]
- [[Skills]]
