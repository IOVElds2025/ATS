import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HiveClient = () => {
  const [activeSector, setActiveSector] = useState('technology');
  
  // Sample data for different sectors
  const sectorData = {
    technology: {
      title: "Technology",
      description: "Access top-tier tech talent specializing in software development, AI, data science, cloud infrastructure, and cybersecurity.",
      stats: [
        { label: "Placement Rate", value: "94%" },
        { label: "Time-to-Hire", value: "3 weeks" },
        { label: "Retention Rate", value: "92%" }
      ],
      roles: [
        "Software Engineers",
        "Data Scientists",
        "DevOps Engineers",
        "Cloud Architects",
        "Security Specialists",
        "Product Managers",
        "UX/UI Designers"
      ]
    },
    finance: {
      title: "Finance & Banking",
      description: "Find qualified professionals in accounting, investment banking, financial analysis, risk management, and compliance.",
      stats: [
        { label: "Placement Rate", value: "91%" },
        { label: "Time-to-Hire", value: "4 weeks" },
        { label: "Retention Rate", value: "89%" }
      ],
      roles: [
        "Financial Analysts",
        "Investment Bankers",
        "Risk Managers",
        "Compliance Officers",
        "Wealth Managers",
        "Accountants",
        "Fintech Specialists"
      ]
    },
    healthcare: {
      title: "Healthcare",
      description: "Connect with skilled healthcare professionals including administrators, clinical staff, researchers, and health IT specialists.",
      stats: [
        { label: "Placement Rate", value: "93%" },
        { label: "Time-to-Hire", value: "5 weeks" },
        { label: "Retention Rate", value: "90%" }
      ],
      roles: [
        "Healthcare Administrators",
        "Medical Affairs Specialists",
        "Clinical Research Associates",
        "Health IT Managers",
        "Regulatory Affairs Specialists",
        "Medical Device Engineers",
        "Pharmaceutical Sales Executives"
      ]
    },
    manufacturing: {
      title: "Manufacturing & Engineering",
      description: "Source experienced engineers, production managers, quality assurance specialists, and supply chain experts.",
      stats: [
        { label: "Placement Rate", value: "89%" },
        { label: "Time-to-Hire", value: "4 weeks" },
        { label: "Retention Rate", value: "87%" }
      ],
      roles: [
        "Mechanical Engineers",
        "Production Managers",
        "Quality Assurance Specialists",
        "Supply Chain Managers",
        "Process Engineers",
        "Manufacturing Technicians",
        "Industrial Designers"
      ]
    }
  };
  
  // Handle sector change
  const handleSectorChange = (sector) => {
    setActiveSector(sector);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/* Header with navigation options */}
      <header className="bg-amber-600 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/hive-experience" className="text-2xl font-bold">
              Hive<span className="text-red-500">X</span>perience
            </Link>
            <span className="ml-2 text-amber-100">By LDS</span>
          </div>
          <nav>
            <ul className="flex space-x-6 font-semibold">
              <li>
                <Link 
                  to="/hive-experience/client"
                  className="text-white border-b-2 border-white px-6 py-2"
                >
                  Client
                </Link>
              </li>
              <li>
                <Link 
                  to="/hive-experience/candidate"
                  className="hover:text-amber-200 transition-colors px-6 py-2 border-b-2 border-transparent hover:border-amber-200"
                >
                  Candidate
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          {/* Hero section */}
          <section className="bg-amber-600 text-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12">
                <h1 className="text-4xl font-bold mb-4">Find Exceptional Talent with HiveXperience</h1>
                <p className="text-amber-100 text-lg mb-8">
                  Our innovative talent acquisition platform connects you with top professionals across industries. 
                  We use AI-driven matching and in-depth vetting to ensure every candidate meets your specific needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white text-amber-600 font-bold rounded-full hover:bg-amber-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Request Talent
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-amber-600 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 bg-amber-500 flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">5,000+</div>
                    <div className="text-amber-100">Successful Placements</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">92%</div>
                    <div className="text-amber-100">Retention Rate</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-amber-100">Industries Served</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold">3.5</div>
                    <div className="text-amber-100">Weeks Average Time-to-Hire</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Industry solutions section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Industry-Specific Talent Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in connecting businesses with top-tier talent across various industries. 
                Select your sector to see how we can help you find the perfect candidates.
              </p>
            </div>
            
            {/* Sector tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.keys(sectorData).map(sector => (
                <button
                  key={sector}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 
                    ${activeSector === sector 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
                  onClick={() => handleSectorChange(sector)}
                >
                  {sectorData[sector].title}
                </button>
              ))}
            </div>
            
            {/* Active sector content */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-amber-600 mb-4">{sectorData[activeSector].title} Solutions</h3>
                  <p className="text-gray-700 mb-6">{sectorData[activeSector].description}</p>
                  
                  <div className="flex flex-wrap gap-6 mb-8">
                    {sectorData[activeSector].stats.map((stat, index) => (
                      <div key={index} className="bg-amber-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="px-6 py-3 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started Now
                  </button>
                </div>
                
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-amber-800 mb-4">Top Roles We Fill</h4>
                  <ul className="space-y-3">
                    {sectorData[activeSector].roles.map((role, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* How it works section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How HiveXperience Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes finding and hiring top talent efficient and effective.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold mx-auto -mt-10 mb-4 shadow-lg">1</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Define Your Needs</h3>
                <p className="text-gray-600">Share your requirements, culture, and ideal candidate profile with our team.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold mx-auto -mt-10 mb-4 shadow-lg">2</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">AI-Powered Matching</h3>
                <p className="text-gray-600">Our platform uses advanced algorithms to identify the best candidates from our talent pool.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold mx-auto -mt-10 mb-4 shadow-lg">3</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Interview & Selection</h3>
                <p className="text-gray-600">Review pre-vetted candidates and conduct final interviews to select your perfect match.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center text-xl font-bold mx-auto -mt-10 mb-4 shadow-lg">4</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">Ongoing Support</h3>
                <p className="text-gray-600">Receive continued assistance with onboarding and integration of your new team member.</p>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from organizations that have transformed their hiring process with HiveXperience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full mr-4 flex items-center justify-center font-bold text-amber-800">TS</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tech Solutions Inc.</h4>
                    <p className="text-sm text-gray-500">Software Development</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "HiveXperience transformed our hiring process. We found three senior developers in just two weeks, all perfect fits for our team culture and technical needs."
                </p>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full mr-4 flex items-center justify-center font-bold text-amber-800">FG</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Financial Group Ltd.</h4>
                    <p className="text-sm text-gray-500">Investment Banking</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The quality of candidates from HiveXperience exceeded our expectations. Their understanding of our industry-specific needs made all the difference."
                </p>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full mr-4 flex items-center justify-center font-bold text-amber-800">HC</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">HealthCare Partners</h4>
                    <p className="text-sm text-gray-500">Medical Services</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Recruiting specialized healthcare professionals used to take months. With HiveXperience, we filled critical roles in weeks while maintaining our high standards."
                </p>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl shadow-xl overflow-hidden">
            <div className="container mx-auto p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Hiring Process?</h2>
              <p className="text-amber-100 text-lg mb-8 max-w-3xl mx-auto">
                Join the thousands of companies that have revolutionized their talent acquisition with HiveXperience.
                Schedule a free consultation today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-[#E84435] text-white font-bold rounded-full hover:bg-[#D0AD80] hover:text-[#0A162F] transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-[#D0AD80] text-[#D0AD80] font-bold rounded-full hover:bg-[#D0AD80] hover:text-[#0A162F] transition-all duration-300">
                  View Success Stories
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#0A162F] text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HiveXperience</h3>
              <p className="text-[#D0AD80]">
                Revolutionizing talent acquisition through innovative matching technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Finance</a></li>
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-[#D0AD80] hover:text-white transition-colors">Manufacturing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-[#D0AD80]">
                <p className="mb-2">123 Innovation Street</p>
                <p className="mb-2">Tech City, TC 12345</p>
                <p className="mb-2">Email: info@hivexperience.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-[#1F325A] mt-8 pt-8 text-center text-[#D0AD80]">
            <p>&copy; {new Date().getFullYear()} HiveXperience by LDS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HiveClient;