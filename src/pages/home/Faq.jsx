import { useState } from "react";
import { copy } from "../../content/copy";

const defaults = {
  eyebrow: "Dealing with your worries",
  titleA: "If Your Question Is Not Here",
  titleB: "Contact Us",
  blurb:
    "We keep movements safe, compliant and on-schedule. If you don’t see what you need here, reach out and our operations team will assist.",
  cta: { label: "CONTACT US", href: "/contact" },
  faqs: [
    {
      q: "Where are your operations based?",
      a: "We stage near major ports and key corridors, coordinating regional and cross-border dispatch. When you request service, we confirm the nearest hub and lane availability.",
    },
    {
      q: "How do you safeguard product quality?",
      a: "Sealed custody, calibrated measurement, documented sampling and auditable handovers from loading to discharge—backed by a complete QA/QC trail.",
    },
    {
      q: "What can you move?",
      a: "Refined petroleum cargoes transported under the required permits and HSSE controls across marine and road networks—planned end-to-end with clear accountability.",
    },
    {
      q: "How fast can a movement be arranged?",
      a: "Standard dispatch is same-day for contracted lanes. Surge capacity and 24/7 call-outs are coordinated through operations with milestone tracking.",
    },
  ],
};

// thicker line icons to match screenshot
const PlusIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const MinusIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 12h14" />
  </svg>
);

export default function Faq() {
  const data = copy.faq ?? defaults;

  // open the SECOND item by default to mirror your screenshot
  const [open, setOpen] = useState(1);
  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          {/* LEFT: title + copy + CTA */}
          <div className="md:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-slate-600">
                {data.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl">
              {data.titleA} <span className="text-emerald-600">{data.titleB}</span>
            </h2>

            <p className="mt-6 max-w-[55ch] text-[15px] leading-7 text-slate-600">{data.blurb}</p>

            <a
              href={data.cta.href}
              className="mt-8 inline-flex rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
            >
              {data.cta.label}
            </a>
          </div>

          {/* RIGHT: accordion */}
          <div className="md:col-span-6">
            <ul className="space-y-5">
              {data.faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.q}
                    className={`rounded-md border-2 bg-white transition-colors ${
                      isOpen ? "border-emerald-400" : "border-slate-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between px-6 py-6 text-left"
                    >
                      <span
                        className={`text-[22px] font-extrabold leading-6 ${
                          isOpen ? "text-emerald-600" : "text-slate-900"
                        }`}
                      >
                        {item.q}
                      </span>
                      {isOpen ? (
                        <MinusIcon className="h-6 w-6 text-emerald-600" />
                      ) : (
                        <PlusIcon className="h-6 w-6 text-slate-500" />
                      )}
                    </button>

                    {/* content */}
                    <div
                      className={`px-6 pb-6 transition-[max-height] duration-300 ease-in-out ${
                        isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-[15px] leading-7 text-slate-700">{item.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
