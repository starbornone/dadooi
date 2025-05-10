import type { MetaFunction } from "@remix-run/node";

import { PresentationControls } from "~/components/PresentationControls";
import { PresentationProvider } from "~/context/PresentationContext";
import { Slide } from "~/components/Slide";
import { SlideBackground } from "~/components/SlideBackground";

export const meta: MetaFunction = () => {
  return [
    { title: "Do Androids Dream of Original Ideas?" },
    {
      name: "description",
      content:
        "AI makes content faster, cheaper, and... more generic than any of us. So maybe this isn't the end of creativity. Let's talk about why human creativity still matters, how sameness creates space for weirdness to shine, and why now might be the best time to make something truly original... because the machines sure can't.",
    },
  ];
};

const TOTAL_SLIDES = 5;

export default function Index() {
  return (
    <PresentationProvider totalSlides={TOTAL_SLIDES}>
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="h-full w-full">
          {/* ------------------------ */}
          <Slide
            slideIndex={0}
            transitionIn="fade-in"
            transitionOut="slide-out-left"
          >
            <SlideBackground imageUrl="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white p-8">
                  <h1 className="text-7xl font-bold mb-6 font-neon">
                    Do Androids Dream of
                    <br />
                    Original Ideas?
                  </h1>
                  <p className="text-xl max-w-2xl mx-auto">
                    Creativity in the age of AI
                  </p>
                </div>
              </div>
            </SlideBackground>
          </Slide>
          {/* Slide 2 */}
          <Slide
            slideIndex={1}
            transitionIn="slide-in-right"
            transitionOut="slide-out-left"
          >
            <div className="flex h-full flex-col justify-center p-16 bg-white dark:bg-gray-900">
              <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                AI: Faster, Cheaper, More Generic
              </h2>
              <ul className="space-y-6 text-xl text-gray-700 dark:text-gray-200">
                <li className="opacity-0 animate-[fadeIn_0.5s_0.3s_forwards]">
                  ✓ AI generates content at unprecedented speed
                </li>
                <li className="opacity-0 animate-[fadeIn_0.5s_0.6s_forwards]">
                  ✓ Significantly reduces production costs
                </li>
                <li className="opacity-0 animate-[fadeIn_0.5s_0.9s_forwards]">
                  ✓ But often produces generic, derivative results
                </li>
              </ul>
            </div>
          </Slide>
          {/* ------------------------ */}
        </div>
        <PresentationControls />
      </div>
    </PresentationProvider>
  );
}
