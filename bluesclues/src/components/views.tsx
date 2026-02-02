"use client";
import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    async function updateAndFetchViews() {
      if (process.env.NODE_ENV == "production") {
        const res = await fetch("/api/site-views", { method: "POST" });
        const data = await res.json();
        setViewCount(data.views);
      }
      else {
        setViewCount(-1); // devlopment
      }
    }
    updateAndFetchViews();
  }, []);

  return (
    <p> {viewCount === null ? "Loading ..." : viewCount} Views</p>
  );
}
