import React from 'react';
import { FaUserPlus, FaSearch, FaPaperPlane } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Create Account',
      desc: 'Sign up with your email and create a professional profile.',
      icon: <FaUserPlus size={36} />,
    },
    {
      title: 'Search Jobs',
      desc: 'Browse listings or use filters to find the perfect job.',
      icon: <FaSearch size={36} />,
    },
    {
      title: 'Apply Fast',
      desc: 'Send applications in one click and get noticed quickly.',
      icon: <FaPaperPlane size={36} />,
    },
  ];

  return (
    <section className="how-it-works">
      <style>{`
        .how-it-works {
          position: relative;
          background-color: #f9fafb; /* light gray background */
          color: #111827; /* dark gray text */
          padding: 100px 20px;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          overflow: hidden;
          z-index: 1;
        }

        /* Hive background with subtle gray + soft red lines */
        .how-it-works::before {
          content: "";
          position: absolute;
          top: -100px; left: -100px; right: -100px; bottom: -100px;
          background-image: 
            radial-gradient(circle at center, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            url("data:image/svg+xml,%3Csvg width='80' height='70' viewBox='0 0 80 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%236b7280' stroke-opacity='0.15' stroke-width='2'%3E%3Cpolygon points='40,0 80,20 80,50 40,70 0,50 0,20'/%3E%3C/g%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='80' height='70' viewBox='0 0 80 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%ef4444' stroke-opacity='0.1' stroke-width='2'%3E%3Cpolygon points='40,0 80,20 80,50 40,70 0,50 0,20'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 100px 90px;
          background-repeat: repeat;
          animation: driftHive 70s linear infinite;
          z-index: 0;
          opacity: 0.2;
        }

        @keyframes driftHive {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-45%, -25%); }
        }

        .how-it-works h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 60px;
          background: linear-gradient(90deg, #ef4444, #374151); /* red to dark gray */
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s linear infinite;
          position: relative;
          z-index: 1;
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .steps-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .step-box {
          background: #ffffff; /* white card background */
          border-radius: 20px;
          border: 2px solid #ef4444; /* red border */
          border-left: 8px solid #ef4444;
          padding: 30px 24px;
          max-width: 320px;
          text-align: left;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          color: #1f2937; /* dark slate */
          user-select: none;
          position: relative;
          overflow: hidden;
        }

        .step-box:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow:
            0 0 35px rgba(239, 68, 68, 0.4),
            inset 0 0 30px rgba(239, 68, 68, 0.25);
        }

        .step-icon {
          color: #ef4444;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #111827;
        }

        .step-desc {
          font-size: 1rem;
          color: #4b5563; /* medium gray */
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .how-it-works h2 {
            font-size: 2.4rem;
          }
          .step-box {
            max-width: 100%;
          }
        }
      `}</style>

      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-box">
            <div className="step-icon">{step.icon}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
