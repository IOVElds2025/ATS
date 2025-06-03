import React from 'react';
import recruitingVideo from '../assets/video/recruiting-video.mp4';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: '100vh' }}>
      {/* Video Background with Overlay */}
      <div 
        className="absolute inset-0"
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

      {/* Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <h1 className="text-5xl font-bold mb-6">
          Discover Your Next Career Move
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Connect with opportunities that align with your expertise and ambitions
        </p>
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
