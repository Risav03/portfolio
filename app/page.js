import { Background } from "@/components/background";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import { MyJourney } from "@/components/myJourney";


export default function Home() {
  return (
    <main className=" flex flex-col text-white max-md:px-4 max-md:pb-20 px-16 overflow-x-hidden">
      <Background/>
      <Intro/>
      <MyJourney/>
      <Experience/>
    </main>
  );
}
