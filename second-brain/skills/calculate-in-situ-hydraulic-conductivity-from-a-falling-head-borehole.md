---
title: Calculate in-situ hydraulic conductivity from a falling-head borehole test using the Hvorslev method
type: skill
tags: [skill, testing]
confidence: medium
updated: 2026-08-01
---

# Calculate in-situ hydraulic conductivity from a falling-head borehole test using the Hvorslev method

> **Source:** `Permeability/Calculations.pdf` (Handwritten recalculation sheet, Steps 1-4 (shape factor, geometry, H1/H2 derivation, variable-head formula)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can turn a set of water-level readings in a sealed standpipe or piezometer into a horizontal hydraulic conductivity, with the intake geometry, the head datum and the reading-screening rules all made explicit.

## Inputs

- Standpipe / riser internal diameter d
- Intake (response zone) diameter D and intake length L
- Anisotropy transformation ratio m = sqrt(kh/kv), commonly assumed 1.0 unless site-specific data exists
- Depth to the natural (equilibrium) groundwater table below ground level
- Casing stick-up above ground level
- Time-stamped dip readings of water level measured from the top of casing, at least two times t1 and t2
- Depth of the bentonite seal and the logged depth of the target stratum

## Procedure

1. Screen the readings first: use only readings taken below the bentonite seal and within the target stratum. Discard any reading taken while the water level was still above the seal or above the target layer, because flow at that stage is not through the intended response zone.
2. Because of that screening, do not force t1 = 0 at the start of the recovery. Set t1 at the first reading that satisfies the screening rule and carry the actual elapsed times through to the calculation.
3. Select the Hvorslev shape factor case that matches the installation. The source calculation uses the case for a cylindrical intake of finite length in a uniform medium below an impervious upper boundary, whose shape factor gives the log term ln(4mL/D).
4. Check the slenderness limit for that case before using it: 2mL/D must exceed about 4. If it does not, a different shape factor (short intake / spherical case) applies.
5. Convert each dip reading to a head above the equilibrium water table: H = (depth to water table below ground level) - (dip reading from top of casing) + (stick-up). Do this consistently for both readings so H1 and H2 share the same datum.
6. Compute k = [ d^2 x ln(4mL/D) / (8 x L x (t2 - t1)) ] x ln(H1/H2), with all lengths in metres and time in seconds, giving k in m/s.
7. Convert to the units the downstream design needs: multiply by 86400 to get m/day; multiply m/day by 1000 to express as litres per square metre per day; divide by 86400 again for litres per square metre per second.
8. Record the assumed values (m, water table depth, intake geometry) alongside the result, because the answer is only as defensible as those assumptions.

## Decision rules

- Two readings define one value of k; more readings plotted as ln(H) against time should fall on a straight line, and a curved plot means the test is not behaving as a simple falling-head test (smearing, clogging, partial saturation or leakage past the seal).
- Take m = 1.0 (isotropic) only as a stated assumption; in layered or laminated deposits kh can exceed kv by an order of magnitude and the log term changes accordingly.
- If the head ratio H1/H2 is close to 1 the logarithm is dominated by measurement noise; extend the time interval until a measurable head change has occurred.
- Where the water level never recovers meaningfully within the test window, report k as 'less than' the value implied by the resolution of the dip meter rather than quoting a spurious number.
- A single borehole test characterises a small volume around one intake; for a design permeability, run replicate tests and take a conservative characteristic value rather than an average.

## Checks

- Verify 2mL/D > 4 before adopting the finite-length shape factor.
- Verify H1 > H2 and that both are positive; a negative head means the datum arithmetic (stick-up versus dip reading versus water table) has been mixed up.
- Verify the units: d and D in metres (a 50 mm riser is 0.05 m, not 50), L in metres, elapsed time in seconds.
- Check the answer against the order of magnitude expected for the logged material - intact clays sit many orders below sands, and a result that contradicts the log points to a geometry, unit or screening error.
- Confirm the equilibrium water table used as datum was actually measured, not assumed, wherever possible - the source calculation flags it as an assumed level.

## Common errors

- Including readings taken above the bentonite seal or above the target stratum, which mixes flow paths and inflates k.
- Assuming t1 = 0 at the first dip even though the early readings were screened out.
- Measuring head from the top of casing instead of from the equilibrium water table, so the stick-up correction is lost.
- Using diameters in millimetres in a formula expecting metres, which shifts the answer by six orders of magnitude on the d^2 term.
- Confusing the intake diameter D with the riser diameter d - they are only equal for a simple open-hole installation.
- Reporting k in m/s where the design method expects m/day or L/m2/day.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- The source cites the method as the Hvorslev variable-head solution; the handwritten reference year is garbled and should be confirmed against the original Hvorslev bulletin or a current textbook.
- The formula gives horizontal conductivity for the assumed shape factor case only; vertical conductivity and unsaturated behaviour are not addressed.
- Smear from augering or casing installation can reduce the apparent k by an order of magnitude in fine-grained soils.

## Standards cited

AS 1289.6.7.1, AS 1289.6.7.2, AS/NZS 1547, BS 5930, ASTM D4750

## Related

- [[Groundwater observations]]
- [[Reduced levels and datums]]
- [[Borehole log conventions]]
- [[Skills]]
