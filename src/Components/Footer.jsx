import React from "react";
import { motion } from "framer-motion";
import { FiArrowUp, FiHeart } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05010d] border-t border-white/5 pt-16 pb-8 px-8 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Brand/Logo Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold tracking-tight mb-2">
              <span className="text-purple-400">Meriem</span>
              <span className="text-pink-500">{"</>"}</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Building digital experiences with modern technology and creative
              design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm font-medium text-gray-400 mb-8 md:mb-0">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-4 rounded-full bg-gray-900 border border-white/10 text-purple-400 shadow-lg shadow-purple-500/10 hover:border-purple-500/50 transition-all"
          >
            <FiArrowUp size={24} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>
            © {new Date().getFullYear()} Meriem Benfekhadou. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <FiHeart className="text-pink-500 animate-pulse" /> using
            React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
