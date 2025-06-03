import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import recruitingVideo from "../assets/video/recruiting-video.mp4";

const HiveHero = () => {
  const hoverSound = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();  // <-- useNavigate hook

  const playHoverSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play();
    }
  };

  const goToRecruiter = () => {
    navigate("/recruiter");  // navigate programmatically
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white select-none">
      <audio ref={hoverSound} src="/hover-sound.mp3" preload="auto" />

      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] z-0"
      >
        <source src={recruitingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Grid Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(246, 90, 78, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(246, 90, 78, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0 0", "60px 60px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Parallax Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(246, 90, 78, 0.2)`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse Parallax Layer */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-4xl"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 20}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to
          <span
            className="block text-transparent bg-clip-text mt-2 font-extrabold"
            style={{
              backgroundImage: "linear-gradient(90deg, #F65A4E, #d14a44)",
              textShadow:
                "0 0 8px rgba(246, 90, 78, 0.7), 0 0 20px rgba(246, 90, 78, 0.5)",
            }}
          >
            HiveXperience
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Unlock your future with futuristic job matches and next-gen recruitment tools.
        </motion.p>

        {/* CTA Buttons Stylés */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Candidat */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 bg-[#F65A4E] hover:bg-[#e74c3c] text-white px-7 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            <Briefcase className="h-5 w-5" />
            Trouver un emploi
            <ArrowRight className="h-5 w-5" />
          </motion.button>

          {/* Recruteur */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToRecruiter}   // <-- added this line
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#F65A4E] px-7 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            <Users className="h-5 w-5" />
            Recruter un talent
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HiveHero;
