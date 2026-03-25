import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-pink-200 uppercase tracking-[0.25em] text-sm mb-3">
            Skills
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 
                hover:border-pink-300 hover:text-pink-25 transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}