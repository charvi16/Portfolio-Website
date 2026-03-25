import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.placeholder.includes("Name") ? "name" : e.target.placeholder.includes("Email") ? "email" : "message"]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          {/* <p className="text-pink-200 uppercase tracking-[0.25em] text-sm mb-3">
            Contact
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Connect
          </h2>

          <p className="text-gray-400 leading-7 max-w-2xl">
            I’m always open to discussing projects, collaborations,
            and opportunities in software engineering, backend development, and AI.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <a href="mailto:charviagarwal2004@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 hover:border-pink-200 hover:text-pink-200 transition">
              <FiMail /> Email
            </a>

            <a href="https://github.com/charvi16" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 hover:border-pink-200 hover:text-pink-200 transition">
              <FiGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/charvi16/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 hover:border-pink-200 hover:text-pink-200 transition">
              <FiLinkedin /> LinkedIn
            </a>
          </div>

          {/* ✅ FORM */}
          <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 outline-none focus:border-pink-400/50 text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 outline-none focus:border-pink-400/50 text-white"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 outline-none focus:border-pink-400/50 text-white resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-fit px-6 py-3 rounded-full bg-pink-200 text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(249,168,212,0.4)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}