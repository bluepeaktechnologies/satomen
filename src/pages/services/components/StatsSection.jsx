import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="bg-[#0a2741] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-yellow-400">
            Our Performance
          </h2>
          <h1 className="text-4xl font-extrabold mt-3 leading-tight">
            Driving Energy Supply With
            <span className="text-[#28c391]"> Trusted Reliability</span>
          </h1>
          <p className="mt-4 text-slate-200 leading-relaxed">
            Satomen Investment SA delivers petroleum products and logistics
            services with consistency and accountability. Our operational
            performance reflects discipline, quality control, and adherence to
            global energy and safety standards.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#28c391]">99.2%</h3>
            <p className="mt-2 text-slate-200 text-sm">On-Time Deliveries</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#28c391]">4.8M+</h3>
            <p className="mt-2 text-slate-200 text-sm">
              Liters Moved Monthly
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#28c391]">75+ Yrs</h3>
            <p className="mt-2 text-slate-200 text-sm">
              Combined Industry Experience
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#28c391]">100%</h3>
            <p className="mt-2 text-slate-200 text-sm">HSSE Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
