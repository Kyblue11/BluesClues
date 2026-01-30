import { NextResponse } from "next/server";
import { getOAuthClient } from "@/src/googleDrive";

export async function GET() {
  const OAuthClient = getOAuthClient();
  const url = OAuthClient.generateAuthUrl(
    // URL for consent page landing (i do this only once locally)
    {
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/drive.readonly"],
      // prompt: "consent", // removed after getting refresh_token
    }
  );
  return NextResponse.redirect(url);
}
