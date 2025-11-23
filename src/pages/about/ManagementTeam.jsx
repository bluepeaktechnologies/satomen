import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import hero from "../../assets/vessel.jpg";
import presidentImg from "../../assets/vessel.jpg"; // Replace with real image
import vicePresidentImg from "../../assets/vessel.jpg"; // Replace with real image
import PageHeader from "../../layout/PageHeader"; // ✅ Shared Page Header

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function ManagementTeam() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Management Team"
        subtitle="Leadership Excellence"
        background={hero}
      />
      <Leadership />
      <CtaStrip />
    </div>
  );
}

/* ---------- Management Team Section ---------- */
function Leadership() {
  const leaders = [
    {
      name: "Felix Cense Okojie",
      title: "President / Chief Executive Officer",
      image: presidentImg,
      bio: `Mr. Felix Cense Okojie, a native of Ishan from Irua Edo State... 
(Trimmed for brevity; use your full text here)`,
      linkedin: "#",
    },
    {
      name: "Mohammed Ali Dimari",
      title: "Vice President / Executive Director",
      image: vicePresidentImg,
      bio: `Mr. Mohammed Ali Dimari is an Economist... 
(Trimmed for brevity; use your full text here)`,
      linkedin: "#",
    },
  ];

  return (
    <motion.section
      className="bg-white py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerParent}
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.div variants={fadeUp} className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our <span className="text-[#28c391]">Leadership</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-bold">
            Satomen Investment SA is led by a dynamic and experienced leadership
            team committed to operational excellence, corporate integrity, and
            sustainable growth in the global energy sector.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          className="grid gap-10 sm:grid-cols-2"
        >
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(40,195,145,0.15)",
              }}
              className="rounded-xl border border-slate-200 shadow-sm p-6 transition-all bg-white hover:shadow-lg"
            >
              <motion.img
                src={leader.image}
                alt={leader.name}
                className="mx-auto h-64 w-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="mt-6 text-xl font-bold text-[#0a2741]">
                {leader.name}
              </h3>
              <p className="text-[#28c391] font-medium">{leader.title}</p>
              <p className="mt-4 text-sm text-slate-600 text-justify leading-relaxed">
                {leader.bio}
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href={leader.linkedin}
                  className="flex items-center gap-2 text-[#0a2741] hover:text-[#28c391]"
                >
                  <Linkedin size={18} /> View Profile
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------- CTA Section ---------- */
function CtaStrip() {
  return (
    <motion.section
      id="contact"
      className="relative bg-[#0a2741] py-10 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      {/* Soft aurora shimmer background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-25"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          background:
            "linear-gradient(120deg, rgba(40,195,145,0.25), rgba(255,198,49,0.3), rgba(40,195,145,0.25))",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <h3 className="text-xl font-bold text-white text-center sm:text-left">
          Partner with Satomen Investment SA Today
        </h3>
        <motion.a
          href="/contact-us"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 rounded bg-[#FFC631] px-5 py-2 font-semibold text-[#0a2741] hover:brightness-95"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.section>
  );
}
