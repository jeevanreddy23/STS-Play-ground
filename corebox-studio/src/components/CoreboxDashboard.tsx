"use client";

import dynamic from "next/dynamic";
import {
  Activity,
  AlertTriangle,
  Box,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  CloudOff,
  Code2,
  Database,
  Download,
  Eye,
  FileArchive,
  FileImage,
  FileText,
  Gauge,
  Grid3X3,
  HardDrive,
  Layers3,
  ListChecks,
  LoaderCircle,
  LockKeyhole,
  Menu,
  Orbit,
  Play,
  RotateCcw,
  Save,
  ScanLine,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Upload,
  Waypoints,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { defects, intervals, pieces, project, runs } from "@/data/demo";
import { buildAgs411, downloadTextFile, validateAgsDraft } from "@/lib/ags";
import { runLocalPromptLoop, saveCorrection } from "@/lib/prompt-loop";
import type { LogInterval, PromptLoopResult } from "@/types/core";

const CoreScene = dynamic(() => import("@/components/CoreScene"), {
  ssr: false,
  loading: () => (
    <div className="viewer-loading">
      <LoaderCircle size={24} className="spin" />
      Loading local 3D renderer…
    </div>
  ),
});

type ViewId = "twin" | "logging" | "ags" | "prompt";

const navItems: Array<{ id: ViewId; label: string; icon: typeof Box; badge?: string }> = [
  { id: "twin", label: "Core twin", icon: Box },
  { id: "logging", label: "Logging & defects", icon: ListChecks, badge: "2" },
  { id: "ags", label: "AGS issue", icon: FileArchive },
  { id: "prompt", label: "Learning loop", icon: BrainCircuit },
];

const workflow = [
  { label: "Rectify", note: "4 corners", state: "done" },
  { label: "Detect", note: "15 boxes", state: "done" },
  { label: "Segment", note: "15 masks", state: "done" },
  { label: "Measure", note: "scanline RQD", state: "done" },
  { label: "Review", note: "2 exceptions", state: "active" },
  { label: "Issue", note: "Blocked", state: "blocked" },
];

function ScoreRing({ value, label }: { value: number; label: string }) {
  return (
    <div className="score-ring" style={{ "--score": `${value * 3.6}deg` } as React.CSSProperties}>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="topbar">
      <button className="icon-button mobile-menu" aria-label="Open navigation" onClick={onMenu}>
        <Menu size={19} />
      </button>
      <div className="crumbs">
        <span>Northbank Bridge</span>
        <span>/</span>
        <strong>BH-17</strong>
        <span className="status-chip"><span /> Local draft</span>
      </div>
      <div className="topbar-actions">
        <span className="offline-chip"><CloudOff size={13} /> Offline-first</span>
        <button className="quiet-button"><Save size={15} /> Save v12</button>
        <button className="primary-button"><ShieldCheck size={15} /> Request sign-off</button>
      </div>
    </header>
  );
}

function Sidebar({ active, onChange, open, onClose }: { active: ViewId; onChange: (id: ViewId) => void; open: boolean; onClose: () => void }) {
  return (
    <aside className={`sidebar ${open ? "is-open" : ""}`}>
      <div className="brand">
        <div className="brand-mark"><Layers3 size={20} /></div>
        <div><strong>Corebox</strong><span>STUDIO</span></div>
        <button className="icon-button sidebar-close" onClick={onClose} aria-label="Close navigation"><X size={18} /></button>
      </div>
      <button className="project-switcher">
        <span className="project-avatar">NB</span>
        <span><strong>{project.name}</strong><small>{project.boreholeId} · Core tray 08</small></span>
        <ChevronDown size={15} />
      </button>
      <nav aria-label="Workspace navigation">
        <span className="nav-label">Workspace</span>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => { onChange(item.id); onClose(); }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
              {item.badge ? <em>{item.badge}</em> : null}
            </button>
          );
        })}
        <span className="nav-label spaced">Project</span>
        <button><Database size={18} /><span>Evidence library</span></button>
        <button><Waypoints size={18} /><span>Boreholes</span><em>7</em></button>
        <button><Settings2 size={18} /><span>Standards & rules</span></button>
      </nav>
      <div className="sidebar-foot">
        <div className="storage-row"><span><HardDrive size={15} /> Local evidence</span><strong>2.8 GB</strong></div>
        <div className="storage-bar"><i /></div>
        <p><LockKeyhole size={13} /> Photos and corrections stay on this device.</p>
      </div>
    </aside>
  );
}

function WorkflowStrip() {
  return (
    <section className="workflow-card" aria-label="Processing workflow">
      {workflow.map((item, index) => (
        <div className={`workflow-step ${item.state}`} key={item.label}>
          <div className="workflow-index">
            {item.state === "done" ? <Check size={13} /> : item.state === "active" ? <CircleDot size={13} /> : <LockKeyhole size={12} />}
          </div>
          <div><strong>{item.label}</strong><span>{item.note}</span></div>
          {index < workflow.length - 1 ? <i /> : null}
        </div>
      ))}
    </section>
  );
}

function TwinView() {
  const [selectedId, setSelectedId] = useState(pieces[5].id);
  const [photoUrl, setPhotoUrl] = useState<string>();
  const [modelUrl, setModelUrl] = useState<string>();
  const [detail, setDetail] = useState(2);
  const [showDefects, setShowDefects] = useState(true);
  const photoInput = useRef<HTMLInputElement>(null);
  const modelInput = useRef<HTMLInputElement>(null);

  const selected = pieces.find((item) => item.id === selectedId) ?? pieces[0];
  const selectedDefects = defects.filter((item) => selected.defectIds.includes(item.id));
  const spanMm = Math.round((selected.base - selected.top) * 1000);

  const pickLocalFile = (file: File | undefined, type: "photo" | "model") => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (type === "photo") {
      setModelUrl(undefined);
      setPhotoUrl(url);
    } else {
      setPhotoUrl(undefined);
      setModelUrl(url);
    }
  };

  return (
    <div className="twin-grid">
      <section className="viewer-card">
        <div className="viewer-head">
          <div>
            <span className="eyebrow"><ScanLine size={14} /> Digital evidence model</span>
            <h1>Core tray 08 <small>18.40–22.80 m</small></h1>
          </div>
          <div className="viewer-actions">
            <input ref={photoInput} className="visually-hidden" type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => pickLocalFile(event.target.files?.[0], "photo")} />
            <input ref={modelInput} className="visually-hidden" type="file" accept=".glb" onChange={(event) => pickLocalFile(event.target.files?.[0], "model")} />
            <button className="quiet-button" onClick={() => photoInput.current?.click()}><FileImage size={15} /> Map source photo</button>
            <button className="quiet-button" onClick={() => modelInput.current?.click()}><Upload size={15} /> Import GLB</button>
          </div>
        </div>
        <div className="method-ribbon">
          <span><strong>Research blueprint</strong> Yan et al. (2026)</span>
          <i />
          <span>Four-corner homography</span>
          <span>YOLO boxes</span>
          <span>Box-prompted SAM masks</span>
          <span>Horizontal scanline RQD</span>
        </div>
        <div className="viewer-stage">
          <CoreScene
            pieces={pieces}
            defects={defects}
            selectedId={selectedId}
            onSelect={setSelectedId}
            photoUrl={photoUrl}
            modelUrl={modelUrl}
            detail={detail}
            showDefects={showDefects}
          />
          <div className="viewer-overlay top-left">
            <span><Orbit size={14} /> Orbit</span>
            <span>Scroll to zoom</span>
            <span>Click core to inspect</span>
          </div>
          <div className="viewer-overlay bottom-left">
            <button className={showDefects ? "active" : ""} onClick={() => setShowDefects((value) => !value)}><Eye size={14} /> Defects</button>
            <button><Grid3X3 size={14} /> Depth grid</button>
          </div>
          <div className="quality-panel">
            <span>Geometry detail</span>
            <div>{[0, 1, 2, 3].map((level) => <button key={level} className={detail === level ? "active" : ""} onClick={() => setDetail(level)}>{level === 0 ? "Eco" : `${level + 1}×`}</button>)}</div>
            <small>{photoUrl ? "Full-resolution texture active" : modelUrl ? "Photogrammetry mesh active" : "Procedural PBR material"}</small>
          </div>
        </div>
        <div className="evidence-footer">
          <span><ShieldCheck size={15} /> Source-preserving view</span>
          <span><FileImage size={15} /> {photoUrl ? "Local photo mapped · original retained" : "Demo material · add a tray photo"}</span>
          <span><Gauge size={15} /> Calibration RMSE 2.1 mm</span>
        </div>
      </section>

      <aside className="inspector-card">
        <div className="inspector-head">
          <div><span className="eyebrow">Selected core piece</span><h2>{selected.id}</h2></div>
          <button className="icon-button" aria-label="More options"><Settings2 size={17} /></button>
        </div>
        <div className="depth-range"><span>{selected.top.toFixed(2)} m</span><i /><span>{selected.base.toFixed(2)} m</span></div>
        <div className="inspector-score">
          <ScoreRing value={Math.round(selected.confidence * 100)} label="confidence" />
          <div><span>Length</span><strong>{spanMm} mm</strong><span>Diameter</span><strong>{selected.diameterMm} mm</strong></div>
        </div>
        <div className="field-block">
          <label>Material</label>
          <button className="select-like"><span className="material-dot" style={{ background: selected.materialColor }} />{selected.lithology}<ChevronDown size={14} /></button>
        </div>
        <div className="field-grid">
          <div><label>RQD decision</label><strong className={selected.includedInRqd ? "value-good" : "value-warn"}>{selected.includedInRqd ? "Included" : "Excluded"}</strong></div>
          <div><label>Reviewer</label><strong>{selected.approved ? "Approved" : "Required"}</strong></div>
        </div>
        <div className="section-title"><span>Detected evidence</span><em>{selectedDefects.length}</em></div>
        <div className="defect-list">
          {selectedDefects.length ? selectedDefects.map((item) => (
            <button key={item.id}>
              <span className={`severity-dot ${item.severity}`} />
              <span><strong>{item.type}</strong><small>{item.depth.toFixed(2)} m · {Math.round(item.confidence * 100)}% confidence</small></span>
              <ChevronDown size={14} />
            </button>
          )) : <div className="empty-evidence"><CheckCircle2 size={18} /> No discontinuity evidence attached</div>}
        </div>
        <div className="review-callout">
          <Sparkles size={17} />
          <div><strong>Why is this an exception?</strong><p>Weathered fabric crosses the 100 mm RQD threshold. Confirm boundaries before issue.</p></div>
        </div>
        <div className="capture-checklist">
          <strong>Next capture</strong>
          <span><Check size={12} /> Keep all four tray corners visible</span>
          <span><Check size={12} /> Put tags in inter-row gaps</span>
          <span><Check size={12} /> Add a round known-length marker</span>
          <span><AlertTriangle size={12} /> Avoid core-end occlusion, glare and pooled water</span>
        </div>
        <div className="inspector-actions"><button className="quiet-button"><RotateCcw size={14} /> Correct</button><button className="primary-button"><Check size={14} /> Approve piece</button></div>
      </aside>
    </div>
  );
}

function LoggingView() {
  const [search, setSearch] = useState("");
  const visible = defects.filter((item) => `${item.type} ${item.description}`.toLowerCase().includes(search.toLowerCase()));
  return (
    <section className="page-card logging-view">
      <div className="section-hero">
        <div><span className="eyebrow"><ListChecks size={14} /> Evidence ledger</span><h1>Rock & defect logging</h1><p>Observed evidence, machine suggestions and reviewer decisions remain separately versioned.</p></div>
        <div className="hero-metrics"><div><span>Intervals</span><strong>3</strong></div><div><span>Defects</span><strong>6</strong></div><div><span>Needs review</span><strong className="amber">2</strong></div></div>
      </div>
      <div className="toolbar-row">
        <label className="search-box"><Search size={15} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search depth, defect or description" /></label>
        <button className="quiet-button"><Settings2 size={15} /> Columns</button>
        <button className="primary-button"><Download size={15} /> Issue register</button>
      </div>
      <div className="data-table-wrap">
        <table className="data-table">
          <thead><tr><th>Depth</th><th>Type</th><th>Engineering observation</th><th>Set</th><th>Confidence</th><th>Status</th></tr></thead>
          <tbody>{visible.map((item) => (
            <tr key={item.id}>
              <td className="mono">{item.depth.toFixed(2)} m</td>
              <td><span className={`severity-dot ${item.severity}`} /> {item.type}</td>
              <td>{item.description}</td>
              <td>{item.set ?? "—"}</td>
              <td><span className="confidence-bar"><i style={{ width: `${item.confidence * 100}%` }} /></span>{Math.round(item.confidence * 100)}%</td>
              <td><span className={item.confidence >= 0.92 ? "table-status approved" : "table-status review"}>{item.confidence >= 0.92 ? "Approved" : "Review"}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="interval-cards">
        {intervals.map((item) => <article key={item.id}><span>{item.top.toFixed(2)}–{item.base.toFixed(2)} m</span><strong>{item.legend} · {item.lithology}</strong><p>{item.description}</p></article>)}
      </div>
    </section>
  );
}

function AgsView() {
  const ags = useMemo(() => buildAgs411(project, runs, intervals, defects), []);
  const validation = useMemo(() => validateAgsDraft(ags), [ags]);
  const [preview, setPreview] = useState(false);
  return (
    <section className="page-card ags-view">
      <div className="section-hero">
        <div><span className="eyebrow"><FileArchive size={14} /> AGS 4.1.1-oriented transfer</span><h1>Issue without proprietary logging software</h1><p>Generate transparent AGS text plus a polished visual log. Final conformance remains an explicit validation step.</p></div>
        <div className="standard-badge"><ShieldCheck size={22} /><span><strong>7 groups</strong><small>18 draft DATA rows</small></span></div>
      </div>
      <div className="ags-grid">
        <div className="ags-groups">
          <h2>Included groups</h2>
          {[
            ["PROJ", "Project and client metadata", "1 row"], ["LOCA", "Borehole, coordinates and datum", "1 row"], ["GEOL", "Field geological descriptions", "3 rows"], ["DETL", "Defect and detail descriptions", "6 rows"], ["CORE", "Recovery, SCR and RQD", "4 rows"], ["FRAC", "Fracture spacing evidence", "2 rows"], ["FILE", "Source photograph reference", "1 row"],
          ].map(([code, label, count]) => <div key={code}><span>{code}</span><strong>{label}</strong><small>{count}</small><CheckCircle2 size={16} /></div>)}
        </div>
        <div className="validation-panel">
          <h2>Pre-issue validation</h2>
          {validation.map((item) => <div key={item.label}><span className={item.status}><>{item.status === "pass" ? <Check size={13} /> : <AlertTriangle size={13} />}</></span><p><strong>{item.label}</strong><small>{item.detail}</small></p></div>)}
          <div className="validation-note"><AlertTriangle size={16} /><p><strong>Not yet certified</strong><span>Validate against the project dictionary and official python-ags4/BGS checker before contractual issue.</span></p></div>
        </div>
      </div>
      <div className="export-actions">
        <button className="quiet-button" onClick={() => setPreview((value) => !value)}><Code2 size={15} /> {preview ? "Hide" : "Preview"} AGS text</button>
        <button className="quiet-button"><FileText size={15} /> Visual borehole log PDF</button>
        <button className="primary-button" onClick={() => downloadTextFile(`${project.id}_${project.boreholeId}_draft.ags`, ags)}><Download size={15} /> Download .ags draft</button>
      </div>
      {preview ? <pre className="ags-preview">{ags.split("\r\n").slice(0, 34).join("\n")}\n…</pre> : null}
    </section>
  );
}

function PromptView() {
  const [selectedId, setSelectedId] = useState(intervals[1].id);
  const selected = intervals.find((item) => item.id === selectedId) ?? intervals[0];
  const [result, setResult] = useState<PromptLoopResult>(() => runLocalPromptLoop(selected));
  const [draft, setDraft] = useState(result.improvedDescription);
  const [saved, setSaved] = useState(false);

  const run = (interval: LogInterval) => {
    const next = runLocalPromptLoop(interval);
    setResult(next);
    setDraft(next.improvedDescription);
    setSaved(false);
  };

  return (
    <section className="page-card prompt-view">
      <div className="section-hero">
        <div><span className="eyebrow"><BrainCircuit size={14} /> AutoGen geotechnical workbench</span><h1>Self-improving logging and workflow agents</h1><p>Microsoft AutoGen Core coordinates typed, inspectable actions without a cloud model. Approved corrections become local examples; issue authority remains with the assigned engineer.</p></div>
        <span className="local-engine"><CloudOff size={17} /> AutoGen Core 0.7.5 · offline</span>
      </div>
      <div className="agent-strip" aria-label="AutoGen geotechnical agents">
        <article><FileImage size={17} /><span><strong>Capture agent</strong><small>Quality gate + rectification</small></span><em>2 skills</em></article>
        <article><ScanLine size={17} /><span><strong>Vision agent</strong><small>Detect, prompt, segment</small></span><em>3 skills</em></article>
        <article><Gauge size={17} /><span><strong>Measurement agent</strong><small>Recovery, SCR + RQD</small></span><em>3 skills</em></article>
        <article><ListChecks size={17} /><span><strong>Logging agent</strong><small>Rock + discontinuities</small></span><em>4 skills</em></article>
        <article><ShieldCheck size={17} /><span><strong>Assurance agent</strong><small>AGS gate + sign-off</small></span><em>2 skills</em></article>
      </div>
      <div className="prompt-layout">
        <div className="prompt-input">
          <label>Interval under review</label>
          <select value={selectedId} onChange={(event) => { const interval = intervals.find((item) => item.id === event.target.value) ?? intervals[0]; setSelectedId(interval.id); run(interval); }}>
            {intervals.map((item) => <option key={item.id} value={item.id}>{item.top.toFixed(2)}–{item.base.toFixed(2)} m · {item.legend}</option>)}
          </select>
          <label>Observed description</label>
          <textarea value={selected.description} readOnly rows={5} />
          <div className="evidence-chips"><span>{selected.weathering}</span><span>{selected.strength}</span><span>{selected.structure}</span></div>
          <button className="primary-button run-loop" onClick={() => run(selected)}><Play size={15} /> Run four-pass review</button>
          <div className="prompt-policy"><ShieldCheck size={16} /><p><strong>Publication policy</strong><span>The engine can suggest and block; only an assigned engineer can approve issue data.</span></p></div>
        </div>
        <div className="prompt-passes">
          <div className="loop-line" />
          {result.passes.map((pass, index) => <article key={pass.id} className={pass.status}>
            <span className="pass-index">0{index + 1}</span>
            <div><h3>{pass.label}</h3><p>{pass.summary}</p><div>{pass.keywords.map((word) => <em key={word}>{word}</em>)}</div></div>
            {pass.status === "complete" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
          </article>)}
        </div>
        <div className="prompt-output">
          <div className="output-head"><span><Sparkles size={15} /> Proposed engineering wording</span><strong>{Math.round(result.confidence * 100)}%</strong></div>
          <textarea value={draft} onChange={(event) => setDraft(event.target.value)} rows={9} />
          <div className="missing-row"><span>Missing keywords</span>{result.missingKeywords.length ? result.missingKeywords.map((word) => <em key={word}>{word}</em>) : <strong><Check size={13} /> None</strong>}</div>
          <button className="primary-button" onClick={() => { saveCorrection(selected.legend, draft); setSaved(true); }}><Save size={15} /> {saved ? "Correction learned locally" : "Approve & learn correction"}</button>
          <p className="privacy-note"><LockKeyhole size={13} /> Saves the approved example to browser local storage. No external request is made.</p>
        </div>
      </div>
    </section>
  );
}

export default function CoreboxDashboard() {
  const [view, setView] = useState<ViewId>("twin");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app-shell">
      <Sidebar active={view} onChange={setView} open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen ? <button className="sidebar-scrim" aria-label="Close navigation" onClick={() => setMenuOpen(false)} /> : null}
      <div className="workspace">
        <Header onMenu={() => setMenuOpen(true)} />
        <main className="workspace-main">
          <WorkflowStrip />
          <div className="summary-strip">
            <div><Activity size={16} /><span>Analysed</span><strong>4.40 m</strong></div>
            <div><Gauge size={16} /><span>Weighted RQD</span><strong>75.5%</strong></div>
            <div><AlertTriangle size={16} /><span>Exceptions</span><strong className="amber">2</strong></div>
            <div><ShieldCheck size={16} /><span>Traceability</span><strong>100%</strong></div>
          </div>
          {view === "twin" ? <TwinView /> : null}
          {view === "logging" ? <LoggingView /> : null}
          {view === "ags" ? <AgsView /> : null}
          {view === "prompt" ? <PromptView /> : null}
        </main>
      </div>
    </div>
  );
}
