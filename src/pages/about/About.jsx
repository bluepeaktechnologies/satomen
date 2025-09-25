import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { ArrowRight, Check, Play, Pause, Star } from "lucide-react";

import AboutImage from "../../assets/boat.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
};

const SectionHeader = ({ subtitle, title, highlight, text }) => (
  <div className="mb-8">
    {subtitle && (
      <motion.span
        variants={fadeUp}
        className="uppercase tracking-wide text-sm"
      >
        {subtitle}
      </motion.span>
    )}
    {title && (
      <motion.h2
        variants={fadeRight}
        className="mt-2 text-3xl md:text-4xl font-semibold"
      >
        {title}{" "}
        {highlight && <span className="text-[#ff9a20]">{highlight}</span>}
      </motion.h2>
    )}
    {text && (
      <motion.p variants={fadeUp} className="mt-4 max-w-2xl">
        {text}
      </motion.p>
    )}
  </div>
);

const Video = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative mx-auto mt-10 max-w-4xl">
      <img
        src="/img/placeholder.jpg"
        alt="thumbnail"
        className="w-full rounded-2xl shadow-lg"
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg"
      >
        {playing ? <Pause /> : <Play />}
      </button>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full rounded-2xl"
        src="/video/full.mp4"
        preload="auto"
      />
    </div>
  );
};

export default function Home() {
  return (
    <main>
      {/* About */}
      <section className="py-16 min-h-[calc(100vh-90px)]">
        <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <SectionHeader
              subtitle="Who we are"
              title="Bringing"
              highlight="Your Ideas"
              text="Our civil and structural team is committed to providing sustainable, creative & efficient engineering solutions for our communities"
            />

            <ul className="space-y-3">
              {[
                "Making lives easier",
                "Get every solution right here",
                "Innovation and creativity",
                "Fine engineering only with us",
              ].map((t, i) => (
                <motion.li
                  key={t}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <ArrowRight className="mt-0.5 h-5 w-5 text-[#ff9a20]" /> {t}
                </motion.li>
              ))}
            </ul>

            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="#"
                className="inline-flex rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-900 hover:bg-yellow-300"
              >
                Satomen
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImage}
              alt="About Us"
              className="hidden md:flex md:h-[800px] rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#0d1f37] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl md:py-36">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="uppercase tracking-wide text-slate-100"
            >
              Who we are
            </motion.span>
            <motion.h3
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-3 text-2xl md:text-4xl font-medium text-slate-100 "
            >
              Pulvinar elementum integer enim neque volutpat ac. Amet dictum sit
              amet justo donec enim diam vulputate ut. Egestas sed sed risus
              pretium quam. Viverra accumsan in nisl nisi scelerisque eu
            </motion.h3>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 block text-[#ff9a20] md:text-2xl"
            >
              Mohammed Dimari
            </motion.span>
          </div>
        </div>
      </section>

      {/* Services */}
      {/* <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <SectionHeader
              subtitle="Just feel the future"
              title="Spotlight"
              highlight="Services"
            />
          </div>

          <div>
            <Swiper
              modules={[Pagination, Navigation, A11y]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              className="!pb-10"
            >
              {[
                { title: "Process Engineering" },
                { title: "Chemistry and Metallurgy" },
                { title: "Electrical Engineering" },
                { title: "Specialty Services" },
                { title: "Civil engineering" },
                { title: "Construction Management" },
              ].map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="grid gap-6 rounded-2xl border border-slate-700/70 bg-[#0d1f37] p-6 md:grid-cols-2">
                    <img
                      src="/img/placeholder.jpg"
                      alt={item.title}
                      className="h-56 w-full rounded-xl object-cover md:h-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3">
                        Vitae ultricies leo integer malesuada nunc vel. Molestie
                        ac feugiat sed lectus vestibulum mattis ullamcorper
                        velit. Viverra aliquet eget sit amet tellus cras
                        adipiscing.
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[
                          "Making lives easier",
                          "Get every solution right here",
                          "Innovation and creativity",
                        ].map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 h-5 w-5 text-yellow-400" />{" "}
                            {t}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="single-service.html"
                        className="mt-5 inline-flex rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-slate-900 hover:bg-yellow-300"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <a
              key={i}
              href="/img/placeholder.jpg"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <img
                src="/img/placeholder.jpg"
                alt="Gallery item"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4">
                <span className="text-sm uppercase tracking-wide text-slate-200">
                  Our gallery
                </span>
                <h4 className="mt-1 text-lg font-semibold">
                  Fresh Concept Construction Renovation
                </h4>
                <span className="text-sm">Special Projects</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Features */}
      {/* WHY CHOOSE US */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="">
            {/* Left column */}
            {/* <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="lg:pr-6"
            >
              <motion.span
                variants={fadeUp}
                className="mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-600"
              >
                <span className="h-[2px] w-10 bg-emerald-500" /> WHY CHOOSE US
              </motion.span>

              <motion.h2
                variants={fadeRight}
                className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
              >
                <span className="text-emerald-500">Design</span> Future
                <br /> with Excellence
              </motion.h2>

              <ul className="mt-8 space-y-4 text-lg text-slate-800">
                {[
                  "Building the future with ideas",
                  "Designing future with excellence",
                  "Discovering possibility concrete",
                ].map((t) => (
                  <motion.li
                    key={t}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div> */}

            {/* Right grid – 2 x 3 cards */}
            <div className="lg:col-span-3">
              <div className="grid gap-6 md:grid-cols-3">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                  className="lg:pr-6"
                >
                  <motion.span
                    variants={fadeUp}
                    className="mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-600"
                  >
                    <span className="h-[2px] w-10 bg-emerald-500" /> WHY CHOOSE
                    US
                  </motion.span>

                  <motion.h2
                    variants={fadeRight}
                    className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
                  >
                    <span className="text-emerald-500">Design</span> Future
                    <br /> with Excellence
                  </motion.h2>

                  <ul className="mt-8 space-y-4 text-lg text-slate-800">
                    {[
                      "Building the future with ideas",
                      "Designing future with excellence",
                      "Discovering possibility concrete",
                    ].map((t) => (
                      <motion.li
                        key={t}
                        variants={fadeUp}
                        className="flex items-start gap-3"
                      >
                        <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
                        <span>{t}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                {[
                  {
                    title: "We Develop Unique Projects",
                    desc: "Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M6 8l6-3 6 3-6 3-6-3z" />
                        <path d="M6 12l6 3 6-3" />
                        <path d="M6 16l6 3 6-3" />
                      </svg>
                    ),
                  },
                  {
                    title: "We Value Convenience and Functionality",
                    desc: "Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 9v4" />
                        <path d="M9 22h6" />
                        <circle cx="12" cy="5" r="3" />
                      </svg>
                    ),
                  },
                  {
                    title: "Experience Allows Us to Implement Ideas",
                    desc: "Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim diam vulputate ut pharetra",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 20v-6l6-6 6 6-6 6H3z" />
                        <path d="M15 14l6-6" />
                      </svg>
                    ),
                  },
                  {
                    title: "We Focus on Long-term Relationships",
                    desc: "Purus in massa tempor nec feugiat. Euismod lacinia at quis risus sed vulputate",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M8 11l4 4 8-8" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    ),
                  },
                  {
                    title: "Transparent Process",
                    desc: "Clear stages, frequent updates, and collaborative decisions throughout the project lifecycle",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                      </svg>
                    ),
                  },
                ].map((c, idx) => (
                  <motion.div
                    key={c.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-xl border border-slate-200 bg-white p-8 text-slate-900"
                  >
                    <div className="mb-6 text-slate-900/80">{c.icon}</div>
                    <h4 className="text-2xl font-extrabold leading-snug">
                      {c.title}
                    </h4>
                    <p className="mt-4 text-[17px] leading-7 text-slate-700">
                      {c.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {/* <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionHeader
              subtitle="Our reviews"
              title="What"
              highlight="Our Clients"
            />
            <div className="hidden gap-3 md:flex">
              <button className="reviews-prev rounded-full border border-slate-600 p-2 hover:bg-slate-700/50">
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button className="reviews-next rounded-full border border-slate-600 p-2 hover:bg-slate-700/50">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{ nextEl: ".reviews-next", prevEl: ".reviews-prev" }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-10"
          >
            {[
              "Vera Robinson",
              "Benjamin Norris",
              "Lisa Smith",
              "Lucas Perry",
            ].map((name, idx) => (
              <SwiperSlide key={name}>
                <div className="h-full rounded-2xl border border-slate-700/60 bg-[#0d1f37] p-6">
                  <div className="flex gap-1 text-[#ff9a20]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4">
                    Curabitur vitae nunc sed velit dignissim sodales ut.
                    Maecenas ultricies mi eget mauris pharetra et. Et ligula
                    ullamcorper malesuada proin pellentesque diam volutpat
                    commodo.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src="/img/placeholder.jpg"
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{name}</div>
                      <div className="text-sm">
                        {
                          [
                            "Psychologist",
                            "Business analyst",
                            "Manager",
                            "Analyst",
                          ][idx]
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
    </main>
  );
}
