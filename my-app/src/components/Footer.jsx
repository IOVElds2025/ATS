import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/share/1aUCa2oHZL/",
      label: "Facebook",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/socialm36531248?s=11",
      label: "Twitter",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/laedx",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/laedxdigitalstudio/?hl=en",
      label: "Instagram",
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscribeStatus({
        type: 'error',
        message: 'Please enter your email address'
      });
      return;
    }

    setIsSubmitting(true);
    setSubscribeStatus({ type: '', message: '' });

    try {
      // Get existing subscribers or initialize empty array
      const existingSubscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
      
      // Check if email already exists
      if (existingSubscribers.includes(email)) {
        throw new Error('You are already subscribed!');
      }

      // Add new subscriber
      existingSubscribers.push(email);
      localStorage.setItem('subscribers', JSON.stringify(existingSubscribers));

      // Show success message
      setSubscribeStatus({
        type: 'success',
        message: 'Thank you for subscribing! You will receive our updates soon.'
      });
      setEmail('');
    } catch (error) {
      setSubscribeStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              Hire<span className="logo-accent">X</span>perience
            </div>
            <p className="footer-description">
              Transforming the way companies hire talent through AI-powered recruitment solutions.
            </p>
            <div className="social-icons">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">How It Works</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Live Chat</a></li>
              <li><a href="#" className="footer-link">Documentation</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-subscribe">
            <h4 className="subscribe-title">Stay Updated</h4>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="subscribe-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    Subscribe
                  </>
                )}
              </button>
              {subscribeStatus.message && (
                <div className={`subscribe-status ${subscribeStatus.type}`}>
                  {subscribeStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              © {new Date().getFullYear()} HireXperience. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-badges">
              <div className="security-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span>Secure</span>
              </div>
              <div className="certification-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;