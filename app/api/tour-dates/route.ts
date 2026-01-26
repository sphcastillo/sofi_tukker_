import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const origin = new URL(req.url).origin;

    const res = await fetch(`${origin}/_py/tour-dates`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Tour dates API error: ${res.status} - ${errorText}`);
      return NextResponse.json(
        { error: `Failed to fetch tour dates: ${res.status} ${res.statusText}`, details: errorText },
        { status: res.status }
      );
    }

    const body = await res.text();

    return new NextResponse(body, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Tour dates route error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
