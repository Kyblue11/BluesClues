"use client";

import { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";

export default function StatusCard() {
  const [flipped, SetFlipped] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer" // clickable UX
      style={{ perspective: "1000px" }} // 3d depth/camera distance, e.g. for rotation
      onClick={() => SetFlipped((bool) => !bool)}
    >

      <div
        className="transition-transform duration-2000 shadow-lg"
        style={{
          transformStyle: "preserve-3d", // lets children exist in 3D space
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >

        <div
          className=" rounded-lg bg-zinc-200 p-8 flex flex-col lg:flex-row items-center gap-8"
          style={{ backfaceVisibility: "hidden" }} // hide opposite side (if one side is smaller than the other)
        >
          <div>
            <p className="var-h text-lg font-semibold text-zinc-900 text-center">
              Currently Working On:
            </p>
            <p className="text-xs text-zinc-400 text-center mb-4">
              As of {dayjs().format("DD-MM-YYYY")}
            </p>
            <ul>
              <li>Internship: Theodesis Sdn Bhd.</li>
              <li>Contract: Pemborong Maju Bersatu Sdn Bhd.</li>
              <li>Hackathon: Chin Hin AI Hackathon 2026</li>
              <li></li>
            </ul>
          </div>
          <Image
            src="/cat.jpg"
            alt="notmycat"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        <div // alligned at perfectly
          className="absolute inset-0  rounded-lg bg-zinc-200 p-8 flex flex-col lg:flex-row items-center gap-8"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          <div>
            <p className="var-h text-lg font-semibold text-zinc-900 text-center">
              Currently Working On:
            </p>
            <p className="text-xs text-zinc-400 text-center mb-4">
              As of {dayjs().format("DD-MM-YYYY")}
            </p>
            <ul>
              <li>Internship: Theodesis Sdn Bhd.</li>
              <li>Contract: Pemborong Maju Bersatu Sdn Bhd.</li>
              <li>Hackathon: Chin Hin AI Hackathon 2026</li>
              <li></li>
            </ul>
          </div>
          <Image
            src="/cat.jpg"
            alt="notmycat"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
