import React from 'react';

const PersonalInfo = ({ data = [], onChange }) => {
  const handleChange = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    onChange(newData);
  };

  return (
    <div className="mb-8 flex flex-row">
      <h3 className="text-xl font-bold mb-4 w-1/2">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-1/2">
        <div>
          <label className="block font-semibold mb-1">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            value={data[0] || ''}
            onChange={(e) => handleChange(0, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            required
            value={data[1] || ''}
            onChange={(e) => handleChange(1, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>
        <div className="flex gap-2">
          <div>
            <label className="block font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
            <select
              required
              value={data[2] || '+212'}
              onChange={(e) => handleChange(2, e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option value="+212">+212</option>
              <option value="+1">+1</option>
              <option value="+33">+33</option>
            </select>
          </div>
          <input
            type="text"
            required
            value={data[3] || ''}
            onChange={(e) => handleChange(3, e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-50 mt-6"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Location <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            value={data[4] || ''}
            onChange={(e) => handleChange(4, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Job title <span className="text-red-500">*</span></label>
          <select
            required
            value={data[5] || 'Frontend Developer'}
            onChange={(e) => handleChange(5, e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
          >
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo; 