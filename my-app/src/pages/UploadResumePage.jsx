import React, { useState, useEffect } from 'react';
import ResumeStepOne from "../components/ResumeStepOne";
import ResumeStepTwo from "../components/ResumeStepTwo";
import ResumeStepThree from "../components/ResumeStepThree";
import Navbar from '../components/Navbar';


const UploadResumePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  const getInitialResumeData = () => ({
    file: null,
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      countryCode: '+212',
      location: '',
      jobTitle: '',
      firstName: '',
      lastName: ''
    },
    workExperience: [],
    education: [],
    skills: ['React.js', 'HTML', 'Tailwindcss', 'JavaScript', 'Python', 'Docker', 'Deployments', 'Leadership'],
    languages: ['Arabic', 'English', 'French'],
    professionalSummary: '',
    profilePhoto: null
  });

  const [resumeData, setResumeData] = useState(getInitialResumeData);

  const handleNextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const updateResumeData = (newData) => {
    setResumeData(prev => {
      const updated = { ...prev };
      Object.keys(newData).forEach(key => {
        if (key === 'personalInfo') {
          updated.personalInfo = { ...prev.personalInfo, ...newData.personalInfo };
          const parts = newData.personalInfo.fullName?.split(' ') || [];
          updated.personalInfo.firstName = parts[0] || '';
          updated.personalInfo.lastName = parts.slice(1).join(' ') || '';
        } else {
          updated[key] = newData[key];
        }
      });
      return updated;
    });
  };

  const handleComplete = () => {
    console.log("Profile completed", resumeData);
    alert("Profile completed successfully!");
  };

  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 py-10">
        {/* Progress Bar */}
        <div className="w-full max-w-3xl mb-12">
          <div className="flex items-center justify-between relative">
            {/* Background progress line (full width) */}
            <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
            
            {/* Colored progress line (dynamic width) */}
            <div 
              className="absolute top-4 h-1 bg-[#16204d] transition-all duration-500 -z-10" 
              style={{ 
                width: `${(currentStep - 1) * 50}%`,
                left: '25%',
                right: '25%'
              }}
            ></div>

            {/* Steps with connecting lines */}
            {[1, 2, 3].map((stepNumber, index) => {
              const isCompleted = currentStep > stepNumber;
              const isActive = currentStep === stepNumber;
              const labels = ['Upload Resume', 'Review Info', 'Complete Profile'];
              
              return (
                <div key={stepNumber} className="flex flex-col items-center z-10">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold border-2 transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-[#16204d] text-white border-[#16204d]'
                        : isActive
                          ? 'bg-white text-[#16204d] border-[#16204d]'
                          : 'bg-gray-200 text-gray-500 border-gray-300'
                    } ${
                      isActive ? 'ring-4 ring-[#16204d] ring-opacity-30 scale-110' : ''
                    }`}
                  >
                    {isCompleted ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium mt-2 ${
                      isCompleted || isActive ? 'text-[#16204d]' : 'text-gray-500'
                    }`}
                  >
                    {labels[index]}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-1 w-2 h-2 bg-[#16204d] rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          {currentStep === 1 && (
            <ResumeStepOne
              resumeData={resumeData}
              updateResumeData={updateResumeData}
              onNext={handleNextStep}
            />
          )}
          {currentStep === 2 && (
            <ResumeStepTwo
              resumeData={resumeData}
              updateResumeData={updateResumeData}
              onNext={handleNextStep}
              onPrev={handlePrevStep}
            />
          )}
          {currentStep === 3 && (
            <ResumeStepThree
              resumeData={resumeData}
              updateResumeData={updateResumeData}
              onPrev={handlePrevStep}
              onComplete={handleComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadResumePage;