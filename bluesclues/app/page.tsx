import { EDUCATIONS, WORKEXPERIENCES, BLOGS } from "./data";
import ViewCounter from "@/src/components/views";
import ABoutMe from "@/src/components/aboutme";
import StatusCard from "@/src/components/statuscard";
import EducationRecord from "@/src/components/education";
import WorkExpRecord from "@/src/components/workexperience";
import SkillSection from "@/src/components/skills";
import MyBlog from "@/src/components/blog";
import BackToTop from "@/src/components/backtotop";
import Footer from "@/src/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-var">
        <main className="flex flex-col items-center min-h-screen w-full max-w-3xl mx-auto py-12 px-4 bg-zinc-100">

          <section className="w-full mb-24">
            <p className="var-h5 text-center">NOTE:</p>
            <p className=" text-sm mt-1 text-zinc-400 text-center">
              This page is currently being worked on. Do expect to see new
              additions and random things pop up here and there!
            </p>
          </section>

          <section className="w-full mb-24">
            <div className="flex justify-between items-start">
              <h2 className="var-h1">About Me</h2>
              <span className="text-sm text-zinc-500 font-normal">
                <ViewCounter></ViewCounter>
              </span>
            </div>
            <ABoutMe></ABoutMe>
          </section>

          <section className="mb-24">
            <StatusCard></StatusCard>
          </section>

          <section className="w-full mb-24">
            <h2 className="var-h1">Education</h2>
            <ul className="flex flex-col gap-10">
              <EducationRecord educations={EDUCATIONS}></EducationRecord>
            </ul>
          </section>

          <section className="w-full mb-24">
            <h2 className="var-h1">Work Experience</h2>
            <ul className="flex flex-col gap-10">
              <WorkExpRecord workexps={WORKEXPERIENCES}></WorkExpRecord>
            </ul>
          </section>

          <section className="w-full mb-24">
            <h2 className="var-h1">Skills</h2>
            <SkillSection></SkillSection>
          </section>

          <section id="BlogSection" className="w-full">
            <h2 className="var-h1">My Blog</h2>
            <ul className="flex flex-col gap-10">
              <MyBlog blogs={BLOGS}></MyBlog>
            </ul>
          </section>

          <BackToTop></BackToTop>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
