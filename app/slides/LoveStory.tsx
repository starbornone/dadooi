import { SlideBackground } from "~/components/SlideBackground";
import { SlideGrid } from "~/components/SlideGrid";
import { SlideGridImage } from "~/components/SlideGridImage";

export function LoveStory() {
  return (
    <SlideBackground background="teal">
      <SlideGrid>
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
        <div className="col-span-2 row-span-2">
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
