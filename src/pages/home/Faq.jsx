import { useState } from "react";
import { motion } from "framer-motion";
import { copy } from "../../content/copy";

const defaults = {
  eyebrow: "Dealing with your worries",
  titleA: "If Your Question Is Not Here",
  titleB: "Contact Us",
  blurb:
    "We keep movements safe, compliant and on-schedule. If you don’t see what you need here, reach out and our operations team will assist.",
  cta: { label: "CONTACT US", href: "/contact-us" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Inline SVG icons (to keep animation fluid)
const PlusMinusIcon = ({ isOpen }) => (
  <motion.div
    initial={false}
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="h-6 w-6 text-emerald-600"
  >
    {isOpen ? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="w-full h-full"
      >
        <path d="M5 12h14" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="w-full h-full"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    )}
  </motion.div>
);

export default function Faq() {
  const data = copy.faq ?? defaults;
  const [open, setOpen] = useState(1);
  const toggle = (i) => setOpen((prev) => (prev === i ? -1 : i));

  return (
    <motion.section
      id="faq"
      className="bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <motion.div
          className="grid gap-10 md:grid-cols-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* LEFT: title + copy + CTA */}
          <motion.div className="md:col-span-6" variants={fadeUp}>
            <motion.div
              className="mb-4 flex items-center gap-3"
              variants={fadeUp}
            >
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-slate-600">
                {data.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl"
              variants={fadeUp}
            >
              {data.titleA}{" "}
              <span className="text-emerald-600">{data.titleB}</span>
            </motion.h2>

            <motion.p
              className="mt-6 max-w-[55ch] text-[15px] leading-7 text-slate-600 font-bold"
              variants={fadeUp}
            >
              {data.blurb}
            </motion.p>

            <motion.a
              href={data.cta.href}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-flex rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
            >
              {data.cta.label}
            </motion.a>
          </motion.div>

          {/* RIGHT: accordion */}
          <motion.div className="md:col-span-6" variants={fadeUp}>
            <ul className="space-y-5">
              {data.faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <motion.li
                    key={item.q}
                    variants={fadeUp}
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

                      {/* animated icon */}
                      <PlusMinusIcon isOpen={isOpen} />
                    </button>

                    {/* content */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={
                        isOpen
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <p className="text-[15px] leading-7 text-slate-700">
                        {item.a}
                      </p>
                    </motion.div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
