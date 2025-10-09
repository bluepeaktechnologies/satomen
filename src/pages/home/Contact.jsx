import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
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
              Do You Have
              <br className="hidden sm:block" /> any{" "}
              <span className="text-[#28c391]">Questions?</span>
            </h2>

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
                type="button"
                className="inline-flex rounded-md !bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
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
              <br /> Project?
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
                    LM 5, Atras De Parque National Carratera De Aeropurto Bioko Norte
                    <br /> Malabo Guinea Equatorial.
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
                    <a href="mailto:info@construct.com" className="hover:underline">
                      info@construct.com
                    </a>
                    <a href="mailto:support@construct.com" className="hover:underline">
                      support@construct.com
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
                    <a href="tel:+240 555 517 792" className="hover:underline">
                      +240 555 517 792
                    </a>
                    <a href="tel:+240 555 517 792" className="hover:underline">
                      +240 555 517 792
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials row (as round icons like the screenshot) */}
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
  );
}
