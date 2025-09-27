import { copy } from "../../content/copy";
import vessel from "../../assets/vessel.jpg";
import boat from "../../assets/boat.jpg";

function LocationIcon({ className = "" }) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.92 5.07 10.63 5.29 10.86a1 1 0 0 0 1.42 0C12.93 18.63 18 12.92 18 8c0-3.314-2.686-6-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export default function Projects() {
  const items = copy.sampleProjects;
  // Simple image pool – replace with real project images anytime
  const images = [vessel, boat, vessel, boat];

  return (
    <section className="bg-[#0a2741]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-18 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-white/70">
              What we do
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Our <span className="text-emerald-500">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {items.map((p, i) => (
            <li key={p.title}>
              {/* Image */}
              <div className="overflow-hidden bg-white/5 ring-1 ring-white/5">
                <img
                  src={images[i % images.length]}
                  alt={p.title}
                  className="h-64 w-full object-cover sm:h-80 md:h-96"
                />
              </div>

              {/* Text block */}
              <div className="mt-5">
                <h3 className="text-2xl font-extrabold text-white md:text-[28px]">
                  {p.title}
                </h3>

                {/* Divider like the template */}
                <div className="mt-3 border-t border-white/10" />

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center text-white/90">
                    <LocationIcon className="text-[#FFC631]" />
                    <span className="ml-2 text-[15px]">{p.location}</span>
                  </div>

                  <a
                    href="#project-details"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFC631] hover:opacity-90"
                  >
                    DETAILS <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
