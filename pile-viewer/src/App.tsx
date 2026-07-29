/**
 * Application shell. Holds the project in state, applies filters, and hands
 * verified geometry to the scene. Filters change what is displayed and never
 * touch the underlying records.
 */

import { useMemo, useState } from 'react';
import { PileScene, ViewMode } from './scene/PileScene';
import { PileDetail } from './ui/PileDetail';
import { PileForm } from './ui/PileForm';
import { StateChip } from './ui/FieldValue';
import { carterStreetProject } from './core/sample';
import { PileProject, PileRecord, hasValue } from './core/schema';
import { deriveDatumRL, socketCompliance } from './core/calc';
import { complianceBreakdown, validateProject } from './core/validate';
import './styles.css';

type Filter =
  | 'all'
  | 'inspected'
  | 'not-inspected'
  | 'accepted'
  | 'rejected'
  | 'missing-data'
  | 'socket-short'
  | 'socket-unknown';

const FILTERS: Array<{ key: Filter; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'inspected', label: 'Inspected' },
  { key: 'not-inspected', label: 'Not inspected' },
  { key: 'accepted', label: 'Accepted' },
  { key: 'rejected', label: 'Rejected' },
  { key: 'socket-short', label: 'Socket short' },
  { key: 'socket-unknown', label: 'Compliance unknown' },
  { key: 'missing-data', label: 'Missing data' },
];

function matches(p: PileRecord, f: Filter, undrawableIds: Set<string>): boolean {
  switch (f) {
    case 'all':
      return true;
    case 'inspected':
      return hasValue(p.inspectionDate);
    case 'not-inspected':
      return !hasValue(p.inspectionDate);
    case 'accepted':
      return p.acceptance.value === 'accepted';
    case 'rejected':
      return p.acceptance.value === 'rejected';
    case 'socket-short':
      return socketCompliance(p).verdict === 'non-compliant';
    case 'socket-unknown':
      return socketCompliance(p).verdict === 'indeterminate';
    case 'missing-data':
      return undrawableIds.has(p.id) || !hasValue(p.diameter) || !hasValue(p.toeRL);
  }
}

export default function App() {
  const [project, setProject] = useState<PileProject>(carterStreetProject);
  const [mode, setMode] = useState<ViewMode>('overview');
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [vex, setVex] = useState(3);
  const [showGround, setShowGround] = useState(true);
  const [showRock, setShowRock] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showForm, setShowForm] = useState(false);
  // Legend starts collapsed on phones, where it would cover the model.
  const isNarrow = typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches;

  const validation = useMemo(() => validateProject(project), [project]);
  const undrawableIds = useMemo(
    () => new Set(validation.undrawable.map((u) => u.id)),
    [validation],
  );

  const datumRL = useMemo(() => deriveDatumRL(project.piles), [project.piles]);
  const compliance = useMemo(() => complianceBreakdown(project), [project]);

  const filtered = useMemo(
    () => project.piles.filter((p) => matches(p, filter, undrawableIds)),
    [project.piles, filter, undrawableIds],
  );

  const selected = project.piles.find((p) => p.id === selectedId) ?? null;
  const selectedDesign = project.design.find((d) => d.id === selectedId);

  const addPile = (p: PileRecord) => {
    setProject((prev) => ({ ...prev, piles: [...prev.piles, p] }));
    setSelectedId(p.id);
    setShowForm(false);
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${project.name.replace(/[^\w-]+/g, '-')}-piles.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="app">
      <header>
        <div>
          <h1>Pile Inspection 3D Viewer</h1>
          <div className="sub">
            {project.name}
            {project.reportRef ? ` · ${project.reportRef}` : ''}
            {project.client ? ` · ${project.client}` : ''}
          </div>
        </div>
        <div className="spacer" />
        <div className="tiles">
          <div className="tile">
            <div className="t-label">Piles</div>
            <div className="t-value">{project.piles.length}</div>
          </div>
          <div className="tile">
            <div className="t-label">Socket compliant</div>
            <div className="t-value">
              {compliance.compliant}
              <span className="unit"> / {compliance.indeterminate} unknown</span>
            </div>
          </div>
          <div className="tile">
            <div className="t-label">Errors</div>
            <div className={`t-value ${validation.errorCount ? 'bad' : 'good'}`}>
              {validation.errorCount}
            </div>
          </div>
          <div className="tile">
            <div className="t-label">Undrawable</div>
            <div className="t-value">{validation.undrawable.length}</div>
          </div>
        </div>
      </header>

      <div className="controls">
        <div className="seg">
          {(['overview', 'pile', 'design-vs-constructed'] as ViewMode[]).map((m) => (
            <button
              key={m}
              className={mode === m ? 'active' : ''}
              onClick={() => setMode(m)}
              disabled={m === 'pile' && !selectedId}
            >
              {m === 'overview' ? 'Overview' : m === 'pile' ? 'Single pile' : 'Design vs constructed'}
            </button>
          ))}
        </div>

        <label className="ctl">
          Depth exaggeration
          <input
            type="range"
            min={1}
            max={8}
            step={0.5}
            value={vex}
            onChange={(e) => setVex(Number(e.target.value))}
          />
          <b>{vex}×</b>
        </label>

        <label className="chk">
          <input type="checkbox" checked={showGround} onChange={(e) => setShowGround(e.target.checked)} />
          ground surface
        </label>
        <label className="chk">
          <input type="checkbox" checked={showRock} onChange={(e) => setShowRock(e.target.checked)} />
          rockhead surface
        </label>
        <label className="chk">
          <input type="checkbox" checked={showLabels} onChange={(e) => setShowLabels(e.target.checked)} />
          labels
        </label>

        <div className="spacer" />
        <button className="btn" onClick={() => setShowForm(true)}>+ Add pile</button>
        <button className="btn" onClick={exportJson}>Export JSON</button>
      </div>

      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`pill ${filter === f.key ? 'on' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
            <span className="count">
              {project.piles.filter((p) => matches(p, f.key, undrawableIds)).length}
            </span>
          </button>
        ))}
      </div>

      {datumRL === null ? (
        <div className="banner">
          No ground or pile-top level is known for any pile, so nothing can be placed
          vertically. Enter a platform RL to build the model.
        </div>
      ) : null}

      {validation.undrawable.length > 0 ? (
        <div className="banner soft">
          {validation.undrawable.length} pile
          {validation.undrawable.length === 1 ? '' : 's'} cannot be drawn — missing{' '}
          {[...new Set(validation.undrawable.flatMap((u) => u.blockers))].join(', ')}. They are
          listed but not shown in the model.
        </div>
      ) : null}

      <div className="body">
        <div className="scene">
          {datumRL !== null ? (
            <PileScene
              piles={filtered}
              design={project.design}
              datumRL={datumRL}
              verticalExaggeration={vex}
              mode={mode}
              selectedId={selectedId}
              onSelect={setSelectedId}
              showGroundSurface={showGround}
              showRockSurface={showRock}
              showLabels={showLabels}
            />
          ) : (
            <div className="empty">Nothing to display yet.</div>
          )}
          <details className="legend" open={!isNarrow}>
            <summary>Legend</summary>
            <div><span className="sw" style={{ background: '#d8d6cf' }} /> shaft</div>
            <div><span className="sw" style={{ background: '#eb6834' }} /> socket — meets stated requirement</div>
            <div><span className="sw" style={{ background: '#b0a08c' }} /> socket — no requirement on record, not assessed</div>
            <div><span className="sw" style={{ background: '#d03b3b' }} /> socket — short of requirement</div>
            <div><span className="sw" style={{ background: '#2a78d6' }} /> design intent (ghost)</div>
            <div><span className="sw" style={{ background: '#8a8578' }} /> interpolated rockhead — display aid, not a geological model</div>
          </details>
        </div>

        <aside>
          {selected ? (
            <>
              <button className="back" onClick={() => setSelectedId(null)}>← All piles</button>
              <PileDetail pile={selected} design={selectedDesign} />
            </>
          ) : (
            <div className="list">
              <div className="list-head">
                {filtered.length} of {project.piles.length} piles
              </div>
              {filtered.map((p) => {
                const c = socketCompliance(p);
                return (
                  <button key={p.id} className="row" onClick={() => setSelectedId(p.id)}>
                    <span className="rid">{p.id}</span>
                    <span className={`dot d-${c.verdict}`} />
                    <span className="rmeta">
                      {hasValue(p.totalDepth) ? `${p.totalDepth.value} m deep` : 'depth —'}
                      {undrawableIds.has(p.id) ? ' · not drawable' : ''}
                    </span>
                    <StateChip state={p.toeRL.state} />
                  </button>
                );
              })}
            </div>
          )}
        </aside>
      </div>

      {showForm ? <PileForm onAdd={addPile} onCancel={() => setShowForm(false)} /> : null}

      <footer>
        Values are shown with their origin. Nothing on this screen is assumed: fields marked
        “not recorded” are absent from the source documents and must be supplied before the
        model can be relied on. This tool supports engineering review; it does not certify
        pile acceptance.
      </footer>
    </div>
  );
}
