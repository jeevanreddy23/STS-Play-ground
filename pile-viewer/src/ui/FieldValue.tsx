/**
 * Renders one engineering value with its state, so no number ever appears on
 * screen without the reader knowing where it came from and how far to trust it.
 */

import { Field, Provenance, ValueState } from '../core/schema';

const STATE_LABEL: Record<ValueState, string> = {
  extracted: 'from document',
  calculated: 'calculated',
  manual: 'entered',
  inferred: 'inferred',
  verified: 'verified',
  conflicting: 'conflicting',
  missing: 'not recorded',
};

const STATE_CLASS: Record<ValueState, string> = {
  extracted: 'st-extracted',
  calculated: 'st-calculated',
  manual: 'st-manual',
  inferred: 'st-inferred',
  verified: 'st-verified',
  conflicting: 'st-conflicting',
  missing: 'st-missing',
};

export function StateChip({ state }: { state: ValueState }) {
  return <span className={`chip ${STATE_CLASS[state]}`}>{STATE_LABEL[state]}</span>;
}

function SourceLine({ source }: { source: Provenance }) {
  const bits = [source.file];
  if (source.page) bits.push(`p.${source.page}`);
  if (source.locator) bits.push(source.locator);
  if (source.revision) bits.push(`rev ${source.revision}`);
  return <div className="src">{bits.join(' · ')}</div>;
}

export function FieldValue<T>({
  label,
  field,
  unit,
  precision = 2,
}: {
  label: string;
  field: Field<T>;
  unit?: string;
  precision?: number;
}) {
  const shown =
    field.value === null
      ? '—'
      : typeof field.value === 'number'
        ? field.value.toFixed(precision)
        : String(field.value);

  return (
    <div className={`fv ${field.state === 'missing' ? 'fv-missing' : ''}`}>
      <div className="fv-head">
        <span className="fv-label">{label}</span>
        <StateChip state={field.state} />
      </div>
      <div className="fv-value">
        {shown}
        {unit && field.value !== null ? <span className="unit"> {unit}</span> : null}
        {field.confidence !== undefined && field.state !== 'missing' ? (
          <span className="conf">{Math.round(field.confidence * 100)}%</span>
        ) : null}
      </div>

      {field.state === 'conflicting' && field.alternatives ? (
        <div className="alts">
          {field.alternatives.map((a, i) => (
            <div key={i} className="alt">
              <b>{String(a.value)}</b>
              <SourceLine source={a.source} />
            </div>
          ))}
        </div>
      ) : null}

      {field.source ? <SourceLine source={field.source} /> : null}
      {field.note ? <div className="note">{field.note}</div> : null}
    </div>
  );
}
