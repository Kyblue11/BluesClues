import { NextRequest } from "next/server";
import { MetaData, GeoMetadata } from "./types/types";

export function extractMetadata(req: NextRequest): MetaData {
  const userAgent = req.headers.get("user-agent");
  const ip = req.headers.get("x-vercel-forwarded-for");
  const referer = req.headers.get("referer");
  const acceptLanguage = req.headers.get("accept-language");

  const metadata = {
    userAgent,
    ip,
    referer,
    acceptLanguage,
  } as MetaData;
  return metadata;
}

export function extractGeoMetadata(req: NextRequest): GeoMetadata {
  const country = req.headers.get("x-vercel-ip-country");
  const city = req.headers.get("x-vercel-ip-city");
  const region = req.headers.get("x-vercel-ip-country-region");
  const postcode = req.headers.get("x-vercel-ip-postal-code");

  const geoMetadata = {
    country,
    city,
    region,
    postcode,
  } as GeoMetadata;
  return geoMetadata;
}
