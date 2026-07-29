/**
 * Canonical pile data schema.
 *
 * Every engineering value carries its own provenance and state. Nothing in this
 * file has a default numeric value: a quantity we do not know is `null` with
 * state `missing`, and it stays that way through calculation, rendering and
 * export. That is the single rule the rest of the system depends on — the
 * viewer can only draw what has been asserted by a document or a person.
 */

/** How a value came to be, per the engineering safety rules. */
export type ValueState =
  | 'extracted' // read from a source document by the ingestion pipeline
  | 'calculated' // derived deterministically from other fields
  | 'manual' // typed in by an engineer
  | 'inferred' // guessed from context; always low trust, always flagged
  | 'verified' // an engineer has confirmed it against the source
  | 'conflicting' // two or more sources disagree; no single value is adopted
  | 'missing'; // not known — never substituted with a plausible number

/** States that must never be used to make an acceptance decision unreviewed. */
export const UNTRUSTED_STATES: ReadonlySet<ValueState> = new Set([
  'inferred',
  'conflicting',
  'missing',
]);

/** Where a value came from, so any number on screen can be traced back. */
export interface Provenance {
  /** File name as supplied by the user, e.g. "26-0988 Pile Inspection.docx". */
  file: string;
  /** 1-indexed page, where the source has pages. */
  page?: number;
  /** Table, note, drawing region or cell reference within the page. */
  locator?: string;
  /** Document revision, when stated on the source. */
  revision?: string;
  /** ISO date of the source document, not of the extraction. */
  documentDate?: string;
}

/** A competing value from a different source, retained rather than discarded. */
export interface Alternative<T> {
  value: T;
  source: Provenance;
  confidence?: number;
}

/**
 * A single engineering quantity plus everything needed to defend it.
 *
 * `confidence` is 0..1 and only meaningful for `extracted` / `inferred`; a
 * manual or verified value does not need a score, an engineer stood behind it.
 */
export interface Field<T> {
  value: T | null;
  state: ValueState;
  confidence?: number;
  source?: Provenance;
  /** Populated when state is 'conflicting'. */
  alternatives?: Alternative<T>[];
  /** Free text shown next to the flag, e.g. why it is inferred. */
  note?: string;
}

/** How much a coordinate can be trusted. Graphical PDF measurement is not survey. */
export type CoordinateAccuracy =
  | 'surveyed'
  | 'locally-calibrated'
  | 'drawing-derived'
  | 'manual'
  | 'unverified';

export type AcceptanceStatus =
  | 'accepted'
  | 'conditional'
  | 'rejected'
  | 'not-inspected'
  | 'pending-review';

/** Whether an engineer has signed off the record as a whole. */
export type VerificationStatus = 'unverified' | 'part-verified' | 'verified';

export interface InspectionPhoto {
  id: string;
  /** Object URL, storage key or data URL. */
  url: string;
  caption?: string;
  takenAt?: string;
}

/** Plan position. Units are project metres in a local site grid. */
export interface PilePosition {
  x: Field<number>;
  y: Field<number>;
  accuracy: CoordinateAccuracy;
  /** Structural grid reference, e.g. "B/3", when the drawing gives one. */
  gridRef?: string;
}

/**
 * One pile. Levels are Reduced Levels (RL) in metres, increasing upward — the
 * same convention as the survey and the drawings, so no sign flipping happens
 * anywhere between the report and the scene.
 */
export interface PileRecord {
  id: string;
  position: PilePosition;

  /** RL of the working platform / ground surface at the pile. */
  groundRL: Field<number>;
  /** RL of the top of the pile, if it differs from the platform. */
  pileTopRL: Field<number>;
  /** RL of the pile toe as constructed. */
  toeRL: Field<number>;
  /** RL at which competent bedrock was proved. */
  topOfBedrockRL: Field<number>;

  diameter: Field<number>;
  /** Total constructed depth below platform, where reported directly. */
  totalDepth: Field<number>;

  requiredSocketLength: Field<number>;
  constructedSocketLength: Field<number>;

  /** Founding material as described by the inspector, e.g. "weathered siltstone". */
  foundingMaterial: Field<string>;
  /** Project bedrock class or zone, e.g. "Class III" or "Bedrock B". */
  bedrockClass: Field<string>;
  /** Groundwater RL, or null with a note when "not encountered". */
  groundwaterRL: Field<number>;

  inspectionDate: Field<string>;
  inspectionNotes: Field<string>;
  photos: InspectionPhoto[];

  acceptance: Field<AcceptanceStatus>;
  verification: VerificationStatus;
}

/** Design intent for a pile, kept separate so design vs constructed stays honest. */
export interface PileDesign {
  id: string;
  designToeRL: Field<number>;
  designDiameter: Field<number>;
  designSocketLength: Field<number>;
}

export interface PileProject {
  name: string;
  reportRef?: string;
  client?: string;
  /** RL used as scene Y = 0. Chosen from data, never assumed. */
  datumRL?: number;
  piles: PileRecord[];
  design: PileDesign[];
}

/* ---------- constructors ---------- */

export function missing<T>(note?: string): Field<T> {
  return { value: null, state: 'missing', note };
}

export function manual<T>(value: T, note?: string): Field<T> {
  return { value, state: 'manual', note };
}

export function extracted<T>(
  value: T,
  source: Provenance,
  confidence = 0.8,
): Field<T> {
  return { value, state: 'extracted', source, confidence };
}

export function inferred<T>(value: T, note: string, confidence = 0.4): Field<T> {
  return { value, state: 'inferred', note, confidence };
}

export function verified<T>(value: T, source?: Provenance): Field<T> {
  return { value, state: 'verified', source };
}

/** Two sources disagree. No value is adopted; both are kept for review. */
export function conflicting<T>(alternatives: Alternative<T>[], note?: string): Field<T> {
  return { value: null, state: 'conflicting', alternatives, note };
}

/* ---------- predicates ---------- */

/** True when a value exists and may be used for geometry. */
export function hasValue<T>(f: Field<T> | undefined): f is Field<T> & { value: T } {
  return !!f && f.value !== null && f.state !== 'missing' && f.state !== 'conflicting';
}

/** True when a value exists but should not be relied on without review. */
export function needsReview<T>(f: Field<T> | undefined): boolean {
  if (!f) return true;
  if (UNTRUSTED_STATES.has(f.state)) return true;
  return f.state === 'extracted' && (f.confidence ?? 0) < 0.7;
}

export function emptyPile(id: string): PileRecord {
  return {
    id,
    position: { x: missing<number>(), y: missing<number>(), accuracy: 'unverified' },
    groundRL: missing<number>(),
    pileTopRL: missing<number>(),
    toeRL: missing<number>(),
    topOfBedrockRL: missing<number>(),
    diameter: missing<number>(),
    totalDepth: missing<number>(),
    requiredSocketLength: missing<number>(),
    constructedSocketLength: missing<number>(),
    foundingMaterial: missing<string>(),
    bedrockClass: missing<string>(),
    groundwaterRL: missing<number>(),
    inspectionDate: missing<string>(),
    inspectionNotes: missing<string>(),
    photos: [],
    acceptance: missing<AcceptanceStatus>(),
    verification: 'unverified',
  };
}
