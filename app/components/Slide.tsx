import { ReactNode, useEffect, useState } from "react";
import { usePresentation } from "~/context/PresentationContext";

interface SlideProps {
  slideIndex: number;
  children: ReactNode;
  transitionIn?: string;
  transitionOut?: string;
}

export function Slide({
  slideIndex,
  children,
  transitionIn = "fade-in",
  transitionOut = "fade-out",
}: SlideProps) {
  const { currentSlide } = usePresentation();
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (currentSlide === slideIndex) {
      setIsVisible(true);
      setAnimationClass(transitionIn);
    } else if (isVisible) {
      setAnimationClass(transitionOut);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slideIndex, transitionIn, transitionOut, isVisible]);

  if (!isVisible && currentSlide !== slideIndex) return null;

  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ${animationClass}`}
    >
      {children}
    </div>
  );
}
