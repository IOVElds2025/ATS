import React, { useEffect, useRef, useState } from 'react';
import './Recruiter.css';
import FinalCarousel from '../components/FinalCarousel';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import recruitingVideo from '../assets/video/recruiting-video.mp4';
import Footer from '../components/Footer';
import featureBackground from '../assets/charachters/feature-background.png';

// Import character images
import heroCharacter from '../assets/charachters/hero-image.jpg';
import timelineCharacter1 from '../assets/charachters/timeline-1.jpg';
import timelineCharacter2 from '../assets/charachters/timeline-2.jpg';
import timelineCharacter3 from '../assets/charachters/timeline-3.jpg';

const Recruiter = () => {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [backgroundVideo, setBackgroundVideo] = useState(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const timelineRef = useRef(null);
  const fileInputRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const imagePaths = {
    heroPattern: '/images/hero-pattern.jpg',
    decorationStar: '/images/decoration-star.png',
    decorationFlower: '/images/decoration-flower.png',
    heroImage: heroCharacter,
    timeline1: timelineCharacter1,
    timeline2: timelineCharacter2,
    timeline3: timelineCharacter3,
  };

  const features = [
    {
      icon: '⏱️',
      title: 'Faster Time-to-Hire',
      description: 'Cut your hiring time by up to 40% with streamlined processes. Quick candidate sourcing, automated screening, and integrated tools reduce delays between application and offer.',
      iconClass: 'icon-green'
    },
    {
      icon: '📊',
      title: 'Insights & Analytics',
      description: 'Make data-driven hiring decisions with comprehensive metrics. Track hiring pipeline performance, identify areas of improvement, and measure your overall performance in real-time.',
      iconClass: 'icon-purple'
    },
    {
      icon: '🔍',
      title: 'Smart Candidate Matching',
      description: 'Our AI-powered system analyzes thousands of profiles to find the perfect match for your role. We surface only qualified candidates who meet your specific criteria.',
      iconClass: 'icon-blue'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timeline = timelineRef.current;
        const stepsContainer = timeline.querySelector('.timeline-container');
        if (stepsContainer) {
          const containerRect = stepsContainer.getBoundingClientRect();
          const containerHeight = containerRect.height;
          const windowHeight = window.innerHeight;

          // Calculate progress
          if (containerRect.top < windowHeight) {
            const progressValue = Math.min(
              Math.max(0, (windowHeight - containerRect.top) / (containerHeight + windowHeight * 0.5)),
              1
            );
            setProgress(progressValue);
            
            // Update active step based on progress
            if (progressValue < 0.33) setActiveStep(0);
            else if (progressValue < 0.66) setActiveStep(1);
            else setActiveStep(2);

            // Check each step's visibility
            const steps = timeline.querySelectorAll('.timeline-step');
            steps.forEach((step, index) => {
              const stepRect = step.getBoundingClientRect();
              const isVisible = stepRect.top < windowHeight - 100 && stepRect.bottom > 100;

              if (isVisible) {
                setVisibleSteps(prev => new Set([...prev, index]));
                step.classList.add('visible');
              } else {
                step.classList.remove('visible');
                setVisibleSteps(prev => {
                  const newSet = new Set(prev);
                  newSet.delete(index);
                  return newSet;
                });
              }

              // Add active class based on progress
              if (index === activeStep) {
                step.classList.add('active');
              } else {
                step.classList.remove('active');
              }
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    const carouselInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(carouselInterval);
    };
  }, [activeStep, features.length]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file);
      setBackgroundVideo(videoUrl);
    } else {
      alert('Please select a valid video file.');
    }
  };

  useEffect(() => {
    return () => {
      if (backgroundVideo && backgroundVideo.startsWith('blob:')) {
        URL.revokeObjectURL(backgroundVideo);
      }
    };
  }, [backgroundVideo]);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-amber-950 recruiter-page">
      <Header />
      <SubHeader />
      
      {/* Hero Section */}
      <section className="border border-amber-500 hero-section">
        <div 
          className="video-overlay" 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(2, 20, 71, 0.7)',
            zIndex: 1
          }}
        ></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ opacity: 0.4 }}
        >
          <source src={backgroundVideo || recruitingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-text">
            <h1 className="hero-heading">
              Post jobs and find the perfect candidate in minutes
            </h1>
            <p className="hero-description">
              AI connects new talents and candidates with the right opportunities, instantly.
            </p>
            <div className="hero-cta">
              <p className="hero-cta-text">Find the right Talent with AI</p>
              <button 
                className="explore-button"
                onClick={() => {
                  console.log('Explore button clicked');
                  navigate('/explore');
                  console.log('Navigation triggered');
                }}
              >
                <span>
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </span>
              </button>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
              accept="video/*" 
            />
          </div>
          <div className="hero-image">
            <img 
              src={imagePaths.heroImage}
              alt="Business professional with laptop" 
              style={{
                background: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                borderRadius: '0'
              }}
            />
          </div>
        </div>
      </section>

      {/* Timeline and Features Combined Section */}
      <div className="timeline-features-wrapper">
        {/* Timeline Section */}
        <section ref={timelineRef} className="timeline-section">
          <div className="animated-background">
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
            <div className="floating-hex"></div>
          </div>
          
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            Smart Hiring Process
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0' }}>
            Experience a streamlined recruitment journey powered by AI
          </p>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-progress" style={{ height: `${progress * 100}%` }}></div>
            
            <div className="timeline-step">
              <div className="timeline-image">
                <img src={imagePaths.timeline1} alt="Post & Configure" />
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="step-number">01</div>
                <h3 className="step-title">Post & Configure</h3>
                <p className="step-description">
                  Create detailed job listings with AI-assisted role configuration. 
                  Our system helps you define the perfect candidate profile.
                </p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-content">
                <div className="step-number">02</div>
                <h3 className="step-title">AI Matching</h3>
                <p className="step-description">
                  Our advanced AI algorithms analyze thousands of profiles in real-time, 
                  ensuring the perfect match for your requirements.
                </p>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-image">
                <img src={imagePaths.timeline2} alt="AI Matching Process" />
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-image">
                <img src={imagePaths.timeline3} alt="Smart Interview Process" />
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="step-number">03</div>
                <h3 className="step-title">Smart Interview</h3>
                <p className="step-description">
                  Conduct AI-assisted interviews with integrated assessment tools. 
                  Make data-driven hiring decisions with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            Key Features
          </h2>
          <p className="section-subtitle" style={{ marginTop: '0' }}>
            Discover the powerful tools that make hiring effortless
          </p>
          <div className="features-container">
            <FinalCarousel 
              features={features} 
              currentFeature={currentFeature} 
              setCurrentFeature={setCurrentFeature} 
            />
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Recruiter;




