import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SubHeader = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login";
  const isRegister = location.pathname === "/auth/register";

  const [isScrolled, setIsScrolled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`fixed top-12 left-0 right-0 z-40 transition-colors duration-300 border-t border-gray-100/10 ${
        isScrolled ? "bg-gray-500 shadow-md" : "bg-transparent"
      }`}
      style={{ height: 40 }}
    >
      {/* Spotlight background */}
      <div
        className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-300 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        /*style={{
          backgroundImage: `url('/subheader-bg.jpg')`,
          WebkitMaskImage: `radial-gradient(circle 80px at ${position.x}px ${position.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(circle 80px at ${position.x}px ${position.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)`,
        }}*/
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between w-full h-full text-lg font-semibold tracking-wide">

        {/* Far Left */}
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

        {/* Far Right */}
        {/*<div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-4">*/}
        {/*  <Link*/}
        {/*    to="/auth/login"*/}
        {/*    className={`px-4 py-1 rounded transition duration-300 border border-transparent text-lg font-semibold ${*/}
        {/*      isLogin*/}
        {/*        ? "text-white bg-[#F65A4E] border-[#F65A4E]"*/}
        {/*        : isScrolled*/}
        {/*        ? "text-black hover:text-[#F65A4E]"*/}
        {/*        : "text-white hover:text-[#F65A4E]"*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    Login*/}
        {/*  </Link>*/}
        {/*  <Link*/}
        {/*    to="/auth/register"*/}
        {/*    className={`px-4 py-1 rounded transition duration-300 border border-transparent text-lg font-semibold ${*/}
        {/*      isRegister*/}
        {/*        ? "text-white bg-[#F65A4E] border-[#F65A4E]"*/}
        {/*        : isScrolled*/}
        {/*        ? "text-black hover:text-[#F65A4E]"*/}
        {/*        : "text-white hover:text-[#F65A4E]"*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    Register*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </motion.nav>
  );
};

export default SubHeader;