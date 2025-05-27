import React from 'react';
import './Home.css';
import { FaChartLine, FaCogs, FaCloud, FaLinkedin, FaTwitter, FaInstagram, FaRocket, FaLayerGroup } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">LAEDEX</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">HiveXperience</a></li>
          <li><a href="#">NoveXperience</a></li>
          <li><a href="#">Talent Hub</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="cta-button">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Two worlds. One mission. One partner.</h1>
          <p>At LDS, vision is built at two speeds: NoveXperience imagines, HiveXperience delivers. Together, we lead differently.</p>
          <button className="cta-button">Explore Our World</button>
        </div>
      </section>

      {/* HiveXperience Section */}
      <section className="hive-experience">
        <div className="section-header">
          <FaLayerGroup className="section-icon" />
          <h2>HiveXperience</h2>
        </div>
        <div className="experience-content">
          <div className="experience-text">
            <h3>Execution is a discipline. Delivery is our signature.</h3>
            <p>HiveXperience is where structure meets performance — with precision, clarity and commitment.</p>
          </div>
          <div className="experience-image hive-image"></div>
        </div>
      </section>

      {/* NoveXperience Section */}
      <section className="nove-experience">
        <div className="section-header">
          <FaRocket className="section-icon" />
          <h2>NoveXperience</h2>
        </div>
        <div className="experience-content reverse">
          <div className="experience-image nove-image"></div>
          <div className="experience-text">
            <h3>Where ideas explode like supernovas. And everyone sparks the blast.</h3>
            <p>At NoveXperience, creation starts at the source: the first brief.</p>
            <p>We believe in collisions — of minds, skills, instincts.</p>
            <p>Designers, devs, strategists… we all step in from day one, because creativity is not a handoff.</p>
            <p>It's a chain reaction. And difference is our ignition.</p>
          </div>
        </div>
      </section>

      {/* Talent Hub Section */}
      <section className="talent-hub">
        <div className="section-header">
          <FaChartLine className="section-icon" />
          <h2>Talent Hub</h2>
        </div>
        <div className="talent-hub-content">
          <h3>6,500 profiles. Hundreds of talents. One shared culture.</h3>
          <p>LDS doesn't sell CVs — we bring you smart teams, fully supported, connected and ready to act.</p>
          <div className="talent-counter">
            <div className="counter-item">
              <span className="counter-number">6,500+</span>
              <span className="counter-label">Profiles</span>
            </div>
            <div className="counter-item">
              <span className="counter-number">100+</span>
              <span className="counter-label">Active Talents</span>
            </div>
            <div className="counter-item">
              <span className="counter-number">1</span>
              <span className="counter-label">Shared Culture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Data Analytics</h3>
            <p>Harness the power of your data.</p>
          </div>
          <div className="service-card">
            <FaCogs className="service-icon" />
            <h3>Automation</h3>
            <p>Streamline operations with AI.</p>
          </div>
          <div className="service-card">
            <FaCloud className="service-icon" />
            <h3>Cloud Solutions</h3>
            <p>Scalable and secure infrastructure.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>"Laedex helped us increase efficiency by 200%!"</p>
          <h4>— Client Name</h4>
        </div>
      </section>

      {/* Final Claim Section */}
      <section className="final-claim">
        <div className="claim-content">
          <h2>Lead Together.</h2>
          <p>Because no project deserves to stay just an idea.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">LAEDEX</div>
          <div className="footer-links">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Laedex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;