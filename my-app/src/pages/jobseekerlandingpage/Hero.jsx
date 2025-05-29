import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [bgPosition, setBgPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setBgPosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #000;
          font-family: 'Orbitron', sans-serif;
        }

        .hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Hive Background */
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px),
            url("data:image/svg+xml,%3Csvg width='80' height='70' viewBox='0 0 80 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ff0000' stroke-opacity='0.05' stroke-width='2'%3E%3Cpolygon points='40,0 80,20 80,50 40,70 0,50 0,20'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 100px 90px;
          animation: driftHive 80s linear infinite;
          opacity: 0.25;
          z-index: 0;
        }

        @keyframes driftHive {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50%, -25%); }
        }

        /* Optional video background */
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          filter: brightness(0.2);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
          z-index: 1;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: 1;
          animation: float 12s ease-in-out infinite;
        }

        .blob1 {
          width: 350px;
          height: 350px;
          background: #ff0000;
          top: 10%;
          left: 5%;
        }

        .blob2 {
          width: 450px;
          height: 450px;
          background: #ffffff;
          bottom: 15%;
          right: 10%;
          animation-delay: 3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #ffffff;
          max-width: 900px;
          padding: 0 20px;
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(to right, #ff0000, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          color: #e5e5e5;
          margin: 1.5rem 0 2.5rem;
        }

        .neon-btn {
          background: transparent;
          border: 2px solid #ff0000;
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          border-radius: 999px;
          color: #ff0000;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: glow 3s infinite ease-in-out;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px #ff0000; }
          50% { box-shadow: 0 0 20px #ff0000; }
        }

        .neon-btn:hover {
          background: #ff0000;
          color: #000000;
          transform: scale(1.05);
        }
      `}</style>

      {/* Optional background video */}
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />
      <div className="blob blob1" />
      <div className="blob blob2" />

      <div className="hero-content">
        <h1 className="hero-title">Discover Your Future, Today.</h1>
        <p className="hero-subtitle">
          Explore life-changing opportunities at top global companies.
        </p>
        <button className="neon-btn">Start Exploring</button>
      </div>
    </section>
  );
}
