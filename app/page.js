"use client"

import { Background } from "@/components/background";
import { Clients } from "@/components/clients";
import { WorkingOn } from "@/components/workingOn";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hackathon } from "@/components/hackathon";
import Intro from "@/components/intro";
import { Projects } from "@/components/projects";
import TechStack from "@/components/techStack";
import { ScrollProgress } from "@/components/UI/scrollProgress";

export default function Home() {
  return (
    <main className="flex flex-col text-white max-md:px-4 px-16 overflow-x-hidden">
      <Background />
      <ScrollProgress />
      <Intro />
      <WorkingOn />
      <Clients />
      <Education />
      <Experience />
      <Hackathon />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
