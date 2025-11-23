// src/pages/projects/ProjectDetails.jsx
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import PageHeader from "../../layout/PageHeader";
import Gallery from "/src/pages/home/Gallery";
import { projectsData } from "./data";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="py-24 text-center text-slate-600">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-4"
        >
          Project Not Found
        </motion.h2>
        <Link
          to="/projects"
          className="text-emerald-600 hover:underline font-semibold"
        >
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle="Project Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        background={project.image}
      />

      <main>
        {/* Top Section */}
        <motion.section
          className="py-16 container mx-auto px-6 grid lg:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Image */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-md w-full h-[420px] object-cover"
            />
          </motion.div>

          {/* Sidebar Info */}
          <motion.aside
            className="p-6 border rounded-lg shadow space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">Information About the Project</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>
                <strong>Location:</strong> {project.location}
              </li>
              <li>
                <strong>Sector:</strong> {project.sector}
              </li>
              <li>
                <strong>Technology:</strong> {project.technology}
              </li>
              <li>
                <strong>Scope of Work:</strong> {project.scope}
              </li>
              <li>
                <strong>Completion Date:</strong> {project.completion}
              </li>
            </ul>

            <a
              href="/contact-us"
              className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Order Service →
            </a>

            <div className="bg-[#0a2741] text-white p-6 rounded-lg mt-6">
              <h4 className="font-bold mb-2">
                Are You Going to Implement a Project?
              </h4>
              <p className="text-sm mb-4">
                Let’s work together on your next development project today.
              </p>
              <p className="text-sm">
                <strong>Address:</strong> 2047 Cyrus Viaduct, East Jadynchester
              </p>
              <p className="text-sm">
                <strong>Email:</strong> info@satomen.com
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> +1-313-645-3395
              </p>
            </div>
          </motion.aside>
        </motion.section>

        {/* Description Section */}
        <motion.section
          className="py-12 container mx-auto px-6 lg:px-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600 mb-6 whitespace-pre-line">
            {project.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Project Highlights</h3>
            <ul className="space-y-2 text-green-600 font-medium">
              {project.highlights.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          className="py-16 bg-gray-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <Gallery images={project.gallery} />
          </div>
        </motion.section>
      </main>
    </>
  );
}
