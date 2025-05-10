import { SlideBackground } from "~/components/SlideBackground";
import { SlideGridImage } from "~/components/SlideGridImage";

export function AiHaiku() {
  return (
    <SlideBackground background="teal">
      <div className="grid grid-cols-2">
        <div className="flex text-center items-center justify-center">
          <p>
            Mechanized quills hum
            <br />
            Sea of cloned, hollow echoes
            <br />
            Creative well dies
          </p>
        </div>
        <SlideGridImage
          alt="Robot sitting at a desk"
          src="/mFCljBxoXLypDdGhxVF6--0--lllr7_4x-real-esrgan-x4-plus.jpg"
        />
      </div>
    </SlideBackground>
  );
}
