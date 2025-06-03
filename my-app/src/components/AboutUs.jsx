import React, { useState, useEffect } from 'react';
import { Users, Award, Globe, Target, Linkedin, Twitter, Mail, Star, ArrowRight, Play } from 'lucide-react';

const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Youssef Benkirane",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic leader driving digital transformation in talent acquisition. Expert in scaling operations and building data-driven growth strategies across MENA markets.",
      linkedin: "#",
      twitter: "#",
      email: "youssef@hivetalents.com",
      specialty: "Strategic Leadership"
    },
    {
      name: "Salma Gharraby",
      role: "Head of Operations & Strategy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Operations strategist specializing in business intelligence and automation. Leads cross-functional teams to streamline processes and drive business expansion.",
      linkedin: "#",
      twitter: "#",
      email: "salma@hivetalents.com",
      specialty: "Business Intelligence"
    },
    {
      name: "Mehdi Boufous",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Software engineering expert focused on building scalable platforms. Drives innovation through cutting-edge technology solutions and digital transformation.",
      linkedin: "#",
      twitter: "#",
      email: "mehdi@hivetalents.com",
      specialty: "Tech Innovation"
    },
    {
      name: "Khadija Amellal",
      role: "Head of Marketing & Communications",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Marketing communications strategist with expertise in brand positioning and digital marketing. Champions thought leadership in the talent acquisition space.",
      linkedin: "#",
      twitter: "#",
      email: "khadija@hivetalents.com",
      specialty: "Brand Strategy"
    }
  ];

  const experiences = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Data-Driven Excellence",
      description: "Leveraging business intelligence and automation to optimize talent matching processes and drive measurable results for our partners.",
      metric: "98% Match Success",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Strategic Operations",
      description: "Cross-functional team leadership and streamlined processes that scale businesses and drive sustainable growth across markets.",
      metric: "3 Continents",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Leading digital transformation initiatives that improve efficiency, profitability, and competitive advantage in talent acquisition.",
      metric: "300% ROI Avg",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Building",
      description: "Developing key partnerships in technology, staffing, and digital sectors to create comprehensive talent solutions.",
      metric: "250+ Partners",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { value: "250+", label: "Companies Served", highlight: true },
    { value: "98%", label: "Retention Rate" },
    { value: "10K+", label: "Talents Placed", highlight: true },
    { value: "15+", label: "Industries" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      
      <section id="about" className="relative py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Hero Section */}
          <div 
            id="hero-section" 
            data-animate
            className={`transition-all duration-1000 ${isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full px-6 py-3 mb-6">
                <Star className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
                Connecting{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Top Talent
                </span>
                <br />
                with Leading Companies
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Morocco's premier digital-first talent acquisition platform, transforming how businesses 
                connect with exceptional talent through data analytics and strategic operations.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Story Content */}
            <div 
              id="story-content"
              data-animate
              className={`transition-all duration-1000 delay-200 ${isVisible['story-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2020 as Morocco's digital-first talent acquisition platform, Hive Talents emerged from the vision to transform how businesses connect with exceptional talent. We combine data analytics, automation, and strategic operations to drive sustainable growth for both candidates and companies.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our approach centers on leveraging business intelligence to optimize every aspect of talent matching. From lead generation to relationship building, we use data-driven strategies that have consistently delivered measurable results and long-term partnerships across diverse industries.
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <button className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Watch Our Story
                  </button>
                  <button className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div 
              id="stats-section"
              data-animate
              className={`transition-all duration-1000 delay-300 ${isVisible['stats-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                          stat.highlight 
                            ? "bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100" 
                            : "hover:bg-gray-50 border border-gray-100"
                        }`}
                      >
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500 font-medium">
                      From Moroccan startups to Fortune 500 multinationals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div 
            id="experience-section"
            data-animate
            className={`mb-24 transition-all duration-1000 delay-400 ${isVisible['experience-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full px-6 py-3 mb-6">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                  Our Expertise
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built on Excellence, Driven by{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in business intelligence, automation, and digital transformation initiatives that improve efficiency and drive revenue growth. 
                Our data-driven approach to talent acquisition sets new standards for the industry across Morocco and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experiences.map((experience, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 h-full group-hover:-translate-y-2">
                    <div className={`mb-6 p-4 bg-gradient-to-r ${experience.color} rounded-xl w-fit text-white transition-all duration-300 group-hover:scale-110`}>
                      {experience.icon}
                    </div>
                    <div className="mb-2 text-sm font-bold text-indigo-600 opacity-80">
                      {experience.metric}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {experience.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div 
            id="team-section"
            data-animate
            className={`mb-20 transition-all duration-1000 delay-500 ${isVisible['team-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full px-6 py-3 mb-6">
                <Users className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                  Meet Our Team
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Minds Behind{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Hive Talents
                </span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our leadership team brings together expertise in business operations, digital transformation, and strategic growth. 
                We're united by a shared commitment to leveraging technology and data analytics to create exceptional outcomes for our clients and candidates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {member.specialty}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-indigo-600 font-semibold mb-3 text-sm">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {member.bio}
                      </p>
                      
                      <div className="flex space-x-2">
                        {[
                          { icon: <Linkedin className="w-4 h-4" />, href: member.linkedin, label: "LinkedIn" },
                          { icon: <Twitter className="w-4 h-4" />, href: member.twitter, label: "Twitter" },
                          { icon: <Mail className="w-4 h-4" />, href: `mailto:${member.email}`, label: "Email" }
                        ].map((social, idx) => (
                          <a 
                            key={idx}
                            href={social.href} 
                            className="p-2 text-gray-400 hover:text-white transition-all duration-300 bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-lg hover:shadow-lg hover:scale-110"
                            aria-label={`${member.name}'s ${social.label}`}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA */}
          <div 
            id="cta-section"
            data-animate
            className={`text-center transition-all duration-1000 delay-600 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                </div>
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Career or Team?
                  </h3>
                  <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
                    Join thousands of professionals and companies who've discovered their perfect match with Hive Talents.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 hover:scale-105">
                      <span className="flex items-center gap-2">
                        Find Talent
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    <button className="group border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                      <span className="flex items-center gap-2">
                        Explore Opportunities
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;