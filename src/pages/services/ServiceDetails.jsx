// src/pages/services/ServiceDetails.jsx
import React from "react";
import PageHeader from "../../layout/PageHeader";
import FAQSection from "../home/Faq";

const ServiceDetails = () => {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Electrical Engineering"
        subtitle="Single Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Electrical Engineering" },
        ]}
        background="/img/placeholde.jpg"
      />

      <main>
        {/* === Intro Section === */}
        <section className="py-16 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left - Text & Service List */}
            <div>
              <span className="text-sm uppercase font-semibold text-green-600">
                Electrical Engineering
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-snug">
                We Provide <span className="text-green-600">Electrical Engineering</span> Services
              </h2>
              <p className="text-gray-600 mt-4">
                Vestibulum morbi blandit cursus risus at ultrices. Dui nunc mattis enim ut tellus.
                Morbi blandit cursus risus at ultrices. Proin nibh nisl condimentum id venenatis.
              </p>

              {/* Service list */}
              <ul className="mt-8 divide-y border rounded-lg">
                {[
                  "On-Site Testing and Commissioning",
                  "Lighting Planning and Drive Technology",
                  "Electrical Heating and/or Trace Heating",
                  "Development of Electrical Schematics",
                  "Grounding",
                  "Lightning Protection",
                ].map((item, i) => (
                  <li key={i} className="p-4 hover:bg-gray-50 cursor-pointer font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Image & Details */}
            <div>
              <img
                src="/src/assets/vessel.jpg"
                alt="Service"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="p-6 border mt-6 rounded-lg">
                <p className="mb-2">
                  <span className="font-semibold">Duration:</span> 1 Day
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Price:</span> $12 per hour
                </p>
                <button className="bg-yellow-400 px-6 py-3 rounded font-semibold text-black hover:bg-yellow-500">
                  GET SERVICE
                </button>
                <p className="text-gray-600 mt-4">
                  Nulla facilisi nullam vehicula ipsum a arcu cursus. Libero volutpat sed cras ornare arcu.
                  Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi enim facilisis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Process Section === */}
        <section className="py-20 bg-green-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <span className="uppercase text-sm text-yellow-400 font-semibold">Better Process</span>
            <h2 className="text-4xl font-bold mt-2">
              The Process of Working <span className="text-green-400">with Us</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae.
            </p>

            {/* Timeline */}
            <div className="relative mt-12">
              <div className="absolute top-5 left-0 right-0 h-1 bg-yellow-400"></div>
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {[
                  { title: "Leave a request", desc: "In arcu cursus euismod quis viverra nibh cras pulvinar mattis." },
                  { title: "Cost calculation", desc: "Habitant morbi tristique senectus et netus et malesuada fames." },
                  { title: "Signing of a contract", desc: "Etiam dignissim diam quis enim lobortis scelerisque fermentum." },
                  { title: "Execution of works", desc: "Ridiculus mus mauris vitae ultricies. Imperdiet proin fermentum leo." },
                ].map((step, i) => (
                  <div key={i} className="text-left px-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full mb-6"></div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-sm text-gray-300 mt-2">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === Other Services === */}
        <section className="py-16 container mx-auto px-6">
          <div className="mb-10">
            <span className="text-sm text-green-600 uppercase font-semibold">What we do</span>
            <h2 className="text-3xl font-bold">
              Other <span className="text-green-600">Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Process Engineering",
              "Construction Services",
              "Civil Engineering",
              "Chemistry and Metallurgy",
              "Specialty Services",
            ].map((service, i) => (
              <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <span className="block text-gray-300 text-2xl font-bold mb-2">
                  {`0${i + 1}`}
                </span>
                <h4 className="font-semibold mb-2">{service}</h4>
                <p className="text-gray-600 mb-3">
                  Short description for {service}.
                </p>
                <a href="#" className="text-green-600 font-semibold hover:underline">
                  DETAILS →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* === Testimonials === */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <span className="text-sm text-green-600 uppercase">Our reviews</span>
            <h2 className="text-3xl font-bold">
              What <span className="text-green-600">Our Clients</span> Say
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                { name: "Lisa Smith", role: "Manager", review: "Curabitur vitae nunc sed velit dignissim sodales ut.", stars: 5 },
                { name: "Lucas Perry", role: "Analyst", review: "Commodo quis imperdiet massa tincidunt nunc.", stars: 5 },
              ].map((client, i) => (
                <div key={i} className="p-6 border rounded-lg shadow bg-white">
                  <div className="flex justify-center mb-2 text-yellow-400">
                    {"★".repeat(client.stars)}
                  </div>
                  <p className="text-gray-600 italic">"{client.review}"</p>
                  <div className="mt-4 font-semibold">{client.name}</div>
                  <div className="text-sm text-gray-500">{client.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ Section === */}
        <FAQSection />
      </main>
    </>
  );
};

export default ServiceDetails;
