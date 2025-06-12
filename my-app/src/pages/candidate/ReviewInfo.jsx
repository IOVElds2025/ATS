import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper';
import PersonalInfoReview from '../../components/PersonalInfoReview';
import WorkExperienceReview from '../../components/WorkExperienceReview';
import EducationReview from '../../components/EducationReview';
import SkillsReview from '../../components/SkillsReview';
import LanguagesReview from '../../components/LanguagesReview';

const ReviewInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personal: [],
    experiences: [],
    education: [],
    skills: [],
    languages: []
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('resumeForm'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleBack = () => {
    navigate('/upload-resume/preview-info');
  };

  const handleContinue = () => {
    // Save any edits if implemented
    navigate('/upload-resume/complete-profile');
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
      
      {/* Header */}
			<Header />


      <div className="flex flex-col py-12 gap-2 px-2 max-w-4xl w-full">
        <Stepper currentStep={2} />
        
        <div className="bg-white flex flex-col gap-4 rounded-md shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Review Your Information</h2>
          
          <PersonalInfoReview data={formData.personal} />
          
          <hr className="my-6" />
          
          <WorkExperienceReview experiences={formData.experiences} />
          
          <hr className="my-6" />
          
          <EducationReview education={formData.education} />
          
          <hr className="my-6" />
          
          <SkillsReview skills={formData.skills} />
          
          <hr className="my-6" />
          
          <LanguagesReview languages={formData.languages} />

          <div className="flex justify-between mt-8">
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-[#1a2341] font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <button 
              onClick={handleContinue}
              className="bg-[#1a2341] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#11182b] flex items-center gap-2"
            >
              Continue 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo; 