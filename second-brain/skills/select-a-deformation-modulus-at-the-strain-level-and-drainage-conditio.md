---
title: Select a deformation modulus at the strain level and drainage condition the application demands
type: skill
tags: [skill, parameters]
confidence: high
updated: 2026-08-01
---

# Select a deformation modulus at the strain level and drainage condition the application demands

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 11 Deformation parameters, Sections 11.1-11.25 (Tables 11.1 to 11.25, Figures 11.1 and 11.2), pp 143-157), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A modulus value defensible for the specific application - pavement, footing, excavation, tunnel, dynamic - rather than a single stiffness carried through every calculation.

## Inputs

- Application and the strain level it operates at (pavement, shallow footing, raft, retaining structure, tunnel, machine foundation)
- Drainage condition and time frame (short term undrained versus long term drained)
- Field data: SPT N, CPT cone resistance, shear wave velocity, pressuremeter or plate test results
- Soil classification, plasticity index and overconsolidation ratio; for rock, intact modulus, RQD and rock mass rating
- Whether the loading is static or dynamic, and plane strain or axisymmetric

## Procedure

1. Fix the modulus definition first. Table 11.1 lists the definitions (initial tangent, secant, unload-reload, constrained, resilient) with Figure 11.1 showing where each sits on the stress-strain curve. A modulus quoted without its definition and strain level is not usable.
2. Identify the operating strain level for the application from Table 11.4 and Figure 11.2. Look records excavations and retaining structures operating at very small shear strains, pavements at high stress but a particular strain range, and foundations elsewhere - and notes the difference between small-strain and large-strain modulus can be an order of magnitude.
3. Take small strain shear modulus from Table 11.2 and check it against the stiffness degradation ranges in Table 11.3, which gives the ratio between modulus at zero strain, at small strain and at large strain for tested materials. Use the degradation ratios to move between the strain level your test measured and the strain level your design operates at.
4. Use Table 11.5 to rank the relative modulus expected across applications before committing to a number - if the selected value ranks wrongly against the table, the derivation is suspect.
5. For soils, bracket the modulus by several routes: typical elastic parameters (Tables 11.6 and 11.7), coefficient of volume compressibility (Table 11.8, and Table 11.9 derived from SPT), CPT-derived deformation parameters (Tables 11.10 and 11.11 for drained modulus), SPT-derived modulus in clays (Table 11.12) and modulus from SPT with plasticity index (Table 11.15).
6. For clays specifically, distinguish drained modulus based on strength and plasticity (Table 11.13) from undrained modulus varying with overconsolidation ratio (Table 11.14), and reconcile short and long term values with Table 11.16. Take Poisson's ratio from Table 11.17.
7. For pavement work use the resilient modulus route (Table 11.18) and the pavement-specific relationships in Chapter 13, not the static foundation modulus.
8. For rock, take typical deformation parameters from Tables 11.19 and 11.20, then reduce intact modulus to mass modulus with Table 11.21, adjust for open versus closed joints with Table 11.22, and cross-check against a rock mass rating route with Table 11.23. Take Poisson's ratio from Table 11.24 - a low value for competent unweathered bedrock and a higher one for highly weathered rock.
9. Close with Table 11.25 (significance of modulus) to confirm the modulus you selected is the one that actually controls the response being calculated - Look's point is that the relevant modulus depends on the relative stress influence, not on which value was easiest to obtain.
10. Record for each modulus: definition, strain level, drainage condition, derivation route and whether it is vertical or horizontal. Look notes vertical modulus is typically about twice the horizontal in soils, and the degree of anisotropy differs between bound and unbound pavement materials.

## Decision rules

- Match the modulus to the strain level of the application; do not use a small-strain geophysical modulus directly in a settlement calculation.
- Dynamic modulus can exceed static modulus by a large multiple - never substitute one for the other.
- Short-term (undrained) and long-term (drained) moduli differ substantially in fine-grained soils; carry both through the design where the structure is sensitive to time-dependent movement.
- For rock, apply the intact-to-mass modulus reduction explicitly; joint condition (open versus closed) changes the modulus ratio materially.
- Where only one modulus can be carried into the analysis, choose the one matching the governing limit state and record what was sacrificed.

## Checks

- Selected modulus consistent with the strain level in Table 11.4 for the application
- Modulus derived by at least two independent routes and the spread reported
- Rank of the selected value against Table 11.5 relative rankings
- Anisotropy considered where horizontal movements are being calculated
- Rock mass modulus reconciled between the intact-reduction route and the rock mass rating route

## Common errors

- Carrying a single modulus through pavement, footing and retaining wall calculations
- Using shear wave velocity derived small-strain stiffness directly for settlement
- Confusing constrained modulus with Young's modulus in one-dimensional settlement work
- Using intact rock modulus for a jointed rock mass
- Ignoring the drained/undrained distinction in clay stiffness

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Stiffness degradation data cited was measured on specific materials (chalk and two named clays) and should not be extrapolated blindly.
- Modulus correlations carry the largest scatter of any parameter family in the book; Look states the uncertainty explicitly.

## Standards cited

Austroads Guide to Pavement Technology Part 2 (modulus for pavement design), AS 1289.6.4 series, ISRM Suggested Methods (rock deformability)

## Related

- [[Rock weathering classes]]
- [[Skills]]
