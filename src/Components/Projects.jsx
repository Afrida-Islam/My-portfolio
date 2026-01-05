import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Online Learning Platform",
      description:
        "A feature-rich e-commerce dashboard allowing users to manage electronics, carts, and wishlists with persistent storage.",
      tags: ["React", "Tailwind", "Lucide React", "Local Storage"],
      link: "https://assignment010.vercel.app/",
      github: "https://github.com/Afrida-Islam/Assignment008",
      image: "https://i.ibb.co.com/Z6f2SzS6/image3.jpg",
    },
    {
      title: "Scholarship Management Platform",
      description:
        "A secure authentication-based support platform with real-time feedback and user management features.",
      tags: ["React", "Firebase Auth", "Tailwind", "Animate.css"],
      link: "https://assignment011-dkra.vercel.app/",
      github:
        "https://github.com/programming-hero-web-course-4/b12a7-customer-support-zone-Afrida-Islam",
      image: "https://i.ibb.co.com/HTYzD46s/image1.jpg",
    },
    {
      title: "Baby and Elderly Service Platform",
      description:
        "A full-stack (MERN) hotel management system featuring dynamic room availability and booking cancellations.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://assignment012-kdhw.vercel.app/",
      github: "https://github.com/Afrida-Islam/Assignment011",
      image: "https://i.ibb.co.com/HL3ZxK8b/image2.jpg",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0514] px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-4"
          >
            My <span className="text-purple-500">Masterpieces</span>
          </motion.h2>
          <p className="text-gray-400 mb-6">
            Real-world applications built during my Programming Hero journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/50 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm flex flex-col h-full"
            >
              {/* Image Container - object-contain used to show full image */}
              <div className="h-60 overflow-hidden relative bg-black/40 p-2 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514]/40 to-transparent pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Footer Links */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                    >
                      <FiGithub className="text-xl" />
                      <span>GitHub</span>
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm font-medium"
                    >
                      <FiExternalLink className="text-xl" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-3xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
