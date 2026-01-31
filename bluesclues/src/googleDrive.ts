import { google } from "googleapis";

export function getOAuthClient() {
  const OAuthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
  OAuthClient.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  return OAuthClient;
}

export function getDriveClient() {
  const GDriveClient = getOAuthClient();
  return google.drive({ version: "v3", auth: GDriveClient });
}
