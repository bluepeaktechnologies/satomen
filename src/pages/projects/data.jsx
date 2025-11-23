// src/pages/projects/data.js
import hero from "../../assets/vessel.jpg";

// ✅ all projects centralized here
export const projectsData = [
  {
    id: "food-factory",
    title: "Food Factory Design and Construction",
    address: "Karli Turnpike Apt. 993 Port Valentine",
    image: hero,
    sector: "Industrial / Food Processing",
    technology: "Precast Concrete, Energy Efficiency Systems",
    scope: "Design + Build",
    completion: "Jan 2023",
    location: "California, US",
    summary:
      "Full EPC design and construction of an advanced food processing facility with sustainable energy systems and HACCP compliance.",
    description: `
Satomen Investment SA executed the design and construction of a high-capacity food processing facility.
The project included process engineering, structural design, utilities integration, and complete commissioning.
Energy-efficient HVAC systems and water recycling modules were implemented to achieve ISO 22000 compliance.

This modern facility represents Satomen's commitment to precision construction, sustainability, and operational reliability.
    `,
    highlights: [
      "Building the future with ideas",
      "Designing excellence in industrial construction",
      "Discovering possibilities in concrete engineering",
      "Delivering on-time and within scope",
    ],
    gallery: ["/img/gallery1.jpg", "/img/gallery2.jpg", "/img/gallery3.jpg"],
  },

  {
    id: "shopping-center",
    title: "Jazzy Elite Construction Shopping Center",
    address: "100 Sunrise Ct, Hamel, Minnesota",
    image: hero,
    sector: "Commercial / Retail",
    technology: "Steel Frame & Energy-Efficient Facade",
    scope: "General Contracting",
    completion: "Nov 2022",
    location: "Minnesota, US",
    summary:
      "A modern retail and leisure center integrating sustainable architecture, smart energy use, and premium finishes.",
    description: `
The Jazzy Elite Shopping Center project showcases advanced steel-frame construction and modern
energy-saving facade systems. Satomen provided end-to-end project management, including
quality assurance and mechanical-electrical systems integration.

The facility achieved a 20% improvement in energy performance through advanced solar-assisted lighting and HVAC optimization.
    `,
    highlights: [
      "Smart retail space engineering",
      "Eco-friendly design for modern lifestyle",
      "Seamless coordination with local authorities",
      "Energy-optimized facility management",
    ],
    gallery: ["/img/gallery2.jpg", "/img/gallery3.jpg", "/img/gallery1.jpg"],
  },
];
