import Image from "next/image";

export default function StatusCard() {
  return (
    <div className=" rounded-lg border-zinc-800 bg-zinc-200 p-8 flex items-center gap-16">
      <div>
        <p className="var-h text-lg font-semibold text-zinc-900 text-center mb-6">
          Currently Working On:
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
      />{" "}
    </div>
  );
}
