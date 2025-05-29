import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Explore() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('match');

  const talents = [
    { 
      name: "Alexandra Chen", 
      role: "Senior AI/ML Engineer", 
      exp: 7, 
      rate: 85, 
      skills: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"], 
      match: 98,
      availability: "Available",
      location: "San Francisco, CA",
      verified: true
    },
    { 
      name: "Marcus Johnson", 
      role: "Full Stack Developer", 
      exp: 5, 
      rate: 70, 
      skills: ["React", "Node.js", "GraphQL", "PostgreSQL", "TypeScript"], 
      match: 94,
      availability: "2 weeks notice",
      location: "New York, NY",
      verified: true
    },
    { 
      name: "Sarah Kim", 
      role: "DevOps Architect", 
      exp: 8, 
      rate: 95, 
      skills: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Python"], 
      match: 96,
      availability: "Available",
      location: "Seattle, WA",
      verified: true
    },
    { 
      name: "David Rodriguez", 
      role: "Senior Frontend Developer", 
      exp: 6, 
      rate: 75, 
      skills: ["React", "Vue.js", "TypeScript", "Figma", "Tailwind"], 
      match: 92,
      availability: "Available",
      location: "Austin, TX",
      verified: true
    },
    { 
      name: "Emily Foster", 
      role: "Product Designer", 
      exp: 4, 
      rate: 65, 
      skills: ["Figma", "Sketch", "Prototyping", "User Research", "Design Systems"], 
      match: 89,
      availability: "1 week notice",
      location: "Los Angeles, CA",
      verified: true
    },
    { 
      name: "James Wilson", 
      role: "Backend Engineer", 
      exp: 9, 
      rate: 90, 
      skills: ["Java", "Spring Boot", "Microservices", "Redis", "MongoDB"], 
      match: 95,
      availability: "Available",
      location: "Chicago, IL",
      verified: true
    }
  ];

  const filterCategories = [
    { name: "All Roles", options: ["Frontend", "Backend", "Full Stack", "DevOps", "AI/ML", "Design"] },
    { name: "Experience", options: ["Junior (0-2)", "Mid (3-5)", "Senior (6-10)", "Lead (10+)"] },
    { name: "Location", options: ["San Francisco", "New York", "Seattle", "Austin", "Remote"] },
    { name: "Rate Range", options: ["$50-70", "$70-90", "$90-120", "$120+"] }
  ];

  const techStack = ["React", "Python", "TypeScript", "AWS", "Node.js", "Docker", "Kubernetes", "PostgreSQL"];

  return (
    <div className="bg-gray-50 min-h-screen w-full font-sans">
      {/* Professional Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-8xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold text-gray-900"
              >
                Hiv<span className="text-blue-600">experience</span>
              </motion.div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Talent</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Projects</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Teams</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Enterprise</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 font-medium">Sign In</button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Compact but Impactful */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 border-b">
        <div className="max-w-8xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Find Elite Tech Talent
                <span className="text-blue-600"> Instantly</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                AI-powered matching connects you with pre-vetted developers, designers, and technical experts in minutes, not months.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                  Browse Talent
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Post a Project
                </button>
              </motion.div>
            </div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="text-sm text-gray-500 mb-4">Live Talent Metrics</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50K+</div>
                    <div className="text-gray-600">Verified Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">4.9</div>
                    <div className="text-gray-600">Avg Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">24h</div>
                    <div className="text-gray-600">Avg Match Time</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Filters - Full Width Utilization */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-8xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Talent</h2>
            <div className="flex items-center space-x-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="match">Best Match</option>
                <option value="rate">Hourly Rate</option>
                <option value="exp">Experience</option>
                <option value="availability">Availability</option>
              </select>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 text-sm font-medium ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Grid
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 text-sm font-medium border-l ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {filterCategories.map((category, idx) => (
              <select key={idx} className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>{category.name}</option>
                {category.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const newFilters = new Set(selectedFilters);
                  if (newFilters.has(tech)) {
                    newFilters.delete(tech);
                  } else {
                    newFilters.add(tech);
                  }
                  setSelectedFilters(newFilters);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilters.has(tech)
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Grid - Optimized Space Usage */}
      <section className="py-8">
        <div className="max-w-8xl mx-auto px-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {talents.map((talent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {talent.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{talent.name}</h3>
                        <p className="text-sm text-gray-600">{talent.role}</p>
                      </div>
                    </div>
                    {talent.verified && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{talent.exp} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rate:</span>
                      <span className="font-medium text-green-600">${talent.rate}/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Match:</span>
                      <span className="font-medium text-blue-600">{talent.match}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`font-medium ${talent.availability === 'Available' ? 'text-green-600' : 'text-orange-600'}`}>
                        {talent.availability}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {talent.skills.slice(0, 3).map((skill, sidx) => (
                      <span key={sidx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                    {talent.skills.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        +{talent.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      View Profile
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      💬
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {talents.map((talent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {talent.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{talent.name}</h3>
                        <p className="text-gray-600">{talent.role}</p>
                        <p className="text-sm text-gray-500">{talent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{talent.exp} years</div>
                        <div className="text-gray-500">Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-600">${talent.rate}/hr</div>
                        <div className="text-gray-500">Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{talent.match}%</div>
                        <div className="text-gray-500">Match</div>
                      </div>
                      <div className="text-center">
                        <div className={`font-semibold ${talent.availability === 'Available' ? 'text-green-600' : 'text-orange-600'}`}>
                          {talent.availability}
                        </div>
                        <div className="text-gray-500">Status</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        View Profile
                      </button>
                      <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Contact
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {talent.skills.map((skill, sidx) => (
                      <span key={sidx} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-8 border-t bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            Load More Talent
          </motion.button>
          <p className="text-sm text-gray-500 mt-4">Showing 6 of 1,247 available professionals</p>
        </div>
      </section>
    </div>
  );
}