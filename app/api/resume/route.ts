import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const resumeDir = path.join(process.cwd(), "public", "resume");

  if (!fs.existsSync(resumeDir)) {
    return NextResponse.json(
      { error: "Resume folder not found." },
      { status: 404 }
    );
  }

  const files = fs.readdirSync(resumeDir);
  const pdfFiles = files.filter((f) => f.toLowerCase().endsWith(".pdf"));

  if (pdfFiles.length === 0) {
    return NextResponse.json(
      { error: "No resume PDF found in public/resume/." },
      { status: 404 }
    );
  }

  // Pick the most recently modified PDF
  pdfFiles.sort((a, b) => {
    const mtimeA = fs.statSync(path.join(resumeDir, a)).mtimeMs;
    const mtimeB = fs.statSync(path.join(resumeDir, b)).mtimeMs;
    return mtimeB - mtimeA;
  });

  const latest = pdfFiles[0];

  // Redirect to the static file served by Next.js from public/
  return NextResponse.redirect(
    new URL(`/resume/${encodeURIComponent(latest)}`, request.url)
  );
}
