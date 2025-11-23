import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import hero from "../../assets/vessel.jpg";
import PageHeader from "../../layout/PageHeader";

// Placeholder images — replace with real ones
import leader1 from "../../assets/vessel.jpg";
import leader2 from "../../assets/vessel.jpg";
import leader3 from "../../assets/vessel.jpg";
import leader4 from "../../assets/vessel.jpg";
import leader5 from "../../assets/vessel.jpg";
import leader6 from "../../assets/vessel.jpg";

// ---------- ANIMATION VARIANTS ----------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// ---------- DATA ----------
const leaders = [
  {
    name: "Abdulrahman Musa",
    title: "Chief Executive Officer (CEO)",
    image: leader1,
    email: "abdulrahman.musa@satomen.com",
    linkedin: "#",
    bio:
      "Abdulrahman Musa is an experienced energy executive with 18+ years in petroleum trading, downstream operations and strategic supply chain management. He leads Satomen Investment SA’s strategic vision and growth across West Africa’s fuel distribution networks.",
  },
  {
    name: "Chiamaka Okafor",
    title: "Executive Director, Supply & Trading",
    image: leader2,
    email: "chiamaka.okafor@satomen.com",
    linkedin: "#",
    bio:
      "Chiamaka manages bulk procurement, trading operations and vendor relationships for Satomen. With deep market experience in AGO, PMS and DPK, she secures supply continuity and pricing efficiency for industrial clients.",
  },
  {
    name: "Engr. Mohammed Sadiq",
    title: "Executive Director, Operations & Marine Logistics",
    image: leader3,
    email: "mohammed.sadiq@satomen.com",
    linkedin: "#",
    bio:
      "Engineer Mohammed Sadiq oversees terminal operations, coastal vessel coordination and custody transfer processes. He drives operational reliability through QC standards and depot partnerships across the region.",
  },
  {
    name: "Fatima Ibrahim",
    title: "Head, Business Development & Commercial Strategy",
    image: leader4,
    email: "fatima.ibrahim@satomen.com",
    linkedin: "#",
    bio:
      "Fatima leads commercial strategy, client acquisition and partnership development. She focuses on market expansion and bespoke commercial solutions that align with Satomen’s growth and customer outcomes.",
  },
  {
    name: "Oluwaseun Adeyemi",
    title: "Head, Finance & Risk Management",
    image: leader5,
    email: "oluwaseun.adeyemi@satomen.com",
    linkedin: "#",
    bio:
      "Oluwaseun is responsible for Satomen’s financial strategy, capital allocation and risk governance. His experience in energy finance ensures disciplined growth and compliance across trading operations.",
  },
  {
    name: "Hassan Umar",
    title: "Head, Health, Safety & Environment (HSE)",
    image: leader6,
    email: "hassan.umar@satomen.com",
    linkedin: "#",
    bio:
      "Hassan leads Satomen’s HSSE program with a zero-incident approach across marine, road and terminal operations. He implements safety systems, emergency response plans and environmental stewardship practices.",
  },
];

// ---------- PAGE COMPONENT ----------
export default function Team() {
  useEffect(() => {
    document.title = "Management Team — Satomen Investment SA";
  }, []);

  return (
    <div className="bg-white text-slate-900">
      <PageHeader
        title="Our Team"
        subtitle="Leadership & Expertise"
        background={hero}
      />
      <LeadershipGrid />
      <CtaStrip />
    </div>
  );
}

// ---------- LEADERSHIP GRID ----------
function LeadershipGrid() {
  return (
    <motion.section
      className="bg-white py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerParent}
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div variants={fadeUp} className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Management <span className="text-[#28c391]">Team</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto font-bold">
            Our management team combines operational expertise, energy market
            insight and governance discipline to deliver dependable petroleum
            supply chain solutions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {leaders.map((leader, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ProfileCard leader={leader} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ---------- PROFILE CARD ----------
function ProfileCard({ leader }) {
  return (
    <motion.article
      className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 12px 24px rgba(40,195,145,0.15)",
      }}
      transition={{ duration: 0.3 }}
      aria-label={`${leader.name}, ${leader.title}`}
    >
      <div className="overflow-hidden rounded-lg">
        <motion.img
          src={leader.image}
          alt={`${leader.name} — ${leader.title}`}
          className="h-56 w-full object-cover rounded-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {leader.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-[#28c391]">
        {leader.title}
      </p>

      <p className="mt-3 text-sm text-slate-600 leading-relaxed text-justify">
        {leader.bio}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={leader.linkedin}
          aria-label={`View ${leader.name} on LinkedIn`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#06243a] hover:text-[#28c391]"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href={`mailto:${leader.email}`}
          aria-label={`Email ${leader.name}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#06243a] hover:text-[#28c391]"
        >
          <Mail className="h-4 w-4" /> Email
        </a>
      </div>
    </motion.article>
  );
}

// ---------- CTA STRIP ----------
function CtaStrip() {
  return (
    <motion.section
      id="contact"
      className="relative bg-[#06243a] py-10 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      {/* Subtle shimmer animation */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        style={{
          background:
            "linear-gradient(120deg, rgba(40,195,145,0.25), rgba(255,198,49,0.3), rgba(40,195,145,0.25))",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold text-white">
            Need executive support for a project?
          </h3>
          <p className="mt-1 text-sm text-white/80">
            Contact Satomen Investment SA for tailored petroleum supply,
            logistics, and HSSE solutions.
          </p>
        </div>

        <motion.a
          href="/contact-us"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 rounded bg-[#FFC631] px-5 py-2 font-semibold text-[#06243a] hover:brightness-95"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.section>
  );
}
