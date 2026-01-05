import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const ModernHero = () => {
  const handleDownload = () => {
    window.open("/resume.pdf", "_blank"); // ফাইল থাকলে ডাউনলোড হবে
  };

  const skillIcons = [
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      border: "border-yellow-400/50",
    },
    { Icon: SiReact, color: "text-cyan-400", border: "border-cyan-400/50" },
    { Icon: SiTailwindcss, color: "text-sky-400", border: "border-sky-400/50" },
    {
      Icon: SiNodedotjs,
      color: "text-green-500",
      border: "border-green-500/50",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#05010d] flex items-center justify-center px-6 py-20 lg:px-24 overflow-hidden"
    >
      {/* --- Background Elements --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full hidden md:block"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        {/* --- LEFT CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/5 text-purple-400 text-sm font-medium tracking-wider"
          >
            🚀 WELCOME TO MY UNIVERSE
          </motion.div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            Hi, I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 drop-shadow-sm">
              Afrida Ritu
            </span>
          </h1>

          <div className="h-12 mb-8">
            <motion.p
              className="text-xl md:text-3xl font-medium text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I build{" "}
              <span className="text-white border-b-2 border-purple-500">
                scalable web apps
              </span>
            </motion.p>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Specializing in building exceptional digital experiences. Currently
            focused on creating clean, accessible, and user-centric
            applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <motion.button
              onClick={handleDownload}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Get Resume{" "}
              <FiDownload className="group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <div className="flex gap-4">
              {[
                { Icon: FiGithub, link: "#" },
                { Icon: FiLinkedin, link: "#" },
                { Icon: FiTwitter, link: "#" },
                { Icon: FiMail, link: "#" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                  }}
                  className="text-gray-400 hover:text-purple-400 text-2xl p-3 rounded-2xl border border-gray-800 bg-[#0d021f] transition-all"
                >
                  <item.Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT (Fixed Orbit) --- */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 mb-12 lg:mb-0">
          {/* Orbiting Skills */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center"
          >
            {/* Invisible Circle Track */}
            <div className="absolute inset-0 border border-purple-500/10 rounded-full" />

            {skillIcons.map((skill, i) => {
              const angle = (i * 360) / skillIcons.length;
              return (
                <motion.div
                  key={i}
                  className={`absolute w-14 h-14 md:w-20 md:h-20 bg-[#0d021f]/80 border ${skill.border} rounded-2xl flex items-center justify-center text-2xl md:text-4xl ${skill.color} shadow-2xl backdrop-blur-xl z-30`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `rotate(${angle}deg) translate(clamp(140px, 18vw, 220px)) rotate(-${angle}deg) translate(-50%, -50%)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <skill.Icon className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Profile Image Wrapper */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute w-52 h-52 md:w-[300px] md:h-[300px] z-20"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#1a0b2e] shadow-2xl">
              <img
                src="https://i.ibb.co.com/PZS5sNhL/img1.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/40" />
            </div>

            {/* Outer Glow Circles */}
            <div className="absolute inset-[-20px] border border-purple-500/10 rounded-full -z-10 animate-[ping_3s_linear_infinite]" />
            <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
