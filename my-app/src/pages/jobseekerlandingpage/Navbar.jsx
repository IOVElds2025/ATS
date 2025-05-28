import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/audiowide";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    {
      name: "Services",
      href: "#services",
      submenu: [
        { name: "Recruiters", href: "#recruiters" },
        { name: "Job Seekers", href: "#jobseekers" },
      ],
    },
    {
      name: "About us",
      href: "#about",
      onClick: (e) => {
        e.preventDefault();
        scrollToSection("about");
        setServicesOpen(false);
      },
    },
    {
      name: "Career",
      href: "#career",
      onClick: (e) => {
        e.preventDefault();
        scrollToSection("career");
        setServicesOpen(false);
      },
    },
    {
      name: "Contact",
      href: "#contact",
      onClick: (e) => {
        e.preventDefault();
        scrollToSection("contact");
        setServicesOpen(false);
      },
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className={`text-2xl tracking-wide flex items-center transition-colors duration-300 font-[Audiowide] ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Hive<span className="text-[#e53935]">X</span>perience
          </a>

          <div className="hidden md:flex items-center space-x-10 relative">
            {navItems.map((item) =>
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={item.href}
                    className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-900 hover:text-[#F65A4E]"
                        : "text-white hover:text-[#F65A4E]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setServicesOpen(!servicesOpen);
                    }}
                  >
                    {item.name}
                  </a>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-2 min-w-[150px] z-50"
                      >
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-[#F65A4E] hover:text-white transition"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(sub.href.replace("#", ""));
                              setServicesOpen(false);
                            }}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick ? (e) => item.onClick(e) : undefined}
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:text-[#F65A4E]"
                      : "text-white hover:text-[#F65A4E]"
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;