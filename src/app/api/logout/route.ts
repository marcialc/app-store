import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  // Clear the session cookie
  cookies().set("session", "", { expires: new Date(0) });

  // Respond with a success message
  return NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );
}
