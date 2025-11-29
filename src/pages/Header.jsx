import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (item) => {
    if (item && !item.children) {
      navigate(item.to);
      setMenuOpen(false);
      return;
    }
    setOpenDropdown(openDropdown === item.label ? null : item.label);
  };

  const menuItems = [
    { label: "HOME", to: "/" },
    {
      label: "ABOUT",
      children: [
        { label: "Company Profile", to: "/about/company" },
        { label: "Management Team", to: "/about/management-team" },
        { label: "Team", to: "/about/team" },
      ],
    },
    { label: "SERVICES", to: "/services" },

    {
      label: "PROJECTS",
      to: "/projects",
    },

    { label: "CONTACT US", to: "/contact-us" },
    // {
    //   label: "PAGES",
    //   children: [
    //     { label: "FAQ", to: "/faq" },
    //     { label: "Gallery Grid", to: "/gallery-grid" },
    //     { label: "Gallery Masonry", to: "/gallery-masonry" },
    //     { label: "404", to: "/404" },
    //   ],
    // },
  ];

  return (
    <header className="bg-[#0d2038] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Satomen" className="w-44" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative">
              {item.to && !item.children ? (
                <NavLink
                  to={item.to}
                  className="flex items-center gap-1 font-semibold hover:text-yellow-400 transition"
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  type="button"
                  onClick={() => toggleDropdown(item)}
                  className="flex items-center gap-1 font-semibold hover:text-yellow-400 transition"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`h-4 w-4 text-yellow-400 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white text-slate-800 shadow-lg z-50">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.to}
                          onClick={() => setOpenDropdown(null)}
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
            {menuItems.map((item) => (
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
                        <NavLink
                          to={child.to}
                          className="block hover:text-yellow-400"
                          onClick={() => setMenuOpen(false)} // close after click
                        >
                          {child.label}
                        </NavLink>
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
