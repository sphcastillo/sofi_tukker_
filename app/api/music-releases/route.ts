import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const releases = await prisma.musicRelease.findMany({
      orderBy: { id: "asc" },
      select: { id: true, title: true, url: true },
    });

    return NextResponse.json(releases);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
