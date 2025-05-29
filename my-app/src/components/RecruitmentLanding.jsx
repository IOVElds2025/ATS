import React from 'react';
import { Link } from 'react-router-dom';
import './RecruitmentLanding.css';

// Import the images (you'll need to save these images to your public folder or src/assets)
const businessManLaptop = '/images/business-man-laptop.png'; // Image 1
const businessManMegaphone = '/images/business-man-megaphone.png'; // Image 2
const businessManDesk = '/images/business-man-desk.png'; // Image 3
const businessManPresenting = '/images/business-man-presenting.png'; // Image 4

const RecruitmentLanding = () => {
  return (
    <div className="recruitment-page">
      <header>
        <div className="logo">SmartHire</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Post jobs and find the perfect candidate in minutes</h1>
          <p>Our AI-powered platform matches you with qualified candidates so you can focus on growing your business.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
        <div className="hero-image">
          <img src={businessManLaptop} alt="Business professional working on laptop" className="character-img" />
        </div>
      </section>
      
      {/* Updated timeline section with separated characters and text boxes */}
      <section className="timeline-section">
        <h2>Smart Hiring Starts Here</h2>
        <div className="new-timeline">
          
          {/* Step 1 */}
          <div className="timeline-step">
            {/* Left side - Text box */}
            <div className="timeline-text-box right-text">
              <div className="step-number">01</div>
              <h3>Create Job Post</h3>
              <p>Define roles and skills you'll need for the role. Our templates help make posting job listings a breeze.</p>
            </div>
            
            {/* Right side - Character image */}
            <div className="timeline-character-container left-character">
              <img src={businessManMegaphone} alt="Business professional with megaphone" className="timeline-character-img" />
            </div>
            
            {/* Timeline connector */}
            <div className="timeline-line">
              <div className="timeline-dot"></div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="timeline-step">
            {/* Left side - Character image */}
            <div className="timeline-character-container right-character">
              <img src={businessManPresenting} alt="Business professional presenting" className="timeline-character-img" />
            </div>
            
            {/* Right side - Text box */}
            <div className="timeline-text-box left-text">
              <div className="step-number">02</div>
              <h3>AI Matching</h3>
              <p>Instantly connect with top fit candidates. Our AI matches resumes to your job requirements so you meet the right people.</p>
            </div>
            
            {/* Timeline connector */}
            <div className="timeline-line">
              <div className="timeline-dot"></div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="timeline-step">
            {/* Left side - Text box */}
            <div className="timeline-text-box right-text">
              <div className="step-number">03</div>
              <h3>Interview & Hire</h3>
              <p>Manage candidates and hire all in one streamlined interface. Simplify your recruitment process.</p>
            </div>
            
            {/* Right side - Character image */}
            <div className="timeline-character-container left-character">
              <img src={businessManDesk} alt="Happy business professional at desk" className="timeline-character-img" />
            </div>
            
            {/* Timeline connector */}
            <div className="timeline-line">
              <div className="timeline-dot"></div>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="purple-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
              </svg>
            </div>
            <h3>AI-Powered Matching</h3>
            <p>Our advanced algorithms match your job requirements with candidate skills and experience to find the perfect fit.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="blue-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <h3>Candidate Screening</h3>
            <p>Automate the initial screening process with customizable questionnaires and skill assessments.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className="green-icon" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3>Collaborative Hiring</h3>
            <p>Involve your entire team in the hiring process with shared candidate profiles, notes, and ratings.</p>
          </div>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2025 SmartHire. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RecruitmentLanding;