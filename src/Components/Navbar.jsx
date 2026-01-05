import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiLightningBolt } from "react-icons/hi";

const Navbar = () => {
  const [rotation, setRotation] = useState(0);

  // You can update this 'active' state logic later with a scroll spy
  // or a router (like react-router-dom)
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
      // Fixed: Permanent background color and glassmorphism
      className="flex items-center justify-between px-12 py-5 text-white shadow-2xl border-b border-purple-500/10 backdrop-blur-md sticky top-0 z-50 bg-[#0a0514]"
    >
      {/* 1. Logo Section (Entrance + Rotation merged to fix error) */}
      <motion.div
        initial={{ x: -20, opacity: 0, rotate: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          rotate: rotation,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setRotation((prev) => prev + 360)}
        className="flex items-center gap-3 cursor-pointer group"
      >
        {/* ICON BOX */}
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all group-hover:shadow-purple-500/60">
          <HiLightningBolt className="text-purple-400 text-2xl group-hover:text-pink-400 transition-colors" />
        </div>

        {/* LOGO TEXT */}
        <div className="flex items-center text-2xl font-bold tracking-tighter">
          <span className="text-white group-hover:text-purple-400 transition-colors">
            Afrida
          </span>
          <motion.span
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-pink-500 ml-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"
          >
            {"</>"}
          </motion.span>
        </div>
      </motion.div>

      {/* 2. Navigation Links */}
      <ul className="flex space-x-8 text-sm font-semibold uppercase tracking-wider">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <motion.a
              href={link.href}
              whileHover={{ y: -2 }}
              className={`relative px-2 py-1 transition-colors duration-300 group ${
                link.active
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}

              {/* Active State - Shared Layout Animation */}
              {link.active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
              )}

              {/* Hover State for non-active links */}
              {!link.active && (
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500/50 transition-all duration-300 group-hover:w-full" />
              )}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
