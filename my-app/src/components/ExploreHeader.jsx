import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const ExploreHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between h-12">
        <Link
          to="/"
          className="text-xl tracking-wide flex items-center transition-colors duration-300 font-[Audiowide] text-gray-900"
        >
          Hive<span className="text-[#e53935]">X</span>perience
        </Link>

        <div className="hidden md:flex items-center space-x-10 relative">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-lg font-semibold transition-colors duration-300 hover:text-[#F65A4E]/80 ${
                location.pathname === item.path
                  ? "text-[#F65A4E] after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[4px] after:bg-[#F65A4E] after:rounded-full after:blur-md after:opacity-90 after:content-[''] after:drop-shadow-[0_0_15px_#F65A4E]"
                  : "text-black"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#F65A4E] rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default ExploreHeader;
