import { motion } from "framer-motion";
import { copy } from "../../content/copy";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function Services() {
  const items = copy.services.items;

  return (
    <motion.section
      className="bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerParent}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-20">
        {/* Section header */}
        <motion.div className="mb-8 sm:mb-10 md:mb-12" variants={fadeUp}>
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
          variants={staggerParent}
        >
          {items.map((s, i) => (
            <motion.li
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative group p-[1px] rounded-xl bg-gradient-to-r from-emerald-500 via-[#FFC631] to-emerald-500"
            >
              {/* inner white card */}
              <div className="relative z-10 rounded-xl bg-white p-8 transition-all duration-300 group-hover:bg-white">
                {/* big faded number */}
                <div className="pointer-events-none absolute left-8 top-6 text-4xl font-extrabold text-slate-200">
                  {s.n}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {s.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {s.desc}
                </p>
              </div>

              {/* glowing animated gradient ring */}
              <motion.span
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-[#FFC631] to-emerald-500 opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{
                  backgroundSize: "200% 200%",
                  zIndex: 0,
                }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
