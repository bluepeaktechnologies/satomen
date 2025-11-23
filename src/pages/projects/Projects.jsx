// src/pages/projects/Projects.jsx
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "./data"; // ✅ centralized project info
import PageHeader from "../../layout/PageHeader";
import hero from "../../assets/vessel.jpg"; // ✅ fallback background

/* ---------- Inline SVG icons ---------- */
function LocationIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.33 6.54 11.65 6.82 11.91a.9.9 0 0 0 1.36 0c.28-.26 6.82-6.58 6.82-11.91C19.5 5.36 16.14 2 12 2Zm0 11.25a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z" />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M13.172 12 7.757 6.586 9.172 5.172 16 12l-6.828 6.828-1.415-1.414z" />
    </svg>
  );
}

/* ---------- Individual Project Card ---------- */
function ProjectCard({ id, title, address, image, index }) {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        <motion.img
          src={image}
          alt={title}
          className="h-[320px] w-full object-cover sm:h-[380px] rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-extrabold text-[#0a2741] sm:text-[28px] group-hover:text-[#28c391] transition-colors">
        {title}
      </h3>

      {/* Address */}
      <div className="mt-3 flex items-center gap-2 text-[#0a2741]/70">
        <LocationIcon />
        <span className="text-sm sm:text-base">{address}</span>
      </div>

      {/* Details Link */}
      <Link
        to={`/projects/${id}`}
        className="mt-5 inline-flex items-center gap-2 font-semibold text-[#28c391] hover:text-[#0a2741] transition-colors"
        aria-label={`Details about ${title}`}
      >
        DETAILS <ArrowIcon />
      </Link>

      <div className="mt-6 h-px w-full bg-[#0a2741]/10" />
    </motion.article>
  );
}

/* ---------- Main Projects Page ---------- */
export default function Projects() {
  const rows = useMemo(() => {
    const out = [];
    for (let i = 0; i < projectsData.length; i += 2)
      out.push(projectsData.slice(i, i + 2));
    return out;
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* ✅ Shared Page Header */}
      <PageHeader
        title="Our Projects"
        subtitle="Building Communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Projects" },
        ]}
        background={hero}
      />

      {/* Project Grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our <span className="text-[#28c391]">Project Portfolio</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A showcase of completed and ongoing projects across industrial,
            commercial, and infrastructure sectors — each executed with
            precision, compliance, and innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
