import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const request = await req.json();
  const passCode = request["passCode"];
  if (passCode) {
    if (passCode !== "apple-store") {
      return NextResponse.json(
        { message: "Invalid passCode", successful: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { successful: true, message: "correct passcode" },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { message: "Need to enter a passcode", successful: false },
    { status: 405 }
  );
}
