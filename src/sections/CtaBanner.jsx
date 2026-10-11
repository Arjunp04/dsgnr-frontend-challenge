import Button from "../components/Button";
import { cta } from "../data/content";
import logo from "../assets/logo.svg";
import ctaHands from "../assets/cta-hands.png";

const CtaBanner = () => {
  return (
    <section className="pb-6 xl:pb-8">
      <div className="overflow-hidden bg-yellow">
        <div
          className="
            relative mx-auto flex max-w-page flex-col items-start
            gap-6 px-6 py-8
            xs:px-8 xs:py-10
            sm:py-12
            md:gap-4
            lg:h-40 lg:flex-row lg:items-center
            lg:gap-6 lg:pr-8 lg:pl-0
            xl:h-48 xl:gap-8 xl:pr-10
          "
        >
          {/* Logo */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="
              hidden md:block md:w-36 md:shrink-0
              lg:-ml-4 lg:w-40
              xl:-ml-18 xl:w-76
            "
          />

          {/* Heading + CTA */}
          <div
            className="
              relative z-10 flex flex-col items-start gap-6
              md:flex-col
              lg:min-w-0 lg:flex-1 lg:flex-row
              lg:items-center lg:gap-6
              xl:gap-8
            "
          >
            <h2
              className="
                max-w-[10.5em] text-xl font-bold
                xs:text-3xl
                sm:max-w-none sm:text-3xl
                md:text-2xl
                lg:max-w-none lg:shrink-0 lg:text-3xl
                xl:text-subheading
              "
            >
              {cta.headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <Button
              href={cta.buttonHref}
              className="
                shrink-0 whitespace-nowrap px-6 py-2
                text-xl font-semibold
                lg:text-lg
                xl:text-2xl
              "
            >
              {cta.buttonLabel}
            </Button>
          </div>

          {/* Hands */}
          <img
            src={ctaHands}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="
              pointer-events-none absolute right-3 bottom-0
              hidden w-20 xs:block
              xs:w-56
              sm:w-68
              md:w-64
              lg:right-4 lg:w-56
              xl:right-6 xl:w-64
            "
          />
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
