import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { address, contact } from "../../constants/colors";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const fadeRight = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
};

// Fix default Leaflet marker path in bundlers (Vite/Cra)
// const markerIcon = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [0, -30],
//   shadowSize: [41, 41],
// });

export default function Contacts() {
  // East Jadynchester – sample coordinates (NYC-ish). Replace if you have exact lat/lng.
  const position = useMemo(() => [40.7357, -74.1724], []);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to your API
    console.log("contact form:", form);
  };

  return (
    <main className="bg-white text-slate-900">
      {/* Hero / breadcrumb */}
      <section className="relative overflow-hidden bg-[#0b213b] text-white">
        <div className="container mx-auto px-6 py-12">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-sm font-semibold tracking-wider"
          >
            WE CREATE THE WORLD
          </motion.span>
          <motion.h1
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-2 text-5xl font-extrabold"
          >
            Contact Us
          </motion.h1>

          <nav className="mt-4 flex items-center gap-4 text-slate-200/80">
            <a className="hover:text-white" href="/">
              Home
            </a>
            <span className="h-0.5 w-8 bg-[#ff9a20] inline-block align-middle" />
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="md:py-14">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[1fr_420px]">
          {/* Left: form */}
          <div>
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#ff9a20]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                  Contact Us
                </span>
              </div>
              <h2 className="text-4xl font-extrabold leading-tight">
                Get <span className="text-[#189cf8]">In Touch</span>
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Pellentesque sit amet porttitor eget dolor morbi non arcu. Vitae
                justo eget magna fermentum iaculis eu non
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <input
                className="col-span-2 sm:col-span-1 rounded border border-slate-300 px-4 py-3 outline-none focus:border-slate-800"
                placeholder="Full name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
              />
              <input
                className="col-span-2 sm:col-span-1 rounded border border-slate-300 px-4 py-3 outline-none focus:border-slate-800"
                placeholder="Phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
              />
              <input
                className="col-span-2 rounded border border-slate-300 px-4 py-3 outline-none focus:border-slate-800"
                placeholder="Email Address"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
              <textarea
                className="col-span-2 min-h-[160px] rounded border border-slate-300 px-4 py-3 outline-none focus:border-slate-800 disabled:bg-gray-400"
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                required
              />
              <div className="col-span-2">
                <button
                  type="submit"
                  className="rounded bg-[#ff9a20] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-yellow-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right: contact info panel */}
          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <InfoGroup
              label="Address"
              content={
                <>
                  {address.line1}
                  <br />
                  {address.line2}
                </>
              }
            />
            <InfoGroup
              label="Email"
              content={
                <div className="flex flex-col gap-3">
                  <a
                    className="hover:underline text-blue-500 hover:text-blue-800"
                    href={`mailto:${contact.email1}`}
                  >
                    {contact.email1}
                  </a>
                  <a
                    className="hover:underline text-blue-500 hover:text-blue-800"
                    href={`mailto:${contact.email2}`}
                  >
                    {contact.email2}
                  </a>
                </div>
              }
            />
            <InfoGroup
              label="Phone"
              content={
                <div className="flex flex-col">
                  <a
                    className="hover:underline hover:text-blue-500"
                    href={`tel:${contact.phone1.replace(" ", "")}`}
                  >
                    {contact.phone1}
                  </a>
                  <a
                    className="hover:underline hover:text-blue-500"
                    href={`tel:${contact.phone2.replace(" ", "")}`}
                  >
                    {contact.phone2}
                  </a>
                </div>
              }
            />

            {/* <div className="mt-8 flex items-center gap-4">
              <Social icon={<Facebook />} aria="Facebook" />
              <Social icon={<Instagram />} aria="Instagram" />
              <Social icon={<Twitter />} aria="Twitter" />
              <Social icon={<MessageCircle />} aria="WhatsApp" />
            </div> */}
          </aside>
        </div>
      </section>

      {/* Map */}
      {/* <section className="relative">
        <div className="h-[520px] w-full">
          <MapContainer
            center={position}
            zoom={12}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
              <Popup>
                Axial Construct <br /> 2047 Cyrus Viaduct East, Jadynchester
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section> */}
    </main>
  );
}

function InfoGroup({ label, content }) {
  return (
    <div className="mb-8">
      <div className="mb-2 text-md font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </div>
      <div className="text-slate-900">{content}</div>
    </div>
  );
}

function Social({ icon, aria }) {
  return (
    <a
      href="#"
      aria-label={aria}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-700"
    >
      <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
    </a>
  );
}
