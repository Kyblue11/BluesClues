import { NextResponse } from "next/server";
import { getDriveClient } from "@/src/googleDrive";

// if something goes wrong, i'll call http://localhost:3000/api/gdrive/test to test the connection with GDrive
export async function GET() {
  const GDriveClient = getDriveClient();

  const files = await GDriveClient.files.list({
    q: "name contains 'Heart rate'",
    fields: "files(id, name, createdTime, modifiedTime, mimeType)"
  });
  return NextResponse.json(files.data.files);
}
