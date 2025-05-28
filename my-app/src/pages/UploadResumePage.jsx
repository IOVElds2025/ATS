import React, { useState } from 'react';
import ResumeStepOne from "../components/ResumeStepOne";
import ResumeStepTwo from "../components/ResumeStepTwo";
import ResumeStepThree from "../components/ResumeStepThree";

const UploadResumePage = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
    workExperience: [
      {
        jobTitle: 'Senior Software Engineer',
        company: 'Laedx Digital Solution',
        startDate: 'Dec 2024',
        endDate: 'Present',
        responsibilities: [
          'Led development of cloud-based applications using React, Node.js, and AWS',
          'Mentored junior developers and conducted code reviews',
          'Implemented CI/CD pipelines reducing deployment time by 40%',
          'Collaborated with cross-functional teams to deliver projects on schedule'
        ]
      },
      {
        jobTitle: 'Software Engineer',
        company: 'Digital Innovations Ltd.',
        startDate: 'Jun 2017',
        endDate: 'Dec 2019',
        responsibilities: [
          'Developed and maintained web applications using JavaScript and Python',
          'Optimized database queries resulting in 30% faster load times',
          'Participated in agile development processes and sprint planning'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'University of Technology',
        startDate: 'Sep 2013',
        endDate: 'Jun 2017'
      }
    ],
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
        if (key === 'personalInfo' && newData.personalInfo) {
          updated.personalInfo = { ...prev.personalInfo, ...newData.personalInfo };
          if (newData.personalInfo.fullName && 
              (!newData.personalInfo.firstName || !newData.personalInfo.lastName)) {
            const nameParts = newData.personalInfo.fullName.split(' ');
            updated.personalInfo.firstName = nameParts[0] || '';
            updated.personalInfo.lastName = nameParts.slice(1).join(' ') || '';
          }
        } else if (Array.isArray(newData[key])) {
          updated[key] = newData[key];
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
    <div className="max-w-5xl mx-auto p-5 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Upload Resume Page</h1>

      {/* Progress Steps */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-2xl mx-auto mt-5 mb-6 px-8 relative z-10 space-y-4 md:space-y-0">
        <div className="flex flex-col items-center text-center relative z-20">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all border-2 ${
            currentStep >= 1 ? 'bg-[#16204d] text-white border-[#16204d] shadow-md' : 'bg-gray-200 text-gray-500 border-transparent'
          }`}>
            1
          </div>
          <div className="text-sm font-medium text-[#16204d] mt-2">Upload Resume</div>
        </div>

        <div className={`hidden md:block flex-1 h-1 mx-5 transition-all ${currentStep > 1 ? 'bg-[#16204d]' : 'bg-gray-200'}`}></div>

        <div className="flex flex-col items-center text-center relative z-20">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all border-2 ${
            currentStep >= 2 ? 'bg-[#16204d] text-white border-[#16204d] shadow-md' : 'bg-gray-200 text-gray-500 border-transparent'
          }`}>
            2
          </div>
          <div className="text-sm font-medium text-[#16204d] mt-2">Review Info</div>
        </div>

        <div className={`hidden md:block flex-1 h-1 mx-5 transition-all ${currentStep > 2 ? 'bg-[#16204d]' : 'bg-gray-200'}`}></div>

        <div className="flex flex-col items-center text-center relative z-20">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all border-2 ${
            currentStep >= 3 ? 'bg-[#16204d] text-white border-[#16204d] shadow-md' : 'bg-gray-200 text-gray-500 border-transparent'
          }`}>
            3
          </div>
          <div className="text-sm font-medium text-[#16204d] mt-2">Complete Profile</div>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-md max-w-4xl mx-auto shadow-none py-8 relative z-10">
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
  );
};

export default UploadResumePage;
