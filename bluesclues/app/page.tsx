import { EDUCATIONS, WORKEXPERIENCES } from "./data";
import EducationRecord from "@/src/components/education";
import WorkExpRecord from "@/src/components/workexperience";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-var">
      <main className="flex flex-col items-center min-h-screen w-full max-w-3xl mx-auto py-24 px-4 bg-zinc-50">
        <section className="w-full mb-16">
          <h2 className="text-2xl font-bold mb-8 text-zinc-900">Education</h2>
          <ul className="flex flex-col gap-10">
            <EducationRecord educations={EDUCATIONS}></EducationRecord>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold mb-8 text-zinc-900">
            Work Experience
          </h2>
          <ul className="flex flex-col gap-10">
            <WorkExpRecord workexps={WORKEXPERIENCES}></WorkExpRecord>
          </ul>
        </section>
      </main>
    </div>
  );
}
