---
title: Run a CPTu correctly - cone type, saturation, filter position, calibration and verticality
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Run a CPTu correctly - cone type, saturation, filter position, calibration and verticality

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Equipment and procedures (pp 77-79, Figures 3.1-3.7), Specifications and standards (pp 88-91, Figure 3.11), Test results (pp 91, Figure 3.12)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Piezocone data that can legitimately be interpreted: corrected tip resistance and sleeve friction, reliable pore pressure, verified saturation, documented cone geometry and a straight sounding.

## Inputs

- Cone type and size (mechanical, electrical, piezocone; miniature through to standard and larger cross sections)
- Net area ratio from calibration, and the friction sleeve end areas
- Filter element type and position (cone face, shoulder, or behind the sleeve) and saturation fluid
- Rig reaction capacity and site access
- Expected profile, including any unsaturated upper layers to be penetrated
- Target parameters, which determine the filter position choice

## Procedure

1. Select the cone class knowingly. Mechanical cones measure thrust at the surface through the rods; electrical cones measure tip resistance and sleeve friction directly at the cone; piezocones add continuous pore pressure. Data from these three classes are not interchangeable in interpretation.
2. Set the standard geometry and rate: a sixty degree apex angle tip driven at a constant rate, with the rate held within the narrow tolerance the reference procedure allows, the friction sleeve diameter equal to or marginally greater than the cone diameter within a tight tolerance, and a specified maximum tip roughness.
3. Choose the filter position from the intended use. The book is explicit that to correct tip resistance for pore pressure effects the element must be at the shoulder immediately above the cone face; a mid-face element gives different information and cannot be used for the tip correction. Where dissipation testing is planned, the shoulder position is also the one the standard consolidation solution was validated against.
4. Determine and record the net area ratio by calibration. Pore pressure acting on the shoulder area behind the cone and on the ends of the friction sleeve produces unequal area effects; the corrected tip resistance adds a pore-pressure term scaled by one minus the area ratio, and the corrected sleeve friction subtracts and adds terms for the bottom and top end areas of the sleeve. The book states the tip correction is essential whenever soil properties are to be assessed, and that it makes a significant difference in soft clay depending on penetrometer geometry.
5. Saturate the filter and the measuring system properly. Acceptable saturation fluids include de-aired water, silicon oil, glycerine oil, and mineral oil or grease. Saturate the filter element under vacuum in a chamber, confirming saturation by an immediate response to stress increments, and keep the element immersed until it goes into the ground. De-aired water is difficult to keep saturated through an unsaturated surface layer.
6. Where an unsaturated zone must be penetrated, consider a slot filter arrangement: pore pressure is read through a narrow slot immediately behind the tip, with the pressure chamber saturated by liquid and the slot and channels filled with a viscous medium. It keeps saturation through unsaturated layers and shortens preparation, at some cost in pore pressure response accuracy.
7. Include an inclinometer in the penetrometer and monitor verticality. The book notes that a change in inclination beyond a small angle over a metre of penetration can impose damaging push rod bending - so verticality monitoring protects the equipment as well as the depth reference.
8. Record baseline (zero) readings before and after each sounding for all channels and check the drift; a channel that has drifted invalidates the sounding for parameter work even if the profile still looks plausible.
9. Plan the reaction system for the ground. Onshore truck, van, rig or trailer mounted systems provide reaction from vehicle mass in the usual range; lightweight anchored units suit difficult access; offshore and nearshore work uses seabed frames, jack-ups or drillships with continuous pushing systems.
10. Present results as continuous profiles of corrected tip resistance, sleeve friction and pore pressure with depth, plus the derived friction ratio and pore pressure parameter, and identify the equilibrium pore pressure used.
11. Treat operator skill as a control: the book states that despite full automation, skilled and experienced personnel are the minimum criterion for good practice.

## Decision rules

- If the tip resistance is to be corrected - which it must be for any parameter work - the pore pressure element goes at the shoulder.
- Never interpret mechanical cone data with electrical cone correlations.
- A sounding with unverified saturation is a profiling record, not a source of pore-pressure-based parameters.
- Do not accept data where baseline drift exceeds the tolerance; re-zero and repeat.
- Where inclination exceeds the guidance over a metre, stop and reposition rather than continuing and reporting a nominal depth.

## Checks

- Net area ratio calibration certificate current and applied in the processing
- Saturation procedure recorded, with fluid type and method
- Filter position recorded on the profile header
- Penetration rate within tolerance for the whole sounding
- Zero readings before and after each sounding with drift within tolerance
- Inclination record reviewed for cumulative deviation

## Common errors

- Reporting uncorrected tip resistance and deriving parameters from it, especially in soft clay
- Using a mid-face filter and then applying the shoulder-based tip correction and dissipation solution
- Losing saturation through a dry surface crust and reporting the resulting pore pressures
- Omitting the net area ratio from the data package so the correction cannot be verified
- Ignoring inclination and reporting an overstated depth

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Interpretation methods in the source apply only to tests performed strictly to the reference test procedure.
- Slot filter systems trade pore pressure response accuracy for saturation robustness - state which was used.

## Standards cited

ASTM D5778, ISO 22476-1 / EN ISO 22476-1, ISSMGE IRTP for CPT/CPTU (1999), Eurocode 7 Part 3

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
