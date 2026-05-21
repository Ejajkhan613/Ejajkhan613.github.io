import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminBySessionToken } from "@/lib/auth";
import { getResources, saveResourceFile } from "@/lib/resources";
import { splitTags } from "@/lib/slug";

export const dynamic = "force-dynamic";

async function isAdminRequest(request: NextRequest) {
  const bearer = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const cookieToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;

  return Boolean(await getAdminBySessionToken(bearer || cookieToken));
}

export async function GET() {
  const resources = await getResources();
  return NextResponse.json({ data: resources });
}

export async function POST(request: NextRequest) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "file is required" }, { status: 400 });
  }

  const resource = await saveResourceFile({
    title: formData.get("title")?.toString().trim() || file.name,
    description: formData.get("description")?.toString().trim() ?? "",
    category: formData.get("category")?.toString().trim() || "General",
    tags: splitTags(formData.get("tags")),
    originalName: file.name,
    mimeType: file.type,
    size: file.size,
    bytes: Buffer.from(await file.arrayBuffer()),
  });

  return NextResponse.json({ data: resource }, { status: 201 });
}
