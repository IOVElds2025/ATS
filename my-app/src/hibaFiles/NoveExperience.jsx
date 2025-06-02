import React from 'react';
import { Link } from 'react-router-dom';

const NoveExperience = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span>Nove</span>
          <span className="text-blue-400">X</span>
          <span>perience</span>
        </h1>
        <p className="text-xl mb-8">This is the NoveXperience page</p>
        <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NoveExperience;