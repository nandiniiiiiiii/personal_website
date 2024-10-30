import { BentoGridThirdDemo } from "@/components/DisplayGrid";
import { BackgroundBoxesDemo } from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/Projects";
import { HeroScrollDemo } from "@/components/Scroll";

export default function Home() {
  return (
    // <h2>Hello world</h2>
    <>
    <BackgroundBoxesDemo/>
    <InfiniteMovingCardsDemo/>
    <HeroScrollDemo/>
    <BentoGridThirdDemo />
    <div className="bg-black flex flex-col pt-40 overflow-hidden">
    </div>
    </>
    
  );
}
