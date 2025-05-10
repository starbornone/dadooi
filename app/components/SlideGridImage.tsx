interface SlideGridImageProps {
  alt: string;
  src: string;
}

export function SlideGridImage({ alt, src }: SlideGridImageProps) {
  return <img alt={alt} className="object-cover h-full w-full" src={src} />;
}
