<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Grid, List, Star, MapPin, Clock, Zap, TrendingUp, Award, Shield, Eye, MessageCircle, ChevronDown, X, Check, ArrowRight } from "lucide-react";
import ExploreHeader from "../components/ExploreHeader";
import Footer from '../components/Footer'; // Adjust the path based on where your Footer component is


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
  const filteredTalents = talents.filter((talent) => {
    const text = `${talent.name} ${talent.role} ${talent.skills.join(" ")}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });
  
  
  
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
                    Discover Laedx
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Elite Talent
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
                    <span className="relative z-10">Preview Talent</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-2"
                  >
                    <span>Try Our Smart Matching</span>
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

      {/* Search & Filters - Premium Floating Panel */}
      <section className="relative -mt-12 z-20">
        <div className="max-w-8xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 backdrop-blur-sm bg-opacity-90"
          >
            {/* Premium Section Title */}
            <div className="w-full text-center mb-6">
              <h2 className="text-3xl font-bold text bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Preview Top Talents
              </h2>
              <p className="mt-1 text-gray-500">Discover the perfect match for your project</p>
            </div>
            
            {/* Enhanced Search Bar */}
            <div className="flex flex-col lg:flex-row gap-5 mb-8">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search for talents, skills, or roles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-800 placeholder-gray-500 shadow-sm hover:shadow-md"
                />
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 bg-gradient-to-b from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 px-5 py-3.5 rounded-xl transition-all duration-300 font-medium text-gray-700 shadow-sm border border-gray-200"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  {selectedFilters.size > 0 && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full ml-1">
                      {selectedFilters.size}
                    </span>
                  )}
                </motion.button>
                <div className="flex bg-gray-100 rounded-xl p-1 shadow-sm border border-gray-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-white shadow-md text-blue-600 border border-gray-200'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span className="font-medium">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-white shadow-md text-blue-600 border border-gray-200'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span className="font-medium">List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters - Premium Chips */}
            {selectedFilters.size > 0 && (
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-sm font-medium text-gray-500">Active filters:</span>
                {Array.from(selectedFilters).map((filter) => (
                  <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFilter(filter)}
                    className="flex items-center space-x-1 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 border border-gray-200 shadow-xs"
                  >
                    <span>{filter}</span>
                    <X className="w-4 h-4 text-gray-500" />
                  </motion.button>
                ))}
                <button 
                  onClick={clearFilters}
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                >
                  <span>Clear all</span>
                  <X className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}

            {/* Tech Stack Filter - Enhanced */}
            <div className="flex flex-wrap gap-3 mb-6">
              {techStack.map((tech) => (
                <motion.button
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleFilter(tech)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-xs ${
                    selectedFilters.has(tech)
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm border border-gray-200"
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
              {filteredTalents.length === 0 && (
                <p className="text-gray-500 col-span-full text-center">Aucun résultat trouvé.</p>
              )}
            </div>

            {/* Sort Options - Premium */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
              <p className="text-gray-600">
                <span className="font-bold text-gray-900">1,247</span> professionals matched
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-500">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <option value="match">Best Match</option>
                    <option value="rate">Hourly Rate</option>
                    <option value="exp">Experience</option>
                    <option value="rating">Rating</option>
                    <option value="availability">Availability</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Sidebar - Premium */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex min-h-full">
              {/* Premium Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-md" 
                onClick={() => setIsFilterOpen(false)}
              />
              
              {/* Premium Sidebar */}
              <div className="relative ml-auto w-full max-w-md bg-white shadow-2xl h-screen overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Refine Results</h2>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 space-y-8">
                  {filterCategories.map((category) => (
                    <div key={category.name} className="border-b border-gray-100 pb-6 last:border-0">
                      <button 
                        onClick={() => setActiveFilterCategory(activeFilterCategory === category.name ? null : category.name)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeFilterCategory === category.name ? 'transform rotate-180' : ''}`} />
                      </button>
                      
                      {activeFilterCategory === category.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-4 space-y-3 pl-1"
                        >
                          {category.options.map((option) => (
                            <div key={option} className="flex items-center">
                              <button
                                onClick={() => toggleFilter(option)}
                                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors duration-200 mr-3 ${
                                  selectedFilters.has(option)
                                    ? 'bg-blue-600 border-blue-600'
                                    : 'border-gray-300 hover:border-blue-500'
                                }`}
                              >
                                {selectedFilters.has(option) && (
                                  <Check className="w-4 h-4 text-white" />
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
                  <div className="flex space-x-4">
                    <button
                      onClick={clearFilters}
                      className="flex-1 py-3.5 px-6 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300 shadow-sm"
                    >
                      Clear All
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="flex-1 py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-medium text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {/* Talent Showcase - Premium Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="bg-white rounded-3xl shadow-xl max-w-8xl mx-auto px-6 py-10 border border-gray-100">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTalents.map((talent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, type: 'spring' }}
                  whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"></div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {talent.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{talent.name}</h3>
                        <p className="text-gray-600">{talent.role}</p>
                      </div>
                    </div>
                    {talent.verified && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
                        <Check className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 text-sm mb-5">
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

                  <div className="flex flex-wrap gap-2 mb-6">
                    {talent.skills.slice(0, 4).map((skill, sidx) => (
                      <span key={sidx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                        {skill}
                      </span>
                    ))}
                    {talent.skills.length > 4 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                        +{talent.skills.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 px-4 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      View Profile
                    </button>
                    <button className="w-12 h-10 flex items-center justify-center border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                      💬
                    </button>
                  </div>
                </motion.div>
              ))}
              {filteredTalents.length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No talents found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTalents.map((talent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, type: 'spring' }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-center space-x-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {talent.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{talent.name}</h3>
                        <p className="text-gray-600">{talent.role}</p>
                        <p className="text-sm text-gray-500 mt-1">{talent.location}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {talent.skills.slice(0, 5).map((skill, sidx) => (
                            <span key={sidx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                              {skill}
                            </span>
                          ))}
                          {talent.skills.length > 5 && (
                            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">
                              +{talent.skills.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
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
                    <div className="flex space-x-3">
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        View Profile
                      </button>
                      <button className="border border-gray-300 px-6 py-2.5 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm">
                        Contact
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredTalents.length === 0 && (
                <div className="py-12 text-center">
                  <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No talents found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
                      
                         
                      {/* Smart Matching Section */}
<section className="py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Title with subtle animation */}
    <h2 className="text-4xl font-bold text-gray-900 mb-12 relative inline-block">
      Try Our Smart Matching
      <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-blue-500 rounded-full"></span>
    </h2>

    {/* Search + Role Toggle - Enhanced card */}
    <div className="bg-white border border-blue-100 rounded-2xl shadow-xl p-8 mb-16 max-w-5xl mx-auto relative transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <label className="text-xl font-semibold text-gray-800">
          What are you looking for...
        </label>
        
        {/* Animated toggle button */}
        <button
          onClick={() => setShowRoles((prev) => !prev)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200"
        >
          <span className="text-blue-600 font-medium">
            {showRoles ? 'Hide roles' : 'Filter by role'}
          </span>
          <svg
            className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
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
      </div>

      {/* Search Input with focus animation */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="e.g. React, Remote, AI/ML..."
          className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 text-gray-800 text-lg transition-all duration-200 shadow-sm"
        />
        <svg
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Role chips with better animation */}
      {showRoles && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-lg font-medium text-gray-700 mb-4 text-left">Select roles:</h3>
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => {
                  const newSet = new Set(selectedRoles);
                  newSet.has(role) ? newSet.delete(role) : newSet.add(role);
                  setSelectedRoles(newSet);
                }}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  selectedRoles.has(role)
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {role}
                {selectedRoles.has(role) && (
                  <span className="ml-1.5">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Talent Cards with hover effects */}
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
          <div 
            key={idx} 
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-5">
              <h3 className="text-xl font-bold text-gray-900">{talent.role}</h3>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                {talent.match}% Match
              </span>
>>>>>>> 6ed996d0d2c590d2a4d730d3e0d90eecae106db4
            </div>
            
            <p className="text-sm text-gray-500 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {talent.exp}+ years experience
            </p>
            
            <div className="mb-5">
              <p className="font-semibold text-gray-800 mb-2">Top Skills</p>
              <div className="flex flex-wrap gap-2">
                {talent.skills.slice(0, 4).map((skill, i) => (
                  <span key={i} className="bg-yellow-50 text-yellow-700 text-xs px-3 py-1.5 rounded-full font-medium border border-yellow-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {talent.location}
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {talent.availability === "Available" ? "Available immediately" : talent.availability}
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Full-time
              </li>
            </ul>
            
            <div className="mb-5">
              <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Match Breakdown</span>
                <span>{talent.match}%</span>
              </div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" 
                  style={{ width: `${talent.match}%` }}
                ></div>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
              View Full Profile
            </button>
          </div>
<<<<<<< HEAD
        </div>
      </div>
=======
        ))}
>>>>>>> 6ed996d0d2c590d2a4d730d3e0d90eecae106db4
    </div>
  </div>
</section>

<Footer />

  </div>
      );
       }

