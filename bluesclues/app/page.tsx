import { EDUCATIONS, WORKEXPERIENCES } from "./data";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-var">
      <main className="flex flex-col items-center min-h-screen w-full max-w-3xl mx-auto py-24 px-4 bg-zinc-50">

        <section className="w-full mb-16">
          <h2 className="text-2xl font-bold mb-8 text-zinc-900">Education</h2>
          <ul className="flex flex-col gap-10">
            {EDUCATIONS.map((edu, idx) => (
              <li key={idx} className="relative">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-lg font-semibold text-zinc-900">
                    {edu.edu_name}
                  </span>
                  <span className="text-sm text-zinc-500 font-normal">
                    {edu.edu_period}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-zinc-600">{edu.edu_role}</span>
                  <span className="text-xs text-zinc-400">
                    {edu.edu_location}
                  </span>
                </div>
                {edu.edu_desc && (
                  <p className="text-sm text-zinc-700 mt-1">{edu.edu_desc}</p>
                )}
              </li>
            ))}
          </ul>
        </section>


        <section className="w-full">
          <h2 className="text-2xl font-bold mb-8 text-zinc-900">
            Work Experience
          </h2>
          <ul className="flex flex-col gap-10">
            {WORKEXPERIENCES.map((work, idx) => (
              <li key={idx} className="relative">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-lg font-semibold text-zinc-900">
                    {work.work_title}
                  </span>
                  <span className="text-sm text-zinc-500 font-normal">
                    {work.work_period}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-zinc-600">
                    {work.work_company_name}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {work.work_location}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-zinc-500">
                    {work.work_method}
                  </span>
                </div>
                {work.work_desc && (
                  <p className="text-sm text-zinc-700 mt-1">{work.work_desc}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
