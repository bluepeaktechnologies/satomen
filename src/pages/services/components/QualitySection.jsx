import { motion } from "framer-motion";
import { useCountUp } from "../../../hooks/useCountUp"; // ✅ optional if you have it
import hero from "../../../assets/vessel.jpg";

export default function QualitySection() {
  const bars = [
    { label: "Supply Chain Reliability", value: 98, color: "bg-green-700" },
    { label: "HSSE Compliance", value: 99, color: "bg-yellow-500" },
    { label: "Client Satisfaction", value: 96, color: "bg-green-600" },
    { label: "Operational Efficiency", value: 97, color: "bg-yellow-500" },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Subtle gradient background accent */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-yellow-50 via-white to-green-50 opacity-60"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={hero}
            alt="Marine fuel logistics vessel at sea"
            loading="lazy"
            className="rounded-lg shadow-xl object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm uppercase tracking-wider text-yellow-500 font-semibold">
            Operational Excellence
          </h4>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight">
            Consistency, Compliance & Delivery{" "}
            <span className="text-green-700">— Every Time</span>
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed text-justify">
            At <strong>Satomen Investment SA</strong>, quality is engineered into every stage of our petroleum
            supply and logistics operations. From sourcing to final delivery, we adhere to global
            industry best practices, enforce strict <strong>HSSE (Health, Safety, Security & Environment)</strong>
            protocols, and maintain zero-compromise standards in fuel integrity and custody transfer.
          </p>

          {/* Animated Bars with Stagger */}
          <motion.div
            className="mt-6 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {bars.map((bar, index) => {
              const { ref, value: animated } = useCountUp({
                end: bar.value,
                duration: 1000,
                once: true,
              });

              return (
                <motion.div
                  key={bar.label}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <div className="flex justify-between text-sm font-semibold text-gray-800 mb-1">
                    <span>{bar.label}</span>
                    <span ref={ref}>{animated}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      transition={{ duration: 1, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className={`${bar.color} h-2 rounded-full shadow-[0_0_10px_rgba(40,195,145,0.4)]`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <p className="mt-6 text-slate-700 text-sm">
            We don’t just move petroleum products — we build trust through precision,
            transparency, and reliable logistics performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
