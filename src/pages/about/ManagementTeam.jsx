import { ArrowRight, Linkedin } from "lucide-react";
import hero from "../../assets/vessel.jpg";
import presidentImg from "../../assets/vessel.jpg"; // Placeholder – replace with real image
import vicePresidentImg from "../../assets/vessel.jpg"; // Placeholder – replace with real image
import PageHeader from "../../layout/PageHeader"; // ✅ Shared Page Header

export default function ManagementTeam() {
  return (
    <div className="bg-white">
      {/* ✅ Shared Header Component replaces Hero */}
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
      name: "John A. Mensah",
      title: "President / Chief Executive Officer",
      image: presidentImg,
      bio: `John A. Mensah is a seasoned energy executive with over 25 years of experience in 
      petroleum trading, supply chain optimization, and energy logistics management. 
      He provides strategic leadership for Satomen Investment SA, guiding the company’s 
      growth in petroleum product distribution, marine logistics, and downstream operations.`,
      linkedin: "#",
    },
    {
      name: "Dr. Maria K. Sow",
      title: "Vice President / Executive Director",
      image: vicePresidentImg,
      bio: `Dr. Maria K. Sow brings over 18 years of international experience in oil and gas operations, 
      strategic business development, and stakeholder engagement. She leads corporate operations, 
      global partnerships, and regulatory compliance for Satomen Investment SA.`,
      linkedin: "#",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our <span className="text-[#28c391]">Leadership</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-bold ">
            Satomen Investment SA is led by a dynamic and experienced leadership team
            committed to operational excellence, corporate integrity, and sustainable
            growth in the global energy sector.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-xl border shadow-sm p-6 transition hover:shadow-md"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="mx-auto h-64 w-full object-cover rounded-lg"
              />
              <h3 className="mt-6 text-xl font-bold text-[#0a2741]">
                {leader.name}
              </h3>
              <p className="text-[#28c391] font-medium">{leader.title}</p>
              <p className="mt-4 text-sm text-slate-600 text-justify">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA Section ---------- */
function CtaStrip() {
  return (
    <section id="contact" className="bg-[#0a2741] py-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <h3 className="text-xl font-bold text-white text-center sm:text-left">
          Partner with Satomen Investment SA Today
        </h3>
        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded bg-[#FFC631] px-5 py-2 font-semibold text-[#0a2741] hover:brightness-95"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
