import React from 'react';

const Education = ({ education = [], onChange }) => {
  const addEducation = () => {
    onChange([...education, ['', '', '', '', '']]);
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    onChange(newEducation);
  };

  const updateEducation = (index, fieldIndex, value) => {
    const newEducation = [...education];
    newEducation[index][fieldIndex] = value;
    onChange(newEducation);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Education</h3>
        <button
          onClick={addEducation}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 flex items-center gap-2"
        >
          <span className="text-xl leading-none">+</span> Add Education
        </button>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="col-span-2 flex items-center gap-4 mb-4">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1">Institution <span className="text-red-500">*</span></label>
              <select
                required
                value={edu[0] || 'University of Example'}
                onChange={(e) => updateEducation(index, 0, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              >
                <option value="University of Example">University of Example</option>
                <option value="MIT">MIT</option>
                <option value="Harvard">Harvard</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Degree <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                value={edu[1] || ''}
                onChange={(e) => updateEducation(index, 1, e.target.value)}
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
                  value={edu[2] || ''}
                  onChange={(e) => updateEducation(index, 2, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div className="flex-1 mt-6">
                <input
                  type="text"
                  required
                  placeholder="DD/MM/YYYY"
                  value={edu[3] || ''}
                  onChange={(e) => updateEducation(index, 3, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                value={edu[4] || ''}
                onChange={(e) => updateEducation(index, 4, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>
          <button
            onClick={() => removeEducation(index)}
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

export default Education; 