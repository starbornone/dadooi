import { ReactNode } from "react";

interface SlideGridProps {
  children: ReactNode;
  size?: string;
}

export function SlideGrid({ children, size }: SlideGridProps) {
  return (
    <div className={`grid gap-6 h-full w-full ${size ? size : "grid-cols-5"}`}>
      {children}
    </div>
  );
}
