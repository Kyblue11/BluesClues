export type HeartRateRow = { timestamp: string; bpm: number };

export type MetaData = {
  userAgent: string | null;
  ip: string | null;
  referer: string | null;
  acceptLanguage: string | null;
};

export type GeoMetadata = {
  country: string | null;
  city: string | null;
  region: string | null;
  postcode: string | null;
};
