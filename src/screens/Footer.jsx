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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d2038] text-slate-100">
      <div className="container mx-auto px-6 py-16">
        {/* Top / Main */}
        <div className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="index.html" className="inline-flex items-center gap-3">
              <img
                src="/svg/logo.svg"
                alt="Axial Construct"
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold tracking-wide">
                Axial <span className="text-yellow-400">Construct</span>
              </span>
            </a>
            <p className="mt-6 text-slate-300 leading-relaxed max-w-md">
              Libero volutpat sed cras ornare arcu dui vivamus. Ac tortor
              dignissim convallis aenean et tortor at risus viverra
            </p>
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
                  href="tel:+13136453395"
                  className="hover:text-yellow-300 transition-colors"
                >
                  1 - 313 - 645 - 3395
                </a>
                <a
                  href="tel:+14699702609"
                  className="hover:text-yellow-300 transition-colors"
                >
                  1 - 469 - 970 - 2609
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4">
              <span className="rounded-full bg-yellow-400/10 p-2 text-yellow-400">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span>2047 Cyrus Viaduct</span>
                <span>East Jadynchester</span>
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
                { href: "blog.html", label: "Blog", page: "blog" },
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
                className="inline-flex items-center gap-2 whitespace-nowrap bg-yellow-400 px-4 py-3 text-slate-900 font-semibold hover:bg-yellow-300 transition-colors"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-slate-800" />

        {/* Bottom / Secondary */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-300 leading-relaxed">
            <span>Merkulove &copy; Axial Construct Template</span>
            <span className="mx-2">•</span>
            <span>
              All rights reserved Copyrights <span>{currentYear}</span>
            </span>
          </p>

          <ul className="flex items-center gap-4">
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
                  className="grid h-12 w-12 place-items-center rounded-full bg-yellow-400/90 text-slate-900 hover:bg-yellow-300 transition-colors"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
