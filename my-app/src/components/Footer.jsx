import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import recruitingVideo from '../assets/video/recruiting-video.mp4';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const existingSubscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
      
      if (existingSubscribers.includes(email)) {
        throw new Error('You are already subscribed!');
      }

      existingSubscribers.push(email);
      localStorage.setItem('subscribers', JSON.stringify(existingSubscribers));

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
    <footer className="relative overflow-hidden">
      {/* Video Background */}
      <div 
        className="absolute inset-0 bg-[#02144780]"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(2, 20, 71, 0.7)',
          zIndex: 1
        }}
      />
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{ opacity: 0.4 }}
      >
        <source src={recruitingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-2xl font-extrabold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent animate-[logoGlow_3s_ease-in-out_infinite]">
              Hire<span className="text-red-500">X</span>perience
            </div>
            <p className="text-slate-400 text-sm">
              Transforming the way companies hire talent through AI-powered recruitment solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg hover:shadow-black/30 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-transparent">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 block text-sm">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : 'Subscribe'}
                </button>
                {subscribeStatus.message && (
                  <div className={`text-sm p-2 rounded ${
                    subscribeStatus.type === 'success' 
                      ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}>
                    {subscribeStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} HireXperience. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-400 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-400 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
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