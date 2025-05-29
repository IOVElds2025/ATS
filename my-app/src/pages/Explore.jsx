<<<<<<< HEAD
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
=======
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
>>>>>>> 3c59549d27b795d1b0208461747ad10a2b41559a
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
<<<<<<< HEAD
      </section>
    </div>
  );
}
=======
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
>>>>>>> 3c59549d27b795d1b0208461747ad10a2b41559a
