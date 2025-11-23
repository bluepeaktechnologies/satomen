import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import hero from "../../assets/vessel.jpg";

const slides = [
  { src: hero, title: "Flagship Energy Logistics Project", label: "Special Projects" },
  { src: hero, title: "Integrated Petroleum Transport", label: "Operations" },
  { src: hero, title: "Offshore & Inland Delivery", label: "Project Highlight" },
  { src: hero, title: "Terminal & Fleet Coordination", label: "Showcase" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Gallery() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const next = (index + dir + slides.length) % slides.length;
    setIndex(next);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

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

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [index]);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <motion.section
      id="gallery"
      className="relative bg-[#0a2741] py-14 md:py-16 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          className="mb-6 flex items-end justify-between gap-4 md:mb-8"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeIn}>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/80 font-bold">
                Our Gallery
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Recent <span className="text-[#28c391]">Projects</span>
            </h2>
          </motion.div>

          {/* Arrows */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            variants={fadeIn}
          >
            <motion.button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 150 }}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white"
            >
              ‹
            </motion.button>
            <motion.button
              onClick={() => go(1)}
              aria-label="Next slide"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 150 }}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white"
            >
              ›
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a2741] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a2741] to-transparent" />

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
                <AnimatePresence mode="wait">
                  <motion.img
                    key={s.src + i}
                    src={s.src}
                    alt={s.title}
                    className="h-[420px] w-full object-cover sm:h-[520px] md:h-[560px]"
                    style={{ y: parallaxY }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </AnimatePresence>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0a2741]/80 via-[#0a2741]/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Text Overlay */}
                <motion.div
                  className="absolute left-6 top-6 sm:left-10 sm:top-10 max-w-[90%]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.span
                    className="mb-2 inline-flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="h-0.5 w-8 bg-[#FFC631]" />
                    <span className="text-[12px] uppercase tracking-[0.2em] text-white/80 font-bold">
                      Our Gallery
                    </span>
                  </motion.span>
                  <motion.h3
                    className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {s.title}
                  </motion.h3>
                  <motion.span
                    className="mt-3 inline-block rounded bg-[#FFC631] px-3 py-1 text-xs font-bold text-[#0a2741] uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {s.label}
                  </motion.span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Controls */}
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between px-4 md:hidden">
          <motion.button
            onClick={() => go(-1)}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
          >
            ‹
          </motion.button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  scale: i === index ? 1.3 : 1,
                  backgroundColor: i === index ? "#FFC631" : "rgba(255,255,255,0.4)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="h-2 w-2 rounded-full"
              />
            ))}
          </div>

          <motion.button
            onClick={() => go(1)}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
          >
            ›
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
