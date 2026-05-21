import { NextRequest, NextResponse } from "next/server";
import { getResourceById, readResourceBytes } from "@/lib/resources";

type ResourceRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest, context: ResourceRouteContext) {
  const { id } = await context.params;
  const resource = await getResourceById(id);

  if (!resource) {
    return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  }

  const bytes = await readResourceBytes(resource);

  return new NextResponse(new Uint8Array(bytes), {
    headers: {
      "Content-Type": resource.mimeType,
      "Content-Length": String(resource.size),
      "Content-Disposition": `inline; filename="${resource.originalName.replace(/"/g, "")}"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
