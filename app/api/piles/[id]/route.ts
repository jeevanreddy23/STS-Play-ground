import { ensureSchema, getD1 } from "../../../../db";
import { presentPile } from "../route";

type PileRow = Parameters<typeof presentPile>[0];

function nullableNumber(value: unknown) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureSchema();
    const { id } = await params;
    const payload = (await request.json()) as Record<string, unknown>;

    if ("xNorm" in payload || "yNorm" in payload) {
      const xNorm = Number(payload.xNorm);
      const yNorm = Number(payload.yNorm);
      if (![xNorm, yNorm].every((value) => Number.isFinite(value) && value >= 0 && value <= 1)) {
        return Response.json({ error: "Pile coordinates must remain within the plan." }, { status: 400 });
      }
      const result = await getD1()
        .prepare("UPDATE piles SET x_norm = ?, y_norm = ?, updated_at = ? WHERE id = ?")
        .bind(xNorm, yNorm, new Date().toISOString(), id)
        .run();
      if (!result.meta.changes) return Response.json({ error: "Pile marker not found." }, { status: 404 });
      const row = await getD1().prepare("SELECT * FROM piles WHERE id = ?").bind(id).first<PileRow>();
      return Response.json({ pile: presentPile(row!) });
    }

    if ("markerSizePx" in payload) {
      const markerSizePx = Math.round(Number(payload.markerSizePx));
      if (!Number.isFinite(markerSizePx) || markerSizePx < 16 || markerSizePx > 56) {
        return Response.json({ error: "Marker size must be between 16 and 56 pixels." }, { status: 400 });
      }
      const result = await getD1()
        .prepare("UPDATE piles SET marker_size_px = ?, updated_at = ? WHERE id = ?")
        .bind(markerSizePx, new Date().toISOString(), id)
        .run();
      if (!result.meta.changes) return Response.json({ error: "Pile marker not found." }, { status: 404 });
      const row = await getD1().prepare("SELECT * FROM piles WHERE id = ?").bind(id).first<PileRow>();
      return Response.json({ pile: presentPile(row!) });
    }

    const pileId = String(payload.pileId ?? "").trim().toUpperCase();
    const status = String(payload.status ?? "DRAFT").trim().toUpperCase();
    if (!pileId) return Response.json({ error: "Pile ID is required." }, { status: 400 });

    const result = await getD1()
      .prepare(`UPDATE piles SET
        pile_id = ?, status = ?, diameter_mm = ?, ground_rl_m = ?, design_tip_rl_m = ?,
        required_socket_m = ?, target_rock_class = ?, bored_depth_m = ?, depth_to_rock_m = ?,
        base_sediment_mm = ?, water_status = ?, outcome = ?, comments = ?, updated_at = ?
        WHERE id = ?`)
      .bind(
        pileId,
        status,
        nullableNumber(payload.diameterMm),
        nullableNumber(payload.groundRlM),
        nullableNumber(payload.designTipRlM),
        nullableNumber(payload.requiredSocketM),
        String(payload.targetRockClass ?? "").trim() || null,
        nullableNumber(payload.boredDepthM),
        nullableNumber(payload.depthToRockM),
        nullableNumber(payload.baseSedimentMm),
        String(payload.waterStatus ?? "").trim() || null,
        String(payload.outcome ?? "").trim() || null,
        String(payload.comments ?? "").trim() || null,
        new Date().toISOString(),
        id,
      )
      .run();
    if (!result.meta.changes) return Response.json({ error: "Pile marker not found." }, { status: 404 });
    const row = await getD1().prepare("SELECT * FROM piles WHERE id = ?").bind(id).first<PileRow>();
    return Response.json({ pile: presentPile(row!) });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save the pile record.";
    const status = message.includes("UNIQUE") ? 409 : 500;
    return Response.json({ error: status === 409 ? "That pile ID already exists on this plan." : message }, { status });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureSchema();
    const { id } = await params;
    await getD1().prepare("DELETE FROM piles WHERE id = ?").bind(id).run();
    return new Response(null, { status: 204 });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to remove the pile marker." },
      { status: 500 },
    );
  }
}
