import { deletePlanFile, ensureSchema, getD1, putPlanFile } from "../../../db";

const allowedTypes = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
]);
const maxBytes = 25 * 1024 * 1024;

type PlanRow = {
  id: string;
  name: string;
  content_type: string;
  size_bytes: number;
  created_at: string;
};

function present(row: PlanRow) {
  return {
    id: row.id,
    name: row.name,
    contentType: row.content_type,
    sizeBytes: row.size_bytes,
    createdAt: row.created_at,
    fileUrl: `/api/plans/${row.id}/file`,
  };
}

export async function GET() {
  try {
    await ensureSchema();
    const result = await getD1()
      .prepare("SELECT id, name, content_type, size_bytes, created_at FROM plans ORDER BY created_at DESC LIMIT 50")
      .all<PlanRow>();
    return Response.json({ plans: (result.results ?? []).map(present) });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to load plans." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    await ensureSchema();
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return Response.json({ error: "Choose a PDF, PNG, JPEG or WebP site plan." }, { status: 400 });
    }
    if (!allowedTypes.has(file.type)) {
      return Response.json({ error: "Unsupported plan format." }, { status: 400 });
    }
    if (file.size > maxBytes) {
      return Response.json({ error: "The plan exceeds the 25 MB upload limit." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "site-plan";
    const fileKey = `plans/${id}/${safeName}`;
    await putPlanFile(fileKey, file);

    try {
      await getD1()
        .prepare("INSERT INTO plans (id, name, file_key, content_type, size_bytes, created_at) VALUES (?, ?, ?, ?, ?, ?)")
        .bind(id, file.name, fileKey, file.type, file.size, createdAt)
        .run();
    } catch (error) {
      await deletePlanFile(fileKey);
      throw error;
    }

    return Response.json(
      { plan: present({ id, name: file.name, content_type: file.type, size_bytes: file.size, created_at: createdAt }) },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unable to upload the plan." },
      { status: 500 },
    );
  }
}
