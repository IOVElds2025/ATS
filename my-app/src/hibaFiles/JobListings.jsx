import React, { useState } from 'react';
import Header from './Header';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaFilter } from 'react-icons/fa';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "Looking for an experienced full stack developer with React and Node.js expertise.",
      tags: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "Cloud Systems Inc",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      description: "Seeking a DevOps engineer to manage our cloud infrastructure and CI/CD pipelines.",
      tags: ["AWS", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Digital",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Join our design team to create beautiful and intuitive user interfaces.",
      tags: ["Figma", "Adobe XD", "Sketch", "UI Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
              <FaFilter />
              Filter Results
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
              </div>
              
              <div className="mt-4 flex items-center gap-4 text-gray-500">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBriefcase />
                  <span>{job.salary}</span>
                </div>
              </div>
              
              <p className="mt-4 text-gray-600">{job.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="mt-4 w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobListings; 