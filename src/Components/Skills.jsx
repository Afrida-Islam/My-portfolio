import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 />, level: 95, color: "text-orange-500" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 90,
      color: "text-teal-400",
    },
    { name: "React.js", icon: <SiReact />, level: 85, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "text-white" },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 75,
      color: "text-green-500",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      level: 70,
      color: "text-green-400",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: 75,
      color: "text-gray-400",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      level: 80,
      color: "text-yellow-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#0a0514] px-8 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-4"
          >
            Technical <span className="text-purple-500">Expertise</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My full-stack toolkit powered by my training at{" "}
            <span className="text-purple-400">Programming Hero</span>.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="relative group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-purple-500/50"
            >
              {/* Animated Glow Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500" />

              <div className="relative z-10">
                <div
                  className={`text-4xl ${skill.color} mb-4 flex justify-between items-center`}
                >
                  {skill.icon}
                  <span className="text-sm font-mono text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
