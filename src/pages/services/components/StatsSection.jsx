import { motion } from "framer-motion";
import { useCountUp } from "../../../hooks/useCountUp";
import { CheckCircle, Shield, Truck, BarChart3 } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Truck,
      label: "On-Time Deliveries",
      value: 99.2,
      suffix: "%",
      color: "text-emerald-400",
      pulse: "from-emerald-400/20",
    },
    {
      icon: BarChart3,
      label: "Liters Moved Monthly",
      value: 4.8,
      suffix: "M+",
      color: "text-yellow-400",
      pulse: "from-yellow-400/20",
    },
    {
      icon: CheckCircle,
      label: "Combined Industry Experience",
      value: 75,
      suffix: "+ Yrs",
      color: "text-emerald-400",
      pulse: "from-emerald-400/20",
    },
    {
      icon: Shield,
      label: "HSSE Compliance",
      value: 100,
      suffix: "%",
      color: "text-yellow-400",
      pulse: "from-yellow-400/20",
    },
  ];

  return (
    <section className="relative bg-[#0a2741] text-white overflow-hidden">
      {/* ---- Top Curved Divider ---- */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            fill="currentColor"
            d="M0,80 C480,10 960,10 1440,80 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Background Gradient Overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#0a2741] via-[#06243a] to-[#093655] opacity-90"
      />

      {/* ---- Content ---- */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-semibold">
            Our Performance
          </h2>

          <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 leading-tight text-white">
            Driving Energy Supply With
            <span className="text-emerald-400"> Trusted Reliability</span>
          </h1>

          <p className="mt-5 text-slate-200 leading-relaxed text-[15px] max-w-prose">
            <strong>Satomen Investment SA</strong> delivers petroleum products and logistics
            services with consistency and accountability. Our operational performance reflects
            discipline, quality control, and adherence to global safety and energy standards.
          </p>

          <div className="mt-8 h-0.5 w-16 bg-yellow-400 rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 gap-8 text-center lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative p-4 rounded-lg hover:bg-white/5 transition"
            >
              {/* Pulsing glow behind icon */}
              <div className="absolute inset-0 flex justify-center lg:justify-start">
                <motion.span
                  className={`absolute top-1 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-br ${stat.pulse} to-transparent blur-xl opacity-50`}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="relative flex justify-center lg:justify-start mb-3">
                <stat.icon
                  className={`h-8 w-8 ${stat.color} drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]`}
                />
              </div>

              <StatValue
                end={stat.value}
                suffix={stat.suffix}
                color={stat.color}
              />

              <p className="mt-1 text-slate-200 text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ---- Bottom Curved Divider ---- */}
      <div className="absolute bottom-0 left-0 right-0 rotate-180">
        <svg
          className="w-full h-16 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            fill="currentColor"
            d="M0,80 C480,10 960,10 1440,80 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </section>
  );
}

/* ---------- Animated Stat Value ---------- */
function StatValue({ end, suffix, color }) {
  const { ref, value } = useCountUp({
    end,
    duration: 1000,
    decimals: suffix.includes(".") ? 1 : 0,
    once: true,
  });

  return (
    <h3
      ref={ref}
      className={`text-4xl font-extrabold ${color} tracking-tight leading-none`}
    >
      {value}
      {suffix}
    </h3>
  );
}
