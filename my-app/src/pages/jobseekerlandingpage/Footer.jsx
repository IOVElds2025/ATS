import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTimes } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background: linear-gradient(to top, #2d2d2d, #5b5b5b);
          color: #000;
          padding: 60px 40px 20px;
          font-family: sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-left,
        .footer-center,
        .footer-right {
          flex: 1;
          min-width: 240px;
          margin-bottom: 40px;
        }

        .footer-left .logo {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .footer-center h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .footer-center p {
          font-size: 0.95rem;
          margin-bottom: 20px;
          max-width: 320px;
          color: #000;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          gap: 14px;
        }

        .social-icons a {
          background: #f44336;
          color: white;
          padding: 10px;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .social-icons a:hover {
          background: #000;
          color: #f44336;
        }

        .footer-right h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .footer-right p {
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .footer-right input {
          padding: 10px;
          border: 1px solid #999;
          border-radius: 4px;
          width: 100%;
          max-width: 260px;
          margin-bottom: 10px;
        }

        .footer-right button {
          background: #f44336;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .footer-bottom {
          border-top: 1px solid #999;
          margin-top: 40px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          color: #000;
          font-size: 0.9rem;
        }

        .footer-bottom a {
          margin-left: 20px;
          color: #000;
          text-decoration: none;
          font-weight: 500;
        }

        .footer-bottom a:hover {
          color: #f44336;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-left,
          .footer-center,
          .footer-right {
            margin-bottom: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }

          .footer-bottom a {
            margin: 0 10px;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">logo</div>
        </div>

        <div className="footer-center">
          <h3>Hive<span style={{ color: "#f44336" }}>X</span>perience</h3>
          <p>Transforming the way companies hire talent through AI-powered recruitment solutions.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTimes /></a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Stay updated</h4>
          <p>Subscribe to our newsletter for the latest updates and insights.</p>
          <input type="email" placeholder="Business Email" />
          <br />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; 2025 NoveXperience. All rights reserved</div>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
