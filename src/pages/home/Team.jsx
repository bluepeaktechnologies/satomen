import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { copy } from "../../content/copy";

const defaults = {
  eyebrow: "Truth in operations",
  title: "Our Team Delivers Reliable Petroleum Logistics",
  cta: "OUR TEAM",
  body: "We coordinate movements end-to-end with disciplined planning, safe handling and precise documentation. Every shift is built around control, transparency and uptime.",
  bullets: [
    "Field-tested execution and clear ownership at every handover",
    "Calibrated measurement and auditable QA/QC trail",
    "Live status, milestone alerts and responsive support",
    "Zero-harm mindset with continuous improvement",
  ],
  quote: {
    text: "Our commitment is simple: safe, compliant and dependable movement—every time.",
    name: "Mohammed Dimari",
    role: "Vice President",
    avatar: "/author.jpg",
  },
};

export default function Team() {
  const t = copy.team ?? defaults;
  const auroraControls = useAnimation();

  // --- Animation Variants ---
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const staggerParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className="relative overflow-hidden bg-[#0a2741]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerParent}
      onHoverStart={() =>
        auroraControls.start({
          background:
            "radial-gradient(40% 60% at 20% 30%, #06b6d4 0%, transparent 60%), radial-gradient(35% 55% at 80% 70%, #ff8c00 0%, transparent 60%)",
          transition: { duration: 3, ease: "easeInOut" },
        })
      }
      onHoverEnd={() =>
        auroraControls.start({
          background:
            "radial-gradient(40% 60% at 20% 30%, #1de9b6 0%, transparent 60%), radial-gradient(35% 55% at 80% 70%, #ffc631 0%, transparent 60%)",
          transition: { duration: 3, ease: "easeInOut" },
        })
      }
    >
      {/* 🌌 Animated Aurora */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-40"
        animate={auroraControls}
        style={{
          background:
            "radial-gradient(40% 60% at 20% 30%, #1de9b6 0%, transparent 60%), radial-gradient(35% 55% at 80% 70%, #ffc631 0%, transparent 60%)",
          backgroundSize: "160% 160%",
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* 🌊 Subtle shimmer wave */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ["-100% 0%", "200% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          mixBlendMode: "soft-light",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:py-20">
        {/* Header */}
        <motion.div
          className="grid items-end gap-6 md:grid-cols-12"
          variants={fadeUp}
        >
          <div className="md:col-span-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/70">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              <span className="text-emerald-500">Our Team</span> is Responsible
              <br className="hidden sm:block" /> for Reliable Operations
            </h2>
          </div>

          <motion.div
            className="md:col-span-4 md:text-right"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <a
              href="/team"
              className="inline-flex rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
            >
              {t.cta}
            </a>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="mt-10 grid gap-10 md:grid-cols-12"
          variants={staggerParent}
        >
          {/* Left Column */}
          <motion.div
            className="md:col-span-6"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 font-bold">
              {t.body}
            </p>

            <motion.ul className="mt-6 space-y-3" variants={staggerParent}>
              {t.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckIcon className="mt-1 h-4 w-4 text-[#FFC631]" />
                  <span className="text-base leading-7 text-white/80 font-bold">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column - Quote Card */}
          <motion.div
            className="md:col-span-6"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-md bg-gradient-to-br from-slate-200/80 to-slate-400/70 p-8 text-slate-900 shadow"
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.4 }}
            >
              <p className="max-w-[40ch] text-xl font-semibold leading-8">
                {t.quote.text}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.quote.avatar}
                  alt={t.quote.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{t.quote.name}</div>
                  <div className="text-xs text-slate-700">{t.quote.role}</div>
                </div>
              </div>

              {/* Floating quote mark */}
              <motion.span
                className="pointer-events-none absolute bottom-4 right-4 text-5xl font-extrabold text-[#FFC631]"
                animate={{
                  opacity: [0.4, 0.9, 0.4],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ”
              </motion.span>

              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 pointer-events-none"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* Check Icon */
function CheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
