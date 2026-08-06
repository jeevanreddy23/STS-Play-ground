import { ensureSchema, getD1, getPlanFile } from "../../../../../db";

type PlanFileRow = {
  name: string;
  file_key: string;
  content_type: string;
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await ensureSchema();
    const { id } = await params;
    const row = await getD1()
      .prepare("SELECT name, file_key, content_type FROM plans WHERE id = ?")
      .bind(id)
      .first<PlanFileRow>();
    if (!row) return new Response("Plan not found", { status: 404 });

    const object = await getPlanFile(row.file_key);
    if (!object) return new Response("Plan file not found", { status: 404 });

    const headers = new Headers();
    headers.set("content-type", row.content_type);
    headers.set("content-disposition", `inline; filename*=UTF-8''${encodeURIComponent(row.name)}`);
    headers.set("cache-control", "private, max-age=300");
    if (object.etag) headers.set("etag", object.etag);
    return new Response(object.body, { headers });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to open the plan." },
      { status: 500 },
    );
  }
}
