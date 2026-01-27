import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.tourDate.findMany({
      orderBy: { id: "asc" },
      select: {
        id: true,
        date: true,     
        venue: true,
        city: true,
        link: true,
        vip: true,
        tickets: true,
      },
    });

    const data = items.map((t) => ({
      date: t.date,      
      venue: t.venue,
      city: t.city,
      link: t.link,
      VIP: t.vip,
      tickets: t.tickets,
    }));

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
