import React, { useState } from 'react';
import ResumeStepOne from "../components/ResumeStepOne";
import ResumeStepTwo from "../components/ResumeStepTwo";
import ResumeStepThree from "../components/ResumeStepThree";
import './UploadResumePage.css';

const UploadResumePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const getInitialResumeData = () => {
    return {
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
    };
  };

  const [resumeData, setResumeData] = useState(getInitialResumeData);

  const handleFileUpload = (file) => {
    setResumeData(prev => ({
      ...prev,
      file: file
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateResumeData = (newData) => {
    setResumeData(prev => {
      const updated = { ...prev };
      
      Object.keys(newData).forEach(key => {
        if (key === 'personalInfo' && newData.personalInfo) {
          updated.personalInfo = {
            ...prev.personalInfo,
            ...newData.personalInfo
          };
          
          if (newData.personalInfo.fullName && 
              (!newData.personalInfo.firstName || !newData.personalInfo.lastName)) {
            const nameParts = newData.personalInfo.fullName.split(' ');
            updated.personalInfo.firstName = nameParts[0] || '';
            updated.personalInfo.lastName = nameParts.slice(1).join(' ') || '';
          }
        } 
        else if (Array.isArray(newData[key])) {
          updated[key] = newData[key];
        }
        else {
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
    <div className="upload-resume-page">
      <div className="progress-steps">
        <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <div className="step-title">Upload Resume</div>
        </div>
        <div className={`step-line ${currentStep > 1 ? 'completed' : ''}`}></div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <div className="step-title">Review Info</div>
        </div>
        <div className={`step-line ${currentStep > 2 ? 'completed' : ''}`}></div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <div className="step-title">Complete Profile</div>
        </div>
      </div>

      <div className="upload-resume-header-card">
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