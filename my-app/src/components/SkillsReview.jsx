import React from 'react';
import { FaPen } from "react-icons/fa";

const SkillsReview = ({ skills = [] }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Skills</h3>
        <button className="text-[#E84435] hover:text-red-700">
          <FaPen />
        </button>
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-[#E84435] text-white px-4 py-2 rounded-lg font-semibold">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsReview; 