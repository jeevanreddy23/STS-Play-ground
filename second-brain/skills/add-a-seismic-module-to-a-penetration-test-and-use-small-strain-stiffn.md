---
title: Add a seismic module to a penetration test and use small-strain stiffness properly
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Add a seismic module to a penetration test and use small-strain stiffness properly

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Seismic cone (pp 81-85, Figure 3.8), Stiffness in cohesive materials (pp 109-114); Chapter 6 seismic dilatometer (pp 248-249, Figure 6.6); Chapter 5 note on incorporating geophones in pressuremeter rods (p 182); Chapter 7 Stiffness (pp 287-289, Figure 7.12)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A shear wave velocity and small-strain shear modulus profile from the same sounding as the strength measurement, used to characterise structure and to anchor a stiffness degradation curve rather than as a direct design stiffness.

## Inputs

- Seismic cone or seismic dilatometer with accelerometer or geophone receivers, and the receiver spacing
- Surface shear wave source (a beam held down by a vehicle or mass, struck at each end)
- Soil bulk density profile for the modulus conversion
- Strength profile from the same sounding
- The strain level at which the design operates

## Procedure

1. Add the seismic module - the book's position is that combining different measurements in a single sounding is a particularly powerful means of assessing natural materials, and that the additional cost and time for a seismic measurement in a cone test is modest.
2. Generate polarised shear waves at the surface with a horizontal beam coupled to the ground by vehicle or dead weight, struck at each end. Record both positive and negative polarised waves so the shear wave arrival can be distinguished from the compression wave arrival and from environmental noise by polarity reversal - this is the primary quality control on arrival picking.
3. Use a true interval measurement where the probe carries two receivers at a known spacing; this removes the trigger-time uncertainty that affects single-receiver pseudo-interval measurements.
4. Convert velocity to small-strain shear modulus through mass density. State the density profile used - the modulus scales with the square of velocity, so velocity picking dominates the uncertainty, but density errors propagate linearly.
5. Understand what the measurement is. The small-strain modulus is the stiffness at strains far below those at which foundations, walls and slopes operate. Using it directly as a design stiffness overestimates stiffness by a large factor.
6. Use it for what it is good for. First, as the anchor of a stiffness degradation curve, combined with a test that samples intermediate strains - the book notes that combining small-strain measurements with the strain range covered by a self-boring pressuremeter helps build a degradation curve, which is what allows an operational design stiffness to be selected. Second, as the structure and bonding indicator, through the ratio of small-strain modulus to cone tip resistance or to energy-corrected blow count. Third, as a direct input where the loading really is small strain - dynamic and seismic soil-structure interaction, machine foundations, and ground surface settlement predictions under dynamic loading.
7. Recognise the factors the small-strain modulus depends on: effective stress, void ratio, overconsolidation ratio, degree of saturation, grain characteristics, soil structure and temperature. In reconstituted clay, the effect of overconsolidation ratio is largely embedded in the void ratio effect, but in structured natural soils the structure term is a first-order contributor and is exactly what the ratio-based screening detects.
8. Where the design needs stiffness in weak rock or in bonded soil, prefer the seismic measurement plus a plate loading test to any penetration correlation - the book states penetration-based stiffness predictions in weak rock can be wrong by an order of magnitude.
9. Record the profile alongside the other channels. In a seismic dilatometer presentation, the velocity profile is displayed as a fifth panel beside material index, constrained modulus, undrained strength and horizontal stress index.
10. Cross-check the seismic profile against the strength profile for consistency: an interval where velocity rises but tip resistance or blow count does not is a bonding or cementation signature, not an inconsistency to be smoothed out.

## Decision rules

- Never use the small-strain modulus directly as the operational design stiffness for a static foundation problem.
- Reverse polarity on the source at every depth - unreversed records give unreliable arrival picks.
- Prefer true interval (two receiver) measurement over pseudo-interval.
- Where velocity and penetration resistance diverge, suspect structure and re-screen the correlations.
- For dynamic and seismic problems the small-strain modulus is the correct input; for static settlement it is the starting point of a degradation curve.

## Checks

- Polarity-reversed pairs recorded at every seismic depth
- Receiver spacing and picking method documented
- Density profile used for the modulus conversion stated
- Degradation curve or modulus reduction assumption documented where a static design stiffness is derived
- Stiffness-to-strength ratio screening plotted for structure identification

## Common errors

- Applying the small-strain modulus directly to a settlement calculation
- Picking arrivals from single-polarity records and mistaking compression wave arrivals for shear
- Reporting modulus without the density assumption
- Ignoring the strain level mismatch between the measurement and the design problem
- Smoothing out velocity-resistance divergence that was the bonding signal

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Stiffness degradation is material specific; anchoring a curve at small strain does not by itself define the operational modulus.
- The project's existing seismic geophysics skill covers surface survey design; this skill covers downhole modules on penetration probes.

## Standards cited

ASTM D7400 (downhole seismic testing in boreholes and penetration tests), ISO 22476-1, EN ISO 22476-5

## Related

- [[Borehole log conventions]]
- [[Library - plate load testing]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
