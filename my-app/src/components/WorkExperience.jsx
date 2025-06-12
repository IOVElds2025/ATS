import React from 'react';

const WorkExperience = ({ experiences = [], onChange }) => {
  const addExperience = () => {
    onChange([...experiences, ['', '', '', '', '']]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    onChange(newExperiences);
  };

  const updateExperience = (index, fieldIndex, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][fieldIndex] = value;
    onChange(newExperiences);
  };

  return (
    <div className="mb-8 flex flex-row w-full">
      <h3 className="text-xl font-bold w-1/2">Work Experience</h3>
      <div className='flex flex-col items-end w-1/2'>
          <button
            onClick={addExperience}
            className="bg-[#E84435] text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 flex items-center gap-2"
          >
            <span className="text-2xl leading-none">+</span> Add Experience
          </button>
      {experiences.map((exp, index) => (
        <div key={index} className="w-full justify-end items-end flex-col flex gap-2 mb-4 ">
          <div className="flex flex-col gap-2">
            <div>
              <label className="block font-semibold mb-1">Company <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                value={exp[0] || ''}
                onChange={(e) => updateExperience(index, 0, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Position <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                value={exp[1] || ''}
                onChange={(e) => updateExperience(index, 1, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Duration <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="DD/MM/YYYY"
                  value={exp[2] || ''}
                  onChange={(e) => updateExperience(index, 2, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <span className='text-gray-700 text-bold'>to</span>
              <div className="flex-1 mt-6">
                <input
                  type="text"
                  required
                  placeholder="DD/MM/YYYY"
                  value={exp[3] || ''}
                  onChange={(e) => updateExperience(index, 3, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                value={exp[4] || ''}
                onChange={(e) => updateExperience(index, 4, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>
          <button
            onClick={() => removeExperience(index)}
            className="text-white font-semibold text-md bg-[#E84435] rounded-md w-full py-2 px-4"
            title="Remove"
          >
            Remove
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default WorkExperience; 