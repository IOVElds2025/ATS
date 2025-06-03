import React from "react";

const Features = () => {
  const featureList = [
    {
      title: "Fast Job Matching",
      description: "Get connected with the best jobs that suit your profile instantly.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Fast Job Matching icon"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Verified Employers",
      description: "Work with trusted companies and secure your future.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Verified Employers icon"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          />
        </svg>
      ),
    },
    {
      title: "Real-time Notifications",
      description: "Be the first to apply when new jobs get posted.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Real-time Notifications icon"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section">
      <style>{`
        :root {
          --white: #fff;
          --primary-red: #cc0000;
          --primary-blue: #0074d9;
          --text-dark: #333;
          --border-blue: #0074d9;
          --background-light: #f9f9f9;
          --hexagon-color: rgba(0, 116, 217, 0.12);
        }

        .features-section {
          position: relative;
          padding: 4rem 1.5rem;
          overflow: hidden;
          z-index: 1;
          background: var(--background-light);
          color: var(--text-dark);
        }

        .hive-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, 70px);
          grid-auto-rows: 80px;
          gap: 5px 10px;
          z-index: 0;
          opacity: 0.12;
          animation: hiveMove 60s linear infinite;
          transform-style: preserve-3d;
        }

        .hive-background div {
          width: 70px;
          height: 80px;
          background: var(--hexagon-color);
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
          animation: pulse 3s ease-in-out infinite alternate;
        }

        .hive-background div:nth-child(2n) {
          margin-top: 40px;
          animation-delay: 1.5s;
        }

        @keyframes pulse {
          0% { opacity: 0.05; transform: scale(1); }
          100% { opacity: 0.2; transform: scale(1.1); }
        }

        @keyframes hiveMove {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-300px, 300px, 0); }
        }

        .features-title {
          font-size: clamp(1.8rem, 4vw, 2.3rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 2.5rem;
          background: linear-gradient(270deg, var(--border-blue), #000, var(--border-blue));
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 5s ease infinite;
          position: relative;
          z-index: 1;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .features-container {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .feature-card {
          background: var(--white);
          border: 2px solid var(--border-blue);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 0 15px rgba(0, 116, 217, 0.3);
          transition: all 0.3s ease;
          flex: 1 1 280px;
          max-width: 350px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-card:hover {
          box-shadow: 0 0 25px rgba(0, 116, 217, 0.7), 0 0 10px rgba(0, 116, 217, 0.5);
          transform: translateY(-6px);
        }

        .feature-card:hover h3 {
          color: var(--primary-blue);
          transition: color 0.3s ease;
        }

        .feature-card:hover h3 svg {
          transform: scale(1.2) rotate(10deg);
          transition: transform 0.3s ease;
        }

        .feature-card h3 {
          font-size: 1.4rem;
          color: var(--primary-red);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .nowrap-title {
          white-space: nowrap;
        }

        .feature-card p {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.4;
        }

        .icon {
          stroke: var(--primary-red);
          stroke-width: 2;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .features-container {
            flex-direction: column;
            align-items: center;
          }
          .feature-card {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="hive-background">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} />
        ))}
      </div>

      <h2 className="features-title">Powerful Features for Job Seekers</h2>

      <div className="features-container">
        {featureList.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className={feature.title === "Real-time Notifications" ? "nowrap-title" : ""}>
              {feature.icon}
              {feature.title}
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
