"use client";
import { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  TimeScale,
} from "chart.js";
import { HeartRateRow } from "../types/types";

/** 
DISCLAIMER: AI was used solely for the following:
- to determine which chart.js elements to import
- to build the parameters of the Chart object
*/

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  TimeScale
);

export default function HeartRateHistogram() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // 1. points to <canvas> dom element
  const chartRef = useRef<Chart | null>(null); // 2. creates the Chart.js instance
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch("/api/gdrive/heartrates/yesterday");
      const records: HeartRateRow[] = (await res.json()).records || [];

      // timestamps are 'YYYY-MM-DD HH:mm:ss'
      const labels = records.map((r) => r.timestamp.slice(11, 16)); // "HH:MM"
      const values = records.map((r) => r.bpm);

      // refresh stale chart
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }

      chartRef.current = new Chart(canvasRef.current!, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Heart rate (bpm)",
              data: values,
              barPercentage: 1.0,
              categoryPercentage: 0.9,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              ticks: {
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 12,
              },
            },
            y: {
              beginAtZero: false,
              suggestedMin: 40,
              suggestedMax: 140,
            },
          },
          maintainAspectRatio: false, // TODO: change to true for mobile?
        },
      });

      setLoading(false);
    }

    load();

    // cleanup when component dismounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: 320 }}>
      {loading ? <div>Loading...</div> : null}
      <canvas ref={canvasRef} />
    </div>
  );
}
