import React, { useEffect, useState, useRef } from 'react';
import './ExperienceLanding.css';
import { initAllAnimations } from './scrollAnimations'; // Import animation functions

const ExperienceLanding = () => {
  // State management
  const [loading, setLoading] = useState(true);
  const [enterText, setEnterText] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showZelligeOverlay, setShowZelligeOverlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(true);
  
  // Refs
  const audioRef = useRef(null);
  const audioSourceRef = useRef(null);
  const gainNodeRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const particlesRef = useRef([]);
  const tarbouchRef = useRef(null);
  const zelligeStarsRef = useRef([]);
  const bgOverlayRef = useRef(null);
  const audioContextRef = useRef(null);

  // Initialize scroll animations when component mounts
  useEffect(() => {
    // Delay animation initialization to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      const cleanup = initAllAnimations();
      return () => {
        cleanup();
        clearTimeout(timer);
      };
    }, 1000);
  }, []);

  // Create refs for zellige stars
  useEffect(() => {
    zelligeStarsRef.current = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 50 + Math.random() * 40, // Reduced size
      delay: i * 0.3,
      duration: 5 + Math.random() * 5,
      color: getMoroccanColor(i),
    }));
  }, []);

  // Moroccan-inspired color palette
  const getMoroccanColor = (index) => {
    const colors = [
      '#005C97', // Deep blue
      '#D0AD80', // Moroccan sand
      '#E63946', // Moroccan red
      '#0077B6', // Mediterranean blue
      '#F2C94C', // Moroccan gold
      '#1D3557', // Navy blue
      '#FF9F1C', // Orange
      '#2A9D8F', // Teal
    ];
    return colors[index % colors.length];
  };

  // Handle background color shift based on mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set cursor position for the custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      const circle1 = document.querySelector('.circle-1');
      const circle2 = document.querySelector('.circle-2');
      const circle3 = document.querySelector('.circle-3');
      const tarbouchElement = tarbouchRef.current;
      const overlayElement = bgOverlayRef.current;

      if (circle1 && circle2 && circle3) {
        const moveX1 = (e.clientX - window.innerWidth / 2) / 15;
        const moveY1 = (e.clientY - window.innerHeight / 2) / 15;
        const moveX2 = (e.clientX - window.innerWidth / 2) / 10;
        const moveY2 = (e.clientY - window.innerHeight / 2) / 10;
        const moveX3 = (e.clientX - window.innerWidth / 2) / 20;
        const moveY3 = (e.clientY - window.innerHeight / 2) / 20;

        circle1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
        circle2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
        circle3.style.transform = `translate(${moveX3}px, ${moveY3}px)`;
      }

      if (overlayElement) {
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;
        overlayElement.style.background = `
          radial-gradient(
            circle at ${xPercent}% ${yPercent}%, 
            rgba(0, 92, 151, 0.4) 0%, 
            rgba(13, 71, 161, 0.5) 40%, 
            rgba(26, 35, 126, 0.6) 80%
          )
        `;
      }

      if (tarbouchElement) {
        const moveX = (e.clientX - window.innerWidth / 2) / 30;
        const moveY = (e.clientY - window.innerHeight / 2) / 30;
        const rotateAmount = moveX * 0.7;
        tarbouchElement.style.transform = `rotate(${-25 + rotateAmount}deg) translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize Web Audio API
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;
    
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.5;
    gainNode.connect(audioContext.destination);
    gainNodeRef.current = gainNode;
    
    // Try to fetch the audio file, but handle errors gracefully
    fetch('/assets/moroccan-intro.mp3')
      .then(response => {
        if (!response.ok) {
          throw new Error('Audio file not found');
        }
        return response.arrayBuffer();
      })
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        audioRef.current = audioBuffer;
        setAudioInitialized(true);
        // Don't play audio yet - wait for user interaction
      })
      .catch(error => {
        console.error('Error loading audio:', error);
        // Just proceed without audio
        setAudioInitialized(true);
        setNeedsInteraction(false);
        startAnimationSequence();
      });

    const handleVisibilityChange = () => {
      if (document.hidden && audioSourceRef.current) {
        audioSourceRef.current.stop();
        audioSourceRef.current = null;
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioSourceRef.current) {
        audioSourceRef.current.stop();
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Handle first interaction
  const handleFirstInteraction = () => {
    if (needsInteraction) {
      setNeedsInteraction(false);
      
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().then(() => {
          playAudio();
          startAnimationSequence();
        });
      } else {
        playAudio();
        startAnimationSequence();
      }
    }
  };

  // Play audio function
  const playAudio = () => {
    if (!audioRef.current || !audioContextRef.current || !gainNodeRef.current) return;
    
    try {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioRef.current;
      source.loop = true;
      source.connect(gainNodeRef.current);
      audioSourceRef.current = source;
      source.start(0);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (!audioInitialized || !gainNodeRef.current) return;
    
    setIsMuted(!isMuted);
    
    if (!isMuted) {
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioContextRef.current.currentTime);
      gainNodeRef.current.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 0.2);
    } else {
      gainNodeRef.current.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNodeRef.current.gain.linearRampToValueAtTime(0.5, audioContextRef.current.currentTime + 0.2);
    }
  };

  // Start animation sequence
  const startAnimationSequence = () => {
    setLoading(false);
    
    setTimeout(() => {
      setEnterText(true);
      
      setTimeout(() => {
        setShowZelligeOverlay(true);
      }, 500);
      
      const text = "LAEDEX";
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length && textRef.current) {
          textRef.current.textContent = text.substring(0, i + 1);
          i++;
        } else {
          clearInterval(typingInterval);
          setShowFullText(true);
        }
      }, 150);
    }, 50);
  };

  // Create rich particle system - reduced number of particles
  useEffect(() => {
    particlesRef.current = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 1.5,
      size: Math.random() * 6 + 1, // Reduced size
      color: getMoroccanColor(Math.floor(Math.random() * 8)),
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
      opacity: 0.2 + Math.random() * 0.8,
      blur: Math.random() > 0.7 ? Math.random() * 3 : 0, // Reduced blur
    }));
  }, []);

  // Component rendering
  const ZelligeStars = () => {
    return (
      <div className="zellige-stars-container">
        {zelligeStarsRef.current.map((star) => (
          <div
            key={star.id}
            className="zellige-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              background: `radial-gradient(circle, ${star.color} 0%, transparent 70%)`,
            }}
          ></div>
        ))}
      </div>
    );
  };

  const ZelligePatternOverlay = () => {
    return (
      <div className={`zellige-pattern-overlay ${showZelligeOverlay ? 'visible' : ''}`}>
        <div className="zellige-pattern-inner"></div>
      </div>
    );
  };

  const ZelligeDecorations = () => {
    return (
      <div className="zellige-decorations">
        <div className="zellige-diamond top-left"></div>
        <div className="zellige-diamond top-right"></div>
        <div className="zellige-diamond bottom-left"></div>
        <div className="zellige-diamond bottom-right"></div>
      </div>
    );
  };

  const AudioControl = () => {
    return (
      <button 
        className={`audio-control ${isMuted ? 'muted' : ''}`}
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        <div className="audio-icon">
          <span className="speaker-base"></span>
          {!isMuted && (
            <>
              <span className="sound-wave wave-1"></span>
              <span className="sound-wave wave-2"></span>
            </>
          )}
          {isMuted && <span className="mute-line"></span>}
        </div>
      </button>
    );
  };

  // Header Component
  const Header = () => {
    return (
      <header className="simple-header">
        <div className="header-container">
          <div className="logo">LAEDEX</div>
          <nav className="nav-menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </header>
    );
  };

  // Footer Component with improved compact design
  const Footer = () => {
    return (
      <footer className="simple-footer">
        <div className="footer-container">
          <div className="footer-company-info">
            <div className="footer-logo">LAEDEX</div>
            <p>Experience the authentic beauty of Morocco with our carefully curated tours and cultural experiences.</p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📍</span>
                <span>123 Rue des Épices, Marrakech, Morocco</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <span>+212 5 24 45 XX XX</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#tours">Guided Tours</a></li>
              <li><a href="#cuisine">Culinary Experiences</a></li>
              <li><a href="#stays">Authentic Stays</a></li>
              <li><a href="#crafts">Artisanal Crafts</a></li>
              <li><a href="#excursions">Desert Excursions</a></li>
            </ul>
          </div>

          <div className="footer-connect">
            <h3>Stay Connected</h3>
            <p>Follow us on social media and subscribe to our newsletter.</p>
            
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">F</a>
              <a href="#" className="social-icon" aria-label="Instagram">I</a>
              <a href="#" className="social-icon" aria-label="Twitter">T</a>
              <a href="#" className="social-icon" aria-label="YouTube">Y</a>
            </div>
            
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Your email address" 
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; {new Date().getFullYear()} LAEDEX. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="page-wrapper">
      <Header />
      
      <div
        className={`landing-container ${loading ? 'loading' : 'loaded'} ${needsInteraction ? 'needs-interaction' : ''}`}
        style={{ backgroundImage: "url('/assets/zellige.avif')" }}
        onClick={handleFirstInteraction}
        id="home"
      >
        {needsInteraction && (
          <div className="interaction-prompt" onClick={handleFirstInteraction}>
            <div className="prompt-particles">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="prompt-particle"
                  style={{
                    width: `${Math.random() * 12 + 5}px`,
                    height: `${Math.random() * 12 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100 + 100}%`,
                    animationDuration: `${10 + Math.random() * 20}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    background: i % 3 === 0 
                      ? 'radial-gradient(circle, rgba(0, 102, 204, 0.7), transparent)'
                      : i % 3 === 1 
                        ? 'radial-gradient(circle, rgba(208, 173, 128, 0.7), transparent)'
                        : 'radial-gradient(circle, rgba(26, 35, 126, 0.7), transparent)',
                  }}
                ></div>
              ))}
            </div>
            <div className="interaction-prompt-content">
              <p>Click To Begin</p>
              <div className="hint">Immerse yourself in the Moroccan experience</div>
              <div className="click-indicator"></div>
            </div>
          </div>
        )}
        
        {/* Custom cursor */}
        <div ref={cursorRef} className="cursor"></div>
        
        {/* Audio Control Button */}
        {audioInitialized && !needsInteraction && <AudioControl />}
        
        {/* Dynamic background overlay */}
        <div ref={bgOverlayRef} className="dynamic-bg-overlay"></div>

        {/* Animated zellige stars */}
        <ZelligeStars />
        
        {/* Animated zellige pattern overlay */}
        <ZelligePatternOverlay />
        
        {/* Zellige diamond decorations */}
        <ZelligeDecorations />

        {loading ? (
          <div className="loader">
            <div className="loader-spinner"></div>
          </div>
        ) : (
          <div className="entrance-content">
            <div className={`text-reveal ${enterText ? 'active' : ''}`}>
              <h1 ref={textRef} data-text="LAEDEX" className={showFullText ? 'fully-visible' : ''}></h1>
              {showFullText && (
                <img
                  ref={tarbouchRef}
                  src="/assets/tarbouch.jpg"
                  alt="Fez hat"
                  className="fez-overlay"
                />
              )}
            </div>

            <div className="background-graphics">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="particle-container">
                {particlesRef.current.map((particle) => (
                  <div
                    key={particle.id}
                    className="particle"
                    style={{
                      left: `${particle.x}px`,
                      top: `${particle.y}px`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      background: particle.color,
                      opacity: particle.opacity,
                      filter: particle.blur ? `blur(${particle.blur}px)` : 'none',
                      animationDuration: `${8 + Math.random() * 15}s`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Main content with scroll animations */}
      <main className="main-content">
        {/* About Section with Scroll Animation */}
        <section id="about" className="content-section section-animation">
          <div className="animate-heading">
            <h2><span>About Us</span></h2>
          </div>
          <p>LAEDEX offers unique and authentic Moroccan experiences. Our services combine traditional hospitality with modern comforts, allowing you to explore the rich cultural heritage of Morocco.</p>
          
          {/* Animated image reveal */}
          <div className="image-reveal">
            <img src="/assets/morocco-landscape.jpg" alt="Moroccan landscape" />
          </div>
          
          <p>Founded by passionate locals with deep knowledge of Morocco's culture and traditions, we strive to provide immersive experiences that connect you with the heart and soul of this magnificent country.</p>
          
          {/* Decorative pattern with parallax effect */}
          <div className="pattern-reveal">
            <div className="pattern-element"></div>
          </div>
        </section>
        
        {/* Services Section with Background Color Transition */}
        <section id="services" className="content-section section-animation bg-transition">
          <div className="animate-heading">
            <h2><span>Our Services</span></h2>
          </div>
          <p>From guided tours through ancient medinas to culinary workshops featuring local chefs, we provide a range of services to make your Moroccan adventure unforgettable.</p>
          
          {/* Services with Scroll Animation */}
          <div className="services-grid">
            <div className="service-item float-element">
              <h3>Guided Tours</h3>
              <p>Explore the hidden gems of Morocco's cities and landscapes with our expert local guides.</p>
            </div>
            
            <div className="service-item float-element" style={{ animationDelay: '0.2s' }}>
              <h3>Culinary Experiences</h3>
              <p>Discover the rich flavors of Moroccan cuisine through cooking classes and food tours.</p>
            </div>
            
            <div className="service-item float-element" style={{ animationDelay: '0.4s' }}>
              <h3>Desert Excursions</h3>
              <p>Journey into the Sahara for unforgettable camel treks and overnight stays under the stars.</p>
            </div>
          </div>
        </section>
        
        {/* Gallery Section with Horizontal Scroll */}
        <section id="gallery" className="content-section section-animation">
          <div className="animate-heading">
            <h2><span>Gallery</span></h2>
          </div>
          <p>Explore our collection of photos showcasing the beauty and diversity of Morocco's landscapes, architecture, and people.</p>
          
          <div className="horizontal-scroll">
            <div className="horizontal-scroll-item">
              <img src="/assets/gallery-1.jpg" alt="Moroccan architecture" />
              <h4>Historic Architecture</h4>
            </div>
            <div className="horizontal-scroll-item">
              <img src="/assets/gallery-2.jpg" alt="Moroccan desert" />
              <h4>Sahara Desert</h4>
            </div>
            <div className="horizontal-scroll-item">
              <img src="/assets/gallery-3.jpg" alt="Moroccan cuisine" />
              <h4>Local Cuisine</h4>
            </div>
            <div className="horizontal-scroll-item">
              <img src="/assets/gallery-4.jpg" alt="Moroccan crafts" />
              <h4>Traditional Crafts</h4>
            </div>
            <div className="horizontal-scroll-item">
              <img src="/assets/gallery-5.jpg" alt="Moroccan mountains" />
              <h4>Atlas Mountains</h4>
            </div>
          </div>
        </section>
        
        {/* Contact Section with Parallax Background */}
        <section id="contact" className="content-section section-animation parallax-section">
          <div className="parallax-bg" style={{ backgroundImage: "url('/assets/morocco-contact-bg.jpg')" }}></div>
          
          <div className="animate-heading">
            <h2><span>Contact Us</span></h2>
          </div>
          
          <div className="contact-container">
            <p>Ready to start your Moroccan journey? Get in touch with our team to plan your personalized experience.</p>
            
            <div className="contact-form float-element">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExperienceLanding;