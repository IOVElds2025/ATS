import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Grid, List, Star, MapPin, Clock, Zap, TrendingUp, Award, Shield, Eye, MessageCircle, ChevronDown, X, Check, ArrowRight } from "lucide-react";
import ExploreHeader from "../components/ExploreHeader";

export default function Explore() {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('match');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilterCategory, setActiveFilterCategory] = useState(null);
 const [searchQuery, setSearchQuery] = useState("");
 const [selectedRoles, setSelectedRoles] = useState(new Set());
 const [showRoles, setShowRoles] = useState(false); // toggle for dropdown
const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full-stack Developer",
  "DevOps",
  "AI/ML",
  "Design"
];

  const talents = [
    { 
      id: 1,
      name: "Alexandra Chen", 
      role: "Senior AI/ML Engineer", 
      exp: 7, 
      rate: 85, 
      skills: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"], 
      match: 98,
      availability: "Available",
      location: "San Francisco, CA",
      verified: true,
      rating: 4.9,
      completedProjects: 47,
      responseTime: "< 1 hour",
      badge: "Top Rated Plus",
      bio: "Ex-Google AI researcher with 7+ years experience building production ML systems. Specialized in NLP and computer vision.",
      education: "PhD in Computer Science, Stanford University",
      preferredProjects: "AI product development, ML infrastructure, research collaborations"
    },
    { 
      id: 2,
      name: "Marcus Johnson", 
      role: "Full Stack Developer", 
      exp: 5, 
      rate: 70, 
      skills: ["React", "Node.js", "GraphQL", "PostgreSQL", "TypeScript"], 
      match: 94,
      availability: "2 weeks notice",
      location: "New York, NY",
      verified: true,
      rating: 4.8,
      completedProjects: 32,
      responseTime: "< 2 hours",
      badge: "Rising Talent",
      bio: "Full-stack engineer with startup experience. Built scalable web applications for fintech and e-commerce.",
      education: "BS in Computer Engineering, MIT",
      preferredProjects: "Greenfield projects, SaaS development, technical consulting"
    },
    { 
      id: 3,
      name: "Sarah Kim", 
      role: "DevOps Architect", 
      exp: 8, 
      rate: 95, 
      skills: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Python"], 
      match: 96,
      availability: "Available",
      location: "Seattle, WA",
      verified: true,
      rating: 5.0,
      completedProjects: 63,
      responseTime: "< 30 min",
      badge: "Expert Level",
      bio: "Cloud infrastructure specialist with certifications across AWS, GCP and Azure. Focus on security and cost optimization.",
      education: "MS in Cloud Computing, University of Washington",
      preferredProjects: "Cloud migrations, CI/CD pipelines, infrastructure automation"
    },
    { 
      id: 4,
      name: "David Rodriguez", 
      role: "Senior Frontend Developer", 
      exp: 6, 
      rate: 75, 
      skills: ["React", "Vue.js", "TypeScript", "Figma", "Tailwind"], 
      match: 92,
      availability: "Available",
      location: "Austin, TX",
      verified: true,
      rating: 4.7,
      completedProjects: 28,
      responseTime: "< 1 hour",
      badge: "Top Rated",
      bio: "Frontend specialist with design background. Creates pixel-perfect UIs with attention to performance and accessibility.",
      education: "BFA in Design, Rhode Island School of Design",
      preferredProjects: "Design systems, component libraries, complex dashboards"
    },
    { 
      id: 5,
      name: "Emily Foster", 
      role: "Product Designer", 
      exp: 4, 
      rate: 65, 
      skills: ["Figma", "Sketch", "Prototyping", "User Research", "Design Systems"], 
      match: 89,
      availability: "1 week notice",
      location: "Los Angeles, CA",
      verified: true,
      rating: 4.9,
      completedProjects: 19,
      responseTime: "< 3 hours",
      badge: "Creative Pro",
      bio: "User-centered designer with background in psychology. Focus on creating intuitive product experiences.",
      education: "MA in Human-Computer Interaction, Carnegie Mellon",
      preferredProjects: "Mobile apps, SaaS products, UX research engagements"
    },
    { 
      id: 6,
      name: "James Wilson", 
      role: "Backend Engineer", 
      exp: 9, 
      rate: 90, 
      skills: ["Java", "Spring Boot", "Microservices", "Redis", "MongoDB"], 
      match: 95,
      availability: "Available",
      location: "Chicago, IL",
      verified: true,
      rating: 4.8,
      completedProjects: 54,
      responseTime: "< 1 hour",
      badge: "Senior Expert",
      bio: "Backend systems architect with financial services experience. Specializes in high-throughput distributed systems.",
      education: "BS in Computer Science, University of Illinois",
      preferredProjects: "Payment systems, data pipelines, API development"
    }
  ];

  const filterCategories = [
    { 
      name: "Roles", 
      options: ["Frontend", "Backend", "Full Stack", "DevOps", "AI/ML", "Design", "Data Science", "Mobile"] 
    },
    { 
      name: "Experience", 
      options: ["Junior (0-2)", "Mid (3-5)", "Senior (6-10)", "Lead (10+)"] 
    },
    { 
      name: "Location", 
      options: ["San Francisco", "New York", "Seattle", "Austin", "Chicago", "Los Angeles", "Remote", "International"] 
    },
    { 
      name: "Rate Range", 
      options: ["$50-70/hr", "$70-90/hr", "$90-120/hr", "$120+/hr"] 
    },
    { 
      name: "Availability", 
      options: ["Immediate", "1 week notice", "2 weeks notice", "Part-time"] 
    }
  ];

  const techStack = ["React", "Python", "TypeScript", "AWS", "Node.js", "Docker", "Kubernetes", "PostgreSQL", "GraphQL", "TensorFlow", "Figma", "Java"];

  const getBadgeColor = (badge) => {
    const colors = {
      "Top Rated Plus": "bg-gradient-to-r from-yellow-400 to-orange-500",
      "Expert Level": "bg-gradient-to-r from-purple-500 to-indigo-600",
      "Rising Talent": "bg-gradient-to-r from-green-400 to-emerald-500",
      "Top Rated": "bg-gradient-to-r from-blue-400 to-cyan-500",
      "Creative Pro": "bg-gradient-to-r from-pink-400 to-rose-500",
      "Senior Expert": "bg-gradient-to-r from-indigo-500 to-purple-600"
    };
    return colors[badge] || "bg-gradient-to-r from-gray-400 to-gray-600";
  };

  const toggleFilter = (filter) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }
    setSelectedFilters(newFilters);
  };

  const clearFilters = () => {
    setSelectedFilters(new Set());
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section - Ultra Modern */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
        <ExploreHeader />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">AI-Powered Talent Matching</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                    Discover Elite
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Tech Talent
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Our platform connects you with the top 3% of tech professionals, rigorously vetted and matched to your exact project requirements.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10">Find Talent</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-2"
                  >
                    <span>How It Works</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Glassmorphism Card */}
                <div className="bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-800">Platform Highlights</h3>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "50K+", label: "Vetted Experts", color: "text-blue-600", icon: Shield },
                        { value: "98%", label: "Success Rate", color: "text-emerald-600", icon: TrendingUp },
                        { value: "4.9★", label: "Avg Rating", color: "text-amber-600", icon: Star },
                        { value: "24h", label: "Avg Match Time", color: "text-purple-600", icon: Clock }
                      ].map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${stat.color}/10`}>
                              <stat.icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <div>
                              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                              <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center space-x-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-white/80 border-2 border-white shadow-sm overflow-hidden">
                              <div className="w-full h-full bg-gray-300"></div>
                            </div>
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-700">4,200+</span> companies hiring
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters - Floating Design */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6"
          >
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for talents, skills, or roles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-700 placeholder-gray-500 shadow-sm"
                />
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-xl transition-all font-medium text-gray-700 shadow-sm"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  {selectedFilters.size > 0 && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {selectedFilters.size}
                    </span>
                  )}
                </motion.button>
                <div className="flex bg-gray-100 rounded-xl p-1 shadow-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-white shadow-md text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span className="font-medium">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'list'
                        ? 'bg-white shadow-md text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span className="font-medium">List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {selectedFilters.size > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm text-gray-500">Active filters:</span>
                {Array.from(selectedFilters).map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFilter(filter)}
                    className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 transition-all"
                  >
                    <span>{filter}</span>
                    <X className="w-4 h-4" />
                  </motion.button>
                ))}
                <button 
                  onClick={clearFilters}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Tech Stack Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech) => (
                <motion.button
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleFilter(tech)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedFilters.has(tech)
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">1,247</span> professionals matched
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                >
                  <option value="match">Best Match</option>
                  <option value="rate">Hourly Rate</option>
                  <option value="exp">Experience</option>
                  <option value="rating">Rating</option>
                  <option value="availability">Availability</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full">
              {/* Overlay */}
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
                onClick={() => setIsFilterOpen(false)}
              />
              
              {/* Sidebar */}
              <div className="relative ml-auto w-full max-w-md bg-white shadow-xl h-screen overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-8">
                  {filterCategories.map((category) => (
                    <div key={category.name}>
                      <button 
                        onClick={() => setActiveFilterCategory(activeFilterCategory === category.name ? null : category.name)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <h3 className="font-medium text-gray-900">{category.name}</h3>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFilterCategory === category.name ? 'transform rotate-180' : ''}`} />
                      </button>
                      
                      {activeFilterCategory === category.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 space-y-2"
                        >
                          {category.options.map((option) => (
                            <div key={option} className="flex items-center">
                              <button
                                onClick={() => toggleFilter(option)}
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors mr-3 ${
                                  selectedFilters.has(option)
                                    ? 'bg-blue-600 border-blue-600'
                                    : 'border-gray-300 hover:border-blue-500'
                                }`}
                              >
                                {selectedFilters.has(option) && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </button>
                              <span className="text-gray-700">{option}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                  <div className="flex space-x-3">
                    <button
                      onClick={clearFilters}
                      className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="flex-1 py-3 px-4 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 transition-colors"
                    >
                      Show Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<section
  className="py-12 bg-cover bg-center"
  style={{ backgroundImage: "url('/talent-bg.png')" }}
>
  <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg max-w-8xl mx-auto px-6 py-8">
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

                      
                         
                      {/* Smart Matching Section */}
<section
  
>
  <div className="max-w-7xl mx-auto px-4 text-center">
    {/* Title */}
    <h2 className="text-3xl font-bold text-gray-800 mb-10">Try Our Smart Matching</h2>

    {/* Search + Role Toggle */}
    <div className="bg-[#e6edff] border border-blue-200 rounded-xl shadow-lg p-6 mb-12 max-w-5xl mx-auto relative">
      <label className="block text-lg font-medium text-gray-700 mb-2 text-left">
        What are you looking for ...
      </label>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="e.g. React, Remote, AI/ML..."
        className="w-full px-4 py-3 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 text-base"
      />

      {/* Flèche centrée */}
      <button
        onClick={() => setShowRoles((prev) => !prev)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
            showRoles ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Liste de rôles affichée si ouvert */}
      {showRoles && (
        <div className="mt-4 flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => {
                const newSet = new Set(selectedRoles);
                newSet.has(role) ? newSet.delete(role) : newSet.add(role);
                setSelectedRoles(newSet);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedRoles.has(role)
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      )}
    </div>

    {/* Talent Cards filtrées dynamiquement */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {talents
        .filter((talent) => {
          const query = searchQuery.toLowerCase();
          const matchesSearch =
            !query ||
            talent.role.toLowerCase().includes(query) ||
            talent.location.toLowerCase().includes(query) ||
            talent.skills.some((skill) => skill.toLowerCase().includes(query));

          const matchesRole =
            selectedRoles.size === 0 ||
            Array.from(selectedRoles).some((role) =>
              talent.role.toLowerCase().includes(role.toLowerCase())
            );

          return matchesSearch && matchesRole;
        })
        .map((talent, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border text-left">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{talent.role}</h3>
              <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {talent.match}% Match
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{talent.exp}+ years experience</p>
            <p className="font-medium text-gray-700 mb-2">Skills</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {talent.skills.slice(0, 4).map((skill, i) => (
                <span key={i} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              <li>🌍 {talent.location}</li>
              <li>
                {talent.availability === "Available"
                  ? "✅ Available immediately"
                  : `⏳ ${talent.availability}`}
              </li>
              <li>🕒 Full-time</li>
            </ul>
            <div className="text-sm font-semibold text-gray-700 mb-2">Match Breakdown</div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-blue-500" style={{ width: `${talent.match}%` }}></div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              View Full Profile
            </button>
          </div>
        ))}
    </div>
  </div>
</section>

                      
                            {/* CTA Section */}
                            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                              <div className="max-w-7xl mx-auto px-6 text-center">
                                <motion.div
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8 }}
                                  viewport={{ once: true }}
                                  className="space-y-8"
                                >
                                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to build your dream team?
                                  </h2>
                                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                    Get matched with pre-vetted talent in 24 hours or less
                                  </p>
                                  <div className="flex flex-wrap gap-4 justify-center">
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                                    >
                                      Get Started
                                    </motion.button>
                                    <motion.button
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                                    >
                                      Talk to an Expert
                                    </motion.button>
                                  </div>
                                </motion.div>
                              </div>
                            </section>
                          </div>
                        );
                      }

