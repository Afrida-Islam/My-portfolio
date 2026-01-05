import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
  const skills = [
    {
      name: "JS",
      color: "border-green-500 text-green-500",
      pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      name: "HTML",
      color: "border-blue-400 text-blue-400",
      pos: "top-1/4 -right-4",
    },
    {
      name: "React",
      color: "border-cyan-400 text-cyan-400",
      pos: "bottom-4 -right-4",
    },
    {
      name: "CSS",
      color: "border-blue-600 text-blue-600",
      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
  ];

  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-10 md:px-24 bg-[#0f051d] text-white overflow-hidden py-20">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl z-10"
      >
        <h1 className="text-6xl font-bold mb-2">
          Hi, I’m <span className="text-white">Meriem</span>
        </h1>
        <h2 className="text-3xl font-semibold text-purple-500 mb-6">
          Full stack developer
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Crafting modern, responsive, and user-friendly websites with passion
          and precision.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-medium mb-10 shadow-lg shadow-purple-500/20"
        >
          Download Resume <FiDownload />
        </motion.button>

        <div className="flex gap-5 text-2xl text-gray-500">
          {[FiTwitter, FiLinkedin, FiGithub, FiMail].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -5, color: "#c084fc" }}
              className="cursor-pointer transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* RIGHT CONTENT - ANIMATED ORBIT */}
      <div className="relative mt-20 md:mt-0">
        {/* The Orbiting Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-72 h-72 md:w-96 md:h-96 border-2 border-dashed border-purple-500/30 rounded-full flex items-center justify-center"
        >
          {/* Skill Bubbles */}
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className={`absolute w-12 h-12 md:w-16 md:h-16 bg-[#0f051d] border-2 ${skill.color} rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] ${skill.pos}`}
              style={{ rotate: -360 }} // Keeps text upright while ring spins
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Central Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-purple-500 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)]"
        >
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Decorative Glows */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/20 blur-[80px]"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-600/20 blur-[80px]"></div>
      </div>
    </section>
  );
};

export default Hero;
