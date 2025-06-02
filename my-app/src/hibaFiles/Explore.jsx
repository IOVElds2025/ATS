import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  // Sample profiles data
  const profiles = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Full Stack Developer",
      experience: "8 years",
      skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
      location: "New York, NY",
      hourlyRate: "$85/hr",
      availability: "Available in 2 weeks",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "DevOps Engineer",
      experience: "6 years",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
      location: "San Francisco, CA",
      hourlyRate: "$95/hr",
      availability: "Immediately available",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "UI/UX Designer",
      experience: "5 years",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
      location: "London, UK",
      hourlyRate: "$75/hr",
      availability: "Available in 1 week",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  const skillOptions = [
    "React", "Node.js", "Python", "AWS", "MongoDB",
    "Docker", "Kubernetes", "Jenkins", "Terraform",
    "Figma", "Adobe XD", "Sketch", "UI/UX Design"
  ];

  const handleBooking = (profileId) => {
    // Check if user is authenticated
    const isAuthenticated = false; // Replace with your auth check
    
    if (!isAuthenticated) {
      // Redirect to signup/login page with return URL
      navigate('/auth/signup?redirect=/explore');
      return;
    }
    
    // Handle booking logic here
    console.log('Booking profile:', profileId);
  };

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.every(skill => profile.skills.includes(skill));
    return matchesSearch && matchesSkills;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Talent</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or role..."
              className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Skills filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Filter by skills:</h2>
          <div className="flex flex-wrap gap-2">
            {skillOptions.map(skill => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                  ${selectedSkills.includes(skill)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map(profile => (
            <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
                    <p className="text-gray-600">{profile.title}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Experience:</span> {profile.experience}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {profile.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Rate:</span> {profile.hourlyRate}
                  </p>
                  <p className="text-green-600 font-medium">{profile.availability}</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleBooking(profile.id)}
                  className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Book Talent
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Explore; 