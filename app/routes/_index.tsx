import type { MetaFunction } from "@remix-run/node";

import { PresentationControls } from "~/components/PresentationControls";
import {
  PresentationProvider,
  usePresentation,
} from "~/context/PresentationContext";
import { Slide } from "~/components/Slide";
import {
  AgeOfAverage,
  AiHaiku,
  AiSunset,
  Artists,
  Bestsellers,
  CadavreExquis,
  Dadooi,
  LoveStory,
  Music,
  StandOut,
} from "~/slides";

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

function Header() {
  const { currentSlide, totalSlides } = usePresentation();

  return (
    <div className="fixed flex items-center justify-between w-full gap-2 py-6 px-12 z-50 bg-midnight font-neon">
      <div className="uppercase">DevCamp 2025</div>
      <div className="flex items-center gap-2">
        <span className="text-lavender">{currentSlide + 1}</span>
        <span className="text-aqua">/</span>
        <span className="text-teal">{totalSlides}</span>
      </div>
    </div>
  );
}

export default function Index() {
  const slides = [
    {
      component: <Dadooi />,
    },
    {
      component: <AiSunset />,
    },
    {
      component: <AiHaiku />,
    },
    {
      component: <StandOut />,
    },
    {
      component: <LoveStory />,
    },
    {
      component: <AgeOfAverage />,
    },
    {
      component: <Bestsellers />,
    },
    {
      component: <Artists />,
    },
    {
      component: <Music />,
    },
    {
      component: <CadavreExquis />,
    },
  ];

  const TOTAL_SLIDES = slides.length;

  return (
    <PresentationProvider totalSlides={TOTAL_SLIDES}>
      <div className="relative h-screen w-screen overflow-hidden">
        <Header />
        <div className="h-full w-full">
          {/* ------------------------ */}
          {slides.map((slide, index) => (
            <Slide key={index} slideIndex={index}>
              {slide.component}
            </Slide>
          ))}
          {/* ------------------------ */}
        </div>
        <PresentationControls />
      </div>
    </PresentationProvider>
  );
}
