"use client";

import {
  ChangeEvent,
  DragEvent,
  KeyboardEvent,
  MouseEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Plan = {
  id: string;
  name: string;
  contentType: string;
  sizeBytes: number;
  createdAt: string;
  fileUrl: string;
};

type Pile = {
  id: string;
  planId: string;
  pileId: string;
  planPage: number;
  xNorm: number;
  yNorm: number;
  status: string;
  diameterMm: number | null;
  groundRlM: number | null;
  designTipRlM: number | null;
  requiredSocketM: number | null;
  targetRockClass: string | null;
  boredDepthM: number | null;
  depthToRockM: number | null;
  baseSedimentMm: number | null;
  waterStatus: string | null;
  outcome: string | null;
  comments: string | null;
};

type PileForm = {
  pileId: string;
  status: string;
  diameterMm: string;
  groundRlM: string;
  designTipRlM: string;
  requiredSocketM: string;
  targetRockClass: string;
  boredDepthM: string;
  depthToRockM: string;
  baseSedimentMm: string;
  waterStatus: string;
  outcome: string;
  comments: string;
};

const emptyForm: PileForm = {
  pileId: "",
  status: "DRAFT",
  diameterMm: "",
  groundRlM: "",
  designTipRlM: "",
  requiredSocketM: "",
  targetRockClass: "",
  boredDepthM: "",
  depthToRockM: "",
  baseSedimentMm: "",
  waterStatus: "",
  outcome: "",
  comments: "",
};

function field(value: number | string | null | undefined) {
  return value === null || value === undefined ? "" : String(value);
}

function formFromPile(pile: Pile): PileForm {
  return {
    pileId: pile.pileId,
    status: pile.status,
    diameterMm: field(pile.diameterMm),
    groundRlM: field(pile.groundRlM),
    designTipRlM: field(pile.designTipRlM),
    requiredSocketM: field(pile.requiredSocketM),
    targetRockClass: pile.targetRockClass ?? "",
    boredDepthM: field(pile.boredDepthM),
    depthToRockM: field(pile.depthToRockM),
    baseSedimentMm: field(pile.baseSedimentMm),
    waterStatus: pile.waterStatus ?? "",
    outcome: pile.outcome ?? "",
    comments: pile.comments ?? "",
  };
}

function numberOrNull(value: string) {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export default function Home() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [piles, setPiles] = useState<Pile[]>([]);
  const [selectedPileId, setSelectedPileId] = useState<string | null>(null);
  const [form, setForm] = useState<PileForm>(emptyForm);
  const [placing, setPlacing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [stageRatio, setStageRatio] = useState("4 / 3");
  const [draggingPileId, setDraggingPileId] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const pdfCanvas = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    pileId: string;
    originalX: number;
    originalY: number;
    latestX: number;
    latestY: number;
    moved: boolean;
  } | null>(null);

  const activePlan = plans.find((plan) => plan.id === activePlanId) ?? null;
  const selectedPile = piles.find((pile) => pile.id === selectedPileId) ?? null;
  const visiblePiles = piles.filter((pile) => pile.planPage === currentPage);

  const metrics = useMemo(() => {
    const approved = piles.filter((pile) => pile.status === "APPROVED" || pile.outcome === "APPROVED").length;
    const attention = piles.filter((pile) => ["CONDITIONAL", "REJECTED"].includes(pile.status) || ["RE-DRILL REQUIRED", "REFER TO STRUCTURAL ENGINEER"].includes(pile.outcome ?? "")).length;
    return { total: piles.length, approved, attention };
  }, [piles]);

  const boredDepth = numberOrNull(form.boredDepthM);
  const depthToRock = numberOrNull(form.depthToRockM);
  const groundRl = numberOrNull(form.groundRlM);
  const requiredSocket = numberOrNull(form.requiredSocketM);
  const socketAchieved = boredDepth !== null && depthToRock !== null ? boredDepth - depthToRock : null;
  const achievedBaseRl = groundRl !== null && boredDepth !== null ? groundRl - boredDepth : null;
  const socketPass = socketAchieved !== null && requiredSocket !== null ? socketAchieved >= requiredSocket : null;

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await fetch("/api/plans");
        const data = (await response.json()) as { error?: string; plans: Plan[] };
        if (!response.ok) throw new Error(data.error || "Unable to load plans.");
        setPlans(data.plans);
        setActivePlanId(data.plans[0]?.id ?? null);
      } catch (reason) {
        setError(reason instanceof Error ? reason.message : "Unable to load plans.");
      } finally {
        setLoading(false);
      }
    }
    loadPlans();
  }, []);

  useEffect(() => {
    setSelectedPileId(null);
    setForm(emptyForm);
    setCurrentPage(1);
    if (!activePlanId) {
      setPiles([]);
      return;
    }
    fetch(`/api/piles?planId=${encodeURIComponent(activePlanId)}`)
      .then(async (response) => {
        const data = (await response.json()) as { error?: string; piles: Pile[] };
        if (!response.ok) throw new Error(data.error || "Unable to load pile markers.");
        setPiles(data.piles);
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load pile markers."));
  }, [activePlanId]);

  useEffect(() => {
    if (!selectedPile) {
      setForm(emptyForm);
      return;
    }
    setForm(formFromPile(selectedPile));
  }, [selectedPile]);

  useEffect(() => {
    if (!activePlan || activePlan.contentType !== "application/pdf") return;
    let cancelled = false;
    let task: import("pdfjs-dist").PDFDocumentLoadingTask | null = null;
    async function renderPdf() {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();
        task = pdfjs.getDocument({ url: activePlan!.fileUrl });
        const document = await task.promise;
        if (cancelled) return;
        setPageCount(document.numPages);
        const pageNumber = Math.min(currentPage, document.numPages);
        const page = await document.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = pdfCanvas.current;
        if (!canvas || cancelled) return;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        setStageRatio(`${viewport.width} / ${viewport.height}`);
        const context = canvas.getContext("2d");
        if (!context) return;
        await page.render({ canvas, canvasContext: context, viewport }).promise;
      } catch (reason) {
        if (!cancelled) setError(reason instanceof Error ? reason.message : "Unable to render this PDF.");
      }
    }
    renderPdf();
    return () => {
      cancelled = true;
      task?.destroy().catch(() => undefined);
    };
  }, [activePlan, currentPage]);

  async function uploadPlan(file: File | undefined) {
    if (!file) return;
    setUploading(true);
    setError("");
    setNotice("");
    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/plans", { method: "POST", body });
      const data = (await response.json()) as { error?: string; plan: Plan };
      if (!response.ok) throw new Error(data.error || "Unable to upload the plan.");
      setPlans((current) => [data.plan, ...current]);
      setActivePlanId(data.plan.id);
      setNotice(`${file.name} is ready for pile marking.`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to upload the plan.");
    } finally {
      setUploading(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    uploadPlan(event.target.files?.[0]);
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    uploadPlan(event.dataTransfer.files?.[0]);
  }

  function nextPileId() {
    const max = piles.reduce((value, pile) => {
      const match = pile.pileId.match(/(\d+)$/);
      return match ? Math.max(value, Number(match[1])) : value;
    }, 0);
    return `P-${String(max + 1).padStart(3, "0")}`;
  }

  async function placePile(event: MouseEvent<HTMLDivElement>) {
    if (!placing || !activePlan) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const xNorm = (event.clientX - bounds.left) / bounds.width;
    const yNorm = (event.clientY - bounds.top) / bounds.height;
    setError("");
    try {
      const response = await fetch("/api/piles", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          planId: activePlan.id,
          pileId: nextPileId(),
          planPage: currentPage,
          xNorm,
          yNorm,
        }),
      });
      const data = (await response.json()) as { error?: string; pile: Pile };
      if (!response.ok) throw new Error(data.error || "Unable to place the pile marker.");
      setPiles((current) => [...current, data.pile]);
      setSelectedPileId(data.pile.id);
      setPlacing(false);
      setNotice(`${data.pile.pileId} placed. Complete its design and inspection details.`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to place the pile marker.");
    }
  }

  async function savePile() {
    if (!selectedPile) return;
    setSaving(true);
    setError("");
    try {
      const response = await fetch(`/api/piles/${selectedPile.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { error?: string; pile: Pile };
      if (!response.ok) throw new Error(data.error || "Unable to save this pile.");
      setPiles((current) => current.map((pile) => (pile.id === data.pile.id ? data.pile : pile)));
      setNotice(`${data.pile.pileId} saved.`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to save this pile.");
    } finally {
      setSaving(false);
    }
  }

  function pointerPosition(event: ReactPointerEvent<HTMLButtonElement>) {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return null;
    return {
      xNorm: Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width)),
      yNorm: Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height)),
    };
  }

  async function persistPilePosition(
    pile: Pile,
    xNorm: number,
    yNorm: number,
    fallback = { xNorm: pile.xNorm, yNorm: pile.yNorm },
  ) {
    try {
      const response = await fetch(`/api/piles/${pile.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ xNorm, yNorm }),
      });
      const data = (await response.json()) as { error?: string; pile: Pile };
      if (!response.ok) throw new Error(data.error || "Unable to move this pile marker.");
      setPiles((current) => current.map((item) => (item.id === data.pile.id ? data.pile : item)));
      setNotice(`${data.pile.pileId} location updated.`);
    } catch (reason) {
      setPiles((current) => current.map((item) => (
        item.id === pile.id ? { ...item, xNorm: fallback.xNorm, yNorm: fallback.yNorm } : item
      )));
      setError(reason instanceof Error ? reason.message : "Unable to move this pile marker.");
    }
  }

  function startPileDrag(event: ReactPointerEvent<HTMLButtonElement>, pile: Pile) {
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    setSelectedPileId(pile.id);
    setPlacing(false);
    setDraggingPileId(pile.id);
    dragState.current = {
      pileId: pile.id,
      originalX: pile.xNorm,
      originalY: pile.yNorm,
      latestX: pile.xNorm,
      latestY: pile.yNorm,
      moved: false,
    };
  }

  function movePileDrag(event: ReactPointerEvent<HTMLButtonElement>) {
    const drag = dragState.current;
    if (!drag || drag.pileId !== event.currentTarget.dataset.pileId) return;
    const position = pointerPosition(event);
    if (!position) return;
    event.preventDefault();
    drag.latestX = position.xNorm;
    drag.latestY = position.yNorm;
    drag.moved = drag.moved
      || Math.abs(position.xNorm - drag.originalX) > 0.001
      || Math.abs(position.yNorm - drag.originalY) > 0.001;
    setPiles((current) => current.map((pile) => (
      pile.id === drag.pileId ? { ...pile, ...position } : pile
    )));
  }

  function endPileDrag(event: ReactPointerEvent<HTMLButtonElement>, pile: Pile) {
    event.stopPropagation();
    const drag = dragState.current;
    dragState.current = null;
    setDraggingPileId(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (drag?.pileId === pile.id && drag.moved) {
      void persistPilePosition(pile, drag.latestX, drag.latestY, {
        xNorm: drag.originalX,
        yNorm: drag.originalY,
      });
    }
  }

  function movePileWithKeyboard(event: KeyboardEvent<HTMLButtonElement>, pile: Pile) {
    const directions: Record<string, [number, number]> = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    event.stopPropagation();
    const step = event.shiftKey ? 0.02 : 0.005;
    const xNorm = Math.min(1, Math.max(0, pile.xNorm + direction[0] * step));
    const yNorm = Math.min(1, Math.max(0, pile.yNorm + direction[1] * step));
    setPiles((current) => current.map((item) => (
      item.id === pile.id ? { ...item, xNorm, yNorm } : item
    )));
    void persistPilePosition(pile, xNorm, yNorm);
  }

  async function deletePile() {
    if (!selectedPile || !window.confirm(`Remove ${selectedPile.pileId} from this plan?`)) return;
    const response = await fetch(`/api/piles/${selectedPile.id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error || "Unable to remove this pile.");
      return;
    }
    setPiles((current) => current.filter((pile) => pile.id !== selectedPile.id));
    setSelectedPileId(null);
    setNotice(`${selectedPile.pileId} removed.`);
  }

  function setFormValue(name: keyof PileForm, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <main className="portal-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">STS</div>
          <div>
            <p className="eyebrow">STS Playground</p>
            <h1>Pile Inspection Portal</h1>
          </div>
        </div>
        <div className="header-status">
          <span className="live-dot" /> Private field workspace
        </div>
      </header>

      {(error || notice) && (
        <div className={`message ${error ? "message-error" : "message-success"}`} role="status">
          {error || notice}
          <button type="button" onClick={() => { setError(""); setNotice(""); }} aria-label="Dismiss message">×</button>
        </div>
      )}

      <section className="metrics" aria-label="Plan summary">
        <div><span>Active plan</span><strong>{activePlan?.name ?? "Not selected"}</strong></div>
        <div><span>Piles marked</span><strong>{metrics.total}</strong></div>
        <div><span>Approved</span><strong>{metrics.approved}</strong></div>
        <div><span>Needs attention</span><strong>{metrics.attention}</strong></div>
      </section>

      <div className="workspace-grid">
        <aside className="plans-panel">
          <div className="panel-heading">
            <div><p className="eyebrow">Step 1</p><h2>Site plans</h2></div>
            <span className="count-chip">{plans.length}</span>
          </div>

          <div
            className="upload-zone"
            onDragOver={(event) => event.preventDefault()}
            onDrop={onDrop}
          >
            <input ref={fileInput} type="file" accept="application/pdf,image/png,image/jpeg,image/webp" onChange={onFileChange} />
            <button type="button" className="upload-button" onClick={() => fileInput.current?.click()} disabled={uploading}>
              {uploading ? "Uploading…" : "Upload site plan"}
            </button>
            <p>PDF, PNG, JPEG or WebP · up to 25 MB</p>
            <span>or drop the drawing here</span>
          </div>

          <nav className="plan-list" aria-label="Uploaded site plans">
            {loading && <p className="quiet">Loading plans…</p>}
            {!loading && !plans.length && <p className="quiet">Upload the first structural layout to begin.</p>}
            {plans.map((plan) => (
              <button
                type="button"
                key={plan.id}
                className={plan.id === activePlanId ? "plan-item active" : "plan-item"}
                onClick={() => setActivePlanId(plan.id)}
              >
                <span className="file-type">{plan.contentType === "application/pdf" ? "PDF" : "IMG"}</span>
                <span><strong>{plan.name}</strong><small>{new Date(plan.createdAt).toLocaleDateString("en-AU")}</small></span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="plan-panel">
          <div className="plan-toolbar">
            <div>
              <p className="eyebrow">Step 2</p>
              <h2>{activePlan ? "Mark pile locations" : "Upload a site plan"}</h2>
            </div>
            <div className="toolbar-actions">
              {activePlan?.contentType === "application/pdf" && pageCount > 1 && (
                <div className="page-control">
                  <button type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1}>‹</button>
                  <span>Page {currentPage} / {pageCount}</span>
                  <button type="button" onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))} disabled={currentPage === pageCount}>›</button>
                </div>
              )}
              <button
                type="button"
                className={placing ? "primary-button placing" : "primary-button"}
                disabled={!activePlan}
                onClick={() => setPlacing((value) => !value)}
              >
                {placing ? "Click plan to place" : "+ Add pile marker"}
              </button>
            </div>
          </div>

          <div className="plan-canvas-area">
            {!activePlan ? (
              <div className="empty-state">
                <div className="empty-plan-grid" aria-hidden="true" />
                <h3>Your marked plan will appear here</h3>
                <p>Upload the foundation layout, then select Add pile marker and click each inspection location.</p>
              </div>
            ) : (
              <div
                ref={stageRef}
                className={`plan-stage ${placing ? "is-placing" : ""}`}
                style={{ aspectRatio: stageRatio }}
                onClick={placePile}
              >
                {activePlan.contentType === "application/pdf" ? (
                  <canvas ref={pdfCanvas} className="plan-media" />
                ) : (
                  <img
                    src={activePlan.fileUrl}
                    className="plan-media"
                    alt={`Site plan ${activePlan.name}`}
                    onLoad={(event) => {
                      const image = event.currentTarget;
                      setStageRatio(`${image.naturalWidth} / ${image.naturalHeight}`);
                    }}
                  />
                )}
                <div className="marker-layer">
                  {visiblePiles.map((pile) => (
                    <button
                      type="button"
                      key={pile.id}
                      data-pile-id={pile.id}
                      className={`pile-marker status-${pile.status.toLowerCase()} ${pile.id === selectedPileId ? "selected" : ""} ${pile.id === draggingPileId ? "dragging" : ""}`}
                      style={{ left: `${pile.xNorm * 100}%`, top: `${pile.yNorm * 100}%` }}
                      onClick={(event) => { event.stopPropagation(); setSelectedPileId(pile.id); setPlacing(false); }}
                      onPointerDown={(event) => startPileDrag(event, pile)}
                      onPointerMove={movePileDrag}
                      onPointerUp={(event) => endPileDrag(event, pile)}
                      onPointerCancel={(event) => endPileDrag(event, pile)}
                      onKeyDown={(event) => movePileWithKeyboard(event, pile)}
                      aria-label={`${pile.pileId}. Drag to reposition, or use arrow keys for precise movement.`}
                      title={`Drag ${pile.pileId} to reposition`}
                    >
                      <span>{pile.pileId}</span>
                    </button>
                  ))}
                </div>
                {placing && <div className="placing-hint">Select the centre of the pile</div>}
              </div>
            )}
          </div>
          <div className="plan-legend">
            <span><i className="legend-dot draft" /> Draft</span>
            <span><i className="legend-dot approved" /> Approved</span>
            <span><i className="legend-dot conditional" /> Conditional</span>
            <span><i className="legend-dot rejected" /> Rejected</span>
            <span className="legend-note">Drag any pin to reposition it. Location saves automatically.</span>
          </div>
        </section>

        <aside className="inspection-panel">
          <div className="panel-heading">
            <div><p className="eyebrow">Step 3</p><h2>Pile record</h2></div>
            {selectedPile && <span className={`status-pill status-${form.status.toLowerCase()}`}>{form.status}</span>}
          </div>

          {!selectedPile ? (
            <div className="inspection-empty">
              <div className="marker-example">P-001</div>
              <h3>Select a pile marker</h3>
              <p>Design controls, field measurements and sign-off status will appear here.</p>
            </div>
          ) : (
            <form className="pile-form" onSubmit={(event) => { event.preventDefault(); savePile(); }}>
              <div className="form-section-title"><span>01</span> Identification & design</div>
              <label>Pile ID<input value={form.pileId} onChange={(event) => setFormValue("pileId", event.target.value)} required /></label>
              <div className="field-grid">
                <label>Diameter <span>mm</span><input type="number" min="0" value={form.diameterMm} onChange={(event) => setFormValue("diameterMm", event.target.value)} /></label>
                <label>Ground RL <span>m</span><input type="number" step="0.001" value={form.groundRlM} onChange={(event) => setFormValue("groundRlM", event.target.value)} /></label>
                <label>Design tip RL <span>m</span><input type="number" step="0.001" value={form.designTipRlM} onChange={(event) => setFormValue("designTipRlM", event.target.value)} /></label>
                <label>Required socket <span>m</span><input type="number" min="0" step="0.1" value={form.requiredSocketM} onChange={(event) => setFormValue("requiredSocketM", event.target.value)} /></label>
              </div>
              <label>Target rock class
                <select value={form.targetRockClass} onChange={(event) => setFormValue("targetRockClass", event.target.value)}>
                  <option value="">Select class</option><option>Class V</option><option>Class IV</option><option>Class III</option><option>Class II</option><option>Class I</option>
                </select>
              </label>

              <div className="form-section-title"><span>02</span> Field inspection</div>
              <div className="field-grid">
                <label>Bored depth <span>m</span><input type="number" min="0" step="0.01" value={form.boredDepthM} onChange={(event) => setFormValue("boredDepthM", event.target.value)} /></label>
                <label>Depth to rock <span>m</span><input type="number" min="0" step="0.01" value={form.depthToRockM} onChange={(event) => setFormValue("depthToRockM", event.target.value)} /></label>
                <label>Base sediment <span>mm</span><input type="number" min="0" step="1" value={form.baseSedimentMm} onChange={(event) => setFormValue("baseSedimentMm", event.target.value)} /></label>
                <label>Water status
                  <select value={form.waterStatus} onChange={(event) => setFormValue("waterStatus", event.target.value)}>
                    <option value="">Select</option><option>DRY</option><option>SEEPAGE</option><option>STANDING</option><option>FLOODED</option>
                  </select>
                </label>
              </div>

              <div className="calculation-strip">
                <div><span>Socket achieved</span><strong>{socketAchieved === null ? "—" : `${socketAchieved.toFixed(2)} m`}</strong></div>
                <div><span>Achieved base RL</span><strong>{achievedBaseRl === null ? "—" : `${achievedBaseRl.toFixed(3)} m`}</strong></div>
                <div className={socketPass === null ? "" : socketPass ? "calc-pass" : "calc-fail"}><span>Socket check</span><strong>{socketPass === null ? "Awaiting data" : socketPass ? "Meets design" : "Shortfall"}</strong></div>
              </div>

              <label>Outcome
                <select value={form.outcome} onChange={(event) => setFormValue("outcome", event.target.value)}>
                  <option value="">Select outcome</option><option value="APPROVED">Approved</option><option value="RE-DRILL REQUIRED">Re-drill required</option><option value="REFER TO STRUCTURAL ENGINEER">Refer to structural engineer</option>
                </select>
              </label>
              <label>Record status
                <select value={form.status} onChange={(event) => setFormValue("status", event.target.value)}>
                  <option>DRAFT</option><option>SUBMITTED</option><option>APPROVED</option><option>CONDITIONAL</option><option>REJECTED</option>
                </select>
              </label>
              <label>Inspector comments<textarea rows={4} value={form.comments} onChange={(event) => setFormValue("comments", event.target.value)} placeholder="Rock type, wall condition, remedial instruction…" /></label>

              <div className="form-actions">
                <button type="button" className="danger-button" onClick={deletePile}>Remove</button>
                <button type="submit" className="save-button" disabled={saving}>{saving ? "Saving…" : "Save pile record"}</button>
              </div>
              <p className="form-note">Acceptance criteria must follow the approved project specification and engineer instructions.</p>
            </form>
          )}
        </aside>
      </div>
    </main>
  );
}
