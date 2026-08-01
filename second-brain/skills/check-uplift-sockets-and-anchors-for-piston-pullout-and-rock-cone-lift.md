---
title: Check uplift sockets and anchors for piston pullout and rock cone liftout
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Check uplift sockets and anchors for piston pullout and rock cone liftout

> **Source:** `Pells Paper on Foundations on sandstone and shale in The Sydney Region.pdf` (Sections 4.2 (uplift basis, p 23) and 6.2 (equations 6-8, p 28)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Ultimate-limit-state verification of a tension socket or anchor against both shaft pullout and liftout of a surrounding rock mass, using the paper's simplified cone model.

## Inputs

- Shaft diameter d and length L
- Ultimate side shear from the class tables (Table 5)
- Rock class (governs mobilised cone shear percentage and, per the 2019 update, apex angle)
- Effective (buoyant where applicable) unit weight of rock for cone weight

## Procedure

1. Piston pullout: compute Rug = phi_g x pi x d x L x tau(ave,peak) with phi_g = 0.5, using ultimate side shear from Table 5 and assuming clean R2+ sidewalls.
2. Cone liftout: assume a cone of 90-degree included angle from the distal end of the socket/anchor (the 2019 update refines apex angle by rock quality: up to 120 degrees for good rock, 60 degrees for Class V).
3. Adopt mobilised side shear on the cone surface of 10% of the Table 5 ultimate values for Classes I-III and 5% for Classes IV-V.
4. Sum the cone weight (buoyant if below water) and the vertical component of cone-side shear; apply phi_g = 0.75 to the shear resistance term per the paper's equations 7-8.
5. Verify the factored resistance exceeds the strength-limit-state uplift demand.
6. Additionally check the mechanism of a slab lifting off a bedding surface, which can govern instead of a cone in horizontally bedded strata.

## Decision rules

- In Classes I-III the liftout mass tends to slab-like shapes; in Classes IV-V it approaches the classic soil-anchor cone - choose the governing mechanism accordingly.
- Anchors with plates, nuts or under-reams behave differently and are outside this method.

## Checks

- Overlapping cones from anchor groups accounted for.
- Groundwater level and buoyancy assumptions explicit.
- Roughness/cleanliness assumptions for the shear values are achievable by the drilling method.

## Common errors

- Using full ultimate side shear on the cone surface instead of the 5-10% mobilised values.
- Ignoring the bedding-slab mechanism in horizontally bedded Sydney rock.
- Using total instead of buoyant unit weight below the water table.

## Caveats

- The 90-degree apex recommendation was revised in the 2019 paper; reconcile both sources before design.
- Based on limited laboratory and field testing plus soil-anchor precedent.
- Design reference only: equations and factors must be verified against the source and reviewed by a qualified engineer before use.

## Standards cited

AS 2159-1995 limit state framework, Pells Mostyn Wong (2019) Section 4.5 apex-angle update

## Related

- [[Rock socket length]]
- [[AS 2159 piling]]
- [[Rock weathering classes]]
- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Skills]]
