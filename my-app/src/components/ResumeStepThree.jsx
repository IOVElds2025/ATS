import React, { useState, useRef } from 'react';
import './ResumeStepThree.css';

const ResumeStepThree = ({ resumeData, updateResumeData, onPrev, onComplete }) => {
  const [summary, setSummary] = useState(resumeData.professionalSummary || '');
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
    // Validate and submit the profile
    const updatedData = {
      ...resumeData,
      professionalSummary: summary,
      profileCompleted: true
    };
    
    updateResumeData(updatedData);
    onComplete();
  };
  
  return (
    <div className="content-card">
      <h2 className="page-title">Complete Your Profile</h2>
      <p className="page-subtitle">Add some final touches to make your profile stand out to employers.</p>
      
      <div className="profile-section">
        <div className="photo-container">
          <div className="photo-placeholder" onClick={triggerFileInput}>
            {resumeData.profilePhoto ? (
              <img 
                src={resumeData.profilePhoto} 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ) : (
              <div className="placeholder-inner"></div>
            )}
          </div>
          <div className="camera-icon" onClick={triggerFileInput}>
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
            style={{ display: 'none' }} 
          />
        </div>
        <div>
          <h3 className="section-title">Profile Photo</h3>
          <p className="section-description">Add a professional photo to make your profile more personal</p>
          {resumeData.profilePhoto && (
            <button className="remove-button" onClick={handleRemovePhoto}>
              Remove Photo
            </button>
          )}
        </div>
      </div>
      
      <div className="summary-section">
        <h3 className="section-title">Professional Summary</h3>
        <textarea
          className="summary-textarea"
          value={summary}
          onChange={handleSummaryChange}
          placeholder="Write a compelling summary of your professional background and career goals..."
        ></textarea>
        <p className="character-limit">Maximum {maxCharacters} characters ({charactersLeft} remaining)</p>
      </div>
      
      <div className="navigation-container">
        <button className="back-button" onClick={onPrev}>
          <span className="back-arrow">&#8592;</span> Back
        </button>
        <div className="right-buttons">
          <button className="skip-button" onClick={onComplete}>Skip</button>
          <button className="complete-button" onClick={handleCompleteProfile}>Complete Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeStepThree;