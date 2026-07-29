/**
 * Worked example: STS report 26/0988, 24-26 Carter Street Lidcombe, 27 Jul 2026.
 *
 * This is real report data and it is deliberately incomplete, because the
 * source is. The report tabulates depths below ground and socket lengths; it
 * states no reduced levels and no survey coordinates. Rather than invent a
 * platform RL, the datum below is marked `inferred` and every pile inherits
 * that flag — the model is dimensionally correct but its absolute levels are
 * not, and the viewer says so until an engineer enters the surveyed platform
 * level. Plan positions are digitised from the foundation layout drawing, so
 * they are `drawing-derived`, not surveyed.
 */

import {
  PileProject,
  PileRecord,
  Provenance,
  emptyPile,
  extracted,
  inferred,
  missing,
} from './schema';

const REPORT: Provenance = {
  file: '26-0988 Pile Inspection Report.docx',
  page: 2,
  locator: 'Table 1 - Pile Inspection Summary',
  documentDate: '2026-07-28',
};

const DRAWING: Provenance = {
  file: 'Olivotto Consulting Job 23463 - Slab & Foundation Layout.pdf',
  locator: 'Drawing 1, Slab & Foundation Layout',
  revision: 'C',
  documentDate: '2025-10-08',
};

/**
 * No platform RL appears in either source. 0.00 is a placeholder so relative
 * geometry can be drawn; it is inferred, so every derived level is flagged.
 */
const ASSUMED_PLATFORM_RL = 0;
const PLATFORM_NOTE =
  'No platform RL in the report or on the drawing. 0.00 assumed for relative display only - enter the surveyed platform RL for true levels.';

interface Row {
  id: string;
  group: string;
  dia: number;
  x: number;
  y: number;
  depth: number | null;
  socket: number | null;
}

const ROWS: Row[] = [
  { id: 'P1', group: 'internal', dia: 0.6, x: -17.62, y: -16.44, depth: 2.7, socket: 1.7 },
  { id: 'P2', group: 'internal', dia: 0.6, x: -8.62, y: -18.75, depth: null, socket: null },
  { id: 'P3', group: 'internal', dia: 0.6, x: 0.62, y: -18.75, depth: 2.7, socket: 1.4 },
  { id: 'P4', group: 'internal', dia: 0.6, x: 9.69, y: -18.75, depth: null, socket: null },
  { id: 'P5', group: 'internal', dia: 0.6, x: 17.19, y: -18.94, depth: 2.5, socket: 0.9 },
  { id: 'P6', group: 'internal', dia: 0.6, x: -17.38, y: 18.88, depth: 2.2, socket: 1.8 },
  { id: 'P7', group: 'internal', dia: 0.6, x: -8.62, y: 17.69, depth: null, socket: null },
  { id: 'P8', group: 'internal', dia: 0.6, x: 0.5, y: 17.69, depth: 2.4, socket: 2.0 },
  { id: 'P9', group: 'internal', dia: 0.6, x: 9.56, y: 17.62, depth: 2.4, socket: 2.0 },
  { id: 'P10', group: 'internal', dia: 0.6, x: 17.38, y: 15.62, depth: 2.7, socket: 1.4 },
  { id: 'P11', group: 'internal', dia: 0.6, x: -9.69, y: -0.31, depth: 3.3, socket: 1.8 },
  { id: 'P12', group: 'internal', dia: 0.6, x: -0.62, y: -0.31, depth: null, socket: null },
  { id: 'P13', group: 'internal', dia: 0.6, x: 8.31, y: -0.31, depth: 3.3, socket: 1.8 },
  { id: 'P14', group: 'perimeter', dia: 0.45, x: -11.38, y: -19.0, depth: null, socket: null },
  { id: 'P15', group: 'perimeter', dia: 0.45, x: -12.31, y: -17.62, depth: null, socket: null },
  { id: 'P16', group: 'perimeter', dia: 0.45, x: -17.19, y: -11.69, depth: 2.2, socket: 1.2 },
  { id: 'P17', group: 'perimeter', dia: 0.45, x: -17.38, y: -4.88, depth: 2.2, socket: 1.2 },
  { id: 'P18', group: 'perimeter', dia: 0.45, x: -18.0, y: -0.19, depth: 2.2, socket: 1.7 },
  { id: 'P19', group: 'perimeter', dia: 0.45, x: -17.38, y: 5.62, depth: 2.3, socket: 1.6 },
  { id: 'P20', group: 'perimeter', dia: 0.45, x: -17.38, y: 13.0, depth: 2.3, socket: 1.6 },
  { id: 'P21', group: 'perimeter', dia: 0.45, x: 17.19, y: -11.88, depth: null, socket: null },
  { id: 'P22', group: 'perimeter', dia: 0.45, x: 17.19, y: -5.31, depth: 1.8, socket: 0.6 },
  { id: 'P23', group: 'perimeter', dia: 0.45, x: 16.88, y: 0.0, depth: null, socket: null },
  { id: 'P24', group: 'perimeter', dia: 0.45, x: 17.0, y: 5.62, depth: 1.9, socket: 0.7 },
  { id: 'P25', group: 'perimeter', dia: 0.45, x: 17.19, y: 13.5, depth: null, socket: null },
  { id: 'P26', group: 'perimeter', dia: 0.45, x: 14.25, y: 16.38, depth: 1.9, socket: 0.7 },
  { id: 'P27', group: 'perimeter', dia: 0.45, x: 15.5, y: 19.5, depth: 1.9, socket: 0.7 },
  { id: 'P28', group: 'perimeter', dia: 0.45, x: -16.56, y: -17.62, depth: null, socket: null },
  { id: 'P29', group: 'perimeter', dia: 0.45, x: -18.0, y: 7.88, depth: null, socket: null },
];

function buildPile(r: Row): PileRecord {
  const p = emptyPile(r.id);

  p.position = {
    x: extracted(r.x, DRAWING, 0.6),
    y: extracted(r.y, DRAWING, 0.6),
    accuracy: 'drawing-derived',
  };

  // Diameter is not tabulated per pile; the drawings nominate 450-600 mm by
  // location, so this is a reading of the detail rather than a stated value.
  p.diameter = inferred(
    r.dia,
    `Not tabulated per pile. ${r.dia * 1000} mm read from the ${r.group} pier detail (drawings nominate 450-600 mm).`,
    0.5,
  );

  p.groundRL = inferred(ASSUMED_PLATFORM_RL, PLATFORM_NOTE, 0.1);

  if (r.depth === null) {
    // On the drawing but not inspected on this visit. Nothing is asserted.
    p.acceptance = { value: 'not-inspected', state: 'extracted', source: DRAWING };
    p.inspectionNotes = missing<string>('Not among the 18 piers inspected on 27 Jul 2026.');
    return p;
  }

  p.totalDepth = extracted(r.depth, REPORT, 0.95);
  p.constructedSocketLength = extracted(r.socket!, REPORT, 0.95);
  p.toeRL = inferred(
    Number((ASSUMED_PLATFORM_RL - r.depth).toFixed(3)),
    'Derived from the assumed platform RL minus the reported depth below ground.',
    0.3,
  );
  p.topOfBedrockRL = inferred(
    Number((ASSUMED_PLATFORM_RL - r.depth + r.socket!).toFixed(3)),
    'Derived from the assumed platform RL, reported depth and socket length.',
    0.3,
  );
  p.foundingMaterial = extracted('Weathered siltstone', REPORT, 0.95);
  p.bedrockClass = missing<string>('No bedrock class or zone stated in the report.');
  p.groundwaterRL = missing<number>('Groundwater not reported for individual piers.');
  p.inspectionDate = extracted('2026-07-27', REPORT, 0.99);
  p.inspectionNotes = extracted(
    'Base clean and free of loose or softened material at the time of inspection.',
    REPORT,
    0.9,
  );
  p.acceptance = extracted('accepted', REPORT, 0.9);

  // The report states no required socket length, so compliance is deliberately
  // left indeterminate rather than assumed to pass.
  p.requiredSocketLength = missing<number>(
    'Required socket length not stated in the inspection report; take from the approved structural drawing.',
  );

  return p;
}

export const carterStreetProject: PileProject = {
  name: '24-26 Carter Street, Lidcombe NSW',
  reportRef: 'STS report 26/0988',
  client: 'Asset Building Systems',
  piles: ROWS.map(buildPile),
  // No design records supplied - design vs constructed stays unavailable until
  // the structural pile schedule is loaded.
  design: [],
};

export const blankProject: PileProject = { name: 'New project', piles: [], design: [] };
