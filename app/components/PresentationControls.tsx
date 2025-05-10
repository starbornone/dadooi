import React from "react";
import { usePresentation } from "~/context/PresentationContext";

export function PresentationControls() {
  const {
    nextSlide,
    previousSlide,
    currentSlide,
    totalSlides,
    isFirstSlide,
    isLastSlide,
    goToSlide,
  } = usePresentation();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        previousSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide]);

  return (
    <div className="fixed bottom-0 flex flex-col items-center justify-center w-full gap-2 p-4 z-50 bg-midnight">
      <div className="flex gap-2">
        <button
          onClick={previousSlide}
          disabled={isFirstSlide}
          className="p-2 text-lavender/50 rounded-full disabled:opacity-50"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <span className="flex items-center justify-center px-4 gap-2 text-[#301b5c] rounded-full">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-lavender" : "bg-lavender/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </span>

        <button
          onClick={nextSlide}
          disabled={isLastSlide}
          className="p-2 text-lavender/50 rounded-full disabled:opacity-50"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
