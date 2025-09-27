// src/pages/home/Features.jsx
import { copy } from "../../content/copy";

/* Yellow icons */
const ic = "h-11 w-11 text-[#FFC631] flex-shrink-0";
const Layers = () => (<svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></svg>);
const Cog    = () => (<svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8Z"/><path d="M19.4 15a8 8 0 0 0 .1-2l2-1.5-2-3.5-2.4.5a8 8 0 0 0-1.7-1L13 3h-2l-1.4 3.5a8 8 0 0 0-1.7 1L5.5 8l-2 3.5L5.4 13a8 8 0 0 0 .1 2L3.5 16.5l2 3.5 2.4-.5a8 8 0 0 0 1.7 1L11 23h2l1.4-2.5a8 8 0 0 0 1.7-1l2.4.5 2-3.5-1.7-1Z"/></svg>);
const Chart  = () => (<svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M6 17v-5M12 17V7M18 17v-8"/></svg>);
const Bulb   = () => (<svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 2h6s0-1 1-2a7 7 0 0 0-4-12Z"/></svg>);
const Hand   = () => (<svg viewBox="0 0 24 24" className={ic} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 12h3l1.5-2 2 2H20"/><path d="M3 13.5 8 9l3 3 2-2 4 4 4-1.5"/><path d="M3 20h10a7 7 0 0 0 7-7v-1"/></svg>);

/* Short, strong copy */
const cards = [
  { Icon: Layers, title: "We Develop Unique Projects", desc: "Tailored petroleum logistics with clear custody control." },
  { Icon: Cog,    title: "We Value Convenience & Functionality", desc: "Simple handovers, defined milestones, reliable flow." },
  { Icon: Chart,  title: "Experience Drives Delivery", desc: "Measured execution and transparent reconciliations." },
  { Icon: Bulb,   title: "We Use Practical Innovation", desc: "Tracking, digital checklists and QA/QC trails." },
  { Icon: Hand,   title: "We Build Long-term Trust", desc: "Safety, compliance and consistency on every move." },
];

function Card({ Icon, title, desc, className = "" }) {
  return (
    <div className={`border border-white/15 bg-[#0a2b4a] p-8 ${className}`}>
      <Icon />
      <h3 className="mt-5 text-[20px] font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/80">{desc}</p>
    </div>
  );
}

export default function Features() {
  const bullets = [
    "On-time, compliant movements across marine & road networks",
    "Calibrated measurement with full QA/QC trail",
    "Live status and milestone alerts, 24/7 dispatch",
  ];

  return (
    <section className="bg-[#0a2741]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        {/* Header + TOP TWO CARDS */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left header (copy trimmed) */}
          <div className="lg:col-span-4">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/70">Why choose us</span>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              <span className="text-emerald-500">Design</span> Future<br/>with Excellence
            </h2>

            <ul className="mt-6 space-y-3 max-w-sm">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm leading-6 text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: top two — bigger and nudged left for alignment */}
          <div className="lg:col-span-8 lg:-ml-2 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card {...cards[0]} className="md:min-h-[260px] lg:min-h-[280px]" />
            <Card {...cards[1]} className="md:min-h-[260px] lg:min-h-[280px]" />
          </div>
        </div>

        {/* BOTTOM THREE (unchanged layout) */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card {...cards[2]} />
          <Card {...cards[3]} />
          <Card {...cards[4]} />
        </div>
      </div>
    </section>
  );
}
