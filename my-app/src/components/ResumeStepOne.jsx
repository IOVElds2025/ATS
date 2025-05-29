import React, { useState } from 'react';
import { Upload, CheckCircle, File, X, Calendar as CalendarIcon } from 'lucide-react';

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
      <div className="absolute z-50 bg-white border border-gray-300 rounded-md shadow-lg p-2 w-64 top-full left-0 mt-1">
        <div className="flex justify-between items-center mb-2">
          <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded">&lt;</button>
          <div className="font-medium">{months[currentMonth]} {currentYear}</div>
          <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          <div className="text-xs font-medium text-gray-500">Su</div>
          <div className="text-xs font-medium text-gray-500">Mo</div>
          <div className="text-xs font-medium text-gray-500">Tu</div>
          <div className="text-xs font-medium text-gray-500">We</div>
          <div className="text-xs font-medium text-gray-500">Th</div>
          <div className="text-xs font-medium text-gray-500">Fr</div>
          <div className="text-xs font-medium text-gray-500">Sa</div>
          
          {generateCalendarDays(currentYear, currentMonth).map((day, i) => (
            <div 
              key={i} 
              className={`p-1 rounded-full text-sm ${day ? 'cursor-pointer hover:bg-gray-100' : ''}`}
              onClick={() => day && handleDateSelect(day)}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <button onClick={onClose} className="px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">Cancel</button>
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
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Upload Resume Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Upload your Resume</h2>
        
        {!file ? (
          <div 
            className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors ${isDragging ? 'bg-gray-50' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-red-500 mb-3 flex justify-center">
              <Upload size={24} />
            </div>
            <p className="text-gray-600 mb-4">Drag and drop your resume here, or</p>
            <input 
              type="file" 
              id="file-input" 
              onChange={handleFileInput} 
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
              onClick={handleBrowseClick}
            >
              Browse files
            </button>
            <p className="text-gray-500 text-xs mt-4">
              Supported formats: PDF, DOC, DOCX (Max size: 2MB)
            </p>
          </div>
        ) : (
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-2" />
                <span className="font-medium">Resume Uploaded</span>
              </div>
              <button 
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                onClick={removeFile}
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg mb-4">
              <div className="text-blue-500 mr-4">
                <File size={40} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{file.name}</p>
                <p className="text-gray-500 text-sm">{formatFileSize(file.size)}</p>
              </div>
            </div>
            <p className="text-green-700 bg-green-100 p-2 rounded text-center">
              Your resume has been successfully uploaded!
            </p>
          </div>
        )}
      </div>

      {/* Personal Information Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6">Preview Your Information</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Title on the left */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
          </div>

          {/* Input fields on the right */}
          <div className="md:w-3/4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="fullName"
                value={formData.personalInfo.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.personalInfo.countryCode}
                  onChange={handleCountryCodeChange}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                  className="flex-1 px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="location"
                value={formData.personalInfo.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title <span className="text-red-500">*</span></label>
              <select
                name="jobTitle"
                value={formData.personalInfo.jobTitle}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Skills</h3>
        <div>
          <div className="mb-4">
            <input
              type="text"
              value={skillInput}
              onChange={handleSkillInputChange}
              onKeyDown={handleSkillInputKeyDown}
              placeholder="Enter your skills"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className={`flex flex-wrap gap-2 ${formData.skills.length === 0 ? 'py-2' : ''}`}>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md">
                {skill}
                <button 
                  onClick={() => removeSkill(skill)} 
                  className="ml-2 text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Languages Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Languages</h3>
        <div>
          <div className="mb-4">
            <input
              type="text"
              value={languageInput}
              onChange={handleLanguageInputChange}
              onKeyDown={handleLanguageInputKeyDown}
              placeholder="Enter language"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className={`flex flex-wrap gap-2 ${formData.languages.length === 0 ? 'py-2' : ''}`}>
            {formData.languages.map((language, index) => (
              <div key={index} className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md">
                {language}
                <button 
                  onClick={() => removeLanguage(language)} 
                  className="ml-2 text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Work Experience Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Work Experience</h3>
          <button 
            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm"
            onClick={addWorkExperience}
          >
            <span className="text-lg mr-1">+</span> Add Experience
          </button>
        </div>
        
        {workExperiences.map((experience, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5 mb-6 border border-gray-200">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleWorkExperienceChange(index, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Position <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={experience.jobTitle}
                onChange={(e) => handleWorkExperienceChange(index, 'jobTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration <span className="text-red-500">*</span></label>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={experience.startDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`startWork-${index}`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer"
                  />
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => toggleCalendar(`startWork-${index}`)}
                  >
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
                
                <span className="text-gray-500">To</span>
                
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={experience.endDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`endWork-${index}`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer"
                  />
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => toggleCalendar(`endWork-${index}`)}
                  >
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
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => handleWorkExperienceChange(index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={5}
                placeholder="Enter job responsibilities (each on a new line)"
              />
            </div>
            
            {index > 0 && (
              <button 
                className="text-red-500 hover:text-red-700 text-sm font-medium"
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
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Education</h3>
          <button 
            className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm"
            onClick={addEducation}
          >
            <span className="text-lg mr-1">+</span> Add Education
          </button>
        </div>
        
        {educations.map((education, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5 mb-6 border border-gray-200">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution <span className="text-red-500">*</span></label>
              <div className="relative">
                <select
                  value={education.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="" disabled>Select institution</option>
                  {institutions.map((inst) => (
                    <option key={inst} value={inst}>{inst}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">▼</div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration <span className="text-red-500">*</span></label>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={education.startDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`startEdu-${index}`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer"
                  />
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => toggleCalendar(`startEdu-${index}`)}
                  >
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
                
                <span className="text-gray-500">To</span>
                
                <div className="relative flex-1">
                  <input 
                    type="text"
                    value={education.endDate}
                    placeholder="MM/DD/YYYY"
                    readOnly
                    onClick={() => toggleCalendar(`endEdu-${index}`)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer"
                  />
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => toggleCalendar(`endEdu-${index}`)}
                  >
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
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={education.description}
                onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={5}
              />
            </div>
            
            {index > 0 && (
              <button 
                className="text-red-500 hover:text-red-700 text-sm font-medium"
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
      
      <div className="flex justify-end">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResumeStepOne;