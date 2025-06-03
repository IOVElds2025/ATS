import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up and complete your profile to start your job journey.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
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
            d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Browse Opportunities",
      description: "Explore jobs tailored to your skills and preferences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
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
            d="M8 4h13M8 9h13M8 14h13M8 19h13M3 4h.01M3 9h.01M3 14h.01M3 19h.01"
          />
        </svg>
      ),
    },
    {
      title: "Apply & Get Hired",
      description: "Send applications and get hired by top employers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works-section">
      <style>{`
        :root {
          --white: #fff;
          --primary-red: #cc0000;
          --primary-blue: #0074d9;
          --text-dark: #333;
        }

        .how-it-works-section {
          background: var(--white);
          padding: 4rem 1.5rem;
          color: var(--text-dark);
        }

        .how-title {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          color: #002855; /* bleu foncé */
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .how-title:hover {
          background: linear-gradient(270deg, #0074d9, #00aaff, #0074d9);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 5s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .steps-container {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .step-card {
          background: var(--white);
          color: var(--text-dark);
          border: 2px solid var(--primary-blue);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 0 15px rgba(0, 116, 217, 0.15);
          transition: all 0.3s ease;
          flex: 1 1 280px;
          max-width: 350px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step-card:hover {
          box-shadow: 0 0 25px rgba(0, 116, 217, 0.4), 0 0 10px rgba(0, 116, 217, 0.2);
          transform: translateY(-6px);
        }

        .step-card h3 {
          font-size: 1.4rem;
          color: var(--primary-red);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .step-card p {
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
          .steps-container {
            flex-direction: column;
            align-items: center;
          }

          .step-card {
            max-width: 100%;
          }
        }
      `}</style>

      <h2 className="how-title">How It Works</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <h3>{step.icon} {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
