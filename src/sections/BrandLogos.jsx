import LogoCell from "../components/LogoCell";
import { brandLogos } from "../data/content";

const BrandLogos = () => {
  return (
    <section aria-labelledby="brand-logos-heading" className="pt-10 pb-28">
      <div className="page-container">
        <h2
          id="brand-logos-heading"
          className="mx-auto max-w-[22em] text-center text-2xl text-subheading font-bold text-balance xs:text-4xl leading-13"
        >
          {brandLogos.heading}
        </h2>

        <ul className="mx-auto mt-14 grid max-w-264 grid-cols-2 gap-px bg-divider md:mt-14 lg:grid-cols-4 xl:mt-20">
          {brandLogos.logos.map((logo) => (
            <LogoCell key={logo.name} {...logo} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandLogos;
