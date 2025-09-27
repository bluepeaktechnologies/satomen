// src/pages/home/Team.jsx
import { useRef, useState } from "react";
import { copy } from "../../content/copy";

const defaults = {
  eyebrow: "Truth in operations",
  title: "Our Team Delivers Reliable Petroleum Logistics",
  cta: "OUR TEAM",
  video: { src: "/video/ops.mp4", poster: "/team-cover.jpg" }, // put files in /public
  body:
    "We coordinate movements end-to-end with disciplined planning, safe handling and precise documentation. Every shift is built around control, transparency and uptime.",
  bullets: [
    "Field-tested execution and clear ownership at every handover",
    "Calibrated measurement and auditable QA/QC trail",
    "Live status, milestone alerts and responsive support",
    "Zero-harm mindset with continuous improvement",
  ],
  quote: {
    text:
      "Our commitment is simple: safe, compliant and dependable movement—every time.",
    name: "Daniel Strickland",
    role: "Operations Lead",
    avatar: "/author.jpg",
  },
};

export default function Team() {
  const t = copy.team ?? defaults;

  const vRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = vRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="bg-[#0a2741]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        {/* Header row */}
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/70">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              <span className="text-emerald-500">Our Team</span> is Responsible
              <br className="hidden sm:block" /> for Reliable Operations
            </h2>
          </div>

          <div className="md:col-span-4 md:text-right">
            <a
              href="/team"
              className="inline-flex rounded-md bg-[#FFC631] px-6 py-3 text-sm font-bold text-[#0a2741] shadow-sm hover:brightness-95"
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* Media */}
        <div className="mt-8 overflow-hidden rounded-md">
          <div className="relative aspect-video w-full bg-slate-700">
            <video
              ref={vRef}
              className="h-full w-full object-cover"
              src={t.video.src}
              poster={t.video.poster}
              preload="metadata"
            />
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
            >
              {playing ? (
                <>
                  <PauseIcon className="mr-2 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <PlayIcon className="mr-2 h-4 w-4" /> Play
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content row */}
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Left: paragraph + checklist */}
          <div className="md:col-span-6">
            <p className="max-w-[48ch] text-[15px] leading-7 text-white/90">{t.body}</p>

            <ul className="mt-6 space-y-3">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#FFC631]" />
                  <span className="text-sm leading-6 text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: quote card */}
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-slate-200/80 to-slate-400/70 p-8 text-slate-900 shadow">
              <p className="max-w-[40ch] text-xl font-semibold leading-8">
                {t.quote.text}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.quote.avatar}
                  alt={t.quote.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{t.quote.name}</div>
                  <div className="text-xs text-slate-700">{t.quote.role}</div>
                </div>
              </div>

              {/* Decorative quotes */}
              <span className="pointer-events-none absolute bottom-4 right-4 text-5xl font-extrabold text-[#FFC631]">
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* tiny inline icons */
function PlayIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function PauseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}
function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
