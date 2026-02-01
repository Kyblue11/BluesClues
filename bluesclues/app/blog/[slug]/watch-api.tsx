import HeartRateHistogram from "@/src/components/histogram";

export default function WatchAPI() {
  return (
    <>
      <section className="w-full mb-4">
        <div className="flex justify-start">
          <a href="/">back to home</a>
        </div>
      </section>
      <section className="w-full">
        <h2 className="var-h1">How I Linked my Watch to This Websitep</h2>
      </section>
      <HeartRateHistogram></HeartRateHistogram>
      <p className=" text-sm text-zinc-700 text-center mt-5">
        Data from: Huawei Watch GT6 Pro
      </p>

      <section className="w-full">
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Context:</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          I didn't want this website to turn into a single static portfolio
          page, so i had an idea to link it to my smartwatch to fetch live heart
          rate data via APIs and React hooks. Why heart rate data you ask? Idk,
          because i can, i guess.
        </p>
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Design:</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          Anyways here are the prerequisite materials.
        </p>
        <li>1 Smartwatch with app compatibility</li>
        <li>1 Health sync app</li>
        <li>1 Google Drive account</li>
        <li>1 Google Cloud project set up</li>
        <li>1 Supabase project with tables</li>
        <li>A frontend (this page) </li>
      </section>
    </>
  );
}
