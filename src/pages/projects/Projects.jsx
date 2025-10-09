// src/pages/projects/Projects.jsx
import hero from "../../assets/vessel.jpg";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../layout/PageHeader"; // ✅ import reusable PageHeader

const projects = [
  {
    id: 1,
    title: "Food Factory Design and Construction",
    address: "Karli Turnpike Apt. 993 Port Valentine",
    image: hero,
  },
  {
    id: 2,
    title: "Fresh Concept Construction Renovation",
    address: "Daphne Way New Reaganmouth",
    image: hero,
  },
  {
    id: 3,
    title: "Reconstruction of Old Factory Building",
    address: "Schoen Ramp Suite 607 Borerton",
    image: hero,
  },
  {
    id: 4,
    title: "Installation & Creation of a Supply System",
    address: "Ernest Mount Bartonstad",
    image: hero,
  },
  {
    id: 5,
    title: "Jazzy Elite Construction Shopping Center",
    address: "100 Sunrise Ct Hamel, Minnesota",
    image: hero,
  },
  {
    id: 6,
    title: "Fresh Concept Construction Renovation",
    address: "Claudie Green Suite 698 Avisstad",
    image: hero,
  },
];

function LocationIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.33 6.54 11.65 6.82 11.91a.9.9 0 0 0 1.36 0c.28-.26 6.82-6.58 6.82-11.91C19.5 5.36 16.14 2 12 2Zm0 11.25a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z" />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.172 12 7.757 6.586 9.172 5.172 16 12l-6.828 6.828-1.415-1.414z" />
    </svg>
  );
}

function ProjectCard({ id, title, address, image }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[380px]"
        />
      </div>

      <h3 className="mt-5 text-2xl font-extrabold text-[#0a2741] sm:text-[28px]">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2 text-[#0a2741]/70">
        <LocationIcon />
        <span className="text-sm sm:text-base">{address}</span>
      </div>

      {/* ✅ Link to Project Details page */}
      <Link
        to={`/projects/${id}`}
        className="mt-4 inline-flex items-center gap-2 font-semibold text-[#28c391] hover:underline"
        aria-label={`Details about ${title}`}
      >
        DETAILS <ArrowIcon />
      </Link>

      <div className="mt-6 h-px w-full bg-[#0a2741]/10" />
    </article>
  );
}

export default function Projects() {
  const rows = useMemo(() => {
    const out = [];
    for (let i = 0; i < projects.length; i += 2) out.push(projects.slice(i, i + 2));
    return out;
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* ✅ Page Header (instead of hard-coded banner) */}
      <PageHeader
        title="Our Projects"
        subtitle="Building Communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Projects" },
        ]}
        background={hero} // can be a different background if needed
      />

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
