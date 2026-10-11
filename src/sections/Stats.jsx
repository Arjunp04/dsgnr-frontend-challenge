import { stats } from "../data/content";

const Stats = () => {
  return (
    <section className="bg-dark text-white my-20">
      <div className="page-container">
        <dl className="grid gap-y-12 py-10 sm:grid-cols-2 sm:gap-x-6 md:py-12 lg:flex lg:justify-between xl:py-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse gap-2">
              <dt className="text-large font-medium">{label}</dt>
              <dd className="text-3xl font-bold text-yellow xs:text-4xl md:text-5xl xl:text-6xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;