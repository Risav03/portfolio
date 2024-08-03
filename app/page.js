"use client"

import { Background } from "@/components/background";
import {Experience} from "@/components/experience";
import { Hackathon } from "@/components/hackathon";
import Intro from "@/components/intro";
import { Projects } from "@/components/projects";
import TechStack from "@/components/techStack";


export default function Home() {
  return (
    <main className=" flex flex-col text-white max-md:px-4 max-md:pb-20 px-16 overflow-x-hidden">
      <Background/>
      <Intro/>
      <Experience/>
      <Hackathon/>
      <Projects/>
      <TechStack/>
    </main>
  );
}
