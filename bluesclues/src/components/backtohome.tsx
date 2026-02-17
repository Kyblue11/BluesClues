"use client";
import { useRouter } from "next/navigation";

export default function BackToHome() {
  const router = useRouter();

  return (
    <button className="cursor-pointer" onClick={() => router.back()}>
      &lt; Back to home
    </button>
  );
}
