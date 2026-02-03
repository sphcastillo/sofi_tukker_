import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { musicReleasesQuery } from "@/sanity/lib/queries";

export async function GET() {
  try {
    const items = await client.fetch(musicReleasesQuery);
    return NextResponse.json(items);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
