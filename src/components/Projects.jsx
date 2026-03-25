import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="text-pink-200 uppercase tracking-[0.25em] text-sm mb-3">
            Projects
          </p> */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Things I’ve Built
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink-400/50 hover:-translate-y-2 transition duration-300 backdrop-blur-md"
              >
                <h3 className="text-2xl font-semibold text-white group-hover:text-pink-200 transition">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-full bg-black/40 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FiGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}