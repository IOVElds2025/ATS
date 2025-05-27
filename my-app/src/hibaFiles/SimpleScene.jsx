import React from 'react';
import { Link } from 'react-router-dom';

// A simpler alternative to the Three.js scene that uses CSS only
export default function SimpleScene() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#050b2e] to-[#0d1442] relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Planet 1 - Hive */}
      <Link to="/HiveExperience">
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:from-blue-300 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
          style={{
            left: '20%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_0%,transparent_70%)]"></div>
          </div>
        </div>
      </Link>
      
      {/* Planet 2 - Nove */}
      <Link to="/NoveExperience">
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-pink-400 to-purple-700 hover:from-pink-300 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
          style={{
            right: '20%',
            top: '50%',
            transform: 'translate(50%, -50%)',
            animation: 'float 6s ease-in-out infinite reverse'
          }}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white_0%,transparent_70%)]"></div>
          </div>
        </div>
      </Link>
      
      {/* Decorative small planets */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500"
        style={{
          left: '10%',
          top: '30%',
          animation: 'float 4s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-red-500"
        style={{
          right: '15%',
          bottom: '20%',
          animation: 'float 3s ease-in-out infinite reverse'
        }}
      ></div>
      
      {/* Add this to your global CSS or style tag */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -60%); }
          100% { transform: translate(-50%, -50%); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}