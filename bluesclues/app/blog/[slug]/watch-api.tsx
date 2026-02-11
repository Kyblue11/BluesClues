import HeartRateHistogram from "@/src/components/histogram";
import Image from "next/image";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function WatchAPI() {
  return (
    <>
      <p className="text-lg text-zinc-900">
        Streaming live data for{" "}
        {dayjs().tz("Asia/Kuala_Lumpur").format("DD-MM-YYYY HH:mm")}
      </p>
      <HeartRateHistogram></HeartRateHistogram>
      <p className=" text-sm text-zinc-600 text-center lg:mt-4">
        Data source: Huawei Watch GT6 Pro
      </p>

      <section className="w-full">
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Context</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          I didn't want this webpage to simply be a single static portfolio
          page, so i had the genius idea to link my smartwatch to it, and fetch
          live heart rate data via APIs, serverless functions and React hooks.
          Why heart rate you ask? Idk, because i can, i guess.
        </p>
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Design:</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          Anyways here were the prerequisites.
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
          cron jobs, and even considered coding a lightweight Kotlin app to
          establish an API connection to my program. After much deliberation,
          the final tech-stack used in this process revolved around a specific
          feature of the <b>Health Sync app</b>.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <p className="text-lg text-zinc-900">
            It has the ability to upload data from selected vendor fitness apps
            (Huawei included) to Google Drive, hence bridging the connection
            between mobile-only and the cloud!
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
          Here is the end-to-end flow i came up with: Smartwatch reads
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
          What about storage? Each day, about 400 to 600 new heart rate records
          are inserted into my database. How do i ensure only today's data gets
          shown in the histogram? How do i manage bulk data storage? If i don't
          implement any tidying mechanism for my database, records from each day
          would accumulate really fast until my Supabase storage limit is hit
          (free-tier, of course). Here, i had two choices.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <div className="flex flex-col lg:w-1/2">
            <p className="text-lg text-zinc-900">
              <b>Cron Job</b>
            </p>
            <p className="text-lg text-zinc-900">
              I could write a time-based trigger to fetch new data at fixed
              intervals (e.g. scheduled every morning at 12:00am). Then, another
              daily trigger to remove old records. These 2 cron jobs would be
              executed outside my codebase, from Vercel or Supabase.
            </p>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <p className="text-lg text-zinc-900">
              <b>Serverless Function</b>
            </p>
            <p className="text-lg text-zinc-900">
              I could make an event-driven HTTP request to fetch live data from
              the database each time a viewer opens my webpage. I'd then recycle
              this same HTTP request to trigger a database clean for old records
              (e.g. records past 2 days).
            </p>
          </div>
        </div>

        <p className="text-lg text-zinc-900 mt-8">
          At the end, i decided to go with the serverless function option (idle
          until triggered). This works via my project's <code>/app/api</code>{" "}
          route and a <code>route.ts</code> file to perform server-side fetch
          operations and update my database when the <b>first</b> user of the
          day visits the webpage.{" "}
        </p>
        <p className="text-lg text-zinc-900 mt-8">
          There are a few benefts to this. I can keep my API logic alongside my
          frontend code in one Next.js project, instead of needing to write
          seperate functions outside my codebase (e.g. in Vercel or Supabase).
          Besides that, the frequency of SQL queries sent to Supabase would be
          reduced, since data is loaded dynamically, i.e. the SQL query only
          gets invoked when a user visits the webpage. On the other hand,
          implementing a cron job would mean the SQL query{" "}
          <i>will always run </i>
          every day, even if the webpage recieves no visitors that particular
          day.
        </p>
        <div className="flex justify-start italic mt-8">
          <a
            href="https://github.com/Kyblue11/BluesClues/blob/main/bluesclues/app/api/gdrive/heartrates/yesterday/route.ts"
            target="_blank"
          >
            &gt; If you're curious, here is the function call.
          </a>
        </div>
      </section>
    </>
  );
}
