import { EDUCATIONS, WORKEXPERIENCES } from "./data";
import ABoutMe from "@/src/components/aboutme";
import EducationRecord from "@/src/components/education";
import WorkExpRecord from "@/src/components/workexperience";
import SkillSection from "@/src/components/skills";
import Footer from "@/src/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-var">
        <main className="flex flex-col items-center min-h-screen w-full max-w-3xl mx-auto py-24 px-4 bg-zinc-100">
          <section className="w-full mb-16">
            <h2 className="text-2xl font-bold text-zinc-900">About Me</h2>
            <ABoutMe></ABoutMe>
          </section>

          <section className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-8 text-zinc-900">Education</h2>
            <ul className="flex flex-col gap-10">
              <EducationRecord educations={EDUCATIONS}></EducationRecord>
            </ul>
          </section>

          <section className="w-full mb-16">
            <h2 className="text-2xl font-bold mb-8 text-zinc-900">
              Work Experience
            </h2>
            <ul className="flex flex-col gap-10">
              <WorkExpRecord workexps={WORKEXPERIENCES}></WorkExpRecord>
            </ul>
          </section>

          <section className="w-full mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Skills</h2>
            <SkillSection></SkillSection>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
