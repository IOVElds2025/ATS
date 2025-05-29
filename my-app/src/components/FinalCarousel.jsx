import React, { useState, useEffect } from 'react';

// The FinalCarousel component - side-by-side cards with blur effect exactly matching your screenshot
const FinalCarousel = ({ features, currentFeature, setCurrentFeature }) => {
  // Define CSS styles directly in the component
  const carouselStyles = `
    /* Base styling for carousel container */
    .features-carousel {
      padding: 3rem 1rem;
      overflow: hidden;
      position: relative;
    }
    
    /* Card container styling */
    .carousel-container {
      position: relative;
      height: 35rem;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    /* Cards container styling */
    .cards-container {
      position: relative;
      width: 100%;
      height: 24rem;
      z-index: 2;
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
      font-size: 2rem;
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
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
      z-index: 2;
      margin-top: 3rem;
    }
    
    /* Indicator dot base */
    .indicator-dot {
      height: 0.5rem;
      width: 0.5rem;
      border: none;
      border-radius: 50%;
      margin: 0;
      padding: 0;
      background-color: #d1d5db;
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    /* Active indicator styling */
    .indicator-active {
      width: 1.5rem;
      background-color: #ef4444;
      border-radius: 9999px;
    }
    
    /* Inactive indicator styling */
    .indicator-inactive {
      width: 0.5rem;
      background-color: #d1d5db;
    }
  `;

  return (
    <>
      <style>{carouselStyles}</style>
      
      <div className="features-carousel">
        <div className="carousel-container">
          <div className="cards-container">
            {/* Render all feature cards */}
            {features.map((feature, index) => {
              let cardPositionClass = '';
              
              if (index === currentFeature) {
                cardPositionClass = 'card-active';
              } else if (
                index === currentFeature - 1 || 
                (currentFeature === 0 && index === features.length - 1)
              ) {
                cardPositionClass = 'card-left';
              } else if (
                index === currentFeature + 1 || 
                (currentFeature === features.length - 1 && index === 0)
              ) {
                cardPositionClass = 'card-right';
              } else {
                cardPositionClass = 'card-hidden';
              }
              
              return (
                <div key={index} className={`feature-card ${cardPositionClass}`}>
                  <div className={`feature-icon ${feature.iconClass}`}>{feature.icon}</div>
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
                  index === currentFeature ? 'indicator-active' : 'indicator-inactive'
                }`}
                onClick={() => setCurrentFeature(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalCarousel;