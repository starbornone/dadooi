import { createContext, useContext, useState, ReactNode } from "react";

interface PresentationContextType {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  previousSlide: () => void;
  goToSlide: (slide: number) => void;
  isLastSlide: boolean;
  isFirstSlide: boolean;
}

const PresentationContext = createContext<PresentationContextType | undefined>(
  undefined
);

export function PresentationProvider({
  children,
  totalSlides,
}: {
  children: ReactNode;
  totalSlides: number;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (slide: number) => {
    if (slide >= 0 && slide < totalSlides) {
      setCurrentSlide(slide);
    }
  };

  const isLastSlide = currentSlide === totalSlides - 1;
  const isFirstSlide = currentSlide === 0;

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        nextSlide,
        previousSlide,
        goToSlide,
        isLastSlide,
        isFirstSlide,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (context === undefined) {
    throw new Error(
      "usePresentation must be used within a PresentationProvider"
    );
  }
  return context;
}
