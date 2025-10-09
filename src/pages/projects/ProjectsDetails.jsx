// src/pages/projects/ProjectDetails.jsx
import React from "react";
import PageHeader from "../../layout/PageHeader";
import Gallery from "/src/pages/home/Gallery";
// reuse carousel

const ProjectDetails = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Food Factory Design and Construction"
        subtitle="Single Project"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Food Factory Design and Construction" },
        ]}
        background="/img/placeholder.jpg"
      />

      <main>
        {/* Top Section with Image + Sidebar */}
        <section className="py-16 container mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <img
              src="/img/gallery1.jpg"
              alt="Project"
              className="rounded-lg shadow-md w-full h-[420px] object-cover"
            />
          </div>

          {/* Sidebar Info */}
          <aside className="p-6 border rounded-lg shadow space-y-4">
            <h3 className="text-lg font-bold">Information About the Project</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li><strong>Location:</strong> California, US</li>
              <li><strong>Sector:</strong> Buildings, Civil</li>
              <li><strong>Technology:</strong> Monolithic</li>
              <li><strong>Scope of Work:</strong> 12,000</li>
              <li><strong>Completion Date:</strong> Jan 1, 2021</li>
            </ul>
            <a
              href="/contact"
              className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Order Service →
            </a>

            <div className="bg-[#0a2741] text-white p-6 rounded-lg mt-6">
              <h4 className="font-bold mb-2">Are You Going to Implement Project?</h4>
              <p className="text-sm mb-4">Let’s work together on your project today.</p>
              <p className="text-sm"><strong>Address:</strong> 2047 Cyrus Viaduct East Jadynchester</p>
              <p className="text-sm"><strong>Email:</strong> info@construct.com</p>
              <p className="text-sm"><strong>Phone:</strong> +1-313-645-3395</p>
            </div>
          </aside>
        </section>

        {/* Description Section */}
        <section className="py-12 container mx-auto px-6 lg:px-20">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600 mb-6">
            Congue eu consequat ac felis donec et odio pellentesque. Nullam ac
            tortor vitae purus. Bibendum neque egestas congue quisque egestas
            diam in arcu cursus. Erat nam at lectus urna duis convallis convallis tellus.
          </p>

          <h3 className="text-xl font-semibold mb-2">Building better development</h3>
          <p className="text-gray-600 mb-6">
            Aenean sed adipiscing diam donec adipiscing tristique risus. Nunc
            pulvinar sapien et ligula ullamcorper malesuada.
          </p>

          <ul className="space-y-2 text-green-600 font-medium">
            <li>✔ Building the future with ideas</li>
            <li>✔ Designing future with excellence</li>
            <li>✔ Discovering possibility in concrete</li>
            <li>✔ Engineering the better way</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">Engineering With Style</h3>
          <p className="text-gray-600">
            Aliquet nec ullamcorper sit amet risus nullam eget felis. Ligula
            ullamcorper malesuada proin libero.
          </p>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <Gallery images={["/img/gallery1.jpg", "/img/gallery2.jpg", "/img/gallery3.jpg"]} />
          </div>
        </section>

        {/* Reviews Section */}
        {/* <section className="py-16 container mx-auto px-6 text-center">
          <span className="text-sm text-green-600 uppercase">Feedback</span>
          <h2 className="text-3xl font-bold mb-10">
            What <span className="text-green-600">Our Clients</span> Say About Us
          </h2>
          <ReviewsCarousel />
        </section> */}
      </main>
    </>
  );
};

export default ProjectDetails;
