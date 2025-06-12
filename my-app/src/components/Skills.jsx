import React, { useState } from 'react';

const Skills = ({ skills = [], onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const addSkill = (value) => {
    if (!value.trim()) return;
    if (!skills.includes(value.trim())) {
      onChange([...skills, value.trim()]);
    }
    setInputValue('');
  };

  const removeSkill = (skillToRemove) => {
    onChange(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addSkill(inputValue);
    }
  };

  return (
    <div className="mb-8 flex flex-row w-full">
      <h3 className="text-xl font-bold w-1/2">Skills</h3>
      <div className='flex flex-col items-end w-1/2'>
        <input
          type="text"
          placeholder="Enter your skills"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#E84435] text-white px-4 py-1 rounded-lg font-semibold flex items-center"
            >
              {skill}
              <span
                className="ml-2 cursor-pointer"
                onClick={() => removeSkill(skill)}
              >
                ×
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 