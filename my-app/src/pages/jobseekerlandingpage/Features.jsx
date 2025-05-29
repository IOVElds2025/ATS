import React from 'react';

export default function Features() {
  const featureList = [
    {
      title: "Advanced Job Matching",
      description: "Our AI algorithms match you with jobs that perfectly fit your skills and preferences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.104 0-2 .896-2 2 0 .404.162.77.423 1.043L9.292 12H7a5 5 0 000 10h10a5 5 0 000-10h-2.292l1.131-1.957A1.992 1.992 0 0014 10c0-1.104-.896-2-2-2z" />
        </svg>
      )
    },
    {
      title: "Real-time Notifications",
      description: "Stay updated with instant alerts on new jobs, application statuses, and interviews.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: "In-depth Analytics",
      description: "Gain insights into your job applications and improve your strategies with our analytics tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18M9 17v-6M15 17v-2M12 5v14" />
        </svg>
      )
    },
  ];

  return (
    <>
      <style>{`
        /* Hive Background Animation */
        .features-section {
          position: relative;
          background: #0f0f0f;
          color: #fff;
          padding: 6rem 1.5rem 6rem;
          overflow: hidden;
          text-align: center;
          --neon-red: #ff0000;
        }

        .features-section::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: 
            radial-gradient(circle 18px at 10px 10px, var(--neon-red) 98%, transparent 100%),
            radial-gradient(circle 18px at 40px 40px, var(--neon-red) 98%, transparent 100%);
          background-size: 60px 60px;
          animation: hiveMove 20s linear infinite;
          opacity: 0.1;
          z-index: 0;
        }

        @keyframes hiveMove {
          0% { background-position: 0 0, 30px 30px; }
          100% { background-position: 60px 60px, 90px 90px; }
        }

        .features-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Title smaller with neon gradient and animation */
        .features-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 900;
          margin-bottom: 3rem;
          background: linear-gradient(270deg, #ff0000, #ffffff, #ff0000);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: neonGlow 4s ease infinite;
          text-transform: uppercase;
        }

        @keyframes neonGlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .features-grid {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .feature-card {
          background: rgba(15, 15, 15, 0.85);
          border: 2px solid #ff0000;
          border-radius: 16px;
          padding: 2rem 2.5rem;
          max-width: 320px;
          box-shadow: 0 0 12px #ff0000aa;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          user-select: none;
        }

        .feature-card:hover {
          box-shadow: 0 0 20px #ff0000ee;
          transform: translateY(-5px);
        }

        .feature-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          color: #ff4d4d;
        }

        .nowrap-title {
          white-space: nowrap;
        }

        .feature-card p {
          font-size: 1.05rem;
          color: #ddd;
          line-height: 1.5;
        }

        .icon {
          stroke: #ff4d4d;
          stroke-width: 2;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .features-grid {
            flex-direction: column;
            align-items: center;
          }
          .feature-card {
            max-width: 100%;
            width: 320px;
          }
        }
      `}</style>

      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">Powerful Features for Job Seekers</h2>

          <div className="features-grid">
            {featureList.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3
                  className={feature.title === "Real-time Notifications" ? "nowrap-title" : ""}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  {feature.icon}
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
