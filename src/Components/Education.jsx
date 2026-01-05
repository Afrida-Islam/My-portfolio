import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaLeaf,
} from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc (Honours) in Botany",
      institution: "Sherpur Government College",
      duration: "2025 - Present",
      result: "Currently in 1st Year",
      icon: <FaLeaf className="text-green-400" />,
      desc: "Deepening my knowledge in biological sciences while balancing my passion for web technologies.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sherpur Government College",
      duration: "2022 - 2023",
      result: "GPA: 4.67 / 5.00",
      icon: <FaUniversity className="text-blue-400" />,
      desc: "Successfully completed my higher secondary education with a strong focus on science subjects.",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Unite School",
      duration: "2020 - 2021",
      result: "GPA: 5.00 / 5.00 (Golden)",
      icon: <FaSchool className="text-purple-400" />,
      desc: "Achieved the highest grade point average, building a solid foundation for my future academic career.",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#05010d] text-white py-24 px-6 lg:px-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            Educational <span className="text-purple-500">Qualification</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Dot on the timeline */}
              <div className="absolute -left-[42px] mt-1.5 w-5 h-5 bg-purple-600 rounded-full border-4 border-[#05010d] shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10" />

              <div
                className={`p-8 rounded-3xl bg-gradient-to-br ${edu.color} border border-white/10 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 group`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-900 rounded-2xl text-2xl">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-300 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-purple-600/20 text-purple-300 px-4 py-1 rounded-full text-sm font-bold border border-purple-500/30">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    {edu.desc}
                  </p>
                  <div className="bg-white/5 px-6 py-2 rounded-xl border border-white/5">
                    <span className="text-sm text-gray-500 block">Result</span>
                    <span className="text-lg font-bold text-pink-500">
                      {edu.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
