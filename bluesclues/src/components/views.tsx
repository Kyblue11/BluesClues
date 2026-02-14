"use client";
import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    async function updateAndFetchViews() {
      if (process.env.NODE_ENV == "production") {
        const hasBeenCounted = sessionStorage.getItem("viewCounted"); // value: "null"

        if (!hasBeenCounted) {
          const res = await fetch("/api/site-views", { method: "POST" });
          sessionStorage.setItem("viewCounted", "true");
          const data = await res.json();
          setViewCount(data.views);
        } else {
          const res = await fetch("/api/site-views", { method: "GET" });
          const data = await res.json();
          setViewCount(data.views);
        }
      }
      else {
        setViewCount(-1); // devlopment
      }
    }
    updateAndFetchViews();
  }, []);

  return (
    <div className="rounded-lg bg-zinc-200 p-2">
    <p className="text-xs">{viewCount === null ? "Loading ..." : viewCount} Views</p>
    </div>
  );
}
