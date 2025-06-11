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
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Work Experience</h3>
        <button
          onClick={addExperience}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 flex items-center gap-2"
        >
          <span className="text-xl leading-none">+</span> Add Experience
        </button>
      </div>

      {experiences.map((exp, index) => (
        <div key={index} className="col-span-2 flex items-center gap-4 mb-4">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="flex gap-2">
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
            className="text-red-600 font-bold text-xl"
            title="Remove"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience; 