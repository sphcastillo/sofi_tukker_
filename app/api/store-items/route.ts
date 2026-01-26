import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const origin = new URL(req.url).origin;

  const res = await fetch(`${origin}/_py/store-items`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  const body = await res.text();

  return new NextResponse(body, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
