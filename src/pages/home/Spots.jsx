import { motion } from "framer-motion";
import { copy } from "../../content/copy";
import { useCountUp } from "../../hooks/useCountUp";
import map from "../../assets/map.jpg";

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

// helper
function parseMetric(v) {
  const str = String(v).trim();
  const m = str.match(/^([0-9]+(?:[.,][0-9]+)?)\s*([^0-9\s].*)?$/);
  if (!m) return { num: 0, suffix: "" };
  const num = parseFloat(m[1].replace(",", "."));
  const suffix = m[2] ?? "";
  const decimals = m[1].includes(".") || m[1].includes(",") ? 1 : 0;
  return { num, suffix, decimals };
}

// metric counter
function KPI({ value, label }) {
  const { num, suffix, decimals } = parseMetric(value);
  const { ref, value: animated } = useCountUp({
    end: num,
    decimals,
    duration: 1200,
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div
        ref={ref}
        className="text-5xl font-extrabold text-emerald-600 sm:text-6xl"
      >
        {animated}
        {suffix}
      </div>
      <div className="mt-3 max-w-sm text-[15px] font-semibold leading-6 text-slate-800">
        {label}
      </div>
    </motion.div>
  );
}

export default function Spots() {
  const data = copy.spots ?? defaults;

  // shared motion for map + pins
  const mapMotion = {
    scale: [1, 1.08, 1],
    x: [0, -20, 15, 0],
    y: [0, 12, -10, 0],
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
  };

  const pinMotion = {
    x: [0, -20, 15, 0],
    y: [0, 12, -10, 0],
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <motion.section
      className="bg-white overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-slate-600">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl">
            {data.titleA}{" "}
            <span className="text-emerald-600">{data.titleB}</span>{" "}
            {data.titleC}
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Map + animated pins */}
          <motion.div
            className="relative md:col-span-7 overflow-hidden rounded-md border border-slate-200 shadow-sm"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Animated map drift */}
            <motion.img
              src={map}
              alt="Operations map"
              className="h-[320px] w-full bg-white object-cover sm:h-[420px] md:h-[460px]"
              animate={mapMotion}
            />

            {/* Glowing pulsing pins (drifting with the map) */}
            {[
              { left: "50%", top: "70%" },
              { left: "48%", top: "66%" },
            ].map((pin, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: pin.left,
                  top: pin.top,
                  transform: "translate(-50%, -50%)",
                }}
                animate={pinMotion}
              >
                {/* Outer halo */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#FFC631]/40 blur-[10px]"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 0.3, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
                {/* Core pin */}
                <motion.span
                  className="relative inline-block h-4 w-4 rounded-full bg-[#FFC631] shadow-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* KPIs + CTA */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-[15px] leading-7 text-slate-600">{data.body}</p>

            <div className="mt-8 space-y-10">
              <KPI value={data.kpis[0].value} label={data.kpis[0].label} />
              <KPI value={data.kpis[1].value} label={data.kpis[1].label} />
            </div>

            <motion.a
              href="/about"
              className="mt-10 inline-flex items-center rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {data.cta}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
