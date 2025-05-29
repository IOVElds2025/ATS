import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PostJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialDescription = location.state?.description || '';

  const [jobData, setJobData] = useState({
    title: '',
    description: initialDescription,
    requiredSkills: '',
    experienceLevel: 'entry',
    employmentType: 'full-time',
    salary: '',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Job Data:', jobData);
    // Navigate to success page or job listing
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Post a Job
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={jobData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={jobData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="requiredSkills" className="block text-sm font-medium text-gray-700">
                Required Skills
              </label>
              <input
                type="text"
                id="requiredSkills"
                name="requiredSkills"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="e.g., React, Node.js, Python"
                value={jobData.requiredSkills}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={jobData.experienceLevel}
                  onChange={handleChange}
                >
                  <option value="entry">Entry Level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="senior">Senior</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
                  Employment Type
                </label>
                <select
                  id="employmentType"
                  name="employmentType"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={jobData.employmentType}
                  onChange={handleChange}
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                  Salary Range
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g., $50,000 - $70,000"
                  value={jobData.salary}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g., Remote, New York, NY"
                  value={jobData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob; 