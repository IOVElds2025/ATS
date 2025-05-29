import React, { useState, useEffect } from 'react';
import ResumeStepOne from "../components/ResumeStepOne";
import ResumeStepTwo from "../components/ResumeStepTwo";
import ResumeStepThree from "../components/ResumeStepThree";

const UploadResumePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Force overflow-x-hidden on <body> and <html> even if you don't use index.css
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  }, []);

  const getInitialResumeData = () => ({
    file: null,
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      countryCode: '+212',
      location: '',
      jobTitle: ''
    },
    workExperience: [],
    education: [],
    skills: ['React.js', 'HTML', 'Tailwindcss', 'JavaScript', 'Python', 'Docker', 'Deployments', 'Leadership'],
    languages: ['Arabic', 'English', 'French']
  });

  const [resumeData, setResumeData] = useState(getInitialResumeData);

  const handleFileUpload = (file) => {
    setResumeData(prev => ({ ...prev, file }));
  };

  const handleNextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const updateResumeData = (newData) => {
    setResumeData(prev => {
      const updated = { ...prev };
      Object.keys(newData).forEach(key => {
        if (key === 'personalInfo') {
          updated.personalInfo = { ...prev.personalInfo, ...newData.personalInfo };
          const parts = newData.personalInfo.fullName.split(' ');
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
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Upload Resume Page</h1>

        {/* Progress Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl mb-12 space-y-6 md:space-y-0">
          {[1, 2, 3].map((step, index) => (
            <React.Fragment key={step}>
              {index !== 0 && (
                <div
                  className={`hidden md:block flex-1 h-1 mx-4 ${
                    currentStep >= step ? 'bg-[#16204d]' : 'bg-gray-300'
                  }`}
                />
              )}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold border-2 transition ${
                    currentStep >= step
                      ? 'bg-[#16204d] text-white border-[#16204d]'
                      : 'bg-gray-200 text-gray-500 border-transparent'
                  }`}
                >
                  {step}
                </div>
                <span className="text-sm font-medium text-[#16204d] mt-2">
                  {step === 1 ? 'Upload Resume' : step === 2 ? 'Review Info' : 'Complete Profile'}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Step Content */}
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          {currentStep === 1 && (
            <ResumeStepOne
              resumeData={resumeData}
              updateResumeData={updateResumeData}
              onFileUpload={handleFileUpload}
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
