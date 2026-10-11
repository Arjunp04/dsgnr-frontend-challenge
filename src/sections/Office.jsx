import { office } from "../data/content";

const Office = () => {
  const {
    heading,
    image,
    city,
    addressLines,
    email,
    phone,
    directionsLabel,
    mapsUrl,
  } = office;

  return (
    <section
      aria-labelledby="office-heading"
      className="py-4 sm:py-10"
    >
      <div className="page-container">
        <h2 id="office-heading" className="text-center text-subheading text-2xl font-bold xs:text-4xl lg:leading-13">
          {heading} 
        </h2>

        <div className="relative mt-10 md:mt-14 xl:mt-20">
          <img
            src={image}
            alt="office room image"
            width="1274"
            height="562"
            loading="lazy"
            className="aspect-4/3 w-full object-cover md:aspect-2/1 lg:aspect-auto lg:h-105 xl:h-140"
          />

          <address className="relative mx-4 -mt-10 bg-white p-6 not-italic shadow-lg md:absolute md:bottom-6 md:left-6 md:m-0 md:w-64 md:shadow-none lg:bottom-8 lg:w-72 lg:px-7 lg:pt-12 lg:pb-8 xl:bottom-13 xl:left-9 xl:w-96 xl:px-9 xl:pt-22 xl:pb-11">
            <h3 className="text-2xl font-bold xl:text-title">{city}</h3>

            <p className="mt-2 text-base font-medium xl:text-xl">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <div className="mt-5 flex flex-col text-base font-medium xl:text-xl">
              <a
                href={`mailto:${email}`}
                className="w-fit text-blue underline-offset-4 hover:underline"
              >
                {email}
              </a>
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="w-fit underline-offset-4 hover:underline"
              >
                {phone}
              </a>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-base font-semibold tracking-wide uppercase xl:text-xl"
            >
              {directionsLabel}
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 8h12M9 3l5 5-5 5" />
              </svg>
            </a>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Office;
