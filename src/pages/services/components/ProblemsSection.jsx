import { motion } from "framer-motion";
import { ShieldCheck, Truck, Factory } from "lucide-react";
import hero from "../../../assets/vessel.jpg";

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ProblemsSection() {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerParent}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div variants={fadeUp}>
          <h4 className="text-sm uppercase text-yellow-400 font-semibold tracking-widest">
            Why Partner With Us
          </h4>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 leading-snug">
            Delivering Energy Reliability Through{" "}
            <span className="text-green-600">Operational Excellence</span>
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed text-justify">
            At Satomen Investment SA, we solve the toughest petroleum supply and
            logistics challenges across marine, road, and storage facilities.
            With a proven record in downstream oil & gas operations, we ensure
            timely delivery of refined white products backed by strong HSSE
            compliance, quality assurance, and measurable performance standards.
          </p>

          <motion.ul
            variants={staggerParent}
            className="mt-6 space-y-4 text-slate-700 font-medium"
          >
            {[
              {
                icon: ShieldCheck,
                text: "HSSE-driven operations with zero-compromise safety standards",
              },
              {
                icon: Truck,
                text: "Reliable marine and road fuel distribution across regions",
              },
              {
                icon: Factory,
                text: "Integrity-focused custody transfer and quality control",
              },
            ].map(({ icon: Icon, text }, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  className="text-green-600"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div variants={fadeUp} className="relative">
          <motion.img
            src={hero}
            alt="Satomen petroleum logistics operations"
            className="rounded-lg shadow-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-lg bg-gradient-to-tr from-green-600/10 via-yellow-400/10 to-transparent opacity-0 hover:opacity-100 transition"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
