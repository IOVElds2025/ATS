import React from 'react';
import { FaPen } from "react-icons/fa";


const LanguagesReview = ({ languages = [] }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Languages</h3>
        <button className="text-[#E84435] hover:text-red-700">
          <FaPen />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {languages.map((language, index) => (
          <span key={index} className="bg-[#E84435] text-white px-4 py-2 rounded-lg font-semibold">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguagesReview; 