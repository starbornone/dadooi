import { ReactNode, useState, useEffect } from "react";

interface SlideBackgroundProps {
  background?: string;
  children: ReactNode;
  imageUrl?: string;
  overlay?: string;
  transitionDuration?: number;
}

export function SlideBackground({
  background,
  children,
  imageUrl,
  overlay = "bg-slate-900/70",
  transitionDuration = 500,
}: SlideBackgroundProps) {
  const [currentImage, setCurrentImage] = useState(imageUrl);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        setCurrentImage(imageUrl);
        setIsLoading(false);
      };

      img.onerror = () => {
        console.error(`Failed to load image: ${imageUrl}`);
        setIsLoading(false);
      };
    }
  }, [imageUrl]);

  if (imageUrl) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity"
          style={{
            backgroundImage: currentImage ? `url("${currentImage}")` : "none",
            opacity: isLoading ? 0 : 1,
            transitionDuration: `${transitionDuration}ms`,
            transitionProperty: "opacity, transform",
          }}
        />

        {currentImage && (
          <div
            className={`absolute inset-0 transition-opacity ${
              imageUrl && (overlay ? "bg-slate-900/70" : "")
            }`}
            style={{
              transitionDuration: `${transitionDuration}ms`,
              opacity: isLoading ? 0 : 1,
            }}
          />
        )}

        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-full items-center justify-center p-48 ${
        background ? `bg-${background}` : ""
      }`}
    >
      {children}
    </div>
  );
}
