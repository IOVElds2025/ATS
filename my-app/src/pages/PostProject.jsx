import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PostProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialDescription = location.state?.description || '';

  const [projectData, setProjectData] = useState({
    title: '',
    description: initialDescription,
    projectType: 'web',
    technologies: '',
    budget: '',
    timeline: '',
    features: '',
    additionalInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Project Data:', projectData);
    // Navigate to success page or project listing
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Post a Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={projectData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={projectData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                value={projectData.projectType}
                onChange={handleChange}
              >
                <option value="web">Web Application</option>
                <option value="mobile">Mobile Application</option>
                <option value="desktop">Desktop Application</option>
                <option value="ai">AI/ML Project</option>
                <option value="blockchain">Blockchain Project</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                Preferred Technologies
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="e.g., React Native, Node.js, MongoDB"
                value={projectData.technologies}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                  Budget Range
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g., $5,000 - $10,000"
                  value={projectData.budget}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                  Expected Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g., 3 months"
                  value={projectData.timeline}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="features" className="block text-sm font-medium text-gray-700">
                Key Features
              </label>
              <textarea
                id="features"
                name="features"
                rows={3}
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="List the main features you want in your project"
                value={projectData.features}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Any other details or requirements"
                value={projectData.additionalInfo}
                onChange={handleChange}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Post Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProject; 