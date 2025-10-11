import { copy } from "../../content/copy";

export default function Services() {
  const items = copy.services.items;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-20">
        {/* Section header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-slate-600">
              {copy.services.headingEyebrow}
            </span>
          </div>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl">
            {copy.services.headingTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-emerald-600">
              {copy.services.headingTitle.split(" ").slice(-1)}
            </span>
          </h2>
        </div>

        {/* Cards (matches the screenshots) */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <li
              key={s.title}
              className="group relative border border-slate-200 bg-white p-8 transition hover:-translate-y-0.5 hover:border-emerald-600 hover:shadow-lg"
            >
              {/* big faded number */}
              <div className="pointer-events-none absolute left-8 top-6 text-4xl font-extrabold text-slate-200">
                {s.n}
              </div>

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                {s.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {s.desc}
              </p>
              {/* 
              <a
                href="#service-details"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                DETAILS <span aria-hidden>→</span>
              </a> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
