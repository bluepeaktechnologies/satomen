import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";
import { copy } from "../../content/copy";
import Services from "./Services";
import Projects from "./Projects";
import Spots from "./Spots";
import Features from "./Features";
import Team from "./Team";
import Faq from "./Faq";
import Gallery from "./Gallery";
import Contact from "./Contact";

// ⚡ High-quality Unsplash background (replace if needed)
const heroImage =
  "https://www.frontanalogistic.com/images/header_resim/4597464588368-705-ship-petrol-transport-2.jpg";

/* --- helper for animated metrics --- */
const parseMetric = (v) => {
  const str = String(v).trim();
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

/* --- FRAMER VARIANTS FOR STAGGERED ANIMATION --- */
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.25,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* --- HOME PAGE --- */
export default function Home() {
  const h = copy.hero;
  const heroRef = useRef(null);

  // 🎯 Scroll-reactive zoom
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <main>
      {/* ---------- HERO SECTION ---------- */}
      <section
        ref={heroRef}
        className="relative text-white overflow-hidden bg-[#0a2741] h-[100vh] flex items-center pt-0 mt-0"
      >
        {/* 🎞️ Scroll-reactive Background */}
        <motion.img
          src={heroImage}
          alt="Offshore petroleum vessel"
          style={{ scale, y }}
          className="absolute inset-0 h-full w-full object-cover opacity-40 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2741] via-[#0a2741]/90 to-transparent" />

        {/* ---------- HERO CONTENT ---------- */}
        <div className="relative z-10 mx-auto max-w-[85rem] px-6 py-8 md:py-12 grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT SIDE — TEXT (staggered reveal) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="md:pr-10"
          >
            <motion.div
              variants={childVariants}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
                {h.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={childVariants}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              {h.title}
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="mt-6 text-white/80 text-lg font-medium text-justify max-w-[700px]"
            >
              {h.body}
            </motion.p>

            <motion.div
              variants={childVariants}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <a
                href="#consult"
                className="inline-flex items-center rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-md hover:brightness-95 transition"
              >
                {h.cta}
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FFC631] transition"
              >
                View Projects →
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — METRICS + CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-10 md:items-center lg:items-end"
          >
            <div className="grid grid-cols-2 gap-8 text-right md:text-center lg:text-right">
              {h.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <AnimatedMetric
                    value={s.value}
                    className="text-4xl md:text-5xl font-extrabold text-[#FFC631]"
                  />
                  <p className="mt-2 text-sm text-white/85 font-semibold tracking-wide">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white text-[#0a2741] p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <h3 className="text-lg font-bold">{h.card.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed text-justify">
                {h.card.metricLabel}
              </p>
              <a
                href="#details"
                className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                {h.card.linkLabel} →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------- REMAINING SECTIONS ---------- */}
      <Services />
      <Projects />
      <Spots />
      <Features />
      <Team />
      <Faq />
      <Gallery />
      <Contact />
    </main>
  );
}
