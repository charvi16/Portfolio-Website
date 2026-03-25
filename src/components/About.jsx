import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-pink-300 uppercase tracking-[0.25em] text-sm mb-3">
            About
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <p className="text-gray-300 leading-8">
                I am a Computer Science student passionate about building
                software that is both technically strong and visually polished.
                I enjoy working on full-stack development, backend systems,
                machine learning projects, and problem-solving using DSA.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <p className="text-gray-300 leading-8">
                My goal is to create impactful products, strengthen my core
                engineering skills, and build a portfolio that stands out for
                top internships and software roles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}