// src/pages/Team.jsx
import { useEffect } from "react";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import hero from "../../assets/vessel.jpg";
import PageHeader from "../../layout/PageHeader"; // ✅ shared header component

// Placeholder team images — replace with real photos
import leader1 from "../../assets/vessel.jpg";
import leader2 from "../../assets/vessel.jpg";
import leader3 from "../../assets/vessel.jpg";
import leader4 from "../../assets/vessel.jpg";
import leader5 from "../../assets/vessel.jpg";
import leader6 from "../../assets/vessel.jpg";

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
      {/* ✅ Shared PageHeader replaces Hero */}
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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Management <span className="text-[#28c391]">Team</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto font-bold ">
            Our management team combines operational expertise, energy market
            insight and governance discipline to deliver dependable petroleum
            supply chain solutions. Learn more about the executives leading
            Satomen’s strategic growth and operational excellence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l) => (
            <ProfileCard key={l.name} leader={l} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROFILE CARD ----------
function ProfileCard({ leader }) {
  return (
    <article
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
      aria-label={`${leader.name}, ${leader.title}`}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={leader.image}
          alt={`${leader.name} — ${leader.title} at Satomen Investment SA`}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{leader.name}</h3>
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
          className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-[#06243a] hover:text-[#28c391]"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>

        <a
          href={`mailto:${leader.email}`}
          aria-label={`Email ${leader.name}`}
          className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-[#06243a] hover:text-[#28c391]"
        >
          <Mail className="h-4 w-4" /> Email
        </a>
      </div>
    </article>
  );
}

// ---------- CTA STRIP ----------
function CtaStrip() {
  return (
    <section id="contact" className="bg-[#06243a] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold text-white">
            Need executive support for a project?
          </h3>
          <p className="mt-1 text-sm text-white/80">
            Contact Satomen Investment SA for tailored petroleum supply,
            logistics, and HSSE solutions.
          </p>
        </div>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded bg-[#FFC631] px-5 py-2 font-semibold text-[#06243a] hover:brightness-95"
          aria-label="Contact Satomen Investment SA"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
