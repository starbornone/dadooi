import { SlideBackground } from "~/components/SlideBackground";

export function Dadooi() {
  return (
    <SlideBackground imageUrl="/artem-bryzgalov-r2CAjGQ0gSI-unsplash.jpg">
      <div className="flex h-full items-center justify-center">
        <div className="text-center text-white p-8">
          <h1 className="text-8xl mb-6 font-neon flicker">
            Do Androids Dream of
            <br />
            Original Ideas?
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-aqua">
            Creativity in the age of AI
          </p>
        </div>
      </div>
    </SlideBackground>
  );
}
