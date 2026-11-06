import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { musicVideosQuery } from "@/sanity/lib/queries";

const musicVideosClient = client.withConfig({
  useCdn: false,
  perspective: "published",
});

export async function GET() {
  try {
    const items = await musicVideosClient.fetch(
      musicVideosQuery,
      {},
      { cache: "no-store" }
    );
    return NextResponse.json(items, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
