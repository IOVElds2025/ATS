import React, { useState, useEffect } from 'react';
import { Briefcase, Star, Search, ChevronDown } from 'lucide-react';
import backgroundImage from '../assets/charachters/feature-background.png';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const ClientDashboard = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [requirements, setRequirements] = useState({
    description: '',
    skills: [],
    experience: '',
    budget: ''
  });
  const [matchingProfiles, setMatchingProfiles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const handleSearch = async () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setMatchingProfiles([
        {
          id: 1,
          name: "John Doe",
          role: "Senior Frontend Developer",
          skills: ["React", "TypeScript", "Node.js"],
          experience: "5 years",
          rating: 4.8
        },
      ]);
    }, 1500);
  };

  const handleSkillInput = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      e.preventDefault();
      const newSkill = e.target.value.trim();
      if (!requirements.skills.includes(newSkill)) {
        setRequirements(prev => ({
          ...prev,
          skills: [...prev.skills, newSkill]
        }));
      }
      e.target.value = '';
    }
  };

  const removeSkill = (skillToRemove) => {
    setRequirements(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="flex min-h-screen relative">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Header
          userName="Ayoub Rahmoun"
          onSidebarToggle={() => setSidebarOpen((open) => !open)}
          sidebarOpen={sidebarOpen}
          actionButtons={
            <>
              <button className="bg-white text-blue-800 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-50 mr-3">Post a Job</button>
              <button className="bg-blue-100 text-blue-800 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-200">View All Applications</button>
            </>
          }
        />
        {/* Overlay for mobile when sidebar is open */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden" onClick={() => setSidebarOpen(false)}></div>
        )}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="min-h-screen bg-white/80 py-8 px-4">
            <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-12 relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent rounded-3xl transform -skew-y-2"></div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">What are you looking for?</h1>
                <p className="text-gray-600 text-lg mb-8">Choose the type of talent you need and describe your requirements</p>
                <ChevronDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
              </div>

              {/* Selection Cards */}
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
                {/* Expertise Card */}
                <div
                  onClick={() => setSelectedType('expertise')}
                  className={`group bg-white rounded-xl border-2 ${
                    selectedType === 'expertise' 
                      ? 'border-blue-500 ring-2 ring-blue-200 shadow-blue-200/50' 
                      : 'border-blue-200 hover:border-blue-300'
                  } p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Find Expertise</h3>
                  <p className="text-gray-600">Looking for specific skills or domain knowledge</p>
                </div>

                {/* Project Card */}
                <div
                  onClick={() => setSelectedType('project')}
                  className={`group bg-white rounded-xl border-2 ${
                    selectedType === 'project' 
                      ? 'border-green-500 ring-2 ring-green-200 shadow-green-200/50' 
                      : 'border-green-200 hover:border-green-300'
                  } p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Project-Based</h3>
                  <p className="text-gray-600">Need talent for a specific project or timeframe</p>
                </div>
              </div>

              {/* Requirements Form */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-shadow hover:shadow-xl mb-8">
                <div className="space-y-6">
                  {/* Description */}
                  <div className="transition-all duration-300 transform hover:scale-[1.01]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {selectedType === 'expertise' 
                        ? 'What kind of expertise are you looking for?' 
                        : selectedType === 'project'
                        ? 'Describe your project'
                        : "Describe what you're looking for"}
                    </label>
                    <textarea
                      value={requirements.description}
                      onChange={(e) => setRequirements(prev => ({...prev, description: e.target.value}))}
                      className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-black transition-all duration-300 hover:shadow-md"
                      placeholder={selectedType === 'expertise'
                        ? "e.g., Need a senior frontend developer with strong React experience..."
                        : selectedType === 'project'
                        ? "e.g., Building a new e-commerce platform with modern technologies..."
                        : "Select a category and describe your requirements..."}
                    />
                  </div>

                  {/* Required Skills */}
                  <div className="transition-all duration-300 transform hover:scale-[1.01]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Required Skills (Press Enter to add)
                    </label>
                    <input
                      type="text"
                      onKeyDown={handleSkillInput}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black transition-all duration-300 hover:shadow-md"
                      placeholder="e.g., React, Node.js, Python..."
                    />
                    <div className="mt-3 flex flex-wrap gap-2">
                      {requirements.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center group hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-blue-400 hover:text-blue-600 transition-colors"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Experience Level */}
                    <div className="transition-all duration-300 transform hover:scale-[1.01]">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Required Experience
                      </label>
                      <select
                        value={requirements.experience}
                        onChange={(e) => setRequirements(prev => ({...prev, experience: e.target.value}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black transition-all duration-300 hover:shadow-md appearance-none"
                      >
                        <option value="">Select experience level</option>
                        <option value="junior">Junior (1-2 years)</option>
                        <option value="mid">Mid-Level (3-5 years)</option>
                        <option value="senior">Senior (5+ years)</option>
                        <option value="lead">Lead (8+ years)</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="transition-all duration-300 transform hover:scale-[1.01]">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <input
                        type="text"
                        value={requirements.budget}
                        onChange={(e) => setRequirements(prev => ({...prev, budget: e.target.value}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black transition-all duration-300 hover:shadow-md"
                        placeholder="e.g., $5000-$10000 or $50-$75/hour"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="max-w-2xl mx-auto">
                <button
                  onClick={handleSearch}
                  disabled={isSearching || !requirements.description || requirements.skills.length === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:transform-none text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
                >
                  {isSearching ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Find Matches</span>
                    </>
                  )}
                </button>
              </div>

              {/* Matching Profiles */}
              {matchingProfiles.length > 0 && (
                <div className="mt-8 animate-fadeIn">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <span className="w-2 h-8 rounded-full mr-3 bg-purple-500"></span>
                    Matching Profiles
                  </h3>
                  <div className="grid gap-6">
                    {matchingProfiles.map((profile) => (
                      <div
                        key={profile.id}
                        className="bg-white rounded-lg shadow-md p-6 flex items-start justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{profile.name}</h4>
                          <p className="text-gray-600">{profile.role}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {profile.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm transition-colors hover:bg-gray-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            Experience: {profile.experience}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-blue-600">{profile.rating}/5.0</div>
                          <button className="mt-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-md hover:-translate-y-0.5">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;