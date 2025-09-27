// Gallery.jsx
import { useEffect, useRef, useState } from "react";
import hero from "../../assets/vessel.jpg";

// Use the same image for every slide (for now)
const slides = [
  { src: hero, title: "Flagship Energy Logistics Project", label: "Special Projects" },
  { src: hero, title: "Integrated Petroleum Transport", label: "Operations" },
  { src: hero, title: "Offshore & Inland Delivery", label: "Project Highlight" },
  { src: hero, title: "Terminal & Fleet Coordination", label: "Showcase" },
];

export default function Gallery() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  // go to slide
  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const next = (index + dir + slides.length) % slides.length;
    setIndex(next);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  // snap index on manual drag/scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section id="gallery" className="relative bg-[#0a2741] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/80 font-bold">
                Our Gallery
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Recent <span className="text-[#28c391]">Projects</span>
            </h2>
          </div>

          {/* desktop arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a2741] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a2741] to-transparent" />

        {/* hide scrollbar on all browsers */}
        <style>{`
          #gallery-track::-webkit-scrollbar { display: none; }
          #gallery-track { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        <div
          id="gallery-track"
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          <ul className="flex w-full">
            {slides.map((s, i) => (
              <li
                key={i}
                className="relative snap-start shrink-0 w-full"
                style={{ width: "100vw" }}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  className="h-[420px] w-full object-cover sm:h-[520px] md:h-[560px]"
                />

                {/* overlay + text */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a2741]/80 via-[#0a2741]/40 to-transparent" />
                <div className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-[90%]">
                  <span className="mb-2 inline-flex items-center gap-3">
                    <span className="h-0.5 w-8 bg-[#FFC631]" />
                    <span className="text-[12px] uppercase tracking-[0.2em] text-white/80 font-bold">
                      Our Gallery
                    </span>
                  </span>
                  <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
                    {s.title}
                  </h3>
                  <span className="mt-3 inline-block rounded bg-[#FFC631] px-3 py-1 text-xs font-bold text-[#0a2741] uppercase">
                    {s.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile controls */}
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between px-4 md:hidden">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
          >
            ‹
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-[#FFC631]" : "bg-white/40"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
