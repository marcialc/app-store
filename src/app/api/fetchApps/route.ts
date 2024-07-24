import { NextRequest, NextResponse } from "next/server";
import data from "../../../../public/data.json";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  const DATA = data;

  if (!DATA || !DATA?.apps) {
    return NextResponse.json(
      { message: "Error fetching apps" },
      { status: 500 }
    );
  }

  return NextResponse.json({ apps: DATA.apps }, { status: 200 });
}
