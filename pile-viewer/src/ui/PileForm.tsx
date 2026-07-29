/**
 * Manual pile entry.
 *
 * Blank fields stay missing. There are no default values in this form, because
 * a pre-filled diameter is indistinguishable from a measured one once it is in
 * the record.
 */

import { FormEvent, useState } from 'react';
import {
  CoordinateAccuracy,
  PileRecord,
  emptyPile,
  manual,
} from '../core/schema';

const num = (s: string) => (s.trim() === '' ? null : Number(s));

export function PileForm({
  onAdd,
  onCancel,
}: {
  onAdd: (p: PileRecord) => void;
  onCancel: () => void;
}) {
  const [f, setF] = useState({
    id: '',
    x: '',
    y: '',
    accuracy: 'manual' as CoordinateAccuracy,
    groundRL: '',
    toeRL: '',
    topOfBedrockRL: '',
    diameter: '',
    requiredSocket: '',
    foundingMaterial: '',
    inspectionDate: '',
    notes: '',
  });

  const set = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.id.trim()) return;

    const p = emptyPile(f.id.trim());
    const x = num(f.x);
    const y = num(f.y);
    if (x !== null && y !== null) {
      p.position = { x: manual(x), y: manual(y), accuracy: f.accuracy };
    } else {
      p.position = { ...p.position, accuracy: f.accuracy };
    }

    const g = num(f.groundRL);
    if (g !== null) p.groundRL = manual(g);
    const t = num(f.toeRL);
    if (t !== null) p.toeRL = manual(t);
    const b = num(f.topOfBedrockRL);
    if (b !== null) p.topOfBedrockRL = manual(b);
    const d = num(f.diameter);
    if (d !== null) p.diameter = manual(d);
    const rs = num(f.requiredSocket);
    if (rs !== null) p.requiredSocketLength = manual(rs);
    if (f.foundingMaterial.trim()) p.foundingMaterial = manual(f.foundingMaterial.trim());
    if (f.inspectionDate.trim()) p.inspectionDate = manual(f.inspectionDate.trim());
    if (f.notes.trim()) p.inspectionNotes = manual(f.notes.trim());

    onAdd(p);
  };

  return (
    <div className="modal-bg" onClick={onCancel}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <h2>Add pile</h2>
        <p className="hint">
          Leave anything you do not know blank — it stays “not recorded” rather than
          becoming a number the model treats as real. Levels are RL in metres,
          increasing upward.
        </p>

        <label>
          Pile ID <span className="req">required</span>
          <input value={f.id} onChange={set('id')} placeholder="P1" autoFocus />
        </label>

        <div className="grid2">
          <label>
            X (m)
            <input value={f.x} onChange={set('x')} inputMode="decimal" />
          </label>
          <label>
            Y (m)
            <input value={f.y} onChange={set('y')} inputMode="decimal" />
          </label>
        </div>

        <label>
          Coordinate accuracy
          <select
            value={f.accuracy}
            onChange={(e) => setF((p) => ({ ...p, accuracy: e.target.value as CoordinateAccuracy }))}
          >
            <option value="surveyed">surveyed</option>
            <option value="locally-calibrated">locally calibrated</option>
            <option value="drawing-derived">drawing derived</option>
            <option value="manual">manual</option>
            <option value="unverified">unverified</option>
          </select>
        </label>

        <div className="grid2">
          <label>
            Ground / platform RL
            <input value={f.groundRL} onChange={set('groundRL')} inputMode="decimal" />
          </label>
          <label>
            Toe RL
            <input value={f.toeRL} onChange={set('toeRL')} inputMode="decimal" />
          </label>
          <label>
            Top of bedrock RL
            <input value={f.topOfBedrockRL} onChange={set('topOfBedrockRL')} inputMode="decimal" />
          </label>
          <label>
            Diameter (m)
            <input value={f.diameter} onChange={set('diameter')} inputMode="decimal" />
          </label>
          <label>
            Required socket (m)
            <input value={f.requiredSocket} onChange={set('requiredSocket')} inputMode="decimal" />
          </label>
          <label>
            Inspection date
            <input value={f.inspectionDate} onChange={set('inspectionDate')} placeholder="2026-07-27" />
          </label>
        </div>

        <label>
          Founding material
          <input value={f.foundingMaterial} onChange={set('foundingMaterial')} />
        </label>
        <label>
          Inspection notes
          <textarea value={f.notes} onChange={set('notes')} rows={2} />
        </label>

        <div className="modal-actions">
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn primary" disabled={!f.id.trim()}>
            Add pile
          </button>
        </div>
      </form>
    </div>
  );
}
