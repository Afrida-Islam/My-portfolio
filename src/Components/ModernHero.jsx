import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import { SiJavascript, SiHtml5, SiReact, SiCss3 } from "react-icons/si";

const ModernHero = () => {
  const skillIcons = [
    {
      Icon: SiJavascript,
      color: "text-green-400",
      border: "border-green-400",
      shadow: "shadow-green-500/50",
    },
    {
      Icon: SiHtml5,
      color: "text-orange-500",
      border: "border-orange-500",
      shadow: "shadow-orange-500/50",
    },
    {
      Icon: SiReact,
      color: "text-cyan-400",
      border: "border-cyan-400",
      shadow: "shadow-cyan-500/50",
    },
    {
      Icon: SiCss3,
      color: "text-blue-500",
      border: "border-blue-500",
      shadow: "shadow-blue-500/50",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#05010d] flex items-center justify-center px-8 lg:px-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* LEFT CONTENT: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-white text-6xl md:text-8xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Hi, I’m <span className="text-white">Ritu</span>
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent mb-6"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            Full stack developer
          </motion.h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Crafting modern, responsive, and user-friendly websites with passion
            and precision.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl"
            >
              Download Resume <FiDownload className="text-xl" />
            </motion.button>

            <div className="flex gap-5">
              {[FiTwitter, FiLinkedin, FiGithub, FiMail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#d946ef" }}
                  className="text-gray-500 text-2xl transition-all p-2 rounded-full border border-gray-800 hover:border-purple-500/50 bg-gray-900/50"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: Orbiting Skill Ring */}
        <div className="relative flex items-center justify-center">
          {/* Neon Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] border-2 border-dashed border-purple-500/30 rounded-full flex items-center justify-center"
          >
            {skillIcons.map((skill, i) => {
              const angle = (i * 360) / skillIcons.length;
              return (
                <motion.div
                  key={i}
                  className={`absolute w-14 h-14 md:w-20 md:h-20 bg-[#0d021f] border-2 ${skill.border} rounded-full flex items-center justify-center text-3xl md:text-4xl ${skill.color} shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md`}
                  style={{
                    top: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 50 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{ rotate: -360 }} // Counter-rotate to keep icons upright
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <skill.Icon className={`drop-shadow-lg`} />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Profile Image with Glow Overlay */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-64 h-64 md:w-[380px] md:h-[380px] rounded-full p-2 z-20"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-purple-500/20">
              <img
                src="https://i.ibb.co.com/PZS5sNhL/img1.jpg" // Replace with your image
                alt="Meriem"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Purple/Blue Gradient Overlay like the reference */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 pointer-events-none" />
            </div>

            {/* Outer Glow Pulse */}
            <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
