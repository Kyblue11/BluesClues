import { NextRequest, NextResponse } from "next/server";
import { getOAuthClient } from "@/src/googleDrive";

export async function GET(req: NextRequest) {
  // get the refresh token from google
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "No code" }, { status: 400 });
  }
  const OAuthClient = getOAuthClient();
  const { tokens } = await OAuthClient.getToken(code);

  return NextResponse.json({
    refresh_token: tokens.refresh_token,
  });
}
