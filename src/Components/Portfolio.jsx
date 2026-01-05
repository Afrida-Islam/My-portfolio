import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMagic,
  FaGraduationCap,
  FaGamepad,
  FaCamera,
} from "react-icons/fa";

const AboutMe = () => {
  const serviceList = [
    {
      title: "Modern Website Design",
      icon: <FaPaintBrush />,
      desc: "Creating visually stunning and user-friendly layouts.",
    },
    {
      title: "Frontend Development",
      icon: <FaCode />,
      desc: "Turning designs into clean, responsive React code.",
    },
    {
      title: "Website Generation",
      icon: <FaMagic />,
      desc: "Building functional websites with automated efficiency.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0a0514] text-white py-24 px-6 lg:px-24 font-sans selection:bg-purple-500/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* 1. Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Animated Image Profile */}
          <div className="relative group flex-shrink-0">
            <div className="absolute inset-0 border-4 border-dashed border-purple-500/50 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute -inset-4 border-2 border-pink-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-transparent z-10 relative bg-gray-900 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
              <img
                src="https://i.ibb.co.com/PZPt07bZ/img3.jpg"
                alt="Afrida Islam"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 -right-4 bg-purple-600 p-4 rounded-2xl shadow-xl z-20 border border-white/10"
            >
              <FaGraduationCap className="text-3xl text-white" />
            </motion.div>
          </div>

          {/* Right Side: Content & Biography */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Afrida Islam
                </span>
              </h3>

              {/* 2. Detailed Introduction & Journey */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey into the world of code started with a simple
                curiosity about how things work on the internet. As a student at
                <span className="text-purple-400 font-semibold underline underline-offset-4 decoration-purple-500/30 ml-1">
                  Sherpur Government College
                </span>
                , I decided to take it seriously and joined the{" "}
                <span className="text-pink-400 font-semibold">
                  Programming Hero
                </span>{" "}
                course. Since then, I’ve spent countless nights debugging and
                mastering the MERN stack.
              </p>

              {/* 3. Work Preferences */}
              <p className="text-gray-400 text-md leading-relaxed mb-6">
                I truly enjoy the <strong>UI/UX part of development</strong>
                —there’s something magical about transforming a blank screen
                into an interactive experience. I love working on projects that
                require creative thinking and high-performance logic.
              </p>

              {/* 4. Hobbies & Personality */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                  <FaPaintBrush className="text-pink-500" /> Digital Painting
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                  <FaCamera className="text-purple-500" /> Photography
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                  <FaGamepad className="text-blue-500" /> Gaming
                </div>
              </div>
            </motion.div>

            {/* 5. Service Cards Grid */}
            <div className="grid grid-cols-1 gap-4">
              {serviceList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: 10,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    backgroundColor: "rgba(168, 85, 247, 0.05)",
                  }}
                  className="flex items-center gap-5 p-5 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm cursor-default transition-all group"
                >
                  <div className="text-purple-500 text-3xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-100">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
