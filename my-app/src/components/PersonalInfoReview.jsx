import React from 'react';
import { FaPen } from "react-icons/fa";

const PersonalInfoReview = ({ data = [] }) => {
  const labels = ['First Name', 'Last Name', 'Phone', 'Email', 'Location', 'Job title'];

  return (
    <div className="mb-8 flex flex-col gap-4 font-bold">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Personal Information</h3>
        <button className="text-[#E84435] hover:text-red-700 cursor-pointer">
          <FaPen />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
        {data.map((value, index) => (
          <div key={index}>
            {value || 'Not provided'} 
            <div className="text-xs text-gray-500">{labels[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfoReview; 