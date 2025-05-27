import React, { useState } from 'react';
import { Upload, CheckCircle, File, X, Calendar as CalendarIcon } from 'lucide-react';
import './ResumeStepOne.css';

const ResumeStepOne = ({ resumeData, updateResumeData, onNext }) => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showCalendar, setShowCalendar] = useState({});
  const [skillInput, setSkillInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');

  // Initialize form data with any existing resume data or defaults
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: resumeData?.personalInfo?.fullName || '',
      email: resumeData?.personalInfo?.email || '',
      phone: resumeData?.personalInfo?.phone || '',
      countryCode: resumeData?.personalInfo?.countryCode || '+212',
      location: resumeData?.personalInfo?.location || '',
      jobTitle: resumeData?.personalInfo?.jobTitle || ''
    },
    skills: resumeData?.skills || ['React', 'CSS', 'HTML', 'Tailwindcss', 'JavaScript', 'Python', 'Docker', 'Deployments', 'Leadership'],
    languages: resumeData?.languages || ['Arabic', 'English', 'French']
  });

  // Initialize work experience data
  const [workExperiences, setWorkExperiences] = useState(
    resumeData?.workExperience?.length > 0 
    ? resumeData.workExperience.map(exp => ({
        company: exp.company || '',
        jobTitle: exp.jobTitle || '',
        startDate: exp.startDate || '',
        endDate: exp.endDate || '',
        description: exp.description || '',
        responsibilities: exp.responsibilities || []
      }))
    : [{
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        description: '',
        responsibilities: []
      }]
  );

  // Initialize education data
  const [educations, setEducations] = useState(
    resumeData?.education?.length > 0
    ? resumeData.education.map(edu => ({
        institution: edu.institution || '',
        degree: edu.degree || '',
        startDate: edu.startDate || '',
        endDate: edu.endDate || '',
        description: edu.description || ''
      }))
    : [{
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
  );

  // Predefined options for dropdown
  const institutions = [
    'Harvard University',
    'MIT',
    'Stanford University',
    'University of California',
    'Yale University',
    'Oxford University',
  ];

  // List of country codes
  const countryCodes = [
    { code: '+212', country: 'Morocco' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+33', country: 'France' },
    { code: '+49', country: 'Germany' },
    { code: '+34', country: 'Spain' }
  ];

  // List of job titles
  const jobTitles = [
    'Software Engineer',
    'Web Developer',
    'Data Scientist',
    'UX Designer',
    'Product Specialist',
    'Project Manager',
    'Marketing Analyst',
    'Executive',
    'Other'
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const uploadedFile = e.dataTransfer.files[0];
      handleFile(uploadedFile);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      handleFile(uploadedFile);
    }
  };

  const handleFile = (uploadedFile) => {
    // Check file format
    const validFormats = ['.pdf', '.doc', '.docx'];
    const fileExtension = '.' + uploadedFile.name.split('.').pop().toLowerCase();
    
    if (!validFormats.includes(fileExtension)) {
      alert('Please upload a valid file format (PDF, DOC, DOCX)');
      return;
    }

    if (uploadedFile.size > 2 * 1024 * 1024) {
      alert('File size should be less than 2MB');
      return;
    }
    
    setFile(uploadedFile);
  };

  const handleBrowseClick = () => {
    document.getElementById('file-input').click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value
      }
    });
  };

  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        countryCode: e.target.value
      }
    });
  };

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleSkillInputKeyDown = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData({
          ...formData,
          skills: [...formData.skills, skillInput.trim()]
        });
      }
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleLanguageInputChange = (e) => {
    setLanguageInput(e.target.value);
  };

  const handleLanguageInputKeyDown = (e) => {
    if (e.key === 'Enter' && languageInput.trim()) {
      e.preventDefault();
      if (!formData.languages.includes(languageInput.trim())) {
        setFormData({
          ...formData,
          languages: [...formData.languages, languageInput.trim()]
        });
      }
      setLanguageInput('');
    }
  };

  const removeLanguage = (languageToRemove) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter(language => language !== languageToRemove)
    });
  };

  // Handle work experience changes
  const handleWorkExperienceChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  // Handle education changes
  const handleEducationChange = (index, field, value) => {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
  };
  
  // Add new work experience
  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        company: '',
        jobTitle: '',
        startDate: '',
        endDate: '',
        description: '',
        responsibilities: []
      }
    ]);
  };
  
  // Add new education
  const addEducation = () => {
    setEducations([
      ...educations,
      {
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]);
  };

  // Toggle calendar visibility
  const toggleCalendar = (field) => {
    setShowCalendar(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };
  
  // Generate calendar days
  const generateCalendarDays = (year, month) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };
  
  // Calendar component
  const CalendarPicker = ({ onSelectDate, onClose, field, index, section }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const handlePrevMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    };
    
    const handleNextMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    };
    
    const handleDateSelect = (day) => {
      if (!day) return;
      const selectedDate = `${currentMonth + 1}/${day}/${currentYear}`;
      onSelectDate(selectedDate);
      onClose();
    };
    
    return (
      <div className="calendar-popup">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <div>{months[currentMonth]} {currentYear}</div>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="calendar-days">
          <div className="calendar-day-header">Su</div>
          <div className="calendar-day-header">Mo</div>
          <div className="calendar-day-header">Tu</div>
          <div className="calendar-day-header">We</div>
          <div className="calendar-day-header">Th</div>
          <div className="calendar-day-header">Fr</div>
          <div className="calendar-day-header">Sa</div>
          
          {generateCalendarDays(currentYear, currentMonth).map((day, i) => (
            <div 
              key={i} 
              className={`calendar-day ${day ? 'active' : ''}`}
              onClick={() => day && handleDateSelect(day)}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-footer">
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  };
  
  // Handle date selection
  const handleSelectDate = (date, index, field, section) => {
    if (section === 'work') {
      handleWorkExperienceChange(index, field, date);
    } else {
      handleEducationChange(index, field, date);
    }
  };

  const parseResponsibilities = (description) => {
    if (!description) return [];
    // Split description into bullet points for responsibilities
    // Assumes each responsibility is on a new line
    return description.split('\n').filter(item => item.trim() !== '');
  };

  const handleContinue = () => {
    // Prepare the complete resume data
    const completeResumeData = {
      personalInfo: {
        ...formData.personalInfo,
        // Split full name into first and last name for ResumeStepTwo
        firstName: formData.personalInfo.fullName.split(' ')[0] || '',
        lastName: formData.personalInfo.fullName.split(' ').slice(1).join(' ') || '',
      },
      workExperience: workExperiences.map(exp => ({
        ...exp,
        // Convert description to responsibilities array if not already set
        responsibilities: exp.responsibilities.length > 0 ? 
            exp.responsibilities : 
            parseResponsibilities(exp.description)
      })),
      education: educations,
      skills: formData.skills,
      languages: formData.languages
    };
    
    // Save to localStorage for persistence
    localStorage.setItem('resumeData', JSON.stringify(completeResumeData));
    
    // Update parent component data if updateResumeData function exists
    if (updateResumeData) {
      updateResumeData(completeResumeData);
    }
    
    // Navigate to next step if onNext function exists
    if (onNext) {
      onNext();
    }
  };

  const removeFile = () => {
    setFile(null);
  };
  
  // Format file size to be human-readable
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="resume-step-one">
      {/* Upload Resume Section */}
      <div className="upload-container">
        <h2>Upload your Resume</h2>
        
        {!file ? (
          <div 
            className={`drop-zone ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-icon">
              <Upload size={24} />
            </div>
            <p className="drop-text">Drag and drop your resume here, or</p>
            <input 
              type="file" 
              id="file-input" 
              onChange={handleFileInput} 
              style={{ display: 'none' }}
              accept=".pdf,.doc,.docx"
            />
            <button className="browse-btn" onClick={handleBrowseClick}>
              Browse files
            </button>
            <p className="format-text">
              Supported formats: PDF, DOC, DOCX (Max size: 2MB)
            </p>
          </div>
        ) : (
          <div className="file-preview">
            <div className="file-preview-header">
              <div className="file-preview-title">
                <CheckCircle size={20} className="file-success-icon" />
                <span>Resume Uploaded</span>
              </div>
              <button className="remove-file-btn" onClick={removeFile}>
                <X size={18} />
              </button>
            </div>
            <div className="file-details">
              <div className="file-icon">
                <File size={40} />
              </div>
              <div className="file-info">
                <p className="file-name">{file.name}</p>
                <p className="file-size">{formatFileSize(file.size)}</p>
              </div>
            </div>
            <p className="upload-success-message">
              Your resume has been successfully uploaded!
            </p>
          </div>
        )}
      </div>

      {/* Personal Information Section */}
      <div className="personal-info-section">
        <h2 className="section-title">Preview Your Information</h2>

        <div className="personal-info-container">
          {/* Title on the left */}
          <div className="personal-info-title">
            <h3>Personal Information</h3>
          </div>

          {/* Input fields on the right */}
          <div className="personal-info-fields">
            <div className="info-field">
              <label className="info-label">Full Name <span className="required">*</span></label>
              <input
                type="text"
                name="fullName"
                value={formData.personalInfo.fullName}
                onChange={handleInputChange}
                className="info-input"
                required
              />
            </div>

            <div className="info-field">
              <label className="info-label">Email <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handleInputChange}
                className="info-input"
                required
              />
            </div>

            <div className="info-field">
              <label className="info-label">Phone <span className="required">*</span></label>
              <div className="phone-input-container">
                <select
                  name="countryCode"
                  value={formData.personalInfo.countryCode}
                  onChange={handleCountryCodeChange}
                  className="country-code-dropdown"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.personalInfo.phone}
                  onChange={handleInputChange}
                  className="phone-input"
                  required
                />
              </div>
            </div>

            <div className="info-field">
              <label className="info-label">Location <span className="required">*</span></label>
              <input
                type="text"
                name="location"
                value={formData.personalInfo.location}
                onChange={handleInputChange}
                className="info-input"
                required
              />
            </div>

            <div className="info-field">
              <label className="info-label">Job Title <span className="required">*</span></label>
              <select
                name="jobTitle"
                value={formData.personalInfo.jobTitle}
                onChange={handleInputChange}
                className="info-input"
                required
              >
                <option value="" disabled>Select job title</option>
                {jobTitles.map((job) => (
                  <option key={job} value={job}>{job}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-input-container">
          <input
            type="text"
            value={skillInput}
            onChange={handleSkillInputChange}
            onKeyDown={handleSkillInputKeyDown}
            placeholder="Enter your skills"
            className="input-field"
          />
        </div>
        <div className="skills-tags">
          {formData.skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
              <button onClick={() => removeSkill(skill)} className="remove-tag-btn">
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Languages Section */}
      <div className="languages-section">
        <h3>Languages</h3>
        <div className="languages-input-container">
          <input
            type="text"
            value={languageInput}
            onChange={handleLanguageInputChange}
            onKeyDown={handleLanguageInputKeyDown}
            placeholder="Enter language"
            className="input-field"
          />
        </div>
        <div className="languages-tags">
          {formData.languages.map((language, index) => (
            <div key={index} className="language-tag">
              {language}
              <button onClick={() => removeLanguage(language)} className="remove-tag-btn">
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Work Experience Section */}
      <div className="work-experience-section">
        <div className="section-header">
          <h3>Work Experience</h3>
          <button 
            className="add-button"
            onClick={addWorkExperience}
          >
            <span>+</span> Add Experience
          </button>
        </div>
        
        {workExperiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div className="info-field">
              <label>Company <span className="required">*</span></label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
                className="input-field"
                required
              />
            </div>
            
            <div className="info-field">
              <label>Position <span className="required">*</span></label>
              <input
                type="text"
                value={experience.jobTitle}
                onChange={(e) => handleWorkExperienceChange(index, 'jobTitle', e.target.value)}
                className="input-field"
                required
              />
            </div>
            
            <div className="info-field">
              <label>Duration <span className="required">*</span></label>
              <div className="date-range-picker">
                <div className="date-picker">
                  <input
                    type="text"
                    value={experience.startDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`startWork-${index}`)}
                    className="date-input"
                  />
                  <button className="calendar-button" onClick={() => toggleCalendar(`startWork-${index}`)}>
                    <CalendarIcon size={18} />
                  </button>
                  {showCalendar[`startWork-${index}`] && (
                    <CalendarPicker
                      onSelectDate={(date) => handleSelectDate(date, index, 'startDate', 'work')}
                      onClose={() => toggleCalendar(`startWork-${index}`)}
                      field="startDate"
                      index={index}
                      section="work"
                    />
                  )}
                </div>
                
                <span className="to-text">To</span>
                
                <div className="date-picker">
                  <input
                    type="text"
                    value={experience.endDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`endWork-${index}`)}
                    className="date-input"
                  />
                  <button className="calendar-button" onClick={() => toggleCalendar(`endWork-${index}`)}>
                    <CalendarIcon size={18} />
                  </button>
                  {showCalendar[`endWork-${index}`] && (
                    <CalendarPicker
                      onSelectDate={(date) => handleSelectDate(date, index, 'endDate', 'work')}
                      onClose={() => toggleCalendar(`endWork-${index}`)}
                      field="endDate"
                      index={index}
                      section="work"
                    />
                  )}
                </div>
              </div>
            </div>
            
            <div className="info-field">
              <label>Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)}
                className="textarea-field"
                rows={5}
                placeholder="Enter job responsibilities (each on a new line)"
              />
            </div>
            
            {index > 0 && (
              <button 
                className="remove-item-btn"
                onClick={() => {
                  const updated = workExperiences.filter((_, i) => i !== index);
                  setWorkExperiences(updated);
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      
      {/* Education Section */}
      <div className="education-section">
        <div className="section-header">
          <h3>Education</h3>
          <button 
            className="add-button"
            onClick={addEducation}
          >
            <span>+</span> Add Education
          </button>
        </div>
        
        {educations.map((education, index) => (
          <div key={index} className="education-item">
            <div className="info-field">
              <label>Institution <span className="required">*</span></label>
              <div className="institution-container">
                <select
                  value={education.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  className="institution-dropdown"
                  required
                >
                  <option value="" disabled>Select institution</option>
                  {institutions.map((inst) => (
                    <option key={inst} value={inst}>{inst}</option>
                  ))}
                </select>
                <div className="dropdown-arrow">▼</div>
              </div>
            </div>
            
            <div className="info-field">
              <label>Degree <span className="required">*</span></label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="input-field"
                required
              />
            </div>
            
            <div className="info-field">
              <label>Duration <span className="required">*</span></label>
              <div className="date-range-picker">
                <div className="date-picker">
                  <input
                    type="text"
                    value={education.startDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`startEdu-${index}`)}
                    className="date-input"
                  />
                  <button className="calendar-button" onClick={() => toggleCalendar(`startEdu-${index}`)}>
                    <CalendarIcon size={18} />
                  </button>
                  {showCalendar[`startEdu-${index}`] && (
                    <CalendarPicker
                      onSelectDate={(date) => handleSelectDate(date, index, 'startDate', 'education')}
                      onClose={() => toggleCalendar(`startEdu-${index}`)}
                      field="startDate"
                      index={index}
                      section="education"
                    />
                  )}
                </div>
                
                <span className="to-text">To</span>
                
                <div className="date-picker">
                  <input 
                    type="text"
                    value={education.endDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`endEdu-${index}`)}
                    className="date-input"
                  />
                  <button className="calendar-button" onClick={() => toggleCalendar(`endEdu-${index}`)}>
                    <CalendarIcon size={18} />
                  </button>
                  {showCalendar[`endEdu-${index}`] && (
                    <CalendarPicker
                      onSelectDate={(date) => handleSelectDate(date, index, 'endDate', 'education')}
                      onClose={() => toggleCalendar(`endEdu-${index}`)}
                      field="endDate"
                      index={index}
                      section="education"
                    />
                  )}
                </div>
              </div>
            </div>
            
            <div className="info-field">
              <label>Description</label>
              <textarea
                value={education.description}
                onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                className="textarea-field"
                rows={5}
              />
            </div>
            
            {index > 0 && (
              <button 
                className="remove-item-btn"
                onClick={() => {
                  const updated = educations.filter((_, i) => i !== index);
                  setEducations(updated);
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      
      <div className="action-buttons">
        <button 
          className="continue-btn"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResumeStepOne;