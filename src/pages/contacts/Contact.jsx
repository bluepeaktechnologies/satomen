import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

import { address, contact } from "../../constants/colors";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
};

export default function Contacts() {
  // East Jadynchester – sample coordinates (NYC-ish). Replace if you have exact lat/lng.
  const position = useMemo(() => [40.7357, -74.1724], []);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      );
      alert("Email has been sent");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-white">
      {/* ✅ Shared Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="We’re Here to Help"
        background={hero}
      />

      {/* ✅ Contact Section (restored eyebrow + headline) */}
      <section id="contact" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* LEFT – FORM */}
            <div className="md:col-span-7">
              {/* eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#FFC631]" />
                <span className="text-[12px] uppercase tracking-[0.2em] text-[#0a2741]/70 font-semibold">
                  Contact Us
                </span>
              </div>

              {/* headline */}
              <h2 className="mb-8 text-4xl font-extrabold leading-tight text-[#0a2741] sm:text-5xl">
                Get In
                <span className="text-[#28c391]"> Touch</span>
              </h2>

              {/* form */}
              <form className="space-y-6 w-full">
                {/* first row: name / phone */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="h-12 w-[120%] md:w-[120%] rounded-md border border-slate-200 px-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="h-12 w-[120%] md:w-[155%] ml-20 rounded-md border border-slate-200 px-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
                  />
                </div>

                {/* email full width */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 w-[120%] md:w-[140%] rounded-md border border-slate-200 px-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
                />

                {/* message full width */}
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-[120%] md:w-[140%] rounded-md border border-slate-200 p-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
                />

                <button
                  type="submit"
                  className="rounded bg-[#ff9a20] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-yellow-300"
                  disabled={isLoading}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* RIGHT – INFO CARD */}
            <aside className="col-span-12 md:col-span-5 md:col-start-12">
              <h3 className="text-2xl font-extrabold text-[#0a2741] sm:text-3xl">
                Are You Going to
                <br /> Implement
                <br /> a Project?
              </h3>

              <div className="mt-8 space-y-7 text-[#0a2741]">
                {/* Address */}
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0a2741]/70">
                    Address
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#0a2741]/70" />
                    <p className="leading-6">
                      LM 5, Atras De Parque National Carratera De Aeropurto
                      Bioko Norte
                      <br /> Malabo, Guinea Equatorial.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0a2741]/70">
                    Email
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-[#0a2741]/70" />
                    <div className="flex flex-col">
                      <a
                        href="mailto:info@satomen.com"
                        className="hover:underline"
                      >
                        info@satomen.com
                      </a>
                      <a
                        href="mailto:support@satomen.com"
                        className="hover:underline"
                      >
                        support@satomen.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0a2741]/70">
                    Phone
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-[#0a2741]/70" />
                    <div className="flex flex-col">
                      <a href="tel:+240555517792" className="hover:underline">
                        +240 555 517 792
                      </a>
                      <a href="tel:+240555517792" className="hover:underline">
                        +240 555 517 792
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2741] text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2741] text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter / X"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2741] text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="WhatsApp"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2741] text-white"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
