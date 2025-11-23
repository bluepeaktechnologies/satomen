import { motion } from "framer-motion";
import { copy } from "../../../content/copy";
import { Link } from "react-router-dom";

export default function Services() {
  const items = copy.services.items;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-8 sm:mb-10 md:mb-12"
        >
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
        </motion.div>

        {/* Cards */}
        <motion.ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {items.map((s) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              className="group relative border border-slate-200 bg-white p-8 rounded-xl transition-transform hover:-translate-y-1 hover:border-emerald-600 hover:shadow-lg"
            >
              {/* Faded number */}
              <div className="pointer-events-none absolute left-8 top-6 text-4xl font-extrabold text-slate-200 select-none">
                {s.n}
              </div>

              <h3 className="mt-10 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {s.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {s.desc}
              </p>

              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                DETAILS <span aria-hidden>→</span>
              </Link>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-xl border border-transparent transition group-hover:border-emerald-200 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
