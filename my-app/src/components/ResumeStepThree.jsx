import React, { useState, useRef } from 'react';

const ResumeStepThree = ({ resumeData, updateResumeData, onPrev, onComplete }) => {
  const [summary, setSummary] = useState(resumeData.professionalSummary || '');
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  const maxCharacters = 500;
  const charactersLeft = maxCharacters - (summary ? summary.length : 0);
  
  const handleSummaryChange = (e) => {
    const newSummary = e.target.value;
    if (newSummary.length <= maxCharacters) {
      setSummary(newSummary);
      updateResumeData({ professionalSummary: newSummary });
    }
  };
  
  const handleRemovePhoto = () => {
    updateResumeData({ profilePhoto: null });
  };
  
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateResumeData({ profilePhoto: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCompleteProfile = () => {
    const updatedData = {
      ...resumeData,
      professionalSummary: summary,
      profileCompleted: true
    };
    
    updateResumeData(updatedData);
    setShowModal(true);
  };

  const handleGoHome = () => {
    setShowModal(false);
    onComplete();
  };
  
  return (
    <>
      <div className="max-w-[560px] mx-auto my-8 bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Profile</h2>
        <p className="text-gray-500 text-sm mb-8">Add some final touches to make your profile stand out to employers.</p>
        
        <div className="flex items-start mb-8">
          <div className="relative mr-6 cursor-pointer">
            <div 
              className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden" 
              onClick={triggerFileInput}
            >
              {resumeData.profilePhoto ? (
                <img 
                  src={resumeData.profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
              )}
            </div>
            <div 
              className="absolute bottom-0 right-0 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
              onClick={triggerFileInput}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 15.5V12C20 11.5 19.833 11 19.5 10.5L17.75 7.75C17.417 7.25 16.833 7 16.25 7H7.75C7.167 7 6.583 7.25 6.25 7.75L4.5 10.5C4.167 11 4 11.5 4 12V15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 15.5V17C4 18.105 4.895 19 6 19H18C19.105 19 20 18.105 20 17V15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              accept="image/*" 
              onChange={handlePhotoUpload} 
              className="hidden" 
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">Profile Photo</h3>
            <p className="text-gray-600 text-sm mb-2">Add a professional photo to make your profile more personal</p>
            {resumeData.profilePhoto && (
              <button 
                className="text-red-500 text-sm font-medium bg-transparent border-none p-0 cursor-pointer no-underline"
                onClick={handleRemovePhoto}
              >
                Remove Photo
              </button>
            )}
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Professional Summary</h3>
          <textarea
            className="w-full min-h-[120px] border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 font-sans resize-y focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            value={summary}
            onChange={handleSummaryChange}
            placeholder="Write a compelling summary of your professional background and career goals..."
          ></textarea>
          <p className="text-gray-500 text-xs mt-2 text-right">Maximum {maxCharacters} characters ({charactersLeft} remaining)</p>
        </div>
        
        <div className="flex justify-between items-center mt-8">
          <button 
            className="flex items-center text-red-500 font-medium text-sm bg-transparent border-none p-0 cursor-pointer"
            onClick={onPrev}
          >
            <span className="mr-2">←</span> Back
          </button>
          <div className="flex items-center">
            <button 
              className="text-red-500 font-medium text-sm bg-transparent border-none p-0 mr-4 cursor-pointer"
              onClick={onComplete}
            >
              Skip
            </button>
            <button 
              className="text-white px-4 py-2 rounded text-sm font-medium cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-30"
              style={{ backgroundColor: '#0A162F', hover: { backgroundColor: '#081220' } }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#081220'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0A162F'}
              onClick={handleCompleteProfile}
            >
              Complete Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gray-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              {/* Success Message */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Completed!</h2>
                <p className="text-gray-600">Your resume profile has been successfully completed and saved.</p>
              </div>
              
              {/* Home Button */}
              <button 
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                onClick={handleGoHome}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeStepThree;