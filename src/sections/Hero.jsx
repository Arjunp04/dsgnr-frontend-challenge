import { hero } from "../data/content";
import shape1 from "../assets/hero/shape_1.png";
import shape2 from "../assets/hero/shape_2.png";

import mouseIcon from "../assets/mouse.svg";

const Hero = () => {
  return (
    <section>
      <div className="relative min-h-110 overflow-hidden bg-hero-yellow md:min-h-155 lg:min-h-screen">
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-page">
          <img
            src={shape1}
            alt=""
            aria-hidden="true"
            className="absolute top-[10%] left-[2%] h-auto w-1/2 xs:w-2/5 md:w-1/3 xl:w-[28%]"
          />
        </div>

        <img
          src={shape2}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-contain"
        />

        <div className="relative page-container pt-36 text-center md:pt-48 lg:pt-56">
          <h1 className="mx-auto max-w-[8.5em] text-4xl font-bold xs:text-5xl md:text-7xl xl:text-8xl">
            {hero.heading}
          </h1>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="page-container">
            <div className="flex items-end justify-center gap-3 sm:justify-end xl:gap-6">
              {hero.hands.map((hand) => (
                <img
                  key={hand}
                  src={hand}
                  alt=""
                  className="w-20 xs:w-32 md:w-40 xl:w-48"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href={hero.scrollTarget}
        aria-label={hero.scrollLabel}
        className="flex justify-center py-6 md:py-8 xl:py-9"
      >
        <img
          src={mouseIcon}
          alt=""
          className="h-9 w-auto motion-safe:transition-transform motion-safe:hover:translate-y-1 xs:h-10 xl:h-12"
        />
      </a>
    </section>
  );
};

export default Hero;