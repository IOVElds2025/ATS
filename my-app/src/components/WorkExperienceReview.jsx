import React from 'react';
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import Work from '../assets/icons/briefcase.png'


const WorkExperienceReview = ({ experiences = [] }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Work Experience</h3>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 items-start bg-[#FFF6F6] rounded-xl p-4 relative">
            <div className="flex-shrink-0">
              <div className="bg-[#E84435] rounded-lg p-3">
                <img src={Work} alt="work" className='w-6 h-6'/>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-base">{exp[1] || 'Position'}</div>
                  <div className="text-gray-700">{exp[0] || 'Company'}</div>
                  <div className="text-gray-500 text-sm">
                    {exp[2] || 'Start Date'} - {exp[3] || 'End Date'}
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
              {exp[4] && (
                <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
                  {exp[4].split('\n').map((line, i) => (
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

export default WorkExperienceReview; 