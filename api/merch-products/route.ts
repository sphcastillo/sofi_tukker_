import { NextResponse } from "next/server";
import { SofiTukkerMerchItems } from "@/data/SofiTukkerMerchData";

export async function GET(req: Request) {
  try {
    return NextResponse.json(SofiTukkerMerchItems, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Merch products route error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
