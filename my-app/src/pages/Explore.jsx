import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Explore = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const techStacks = [
    { name: 'React', color: 'bg-cyan-500 text-white' },
    { name: 'NodeJS', color: 'bg-green-600 text-white' },
    { name: 'Python', color: 'bg-blue-600 text-white' },
    { name: 'Docker', color: 'bg-blue-700 text-white' },
    { name: 'TypeScript', color: 'bg-blue-800 text-white' },
    { name: 'PostgreSQL', color: 'bg-blue-900 text-white' }
  ];

  const jobCards = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      experience: '5+ years experience',
      type: 'Full-time',
      skills: ['React', 'TypeScript', 'GraphQL'],
      skillsMatch: 85,
      experienceMatch: 92,
      featured: true,
      badgeColor: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      experience: '3+ years experience',
      type: 'Full-time',
      skills: ['Node.js', 'React', 'MongoDB'],
      skillsMatch: 78,
      experienceMatch: 88,
      featured: true,
      badgeColor: 'bg-blue-600'
    },
    {
      id: 3,
      title: 'Senior Frontend Developer',
      company: 'InnovateLabs',
      experience: '4+ years experience',
      type: 'Remote',
      skills: ['Vue.js', 'Python', 'AWS'],
      skillsMatch: 91,
      experienceMatch: 95,
      featured: true,
      badgeColor: 'bg-orange-500'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'DevStudio',
      experience: '2+ years experience',
      type: 'Hybrid',
      skills: ['Angular', 'Java', 'Spring'],
      skillsMatch: 82,
      experienceMatch: 86,
      featured: true,
      badgeColor: 'bg-blue-600'
    },
    {
      id: 5,
      title: 'Backend Developer',
      company: 'CloudTech',
      experience: '4+ years experience',
      type: 'Remote',
      skills: ['Python', 'Django', 'PostgreSQL'],
      skillsMatch: 88,
      experienceMatch: 90,
      featured: true,
      badgeColor: 'bg-green-600'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'ScaleUp',
      experience: '3+ years experience',
      type: 'Full-time',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      skillsMatch: 93,
      experienceMatch: 87,
      featured: true,
      badgeColor: 'bg-purple-600'
    },
    {
      id: 7,
      title: 'Mobile Developer',
      company: 'AppCorp',
      experience: '2+ years experience',
      type: 'Contract',
      skills: ['React Native', 'Swift', 'Kotlin'],
      skillsMatch: 79,
      experienceMatch: 84,
      featured: true,
      badgeColor: 'bg-indigo-600'
    },
    {
      id: 8,
      title: 'Data Scientist',
      company: 'DataLabs',
      experience: '5+ years experience',
      type: 'Full-time',
      skills: ['Python', 'TensorFlow', 'SQL'],
      skillsMatch: 86,
      experienceMatch: 94,
      featured: true,
      badgeColor: 'bg-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Geometric background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <header className="relative bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="w-full px-2 sm:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Hive</span>
              <span className="text-xl sm:text-2xl font-bold text-red-500">X</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">perience</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setActiveButton(activeButton === 'login' ? null : 'login')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
                  activeButton === 'login' 
                    ? 'text-white bg-red-500 border-red-500' 
                    : 'text-black hover:text-white hover:bg-red-500 border-transparent hover:border-red-500'
                }`}
              >
                login
              </button>
              <button 
                onClick={() => setActiveButton(activeButton === 'register' ? null : 'register')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
                  activeButton === 'register' 
                    ? 'text-white bg-red-500 border-red-500' 
                    : 'text-black hover:text-white hover:bg-red-500 border-transparent hover:border-red-500'
                }`}
              >
                Register
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-white py-4">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => setActiveButton(activeButton === 'login' ? null : 'login')}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-all duration-200 border ${
                    activeButton === 'login' 
                      ? 'text-white bg-red-500 border-red-500' 
                      : 'text-black hover:text-white hover:bg-red-500 border-transparent hover:border-red-500'
                  }`}
                >
                  login
                </button>
                <button 
                  onClick={() => setActiveButton(activeButton === 'register' ? null : 'register')}
                  className={`px-4 py-2 rounded-md text-sm font-medium w-fit transition-all duration-200 border ${
                    activeButton === 'register' 
                      ? 'text-white bg-red-500 border-red-500' 
                      : 'text-black hover:text-white hover:bg-red-500 border-transparent hover:border-red-500'
                  }`}
                >
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-white py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-none mx-auto text-center px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Experience the Future of Recruitment
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Try our AI-powered platform without signing up
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 sm:gap-0">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-colors w-full sm:w-auto">
              Preview Talent
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-md font-medium transition-colors w-full sm:w-auto">
              Try Direct Matching
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-full px-2 sm:px-4 py-6 sm:py-8">
        <div className="max-w-none">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Preview Top Talent</h2>
          
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none">
                    <option>All Roles</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Full Stack Developer</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none">
                    <option>All Levels</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none">
                    <option>All Locations</option>
                    <option>New York</option>
                    <option>San Francisco</option>
                    <option>Remote</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none">
                    <option>All Types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none">
                    <option>Any Range</option>
                    <option>$50k - $80k</option>
                    <option>$80k - $120k</option>
                    <option>$120k+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <div className="relative">
                <select className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none">
                  <option>Any Time</option>
                  <option>Immediately</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tech Stack</label>
              <div className="flex flex-wrap gap-2">
                {techStacks.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-4 sm:gap-6">
            {jobCards.map((job) => (
              <div 
                key={job.id} 
                className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-block px-2 py-1 ${job.badgeColor} text-white text-xs rounded font-medium`}>
                          Featured
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{job.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{job.company}</p>
                      <p className="text-xs text-gray-500">{job.experience}</p>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="font-medium">Skills:</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-gray-600 mb-1">
                      <span className="font-medium">Work Type:</span> {job.type}
                    </div>
                    
                    <div className="text-xs text-gray-600">
                      <span className="font-medium">Full-time Contract</span>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">Skills Match</span>
                        <span className="text-red-600 font-medium">{job.skillsMatch}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-500 ease-out" 
                          style={{width: `${job.skillsMatch}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">Experience</span>
                        <span className="text-green-600 font-medium">{job.experienceMatch}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-out" 
                          style={{width: `${job.experienceMatch}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-3 rounded text-sm font-medium transition-colors duration-200">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;