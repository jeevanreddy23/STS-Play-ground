---
title: Run and interpret a CPTu dissipation test for consolidation and permeability
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Run and interpret a CPTu dissipation test for consolidation and permeability

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Consolidation coefficients (pp 114-119, Table 3.4, Figure 3.28); Chapter 7 Table 7.4 (consolidation coefficient case data, p 283)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A horizontal coefficient of consolidation from a dissipation record, with the filter position, degree of dissipation, rigidity index and equilibrium pore pressure all correctly handled, and its sensitivity understood.

## Inputs

- Continuous pore pressure record after penetration is halted, with time base
- Filter position (the standard solution is validated at the shoulder)
- Probe radius
- Rigidity index (shear modulus over undrained strength) for the layer
- Equilibrium pore pressure at the test depth from groundwater data
- The initial pore pressure at the moment penetration stopped

## Procedure

1. Halt penetration at the target depth and monitor the decay of pore pressure with time without moving the rods. Do not re-seat or adjust the rods during the record - any movement resets the initial condition.
2. Understand the two-stage basis of the interpretation: the first stage models penetration as steady flow of soil past a stationary cone in an elastic-perfectly plastic isotropic homogeneous material, giving the total stresses and pore pressures around the probe; the second stage takes those as initial conditions for an uncoupled consolidation process around a stationary probe.
3. Use the dimensionless time factor formulation, in which the time factor is the coefficient of consolidation multiplied by elapsed time, divided by the product of the squared probe radius and the square root of the rigidity index. Because of that square root term, the derived coefficient of consolidation scales directly with the square root of the rigidity index - so state the rigidity index used and test the sensitivity.
4. Take the time factor from the published table for the achieved degree of dissipation and the filter position. The tabulated factors differ by roughly an order of magnitude between a cone face element, a shoulder element and elements set several radii above the shoulder - reading the wrong column is the single largest error available in this test.
5. Use the shoulder position. The book reports three independent field and laboratory datasets with pore pressures measured at four locations on the piezocone, concluding the time factor formulation should be applied to pore pressures measured at the shoulder immediately above the cone face, and that theoretical curves match measured records less well at the other positions.
6. Process the record by the recommended procedure: plot the dimensionless excess pore pressure ratio - current minus equilibrium, divided by initial minus equilibrium - against time on a logarithmic or square-root-of-time scale; establish the equilibrium value from groundwater data rather than from the tail of the record unless the record has genuinely reached equilibrium; identify the time to the chosen degree of dissipation, conventionally fifty percent; and compute the coefficient from the time factor expression.
7. Handle dilatant and overconsolidated soils carefully - records in these materials can rise before falling, so the initial value is not the value at the instant penetration stopped and the standard monotonic processing misreads them.
8. Convert the horizontal coefficient of consolidation to a vertical value only through a stated anisotropy assumption, and to permeability only through a stated coefficient of volume compressibility - both conversions add uncertainty that must be reported.
9. Cross-check against oedometer consolidation coefficients from the same layer where available. The book's compilation of results for several deposits shows piezocone-derived values in the same broad range as laboratory vertical and radial consolidation values for normally consolidated conditions, and substantially higher values where the piezocone result reflects a partially drained or reloading condition - so state which condition the result represents.
10. Where the layer contains thin drained lenses identified in the profiling, note that the drainage path in the mass is set by those lenses and not by the layer thickness - the dissipation test measures the matrix, the lenses control the field behaviour.

## Decision rules

- Use a shoulder filter for dissipation testing; other positions require different time factors and match theory less well.
- Never take the equilibrium pore pressure from an incomplete record tail.
- Report the coefficient of consolidation with the rigidity index used and a sensitivity range.
- In dilatant or heavily overconsolidated soils, do not apply monotonic processing without inspecting the record shape.
- State whether the derived value represents normally consolidated (virgin) or reloading conditions.

## Checks

- Record long enough to reach the chosen degree of dissipation with confidence
- Filter position confirmed against the time factor column used
- Rigidity index assumption stated and its effect on the answer quantified
- Equilibrium pore pressure taken from groundwater data and cross-checked
- Result compared against laboratory consolidation data for the same layer

## Common errors

- Reading time factors for the wrong filter position
- Assuming a rigidity index and not reporting it, hiding a large sensitivity
- Terminating the record early and extrapolating the equilibrium value
- Applying the standard processing to a dilatant record that rises before falling
- Reporting a horizontal coefficient as if it were vertical

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The interpretation assumes uncoupled consolidation in an isotropic homogeneous medium - layered and anisotropic deposits depart from it.
- Derived coefficients scale with the square root of an assumed rigidity index, so a single reported value without a range overstates precision.

## Standards cited

ISO 22476-1, ASTM D5778, AS 1289.6.6.1 (laboratory comparison)

## Related

- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
