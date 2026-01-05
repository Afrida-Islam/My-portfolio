import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMagic, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  // Services tailored to your specific strengths
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
    <div className="bg-[#0a0514] text-white py-24 px-6 lg:px-24 font-sans selection:bg-purple-500/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
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
            {/* Outer Rotating Dashed Border */}
            <div className="absolute inset-0 border-4 border-dashed border-purple-500/50 rounded-full animate-[spin_30s_linear_infinite]" />

            {/* Inner Rotating Ring */}
            <div className="absolute -inset-4 border-2 border-pink-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-8 border-transparent z-10 relative bg-gray-900 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
              <img
                src="https://via.placeholder.com/400" // Replace with your actual photo path
                alt="Afrida Islam"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Experience Badge */}
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
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Afrida Islam
                </span>
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a dedicated student at{" "}
                <span className="text-purple-400 font-semibold underline underline-offset-4 decoration-purple-500/30">
                  Sherpur Government College
                </span>
                . My coding journey reached new heights through the{" "}
                <span className="text-pink-400 font-semibold">
                  Programming Hero
                </span>{" "}
                course, where I specialized in modern web technologies.
              </p>

              <p className="text-gray-400 text-md leading-relaxed">
                I focus on the intersection of design and logic. Whether it is
                generating a high-performance website or designing an intuitive
                user interface, I strive for excellence in every pixel. My goal
                is to build digital solutions that are not only functional but
                also beautiful.
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {serviceList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
    </div>
  );
};

export default AboutMe;
