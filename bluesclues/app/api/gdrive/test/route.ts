import { NextResponse } from "next/server";
import { getDriveClient } from "@/src/googleDrive";

export async function GET() {
    const GDriveClient = getDriveClient();

    const files = await GDriveClient.files.list({
        q: "name contains 'Heart rate'"
    });
    return NextResponse.json(files.data.files);
}