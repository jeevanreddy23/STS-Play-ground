---
title: Proportion a foundation for machine or vibratory dynamic loading
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Proportion a foundation for machine or vibratory dynamic loading

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 15 (Dynamic Loading of Soil), including mass ratio and equivalent damping ratio for circular and rectangular bases, and the field observations of stress and densification under a vibratory roller), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A machine foundation sized so its natural frequencies are separated from the operating frequency, with damping and dynamic settlement assessed and the effect on nearby ground and structures considered.

## Inputs

- Machine operating frequency, unbalanced force or moment, and mode of excitation (vertical translation, horizontal translation, rocking, torsion)
- Mass and mass moment of inertia of the proposed foundation block plus machinery
- Contact area and shape of the foundation base, and the equivalent radius
- Soil density, shear modulus (or shear wave velocity) and Poisson's ratio at the founding level
- Tolerable vibration amplitude for the machine and for neighbouring structures and occupants

## Procedure

1. Identify each mode of motion the machine excites, and treat each separately: vertical translation, horizontal translation, rocking and torsion have different stiffnesses and different damping.
2. Compute the mass ratio for each mode using the definitions in the source: the foundation-plus-machinery mass (or mass moment of inertia) normalised by the soil density and the appropriate power of the equivalent base radius.
3. For a rectangular base, convert to an equivalent circular radius using the source's expressions, which differ for translation, rocking and torsion.
4. Obtain the equivalent damping ratio for each mode from the mass ratio using the source's charts, which are based on elastic half-space theory. Note that damping is much greater for translation than for rotation, and greater for light foundations.
5. Compute the natural frequency of each mode from the soil stiffness and the foundation mass, and compare it with the operating frequency.
6. Compute the vibration amplitude at the operating frequency including damping, and compare it with the tolerable amplitude for the machine and for people and structures nearby.
7. Adjust the design — mass, base area, embedment, or ground improvement — until the frequency separation and the amplitudes are acceptable.
8. Separately assess dynamic settlement: repeated dynamic loading densifies granular soil, and the source notes that effective stress can momentarily fall to zero under a vibratory source, which is exactly the mechanism vibratory rollers exploit for compaction. Assess whether the machine will cause progressive settlement of the foundation or of nearby ground.
9. Assess transmission of vibration to neighbouring structures and services against the applicable vibration criteria.

## Decision rules

- Separate the natural frequency from the operating frequency by a clear margin in every excited mode; a resonance in a lightly damped rotational mode is the usual cause of trouble.
- Damping in the rotational modes is small, so rocking and torsion often govern even when vertical response is comfortable.
- Loose saturated granular soil under a dynamic source can lose effective stress; screen for that condition before relying on static stiffness.
- Use a shear modulus appropriate to the very small strains of machine vibration, which is much higher than a static design modulus — using a static modulus will misplace the natural frequency.
- Where amplitudes cannot be brought within limits by proportioning, consider isolation, ground improvement, or a piled foundation.

## Checks

- Check every mode, not just vertical.
- Check the shear modulus used corresponds to the strain level of the vibration (a field seismic measurement is preferable).
- Check predicted vibration at neighbouring structures against the criteria in the governing vibration guidance, not just at the foundation.

## Common errors

- Designing for the vertical mode only and being surprised by rocking resonance.
- Using a static soil modulus to compute the natural frequency.
- Ignoring long-term dynamic settlement of granular soil under the foundation.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.
- The damping ratio charts and equivalent radius expressions are in the source; modern machine foundation design uses updated half-space and impedance function formulations.
- Human and structural vibration limits come from the applicable vibration standard, not from this text.

## Standards cited

AS 2670, DIN 4150-3

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
