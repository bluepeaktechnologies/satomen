import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (item) => {
    if (!item.children) {
      navigate(item.href);
      return setMenuOpen(false);
    }
    setOpenDropdown(openDropdown === item.label ? null : name);
  };

  return (
    <header className="bg-[#0d2038] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 ">
        {/* Logo */}
        <NavLink to={"/"} className="flex items-center gap-3">
          <img src={Logo} alt="Satomen" className=" w-44" />
          {/* <span className="text-xl font-bold">
            Satomen <span className="text-green-500">Investment SA</span>
          </span> */}
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            {
              label: "Home",
              to: "/",
              children: [
                { label: "Home 1", to: "index.html" },
                { label: "Home 2", to: "index2.html" },
              ],
            },
            { label: "About", to: "/about" },
            {
              label: "Services",
              to: "services.html",
              children: [
                { label: "Services", to: "services.html" },
                { label: "Single Service", to: "single-service.html" },
                { label: "Team", to: "team.html" },
              ],
            },
            {
              label: "Projects",
              to: "projects.html",
              children: [
                { label: "Projects 1", to: "projects.html" },
                { label: "Projects 2", to: "projects2.html" },
                { label: "Single Project", to: "single-project.html" },
              ],
            },
            {
              label: "Contacts",
              to: "/contact-us",
            },
            {
              label: "Pages",
              to: "#",
              children: [
                { label: "FAQ", to: "faq.html" },
                { label: "Gallery Grid", to: "gallery-grid.html" },
                { label: "Gallery Masonry", to: "gallery-masonry.html" },
                { label: "404", to: "404.html" },
              ],
            },
          ].map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.to}
                className="flex items-center gap-1 font-semibold hover:text-yellow-400 transition"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-4 w-4 text-yellow-400 group-hover:rotate-180 transition-transform" />
                )}
              </NavLink>
              {item.children && (
                <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-lg bg-white text-slate-800 shadow-lg group-hover:block">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          href={child.href}
                          className="block px-4 py-2 hover:bg-yellow-100 hover:text-yellow-600"
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#0d2038] px-6 pb-6">
          <ul className="space-y-4">
            {[
              {
                label: "Home",
                href: "/",
              },
              { label: "About", href: "/about" },
              {
                label: "Services",
                children: [
                  { label: "Services", href: "/services" },
                  { label: "Single Service", href: "single-/service" },
                  { label: "Team", href: "/team" },
                ],
              },
              {
                label: "Projects",
                children: [
                  { label: "Projects 1", href: "/projects" },
                  { label: "Projects 2", href: "/projects2" },
                  { label: "Single Project", href: "single-/project" },
                ],
              },
              {
                label: "Blog",
                children: [
                  { label: "Blog 1", href: "/blog" },
                  { label: "Blog 2", href: "/blog2" },
                  { label: "Single Post", href: "single-/post" },
                ],
              },
              {
                label: "Contacts",
                children: [
                  { label: "Contacts 1", href: "/contacts" },
                  { label: "Contacts 2", href: "/contacts2" },
                ],
              },
              {
                label: "Pages",
                children: [
                  { label: "FAQ", href: "/faq" },
                  { label: "Gallery Grid", href: "gallery-/grid" },
                  { label: "Gallery Masonry", href: "gallery-/masonry" },
                  { label: "404", href: "/404" },
                ],
              },
            ].map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex w-full items-center justify-between font-semibold hover:text-yellow-400"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-4 w-4 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.children && openDropdown === item.label && (
                  <ul className="ml-4 mt-2 space-y-2 border-l border-slate-600 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block hover:text-yellow-400"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
