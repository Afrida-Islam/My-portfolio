import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageSquare, FiSend } from "react-icons/fi";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "afrida0627@gmail.com",
      href: "afrida0627@gmail.com",
      color: "text-purple-400",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+8801738128752",
      href: "tel:+8801738128752",
      color: "text-blue-400",
    },
    {
      icon: <FiMessageSquare />,
      label: "WhatsApp",
      value: "+8801738128752",
      href: "https://wa.me/213987654321",
      color: "text-green-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#05010d] px-8 lg:px-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Get In <span className="text-purple-500">Touch</span>
          </motion.h2>
          <p className="text-gray-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            {contactDetails.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-md hover:border-purple-500/50 transition-all group"
              >
                <div
                  className={`text-3xl ${item.color} group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                    {item.label}
                  </p>
                  <p className="text-lg text-gray-200">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-md"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#0a0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#0a0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0a0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-[#0a0514] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20"
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
