import React from "react";
import { Link } from "react-router-dom";

export default function PageHeader({ title, subtitle, background }) {
  return (
    <div
      className="relative w-full h-72 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d2038]/70"></div>

      {/* Content */}
      <div className="relative z-10 text-left text-white max-w-5xl px-6 lg:px-12">
        {/* Subtitle */}
        <p className="uppercase tracking-widest text-base lg:text-lg font-semibold mb-3">
          {subtitle}
        </p>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-2">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="mt-2 text-base lg:text-lg">
          <Link to="/" className="opacity-80 hover:text-yellow-400">
            Home
          </Link>{" "}
          — <span className="text-yellow-400 font-semibold">{title}</span>
        </div>
      </div>
    </div>
  );
}
