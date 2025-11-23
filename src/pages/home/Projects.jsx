import { motion } from "framer-motion";
import { copy } from "../../content/copy";
import vessel from "../../assets/vessel.jpg";
import boat from "../../assets/boat.jpg";

function LocationIcon({ className = " " }) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C8.686 2 6 4.686 6 8c0 4.92 5.07 10.63 5.29 10.86a1 1 0 0 0 1.42 0C12.93 18.63 18 12.92 18 8c0-3.314-2.686-6-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

export default function Projects() {
  const items = copy.sampleProjects;
  const images = [vessel, boat, vessel, boat];

  return (
    <motion.section
      className="bg-[#0a2741]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerParent}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-18 md:py-20">
        {/* Header */}
        <motion.div className="mb-8 sm:mb-10 md:mb-12" variants={fadeUp}>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-white/70">
              What we do
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Our <span className="text-emerald-500">Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.ul
          className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2"
          variants={staggerParent}
        >
          {items.map((p, i) => (
            <motion.li key={p.title} variants={fadeUp}>
              {/* Image with hover motion */}
              <motion.div
                className="overflow-hidden bg-white/5 ring-1 ring-white/5 rounded-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <motion.img
                  src={images[i % images.length]}
                  alt={p.title}
                  className="h-64 w-full object-cover sm:h-80 md:h-96"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>

              {/* Text block */}
              <motion.div className="mt-5" variants={fadeUp}>
                <h3 className="text-2xl font-extrabold text-white md:text-[28px]">
                  {p.title}
                </h3>

                {/* Divider */}
                <div className="mt-3 border-t border-white/10" />

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center text-white/90">
                    <LocationIcon className="text-[#FFC631]" />
                    <span className="ml-2 text-[15px]">{p.location}</span>
                  </div>

                  {/* Animated underline link */}
                  <motion.a
                    href="#project-details"
                    className="relative inline-flex items-center gap-2 text-sm font-semibold text-[#FFC631] hover:opacity-90"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    DETAILS <span aria-hidden>→</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#FFC631] origin-left"
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: { scaleX: 1, transition: { duration: 0.3 } },
                      }}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
