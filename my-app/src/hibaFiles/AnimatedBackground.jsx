import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimatedBackground = () => {
  const navigate = useNavigate();
  const [isExploring, setIsExploring] = useState(false);
  
  const handleExploreClick = () => {
    setIsExploring(true);
    // Navigate to the dashboard page after a short delay for animation
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Three.js container would go here in a real implementation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900">
        {/* Animated particles effect (simplified with CSS) */}
        <div className="stars">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content overlay */}
      <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ${isExploring ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 font-sans text-5xl font-bold text-white md:text-7xl">
            Find Top IT Talent
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
            Connect with the best IT specialists for your projects. Our platform matches you with pre-vetted professionals ready to elevate your team.
          </p>
          <button 
            onClick={handleExploreClick}
            className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-indigo-900"
          >
            Explore Candidates
          </button>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-6">
        <div className="text-2xl font-bold text-white">IT Talent Hub</div>
        <div className="flex gap-8">
          <a href="#" className="text-lg text-white hover:text-gray-300">About</a>
          <a href="#" className="text-lg text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-lg text-white hover:text-gray-300">Contact</a>
          <a href="#" className="text-lg text-white hover:text-gray-300">Login</a>
        </div>
      </nav>

      {/* CSS for the stars animation */}
      <style jsx>{`
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          animation: pulse 3s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;