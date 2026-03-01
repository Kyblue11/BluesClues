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
        className="transition-transform duration-750 shadow-lg"
        style={{
          transformStyle: "preserve-3d", // lets children exist in 3D space
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >

        <div // force larger layout
          className="invisible p-8 flex flex-col lg:flex-row items-center gap-2 lg:justify-between"
        >
          <div>
            <p className="text-lg font-semibold text-zinc-900 text-center">
              Increase card with here h
            </p>
            <p className="text-xs text-zinc-400 text-center mb-4">
              As of {dayjs().format("DD-MM-YYYY")}.
            </p>
          </div>
          <Image
            src="/cat.jpg"
            alt="notmycat"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        <div // front (allgined perfectly)
          className="absolute inset-0 rounded-lg border-2 border-zinc-600 bg-white p-8 flex flex-col lg:flex-row items-center lg:justify-between"
          style={{ backfaceVisibility: "hidden" }} // hide opposite side (if one side is smaller than the other)
        >
          <div>
            <p className="text-lg font-semibold text-zinc-900 text-center">
              Currently Working On:
            </p>
            <p className="text-xs text-zinc-400 text-center mb-4">
              As of {dayjs().format("DD-MM-YYYY")}.
            </p>
          </div>
          <Image
            src="/cat.jpg"
            alt="notmycat"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        <div // back
          className="absolute inset-0 rounded-lg bg-zinc-200 p-8 flex flex-col lg:flex-row items-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          <div>
            <p className="text-xs text-zinc-400 text-center mb-4">
              As of {dayjs().format("DD-MM-YYYY")}.
            </p>
            <ul>
              <li>
                <b>Part-time:</b> Theodesis Sdn. Bhd.
              </li>
              <li>
                <b>Contract:</b> Pemborong Maju Bersatu Sdn. Bhd.
              </li>
              <li>
                <b>Hackathon:</b> Chin Hin AI Hackathon 2026
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
