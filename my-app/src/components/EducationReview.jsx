import React from 'react';
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import School from '../assets/icons/graduation-cap.png'


const EducationReview = ({ education = [] }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Education</h3>
      </div>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4 items-start bg-[#FFF6F6] rounded-xl p-4 relative">
            <div className="flex-shrink-0">
              <div className="bg-[#E84435] rounded-lg p-3">
                <img src={School} alt="work" className='w-6 h-6'/>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-base">{edu[1] || 'Degree'}</div>
                  <div className="text-gray-700">{edu[0] || 'Institution'}</div>
                  <div className="text-gray-500 text-sm">
                    {edu[2] || 'Start Date'} - {edu[3] || 'End Date'}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-[#E84435] hover:text-red-700 cursor-pointer">
                    <FaRegTrashAlt />
                  </button>
                  <button className="text-[#E84435] hover:text-red-700 cursor-pointer">
                    <FaPen />
                  </button>
                </div>
              </div>
              {edu[4] && (
                <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
                  {edu[4].split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationReview; 