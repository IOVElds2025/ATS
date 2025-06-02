import React, { useState, useEffect } from 'react';

// The FinalCarousel component - side-by-side cards with blur effect exactly matching your screenshot
const FinalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card (Smart Candidate Matching)
  
  // Features data with icons matching your screenshot
  const features = [
    {
      icon: (
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
            <path d="M18 20V10M12 20V4M6 20v-6" />
          </svg>
        </div>
      ),
      title: "Insights & Analytics",
      description: "Make data-driven hiring decisions with comprehensive analytics. Track hiring pipeline performance, identify areas of improvement, and measure your overall performance in real-time."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      ),
      title: "Smart Candidate Matching",
      description: "Our AI-powered system analyzes thousands of candidates' skill sets and experience to find the perfect match for your role. We surface only qualified candidates who meet your specific criteria."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      ),
      title: "Faster Time-to-Hire",
      description: "Cut your hiring time by up to 40% with our streamlined processes. Quick candidate sourcing, automated screening, and integrated tools reduce delays between application and offer."
    }
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  // Handle dot indicator clicks
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Define CSS styles directly in the component
  const carouselStyles = `
    /* Base styling for carousel container */
    .features-carousel {
      // background-color: #f3f4f6;
      padding: 3rem 1rem;
      overflow: hidden;
    }
    
    /* Title styling */
    .features-title {
      font-size: 1.875rem;
      font-weight: 700;
      text-align: center;
      color: #111827;
      margin-bottom: 3rem;
    }
    
    /* Card container styling */
    .carousel-container {
      position: relative;
      height: 30rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    /* Card base styling */
    .feature-card {
      position: absolute;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      width: 26rem;
      height: 24rem;
      background: white;
      border-radius: 0.75rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    /* Icon container */
    .feature-icon {
      display: inline-flex;
      margin-bottom: 2rem;
      transform: scale(1.5);
    }
    
    /* Card title */
    .feature-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1.5rem;
      width: 100%;
    }
    
    /* Card description */
    .feature-description {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.6;
      width: 100%;
    }
    
    /* Active card styling (center position) */
    .card-active {
      left: 50%;
      transform: translateX(-50%);
      z-index: 30;
      opacity: 1;
      filter: blur(0);
    }
    
    /* Left card styling */
    .card-left {
      left: 25%;
      transform: translateX(-50%);
      z-index: 20;
      opacity: 0.7;
      filter: blur(2px);
    }
    
    /* Right card styling */
    .card-right {
      left: 75%;
      transform: translateX(-50%);
      z-index: 20;
      opacity: 0.7;
      filter: blur(2px);
    }
    
    /* Hidden card styling */
    .card-hidden {
      opacity: 0;
      z-index: 10;
      left: 50%;
      transform: translateX(-50%);
    }
    
    /* Indicators container */
    .carousel-indicators {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }
    
    /* Indicator dot base */
    .indicator-dot {
      height: 0.5rem;
      border-radius: 9999px;
      margin: 0 0.25rem;
      background-color: #d1d5db;
      transition: all 0.3s ease;
    }
    
    /* Active indicator styling */
    .indicator-active {
      width: 2rem;
      background-color: #ef4444;
    }
    
    /* Inactive indicator styling */
    .indicator-inactive {
      width: 0.5rem;
      cursor: pointer;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .feature-card {
        width: 18rem;
      }
      
      .card-left {
        left: 15%;
      }
      
      .card-right {
        left: 85%;
      }
    }
    
    @media (max-width: 640px) {
      .feature-card {
        width: 16rem;
      }
      
      .card-left, .card-right {
        opacity: 0.5;
      }
    }
  `;

  return (
    <>
      <style>{carouselStyles}</style>
      
      <div className="features-carousel">
        
        <div className="carousel-container">
          {/* Render all feature cards */}
          {features.map((feature, index) => {
            // Determine the card position class based on active index
            let cardPositionClass = '';
            
            if (index === activeIndex) {
              cardPositionClass = 'card-active';
            } else if (
              index === activeIndex - 1 || 
              (activeIndex === 0 && index === features.length - 1)
            ) {
              cardPositionClass = 'card-left';
            } else if (
              index === activeIndex + 1 || 
              (activeIndex === features.length - 1 && index === 0)
            ) {
              cardPositionClass = 'card-right';
            } else {
              cardPositionClass = 'card-hidden';
            }
            
            return (
              <div key={index} className={`feature-card ${cardPositionClass}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Indicator dots */}
        <div className="carousel-indicators">
          {features.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${
                index === activeIndex ? 'indicator-active' : 'indicator-inactive'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FinalCarousel;