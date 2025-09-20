import {
  Phone,
  MapPin,
  ChevronRight,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import React from "react";
import Logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d2038] text-slate-100">
      <div className="container mx-auto px-6 py-8">
        {/* Top / Main */}
        <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="index.html"
              className="flex items-center gap-3 justify-center h-full"
            >
              <img src={Logo} alt="Satomen" className="w-72" />
            </a>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contacts</h4>

            <div className="flex items-start gap-4">
              <span className="rounded-full bg-yellow-400/10 p-2 text-yellow-400">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <a
                  href="tel:+240555517792"
                  className="hover:text-yellow-300 transition-colors"
                >
                  +240 555 517 792
                </a>
                <a
                  href="tel:+240555517792"
                  className="hover:text-yellow-300 transition-colors"
                >
                  +240 555 517 792
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <span className="rounded-full bg-yellow-400/10 p-2 text-yellow-400">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span>
                  LM 5, Atras De Parque National Carratera De Aeropurto Bioko
                  Norte
                </span>
                <span> Malabo Guinea Equatorial.</span>
              </div>
            </div>
          </div>

          {/* Company nav */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "about.html", label: "About", page: "about" },
                { href: "services.html", label: "Services", page: "services" },
                { href: "projects.html", label: "Projects", page: "projects" },
              ].map((item) => (
                <li key={item.label} className="group">
                  <a
                    href={item.href}
                    data-page={item.page}
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-yellow-300 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 -ml-1 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                    <span className="underline-offset-4 group-hover:underline">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Subscribe to Our News
            </h4>
            <p className="text-slate-300 leading-relaxed mb-5">
              Find out about the last days and the latest promotions of our
              Corporation
            </p>
            <form
              className="flex w-full max-w-xl overflow-hidden rounded-xl border border-slate-700 focus-within:border-slate-500"
              action="#"
              method="POST"
              name="newsletterForm"
              id="newsletterForm"
            >
              <input
                type="email"
                name="newsletterEmail"
                id="newsletterEmail"
                placeholder="Email"
                required
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex items-center gap-2 whitespace-nowrap bg-[#ff9a20] px-4 py-3 text-slate-400 font-semibold hover:bg-[#ff9a20] transition-colors"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <Send className="h-5 w-5" aria-hidden="true" color="#ff9a20" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-slate-800" />

        {/* Bottom / Secondary */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between justify-center">
          <p className="text-slate-300 leading-relaxed text-center">
            <span>Bluepeak Technology Ltd &copy; Satomen Investment SA</span>
            <span className="mx-2">•</span>
            <span>
              All rights reserved Copyrights <span>{currentYear}</span>
            </span>
          </p>

          {/* <ul className="flex items-center gap-4">
            {[
              { label: "Facebook", icon: Facebook, href: "#" },
              { label: "Instagram", icon: Instagram, href: "#" },
              { label: "Twitter", icon: Twitter, href: "#" },
              { label: "WhatsApp", icon: Twitter, href: "#" },
            ].map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full bg-yellow-400/90 text-slate-900 hover:bg-[#ff9a20] transition-colors"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
