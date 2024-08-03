import { Background } from "@/components/background";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import { MyJourney } from "@/components/myJourney";


export default function Home() {
  return (
    <main className="p-16 max-md:px-4 max-md:py-20 overflow-x-hidden">
      <Background/>
      <Intro/>
      <MyJourney/>
      <Experience/>
    </main>
  );
}
