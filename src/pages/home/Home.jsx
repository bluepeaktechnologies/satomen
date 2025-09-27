import hero from "../../assets/vessel.jpg";
import { copy } from "../../content/copy";
import Services from "./Services";
import Projects from "./Projects";
import Spots from "./Spots";
import Features from "./Features";
import Team from "./Team";
import Faq from "./Faq";
import Contact from "./Contact";
import Gallery from "./Gallery";
import { useCountUp } from "../../hooks/useCountUp";

/* --- helpers for animated metrics --- */
const parseMetric = (v) => {
  const str = String(v).trim();
  // allow spaces in the numeric part, optional decimal, optional suffix like + or %
  const m = str.match(/^([0-9][0-9\s]*(?:[.,][0-9]+)?)\s*([^0-9\s].*)?$/);
  if (!m) return { num: 0, suffix: "", decimals: 0 };
  const numeric = m[1].replace(/\s/g, "").replace(",", ".");
  const suffix = m[2] ?? "";
  const decimals = numeric.includes(".")
    ? (numeric.split(".")[1] || "").length
    : 0;
  return { num: parseFloat(numeric), suffix, decimals };
};

function AnimatedMetric({ value, className = "", duration = 1200 }) {
  const { num, suffix, decimals } = parseMetric(value);
  const { ref, value: animated } = useCountUp({
    end: num,
    decimals,
    duration,
    once: true,
  });
  return (
    <span ref={ref} className={className}>
      {animated}
      {suffix}
    </span>
  );
}
/* --- end helpers --- */

export default function Home() {
  const h = copy.hero;

  // numeric-only version of the card metric (e.g., "78 000 m" -> 78000)
  const cardMetricNum = parseMetric(h.card.metricValue).num;

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a2741]">
        {/* subtle blueprint dots */}
        {/* <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 hidden h-[40%] w-[40%] opacity-20 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 10px)",
            backgroundSize: "11px 11px",
          }}
        /> */}

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-16 pt-8 md:grid-cols-12 md:pt-14 lg:gap-10 h-[calc(100vh-80px)]">
          {/* LEFT: copy */}
          <div className="flex flex-col md:col-span-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#FFC631]" />
                <span className="text-[12px] uppercase tracking-[0.2em] text-white/80 font-bold">
                  {h.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                {h.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 font-bold">
                {h.body}
              </p>

              <a
                href="#consult"
                className="relative z-10 mt-8 inline-flex items-center rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
              >
                {h.cta}
              </a>
            </div>

            <div className="flex flex-1 justify-between gap-8 sm:mb-8 md:gap-8 md:p-14">
              <div className="text-right">
                <AnimatedMetric
                  value={h.stats[0].value}
                  className="text-4xl font-extrabold text-[#FFC631] sm:text-5xl md:text-6xl"
                />
                <div className="mt-2 text-xs leading-5 text-white/85 sm:text-sm">
                  {h.stats[0].label}
                </div>
              </div>

              <div className="text-right">
                <AnimatedMetric
                  value={h.stats[1].value}
                  className="text-4xl font-extrabold text-[#FFC631] sm:text-5xl md:text-6xl"
                />
                <div className="mt-2 text-xs leading-5 text-white/85 sm:text-sm">
                  {h.stats[1].label}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: stats + hero image + floating card */}
          <div className="relative md:col-span-6 flex">
            {/* Stats: row on small, column (top/bottom) on md+ */}
            {/* <div className="mb-6 flex items-start justify-between gap-8 sm:mb-8 md:mb-10 md:flex-col md:items-end md:gap-8">
              <div className="text-right">
                <AnimatedMetric
                  value={h.stats[0].value}
                  className="text-4xl font-extrabold text-[#FFC631] sm:text-5xl md:text-6xl"
                />
                <div className="mt-2 text-xs leading-5 text-white/85 sm:text-sm">
                  {h.stats[0].label}
                </div>
              </div>

              <div className="text-right md:mt-6">
                <AnimatedMetric
                  value={h.stats[1].value}
                  className="text-4xl font-extrabold text-[#FFC631] sm:text-5xl md:text-6xl"
                />
                <div className="mt-2 text-xs leading-5 text-white/85 sm:text-sm">
                  {h.stats[1].label}
                </div>
              </div>
            </div> */}
            {/* <div className="absolute bottom-0 right-0 h-[380px] sm:h-[440px] md:h-[520px] lg:h-[360px] xl:h-[400px] lg:w-[780px] xl:w-[680px]"> */}
            <div className="flex-1">
              <img
                src={hero}
                alt="Petroleum logistics vessel"
                className="object-cover w-full h-full rounded-tl-2xl over"
                // className=" w-full max-w-none rounded-tl-2xl object-cover shadow-2xl h-[380px] sm:h-[440px] md:h-[520px] lg:h-[460px] xl:h-[460px] lg:w-[780px] xl:w-[780px]
                //      lg:-translate-x-50 xl:-translate-x-50"
              />
            </div>
          </div>
          {/* Image wrapper */}
          {/* <div className="relative mt-4 sm:mt-6 md:mt-0 lg:pr-8"> */}

          {/* <div className="absolute bottom-0 right-0 h-[380px] sm:h-[440px] md:h-[520px] lg:h-[360px] xl:h-[400px] lg:w-[780px] xl:w-[680px]">
            <img
              src={hero}
              alt="Petroleum logistics vessel"
              className="object-cover w-full h-full rounded-tl-2xl over"
              // className=" w-full max-w-none rounded-tl-2xl object-cover shadow-2xl h-[380px] sm:h-[440px] md:h-[520px] lg:h-[460px] xl:h-[460px] lg:w-[780px] xl:w-[780px]
              //      lg:-translate-x-50 xl:-translate-x-50"
            />
          </div> */}
        </div>
      </section>

      {/* SERVICES (new) */}
      <Services />
      <Projects />
      <Spots />
      <Features />
      <Team />
      <Faq />
      <Gallery image={hero} />
      <Contact />
    </main>
  );
}

// <div className="absolute bottom-0 -right-10 bg-red-100">
//   <img
//     src={hero}
//     alt="Petroleum logistics vessel"
//     className=" w-full max-w-none rounded-tl-2xl object-cover shadow-2xl h-[380px] sm:h-[440px] md:h-[520px] lg:h-[460px] xl:h-[460px] lg:w-[780px] xl:w-[780px]
//          lg:-translate-x-50 xl:-translate-x-50"
//   />

//   {/* Floating card pushed outward, not blocking CTA */}
//   <div
//     className=" hidden
//         absolute bottom-6 right-3 w-[250px] rounded-xl bg-white p-5 shadow-2xl ring-1 ring-black/5
//         sm:right-6 sm:w-[280px] md:right-[-6%] md:w-[300px]
//       "
//   >
//     <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
//       {h.card.title}
//     </h3>

//     {/* Animated card number */}
//     <div className="mt-2 text-2xl font-extrabold text-emerald-600 sm:text-3xl">
//       <AnimatedMetric value={String(cardMetricNum)} duration={1400} />
//       &nbsp;m
//       <sup className="align-super text-sm sm:text-base">
//         {h.card.metricSup}
//       </sup>
//     </div>

//     <div className="mt-1 text-sm text-slate-600">
//       {h.card.metricLabel}
//     </div>
//     <a
//       href="#details"
//       className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
//     >
//       {h.card.linkLabel} <span aria-hidden>→</span>
//     </a>
//     <span className="absolute -right-3 -bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow sm:h-10 sm:w-10">
//       {h.card.badge}
//     </span>
//   </div>
// </div>;
