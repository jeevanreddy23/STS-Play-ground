---
title: Check ultimate and allowable bearing capacity of a shallow footing on cohesionless ground
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Check ultimate and allowable bearing capacity of a shallow footing on cohesionless ground

> **Source:** `Earth pressure calculations.xlsx` (Sheet 'Bearing capacity' (input block rows 6-12, capacity rows 13-16)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can compute a gross ultimate bearing capacity from Terzaghi bearing capacity factors and reduce it to an allowable bearing pressure with an explicit factor of safety, for a square footing on granular soil.

## Inputs

- Footing plan dimension B (the sheet uses a single dimension, i.e. a square footing)
- Founding depth Df below finished surface
- Bulk unit weight of the soil above and below founding level
- Effective angle of internal friction at founding level
- Bearing capacity factors Nc, Nq and N-gamma read from a table for that friction angle
- Target factor of safety

## Procedure

1. Establish the surcharge at founding level, q = gamma x Df, using the unit weight of the material above the founding plane.
2. Look up the three Terzaghi bearing capacity factors for the design friction angle and paste them in as explicit inputs, recording the table or reference they came from.
3. Form the gross ultimate bearing capacity as the sum of the surcharge and self-weight terms: q_ult = q x Nq + 0.4 x gamma x B x N-gamma, where 0.4 is the Terzaghi square-footing shape coefficient on the self-weight term.
4. Include the cohesion term c x Nc x shape factor only where an undrained or cohesive-drained strength is genuinely available and sustained; the source sheet leaves this term at zero, i.e. it takes a purely frictional soil.
5. Divide by the chosen factor of safety to obtain the allowable bearing pressure.
6. Where settlement rather than shear governs (usual for footings on sand), carry out a separate settlement check and adopt the lower of the shear-based and settlement-based allowable pressures.

## Decision rules

- Use the 0.4 coefficient on the self-weight term for a square footing; the coefficient changes for strip (0.5) and circular (0.3) footings under Terzaghi's formulation, so it must be re-picked whenever footing shape changes.
- Ignore the cohesion term for clean granular soils and for any cohesion that could be lost on wetting, disturbance or long-term softening.
- A factor of safety of 3 on gross ultimate capacity is the conventional value for shallow footings sized by bearing capacity; a lower value only follows from a formal reliability or limit-state approach.
- Where the footing is embedded, decide explicitly whether a gross or net allowable pressure is being reported - the source calculation is gross (the surcharge term is included and never subtracted back out).
- Reduce capacity for a high water table: if the water table is within about B below the footing, use submerged unit weight in the self-weight term and adjust the surcharge term for the depth of submergence.
- Reduce or re-derive capacity for eccentric or inclined load, sloping ground, layered profiles and adjacent excavations - none of which this expression handles.

## Checks

- Confirm the bearing capacity factors correspond to the same theory as the shape coefficient used (mixing Terzaghi factors with Meyerhof or Vesic shape factors is inconsistent).
- Confirm the friction angle input matches the friction angle the factors were read at.
- Confirm the units are consistent throughout (unit weight in kN/m3, dimensions in m, pressure in kPa).
- Re-check whether the surcharge term should use the actual founding depth or a reduced depth, where excavation, scour or future landscaping could remove the overburden.
- Compare the resulting allowable pressure against experience and against any in-situ test data (plate load test, DCP, SPT) for that stratum.

## Common errors

- Retaining the square-footing coefficient 0.4 when the footing is a strip or a pad of very different aspect ratio.
- Leaving hard-typed bearing capacity factors in the sheet after changing the friction angle input, so the factors and the angle no longer correspond.
- Reporting a gross allowable pressure as if it were net, which double-counts the overburden the footing displaces.
- Claiming the surcharge term from ground that will later be excavated for services or landscaping.
- Applying a shear-based allowable pressure without any settlement check.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The sheet is a single-load-case, single-layer check with hard-typed bearing capacity factors and no cohesion term; it is a screening tool, not a footing design.
- It performs no settlement, sliding, overturning or global stability check.

## Standards cited

AS 2870, AS 5100.3, Eurocode 7 (EN 1997-1)

## Related

- [[AS 2870 residential site classification]]
- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
