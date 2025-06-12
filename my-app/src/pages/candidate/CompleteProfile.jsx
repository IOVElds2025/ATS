import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper';
import { CiCamera } from "react-icons/ci";


const CompleteProfile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    photo: '../assets/icons/user.png',
    summary: ''
  });

  useEffect(() => {
    // Load saved data from localStorage
    const savedSummary = localStorage.getItem('profileSummary');
    const savedPhoto = localStorage.getItem('profilePhoto');
    
    if (savedSummary) {
      setProfileData(prev => ({ ...prev, summary: savedSummary }));
    }
    if (savedPhoto) {
      setProfileData(prev => ({ ...prev, photo: savedPhoto }));
    }
  }, []);

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfileData(prev => ({ ...prev, photo: ev.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemovePhoto = () => {
    setProfileData(prev => ({ ...prev, photo: '../assets/icons/user.png' }));
  };

  const handleSummaryChange = (e) => {
    setProfileData(prev => ({ ...prev, summary: e.target.value }));
  };

  const handleBack = () => {
    navigate('/upload-resume/review-info');
  };

  const handleComplete = () => {
    // Save data to localStorage
    localStorage.setItem('profileSummary', profileData.summary);
    localStorage.setItem('profilePhoto', profileData.photo);
    // Clear resume data
    localStorage.removeItem('resumeForm');
    // Show success message and redirect
    alert('Profile completed!');
    // navigate('/dashboard'); // Uncomment when dashboard is ready
  };


  const Header = () => {
		return (
		<header className="bg-white shadow-sm w-full sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
				<span className="font-['audiowide'] text-2xl font-400 tracking-tight">
					<span className="text-black">Hive</span>
					<span className="text-[#E84435]">X</span>
					<span className="text-black">perience</span>
				</span>
			</div>
		</header>
		);
	}

  return (
<div className="min-h-screen w-full flex flex-col justify-center items-center text-gray-800 font-sans bg-[#D9D9D9]">
      {/* Top Navigation */}

      <Header />

      <div className="flex flex-col py-12 gap-2 px-2 max-w-4xl w-full">
        {/* Stepper */}
        <Stepper currentStep={3} />

        {/* Complete Profile Card */}
        <div className="bg-white rounded-md p-8 shadow mb-8">
          <h2 className="text-2xl font-bold mb-2">Complete Your Profile</h2>
          <p className="text-gray-600 mb-8">Add some final touches to make your profile stand out to employers.</p>
          <div className="flex flex-col gap-8 items-start mb-8">
            {/* Profile Photo */}
            <div className="flex flex-row gap-8 items-center">
              <div className="relative w-32 h-32">
                <img 
                  src={profileData.photo} 
                  alt="Profile" 
                  className="h-32 w-32 rounded-full border border-gray-300 object-cover bg-gray-100" 
                />
                <label 
                  htmlFor="photoInput" 
                  className="absolute bottom-0 right-0 bg-red-600 rounded-full p-2 cursor-pointer border-4 border-white group-hover:scale-110 transition-transform"
                >
                  <CiCamera color='white'/>
                  <input 
                    id="photoInput" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
              <div className="mt-2 flex flex-col text-left justify-between items-start">
                <div className="font-semibold">Profile Photo</div>
                <div className="text-gray-500 text-sm mb-1">Add a professional photo to make your profile more personal</div>
                {profileData.photo !== '/assets/user.png' && (
                  <button 
                    onClick={handleRemovePhoto}
                    className="text-red-600 text-sm font-semibold hover:underline"
                  >
                    Remove Photo
                  </button>
                )}
              </div>
            </div>
            {/* Professional Summary */}
            <div className="flex-1 w-full">
              <label className="block font-bold mb-2">Professional Summary</label>
              <textarea 
                value={profileData.summary}
                onChange={handleSummaryChange}
                maxLength="500" 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 resize-none placeholder-gray-400" 
                placeholder="Write a compelling summary of your professional background and career goals..."
              ></textarea>
              <div className="text-gray-500 text-sm mt-1">
                {profileData.summary.length}/500 characters
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-red-600 font-semibold hover:underline text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </button>
            <div className="flex gap-4 items-center">
              <button 
                onClick={handleComplete}
                className="text-red-600 font-semibold hover:underline text-lg"
              >
                Skip
              </button>
              <button 
                onClick={handleComplete}
                className="bg-[#1a2341] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#11182b] flex items-center gap-2"
              >
                Complete Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile; 