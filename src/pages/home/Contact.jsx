import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import hero from "../../assets/vessel.jpg";
import { contact } from "../../constants/colors";

const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_KEY;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      alert("Email has been sent");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-white py-16 md:py-20"
      initial="hidden"
      animate="show"
      variants={fadeUp}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-12 md:gap-10">
          {/* LEFT – FORM */}
          <motion.div
            className="md:col-span-8 col-span-12"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.15 }}
          >
            {/* eyebrow */}
            <motion.div
              className="hidden md:flex mb-5 items-center gap-3"
              variants={fadeUp}
            >
              <span className="h-0.5 w-8 bg-[#FFC631]" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#0a2741]/70 font-semibold">
                Contact Us
              </span>
            </motion.div>

            {/* headline */}
            <motion.h2
              className="hidden md:flex mb-8 text-4xl font-extrabold leading-tight text-[#0a2741] sm:text-5xl"
              variants={fadeUp}
            >
              Get In<span className="text-[#28c391] ml-1">Touch</span>
            </motion.h2>

            {/* form */}
            <motion.form
              onSubmit={onSubmit}
              className="flex flex-col space-y-6"
              variants={fadeUp}
            >
              <div className="grid grid-cols-12 gap-6">
                <motion.input
                  variants={fadeUp}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Full name"
                  className="col-span-6 h-12 rounded-md border border-slate-200 px-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
                />
                <motion.input
                  variants={fadeUp}
                  type="text"
                  value={form.phone}
                  name="phone"
                  onChange={onChange}
                  placeholder="Phone"
                  className="col-span-6 h-12 rounded-md border border-slate-200 px-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
                />
              </div>

              <motion.input
                variants={fadeUp}
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Email Address"
                className="h-12 rounded-md border border-slate-200 px-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
              />

              <motion.textarea
                variants={fadeUp}
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                className="rounded-md border border-slate-200 p-4 text-[15px] outline-none focus:border-[#0a2741] focus:ring-2 focus:ring-[#0a2741]/10"
              />

              <motion.button
                variants={fadeUp}
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="rounded bg-[#ff9a20] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-yellow-300"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* RIGHT – INFO CARD */}
          <motion.aside
            className="col-span-12 md:col-span-4"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold text-[#0a2741] sm:text-3xl">
              Are You Going to Implement a Project?
            </h3>

            <div className="mt-8 space-y-7 text-[#0a2741]">
              {/* Address */}
              <motion.div variants={fadeUp}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0a2741]/70">
                  Address
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#0a2741]/70" />
                  <p className="leading-6">
                    LM 5, Atras De Parque National Carratera De Aeropurto Bioko Norte
                    <br /> Malabo, Guinea Equatorial.
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0a2741]/70">
                  Email
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[#0a2741]/70" />
                  <div className="flex flex-col">
                    <a href={`mailto:${contact.email2}`} className="hover:underline">
                      {contact.email2}
                    </a>
                    <a href={`mailto:${contact.email1}`} className="hover:underline">
                      {contact.email1}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeUp}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0a2741]/70">
                  Phone
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-[#0a2741]/70" />
                  <div className="flex flex-col">
                    <a href="tel:+240555517792" className="hover:underline">
                      +240 555 517 792
                    </a>
                    <a href="tel:+240555517792" className="hover:underline">
                      +240 555 517 792
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Icons */}
              <motion.div variants={fadeUp} className="mt-4 flex items-center gap-4">
                {[Facebook, Instagram, Twitter, MessageCircle].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social Link"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2741] text-white hover:scale-105 transition-transform"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
