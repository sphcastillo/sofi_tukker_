import { NextResponse } from "next/server";

import { client } from "@/sanity/lib/client";
import { tourDatesQuery } from "@/sanity/lib/queries";

const tourClient = client.withConfig({
  useCdn: false,
  perspective: "published",
});

export async function GET() {
  try {
    const dates = await tourClient.fetch(
      tourDatesQuery,
      {},
      { cache: "no-store" }
    );

    return NextResponse.json(dates, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error("Failed to fetch tour dates:", e);

    return NextResponse.json(
      { error: "Unable to load tour dates." },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}