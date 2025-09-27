// src/pages/home/Spots.jsx
import { copy } from "../../content/copy";
import { useCountUp } from "../../hooks/useCountUp";

const defaults = {
  eyebrow: "Where we work",
  titleA: "Our",
  titleB: "Operations",
  titleC: "in the World",
  body:
    "We operate a coordinated petroleum logistics network across marine and road corridors. Our focus is safe handling, compliant documentation, and reliable delivery.",
  kpis: [
    { value: "200+", label: "Active operations across our network" },
    { value: "99%", label: "On-time & compliance performance" },
  ],
  cta: "ABOUT COMPANY",
};

// helper: split "200+" -> {num:200, suffix:"+"}; "99%" -> {num:99, suffix:"%"}
function parseMetric(v) {
  const str = String(v).trim();
  const m = str.match(/^([0-9]+(?:[.,][0-9]+)?)\s*([^0-9\s].*)?$/);
  if (!m) return { num: 0, suffix: "" };
  const num = parseFloat(m[1].replace(",", "."));
  const suffix = m[2] ?? "";
  const decimals = m[1].includes(".") || m[1].includes(",") ? 1 : 0;
  return { num, suffix, decimals };
}

function KPI({ value, label }) {
  const { num, suffix, decimals } = parseMetric(value);
  const { ref, value: animated } = useCountUp({ end: num, decimals, duration: 1200, once: true });

  return (
    <div>
      <div ref={ref} className="text-5xl font-extrabold text-emerald-600 sm:text-6xl">
        {animated}
        {suffix}
      </div>
      <div className="mt-3 max-w-sm text-[15px] font-semibold leading-6 text-slate-800">{label}</div>
    </div>
  );
}

export default function Spots() {
  const data = copy.spots ?? defaults;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-slate-600">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl">
            {data.titleA} <span className="text-emerald-600">{data.titleB}</span> {data.titleC}
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Map */}
          <div className="relative md:col-span-7">
            <div className="overflow-hidden rounded-md border border-slate-200">
              <img
                src="/map.svg"
                alt="Operations map"
                className="h-[320px] w-full bg-white object-contain sm:h-[420px] md:h-[460px]"
              />
            </div>

            {/* Decorative pins — adjust positions to suit your map.svg */}
            <span className="pointer-events-none absolute left-[18%] top-[22%] inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow"></span>
            <span className="pointer-events-none absolute left-[36%] top-[40%] inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow"></span>
            <span className="pointer-events-none absolute left-[55%] top-[36%] inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow"></span>
            <span className="pointer-events-none absolute left-[70%] top-[55%] inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow"></span>
            <span className="pointer-events-none absolute left-[28%] top-[65%] inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow"></span>
            <span className="pointer-events-none absolute left-[48%] top-[72%] inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow"></span>
          </div>

          {/* KPIs + CTA */}
          <div className="md:col-span-5">
            <p className="text-[15px] leading-7 text-slate-600">{data.body}</p>

            <div className="mt-8 space-y-10">
              <KPI value={data.kpis[0].value} label={data.kpis[0].label} />
              <KPI value={data.kpis[1].value} label={data.kpis[1].label} />
            </div>

            <a
              href="/about"
              className="mt-10 inline-flex items-center rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
            >
              {data.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



