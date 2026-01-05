import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiLightningBolt, HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [rotation, setRotation] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="flex items-center justify-between px-6 md:px-12 py-5 text-white shadow-2xl border-b border-purple-500/10 backdrop-blur-md sticky top-0 z-50 bg-[#0a0514]/90"
    >
      {/* 1. Logo Section */}
      <motion.div
        animate={{ rotate: rotation }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setRotation((prev) => prev + 360)}
        className="flex items-center gap-3 cursor-pointer group z-50"
      >
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          <HiLightningBolt className="text-purple-400 text-2xl group-hover:text-pink-400 transition-colors" />
        </div>
        <div className="flex items-center text-xl md:text-2xl font-bold tracking-tighter">
          <span className="text-white group-hover:text-purple-400 transition-colors">
            Afrida
          </span>
          <motion.span
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-pink-500 ml-1"
          >
            {"</>"}
          </motion.span>
        </div>
      </motion.div>

      {/* 2. Desktop Navigation (Hidden on Mobile) */}
      <ul className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
        {navLinks.map((link, index) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`relative px-2 py-1 transition-colors duration-300 group ${
                link.active
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
              {link.active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* 3. Mobile Toggle Button (Visible on Mobile Only) */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-purple-400 focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 w-full bg-[#0a0514] flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-2xl font-bold uppercase tracking-widest hover:text-purple-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
