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
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentSlide === slideIndex) {
      setIsExiting(false);
      setIsVisible(true);
      setAnimationClass(transitionIn);
    } else if (isVisible) {
      setIsExiting(true);
      setAnimationClass(transitionOut);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slideIndex, transitionIn, transitionOut, isVisible]);

  if (!isVisible && currentSlide !== slideIndex) return null;

  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ${animationClass}`}
      style={{
        zIndex: isExiting ? 10 : currentSlide === slideIndex ? 20 : 0,
      }}
    >
      {children}
    </div>
  );
}
