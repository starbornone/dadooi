import { SlideBackground } from "~/components/SlideBackground";
import { SlideGrid } from "~/components/SlideGrid";
import { SlideGridImage } from "~/components/SlideGridImage";

export function CadavreExquis() {
  return (
    <SlideBackground background="teal">
      <SlideGrid>
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
