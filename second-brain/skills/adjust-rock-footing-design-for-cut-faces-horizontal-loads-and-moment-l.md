---
title: Adjust rock footing design for cut faces, horizontal loads and moment loading
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Adjust rock footing design for cut faces, horizontal loads and moment loading

> **Source:** `PELLS MOSTYN WONG (2019) CLASSIFICATION OF SANDSTONES AND SHALES IN THE SYDNEY.pdf` (Sections 4.2-4.4 (pp 36-37); uplift cone apex-angle update in Section 4.5 (p 37)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Bearing, sliding and rotation checks corrected for footings near excavation crests or carrying non-centric loads, where the standard centric-vertical guideline values do not apply.

## Inputs

- Footing position relative to excavation faces and boundaries
- Load cases: vertical, horizontal, moment components and their temporal correlation
- Rock mass UCS and defect orientations at the cut face
- Guideline bearing values and moduli from Tables 3 and 4

## Procedure

1. Recognise that the tabulated guideline pressures apply only to vertical centric loading on or below a horizontal surface.
2. For a footing at an excavation crest: take ultimate capacity of a narrow footing as roughly the rock mass unconfined strength (not the multiple applicable to laterally confined masses), halve the serviceability pressure (settlement approximately doubles), expect lateral movement toward the face of about half the vertical settlement, and footing rotation of roughly 0.5 to 1.0 times p/E, per the authors' generic 2D FEM guidance.
3. Inspect and probe the cut face for kinematically admissible wedges on adversely oriented defects; if present, ultimate bearing may be effectively zero and the design must change or the face be reinforced.
4. For horizontal loads: resist by base friction applied to the permanent vertical load only (friction coefficient about 0.7 may be conservatively adopted for concrete cast on clean sandstone), or by passive resistance of the excavation sides after inspection for adverse defects; ignore the top ~0.5 m of rock.
5. For moment loading: assume a linear no-tension base reaction, limit peak pressure to about twice the guideline value and average pressure to the guideline value, and analyse settlement plus rotation.

## Decision rules

- If adversely oriented defects daylight or nearly daylight in the face, kinematic failure governs regardless of class-based bearing values.
- Shale base friction is more complex than sandstone and depends on construction and inspection specifics; do not carry the sandstone friction coefficient across.
- In-situ stress relief movements of the excavation are additional to load-induced movements and must be assessed separately.

## Checks

- Face inspection scope written into the specification.
- Existing buildings at a new excavation crest checked for both bearing and kinematic failure modes.
- Vertical-horizontal capacity interaction reconsidered where lateral load is a significant case.

## Common errors

- Applying centric-loading guideline pressures to crest footings.
- Counting passive resistance without verifying defect orientations.
- Applying friction resistance to transient live load components.

## Caveats

- The crest-footing rules of thumb derive from generic 2D FEM analyses; analyse the specific case where geometry is not simple.
- Design reference only: factors and coefficients must be verified against the source paper and reviewed by a qualified engineer before use.

## Standards cited

Pells (1990) stress relief around Sydney basements, Pells (2001) Eastern Distributor face reinforcement

## Related

- [[Weathered siltstone]]
- [[Rock strength classes]]
- [[Library - Pells papers on Sydney sandstone and shale]]
- [[Soil description order]]
- [[Skills]]
