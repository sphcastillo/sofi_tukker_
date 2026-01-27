import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.storeItem.findMany({
      orderBy: { id: "asc" },
      select: { id: true, title: true, image: true, price: true },
    });

    return NextResponse.json(items);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
