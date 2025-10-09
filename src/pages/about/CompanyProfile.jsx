import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";
import hero from "../../assets/vessel.jpg";
import PageHeader from "../../layout/PageHeader"; // ✅ Shared Page Header


// ---------- DATA ----------

const bullets = [
  "Integrated petroleum supply chain expertise",
  "End-to-end marine, road and terminal logistics",
  "HSSE-first operational framework",
  "Market intelligence & trading advisory",
];

const services = [
  {
    title: "Integrated Petroleum Supply",
    copy:
      "Strategic procurement and distribution of white petroleum products (PMS, AGO, DPK) with strict quality assurance. We optimise sourcing, documentation, and delivery schedules to secure supply continuity for commercial and industrial partners.",
    features: [
      "Quality-assured product specifications",
      "Contract and spot supply capabilities",
      "Regulatory and customs documentation",
    ],
    image: hero,
  },
  {
    title: "Marine & Inland Logistics",
    copy:
      "Comprehensive marine logistics and inland distribution across coastal and riverine corridors. From vessel coordination to last-mile road despatch, our logistics network is engineered for secure, timely fuel movements.",
    features: [
      "Vessel chartering & berth coordination",
      "Trucking fleets with tamper-evident seals",
      "Live tracking and milestone reporting",
    ],
    image: hero,
  },
  {
    title: "Terminal & Storage Management",
    copy:
      "Professional terminal operations and inventory management across partnered depots. Our teams ensure product integrity through calibrated measurement, sealed sampling and robust stock reconciliation processes.",
    features: [
      "Tank farm operations & custody transfer",
      "Metering, sampling & QA/QC trails",
      "Inventory optimisation and reconciliation",
    ],
    image: hero,
  },
  {
    title: "Oilfield & Offshore Support",
    copy:
      "Operational support for upstream and offshore projects, including offshore logistics, equipment supply, and specialist manpower. Our solutions minimise downtime and support continuous production operations.",
    features: [
      "Platform logistics & personnel transfers",
      "Equipment mobilisation and spares supply",
      "Coordination with rig and field operators",
    ],
    image: hero,
  },
  {
    title: "Energy Trading & Procurement Advisory",
    copy:
      "Market intelligence, risk management, and trading advisory services tailored for fuel buyers and distributors. We combine regional market insights with structured procurement to optimise total landed cost.",
    features: [
      "Price risk management strategies",
      "Market analysis and tender execution",
      "Structured and spot trading capabilities",
    ],
    image: hero,
  },
  {
    title: "HSSE & Environmental Management",
    copy:
      "A safety-first culture underpinned by certified HSSE systems, incident prevention, and environmental stewardship. We deliver compliant operations that protect personnel, assets, and the environment.",
    features: [
      "HSE audits and permit management",
      "Emergency response planning & training",
      "Sustainability initiatives and reporting",
    ],
    image: hero,
  },
];

const testimonials = [
  {
    text:
      "Satomen delivered a complex coastal transfer within a tight window while maintaining full HSSE compliance. Their logistics coordination and communications were exceptional.",
    name: "Amina Yusuf",
    role: "Logistics Manager, Regional Energy Co.",
  },
  {
    text:
      "Their procurement team provided clear market insight and structured sourcing that reduced our landed cost and secured continuity across high-demand periods.",
    name: "David Mensah",
    role: "Head of Procurement, Industrial Manufacturing",
  },
];

// ---------- PAGE COMPONENT ----------

export default function About() {
  return (
    <div className="bg-white">
      {/* ✅ Shared Header Component */}
      <PageHeader
        title="Company Profile"
        subtitle="Integrated Oil & Gas Services"
        background={hero}
      />

      <WhoWeAre />
      <QuoteBanner />
      <SpotlightServices />
      <WhyChooseUs />
      <Testimonials />
      <CtaStrip />
    </div>
  );
}

// ---------- SECTIONS ----------

function WhoWeAre() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-14 md:grid-cols-2 md:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Who we are
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Delivering <span className="text-[#28c391]">Secure</span> and
            Efficient Energy Logistics
          </h2>

          <p className="mt-4 max-w-prose text-slate-600 font-semibold text-justify">
            Satomen Investment SA was incorporated in 2023 to provide industry
            leading petroleum supply and integrated logistics solutions. Our
            management team brings over 75 years of cumulative experience across
            fuel trading, downstream operations, marine logistics and HSSE
            systems. We design resilient supply chains that prioritise product
            integrity, safety and environmental stewardship.  We are an integrated oil & gas services provider combining petroleum
          supply, marine logistics, storage operations and HSSE-led field support
          to deliver reliable energy solutions across coastal and inland markets.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#28c391]" />
                <span className="text-slate-800">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded bg-[#FFC631] px-5 py-3 font-semibold text-[#06243a] shadow-sm hover:brightness-95"
          >
            Request a proposal <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={hero}
            alt="Satomen vessel and terminal operations"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="bg-[#06243a] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="max-w-5xl text-3xl font-extrabold leading-snug text-white sm:text-4xl">
          "We combine market insight, operational excellence and HSSE-driven
          processes to keep fuel flowing — safely and reliably."
        </p>
        <p className="mt-8 font-semibold text-[#FFC631]">
          — SATOMEN INVESTMENT SA
        </p>
      </div>
    </section>
  );
}

function SpotlightServices() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Our capabilities
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Spotlight <span className="text-[#28c391]">Services</span>
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600 font-bold leading-relaxed text-justify">
            We operate across the downstream value chain — from structured fuel
            procurement and trading to terminal management, marine logistics and
            oilfield support — all underpinned by strict HSSE and QA/QC
            controls.
          </p>
        </div>

        <div className="space-y-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-slate-600">{s.copy}</p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#28c391]" />
                      <span className="text-slate-800">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-6 inline-flex items-center gap-2 rounded bg-[#FFC631] px-4 py-2 font-semibold text-[#06243a] shadow-sm hover:brightness-95"
                  aria-label={`Read more about ${s.title}`}
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const cards = [
    {
      title: "Operational Reliability",
      body:
        "Robust processes and proven delivery performance across marine, road and terminal operations ensure consistent supply to our clients.",
    },
    {
      title: "HSSE-Driven Culture",
      body:
        "Certified HSSE systems, regular training and incident prevention programs are central to our operations.",
    },
    {
      title: "Market & Technical Expertise",
      body:
        "Deep experience in fuel trading, downstream logistics and terminal management provides clients with dependable advisory and execution.",
    },
    {
      title: "Customer-Centric Delivery",
      body:
        "Tailored solutions, transparent reporting and KPI-driven service levels align our delivery with client commercial objectives.",
    },
  ];

  return (
    <section className="primary-bg/0 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#FFC631]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600">
              Why choose us
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trusted Partner for{" "}
            <span className="text-[#28c391]">Energy Solutions</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Satomen blends operational proficiency, industry knowledge and a
            health-and-safety first mindset to deliver measurable outcomes for
            fuel buyers, distributors and project operators.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "End-to-end logistics and supply capabilities",
              "Clear compliance & regulatory governance",
              "Dedicated account and operations teams",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#28c391]" />
                <span className="text-slate-800">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="mb-3 text-[#06243a]">
                  <div className="h-8 w-8 rounded-full border-2 border-current" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {c.title}
                </h4>
                <p className="mt-2 text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const track = useRef(null);

  const go = (dir) => {
    const next = (i + dir + testimonials.length) % testimonials.length;
    setI(next);
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.style.transform = `translateX(-${i * 100}%)`;
  }, [i]);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600">
                Our reviews
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              What <span className="text-[#28c391]">Our Clients</span> Say
            </h2>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => go(-1)}
              className="rounded-full border border-slate-300 p-2 text-slate-700 hover:bg-slate-50"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              className="rounded-full border border-slate-300 p-2 text-slate-700 hover:bg-slate-50"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div
            ref={track}
            className="flex transition-transform duration-500"
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="w-full shrink-0 p-6 md:p-10"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="rounded-2xl border border-slate-200 p-6 shadow-sm md:p-8">
                  <div className="mb-3 flex gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star
                        key={k}
                        className="h-5 w-5 fill-[#FFC631] text-[#FFC631]"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700">{t.text}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-200 text-slate-500">
                      <Quote className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500 tracking-wide">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile controls */}
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            <button
              onClick={() => go(-1)}
              className="rounded-full border border-slate-300 px-3 py-1 text-slate-700"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              className="rounded-full border border-slate-300 px-3 py-1 text-slate-700"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section id="contact" className="bg-[#06243a] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold text-white">
            Ready to secure your fuel supply and logistics?
          </h3>
          <p className="mt-1 text-sm text-white/80">
            Contact us for tailored solutions in petroleum supply, marine
            logistics and HSSE-led operations.
          </p>
        </div>

        <a
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded bg-[#FFC631] px-5 py-2 font-semibold text-[#06243a] hover:brightness-95"
        >
          Contact our team <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
