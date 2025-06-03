import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SubHeader = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-12 left-0 right-0 z-40 transition-colors duration-300 border-t border-gray-100/10 ${
        isScrolled ? "bg-gray-500 shadow-md" : "bg-transparent"
      }`}
      style={{ height: 40 }}
    >
      <div className="relative z-10 flex items-center justify-between w-full h-full text-lg font-semibold tracking-wide">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex gap-6">
          {[
            { path: "/find-job", label: "Find Job" },
            { path: "/hire-talent", label: "Hire Talent" },
          ].map(({ path, label }) => (
            <div key={path} className="relative">
              <Link
                to={path}
                className={`transition-colors duration-300 text-lg font-semibold ${
                  location.pathname === path
                    ? "text-[#F65A4E]"
                    : isScrolled
                    ? "text-black hover:text-[#F65A4E]"
                    : "text-white hover:text-[#F65A4E]"
                }`}
              >
                {label}
              </Link>
              {location.pathname === path && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#F65A4E] rounded-full"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default SubHeader;