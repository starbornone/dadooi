import { ReactNode } from "react";

interface SlideBackgroundProps {
  imageUrl?: string;
  overlay?: string;
  children: ReactNode;
}

export function SlideBackground({
  imageUrl,
  overlay = "bg-blue-900/70",
  children,
}: SlideBackgroundProps) {
  return (
    <div
      className="flex h-full items-center justify-center bg-cover bg-center"
      style={imageUrl ? { backgroundImage: `url("${imageUrl}")` } : {}}
    >
      {imageUrl && <div className={`absolute inset-0 ${overlay}`}></div>}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
