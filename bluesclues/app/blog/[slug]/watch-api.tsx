import HeartRateHistogram from "@/src/components/histogram";
import Image from "next/image";
import dayjs from "dayjs";

export default function WatchAPI() {
  return (
    <>
      <section className="w-full">
        <h2 className="var-h1">How I Linked my Watch to This Website</h2>
      </section>
      <p className="text-lg text-zinc-600 mb-2">
        Streaming live data for {dayjs().format("DD-MM-YYYY HH:mm")}
      </p>
      <HeartRateHistogram></HeartRateHistogram>
      <p className=" text-sm text-zinc-600 text-center mt-5">
        Data source: Huawei Watch GT6 Pro
      </p>

      <section className="w-full">
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Context</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          I didn't want this website to simply be a single static portfolio
          page, so i had an idea to link it to my smartwatch to fetch live heart
          rate data via APIs, serverless functions and React hooks. Why heart
          rate data you ask? Idk, because i can, i guess.
        </p>
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Design:</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          Anyways here are the prerequisite materials.
        </p>
        <ul className="blog-content-ul">
          <li>1 Smartwatch with app compatibility</li>
          <li>1 Health sync app</li>
          <li>1 Google Drive account</li>
          <li>1 Google Cloud project set up</li>
          <li>1 Supabase project with tables</li>
          <li>A frontend (this page) </li>
        </ul>
        <p className="text-lg text-zinc-900 mt-8">
          Before starting, i prepared various solutions regarding the software
          to be used for this end-to-end flow, including the Strava, Google Fit,
          cron jobs and potentially even coding a lightweight Kotlin app to
          establish an API connection to my program. After much deliberation,
          the final tech-stack used in this process revolved around a specific
          feature of the <b>Health Sync app</b>.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <p className="text-lg text-zinc-900">
            It has the ability to upload data from selected vendor fitness apps
            (Huawei included, thankfully) to your Google account (i chose
            Drive), hence bridging the connection between mobile-only and the
            cloud!
          </p>
          <div className="items-center flex flex-col flex-shrink-0 ">
            <Image
              src="/healthsync.jpg"
              alt="Health Sync app"
              width={250}
              height={100}
              className="rounded-lg"
            />
            <p className=" text-sm text-zinc-600 mt-2">
              Screenshot of Health Sync app
            </p>
          </div>
        </div>

        <p className="text-lg text-zinc-900 mt-8">
          Here is the end-to-end flow that i designed: smartwatch reads
          heart-rate data → data gets stored automatically in the Huawei Health
          app → data from Huawei Health gets extracted into Health Sync app →
          Health Sync app sends the data to Google Drive → Google Drive data
          imported as a library in Google Cloud → posts the data into Supabase
          for cloud storage → data gets fetched into the frontend for viewing.
        </p>
        <div className="items-center flex flex-col mt-8">
          <Image
            src="/sysdgm.png"
            alt="System Diagram Architecture"
            width={800}
            height={100}
          />
          <p className=" text-sm text-zinc-600 mt-5">
            System Design Architecture
          </p>
        </div>
        <p className="text-lg text-zinc-900 mt-8">
          What about storage? Each day, about 400 to 600 heart rate records are
          inserted in my database. If i don't implement any cleaning mechanism
          for my database, records from each day will accumulate really fast
          until my Supabase storage limit is hit (free-tier, of course). Here, i
          had two choices.
        </p>
      </section>
    </>
  );
}
