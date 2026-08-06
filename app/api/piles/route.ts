import { ensureSchema, getD1 } from "../../../db";

type PileRow = {
  id: string;
  plan_id: string;
  pile_id: string;
  plan_page: number;
  x_norm: number;
  y_norm: number;
  marker_size_px: number;
  status: string;
  diameter_mm: number | null;
  ground_rl_m: number | null;
  design_tip_rl_m: number | null;
  required_socket_m: number | null;
  target_rock_class: string | null;
  bored_depth_m: number | null;
  depth_to_rock_m: number | null;
  base_sediment_mm: number | null;
  water_status: string | null;
  outcome: string | null;
  comments: string | null;
  created_at: string;
  updated_at: string;
};

export function presentPile(row: PileRow) {
  return {
    id: row.id,
    planId: row.plan_id,
    pileId: row.pile_id,
    planPage: row.plan_page,
    xNorm: row.x_norm,
    yNorm: row.y_norm,
    markerSizePx: row.marker_size_px ?? 24,
    status: row.status,
    diameterMm: row.diameter_mm,
    groundRlM: row.ground_rl_m,
    designTipRlM: row.design_tip_rl_m,
    requiredSocketM: row.required_socket_m,
    targetRockClass: row.target_rock_class,
    boredDepthM: row.bored_depth_m,
    depthToRockM: row.depth_to_rock_m,
    baseSedimentMm: row.base_sediment_mm,
    waterStatus: row.water_status,
    outcome: row.outcome,
    comments: row.comments,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function GET(request: Request) {
  try {
    await ensureSchema();
    const planId = new URL(request.url).searchParams.get("planId")?.trim();
    if (!planId) return Response.json({ error: "planId is required" }, { status: 400 });
    const result = await getD1()
      .prepare("SELECT * FROM piles WHERE plan_id = ? ORDER BY plan_page, pile_id")
      .bind(planId)
      .all<PileRow>();
    return Response.json({ piles: (result.results ?? []).map(presentPile) });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to load pile markers." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    await ensureSchema();
    const payload = (await request.json()) as {
      planId?: string;
      pileId?: string;
      planPage?: number;
      xNorm?: number;
      yNorm?: number;
    };
    const planId = payload.planId?.trim() ?? "";
    const pileId = payload.pileId?.trim().toUpperCase() ?? "";
    const xNorm = Number(payload.xNorm);
    const yNorm = Number(payload.yNorm);
    if (!planId || !pileId || !Number.isFinite(xNorm) || !Number.isFinite(yNorm) || xNorm < 0 || xNorm > 1 || yNorm < 0 || yNorm > 1) {
      return Response.json({ error: "Valid plan, pile ID and marker coordinates are required." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    await getD1()
      .prepare(`INSERT INTO piles (
        id, plan_id, pile_id, plan_page, x_norm, y_norm, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, 'DRAFT', ?, ?)`) 
      .bind(id, planId, pileId, Math.max(1, Math.trunc(payload.planPage ?? 1)), xNorm, yNorm, now, now)
      .run();
    const row = await getD1().prepare("SELECT * FROM piles WHERE id = ?").bind(id).first<PileRow>();
    return Response.json({ pile: presentPile(row!) }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to place the pile marker.";
    const status = message.includes("UNIQUE") ? 409 : 500;
    return Response.json({ error: status === 409 ? "That pile ID already exists on this plan." : message }, { status });
  }
}
