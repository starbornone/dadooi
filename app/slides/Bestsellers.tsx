import { SlideBackground } from "~/components/SlideBackground";
import { SlideGrid } from "~/components/SlideGrid";
import { SlideGridImage } from "~/components/SlideGridImage";

export function Bestsellers() {
  return (
    <SlideBackground background="teal">
      <SlideGrid size="grid-cols-4">
        <div className="row-span-2">
          <SlideGridImage
            alt=""
            src="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg"
          />
        </div>
        <div className="row-span-2">
          <SlideGridImage
            alt=""
            src="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg"
          />
        </div>
        <div className="row-span-2">
          <SlideGridImage
            alt=""
            src="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg"
          />
        </div>
        <div className="">
          <SlideGridImage
            alt=""
            src="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg"
          />
        </div>
        <div className="">
          <SlideGridImage
            alt=""
            src="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg"
          />
        </div>
      </SlideGrid>
    </SlideBackground>
  );
}
