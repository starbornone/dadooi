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
          <Slide
            slideIndex={0}
            transitionIn="fade-in"
            transitionOut="slide-out-left"
          >
            <SlideBackground imageUrl="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white p-8">
                  <h1 className="text-5xl font-bold mb-6">
                    Do Androids Dream of Original Ideas?
                  </h1>
                  <p className="text-xl max-w-2xl mx-auto">
                    Creativity in the age of AI
                  </p>
                </div>
              </div>
            </SlideBackground>
          </Slide>

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

          <Slide
            slideIndex={2}
            transitionIn="slide-in-right"
            transitionOut="slide-out-left"
          >
            <div className="flex h-full flex-col justify-center items-center p-16 bg-gradient-to-br from-purple-700 to-pink-600">
              <h2 className="text-4xl font-bold mb-8 text-white">
                Human Creativity Still Matters
              </h2>
              <div className="grid grid-cols-2 gap-8 text-white">
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3">Originality</h3>
                  <p>Humans can make genuine creative leaps that AI cannot</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3">Context</h3>
                  <p>
                    We understand cultural nuances that shape meaningful content
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3">Purpose</h3>
                  <p>We create with intention and emotional understanding</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
                  <p>
                    True innovation comes from human experience and perspective
                  </p>
                </div>
              </div>
            </div>
          </Slide>

          <Slide
            slideIndex={3}
            transitionIn="slide-in-right"
            transitionOut="slide-out-left"
          >
            <div className="flex h-full items-center justify-center p-16 bg-gray-100 dark:bg-gray-800">
              <div className="max-w-3xl text-center">
                <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                  Sameness Creates Room for Weirdness
                </h2>
                <p className="text-2xl mb-8 text-gray-700 dark:text-gray-200">
                  As AI generates more generic content, truly original human
                  creations stand out even more.
                </p>
                <div className="mt-12 flex justify-center">
                  <div className="relative h-64 w-64">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"></div>
                    <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <span className="text-5xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <Slide
            slideIndex={4}
            transitionIn="slide-in-right"
            transitionOut="fade-out"
          >
            <div className="flex h-full flex-col justify-center items-center p-16 bg-gradient-to-br from-green-600 to-blue-700">
              <h2 className="text-4xl font-bold mb-8 text-white">
                Now Is the Best Time to Be Original
              </h2>
              <p className="text-2xl mb-12 text-white max-w-3xl text-center">
                In a world filled with AI-generated sameness, your unique human
                creativity has never been more valuable.
              </p>
              <div className="bg-white/20 p-8 rounded-xl backdrop-blur-sm max-w-2xl">
                <blockquote className="text-white text-xl italic">
                  &quot;The more formulaic content is created by AI, the more
                  space opens up for weird, challenging, and truly original
                  human expression.&quot;
                </blockquote>
              </div>
            </div>
          </Slide>
        </div>

        <PresentationControls />
      </div>
    </PresentationProvider>
  );
}
