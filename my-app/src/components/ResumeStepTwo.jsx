import React, { useState } from 'react';
import './ResumeStepTwo.css';
import { FaPencilAlt, FaTrash, FaGraduationCap, FaPlus } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const ResumeStepTwo = ({ resumeData, updateResumeData, onNext, onPrev }) => {
  // Local state for this component
  const [localResumeData, setLocalResumeData] = useState(resumeData);

  // State for controlling modal visibility and content
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({});

  // Handle opening edit modal
  const handleEdit = (section, index) => {
    setEditMode(section);
    setEditIndex(index);
    
    if (section === 'personalInfo') {
      setFormData({...localResumeData.personalInfo});
    } else if (section === 'workExperience' && index !== undefined) {
      setFormData({...localResumeData.workExperience[index]});
    } else if (section === 'education' && index !== undefined) {
      setFormData({...localResumeData.education[index]});
    } else if (section === 'skills') {
      setFormData({skills: localResumeData.skills.join(', ')});
    } else if (section === 'languages') {
      setFormData({languages: localResumeData.languages.join(', ')});
    }
    
    setShowModal(true);
  };

  // Handle adding new items
  const handleAdd = (section) => {
    setEditMode(section);
    
    if (section === 'workExperience') {
      setFormData({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        responsibilities: [""]
      });
    } else if (section === 'education') {
      setFormData({
        degree: "",
        institution: "",
        startDate: "",
        endDate: ""
      });
    }
    
    setEditIndex(null);
    setShowModal(true);
  };

  // Handle delete
  const handleDelete = (section, index) => {
    const updatedData = {...localResumeData};
    
    if (Array.isArray(updatedData[section])) {
      updatedData[section] = updatedData[section].filter((_, i) => i !== index);
      syncWithParent(updatedData);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle responsibilities changes (for work experience)
  const handleResponsibilityChange = (index, value) => {
    const updatedResponsibilities = [...formData.responsibilities];
    updatedResponsibilities[index] = value;
    setFormData({
      ...formData,
      responsibilities: updatedResponsibilities
    });
  };

  // Add new responsibility field
  const addResponsibility = () => {
    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, ""]
    });
  };

  // Remove responsibility field
  const removeResponsibility = (index) => {
    const updatedResponsibilities = formData.responsibilities.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      responsibilities: updatedResponsibilities
    });
  };

  // Save form data
  const handleSave = () => {
    const updatedData = {...localResumeData};
    
    if (editMode === 'personalInfo') {
      updatedData.personalInfo = formData;
    } else if (editMode === 'workExperience') {
      if (editIndex !== null) {
        updatedData.workExperience[editIndex] = formData;
      } else {
        updatedData.workExperience.push(formData);
      }
    } else if (editMode === 'education') {
      if (editIndex !== null) {
        updatedData.education[editIndex] = formData;
      } else {
        updatedData.education.push(formData);
      }
    } else if (editMode === 'skills') {
      updatedData.skills = formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    } else if (editMode === 'languages') {
      updatedData.languages = formData.languages.split(',').map(lang => lang.trim()).filter(lang => lang !== '');
    }
    
    syncWithParent(updatedData);
    setShowModal(false);
  };

  // Sync local changes to parent component
  const syncWithParent = (updatedData) => {
    setLocalResumeData(updatedData);
    updateResumeData(updatedData);
  };

  // Empty value handler
  const handleEmptyValue = (value, fallback = '') => {
    return value || fallback;
  };

  return (
    <div className="resume-step-two-container">
      <div className="resume-review-card">
        <h2 className="review-title">Review Your Information</h2>
        
        {/* Personal Information Section */}
        <div className="info-section">
          <div className="section-header">
            <h3>Personal Information</h3>
            <button 
              className="edit-button"
              onClick={() => handleEdit('personalInfo')}
            >
              <FaPencilAlt />
            </button>
          </div>
          
          <div className="personal-info-grid">
            <div className="info-item">
              <p className="info-value">{handleEmptyValue(localResumeData.personalInfo?.firstName)}</p>
              <p className="info-label">First Name</p>
            </div>
            
            <div className="info-item">
              <p className="info-value">{handleEmptyValue(localResumeData.personalInfo?.lastName)}</p>
              <p className="info-label">Last Name</p>
            </div>
            
            <div className="info-item">
              <p className="info-value">{handleEmptyValue(localResumeData.personalInfo?.phone)}</p>
              <p className="info-label">Phone</p>
            </div>
            
            <div className="info-item">
              <p className="info-value">{handleEmptyValue(localResumeData.personalInfo?.email)}</p>
              <p className="info-label">Email</p>
            </div>
            
            <div className="info-item">
              <p className="info-value">{handleEmptyValue(localResumeData.personalInfo?.location)}</p>
              <p className="info-label">Location</p>
            </div>
            
            <div className="info-item">
              <p className="info-value">{handleEmptyValue(localResumeData.personalInfo?.jobTitle)}</p>
              <p className="info-label">Job title</p>
            </div>
          </div>
        </div>
        
        {/* Work Experience Section */}
        <div className="info-section">
          <div className="section-header">
            <h3>Work Experience</h3>
            <button 
              className="edit-button"
              onClick={() => handleAdd('workExperience')}
            >
              <FaPlus />
            </button>
          </div>
          
          {localResumeData.workExperience && localResumeData.workExperience.length > 0 ? (
            localResumeData.workExperience.map((experience, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="icon-container">
                    <BsBriefcaseFill />
                  </div>
                  <div className="experience-title-container">
                    <h4>{handleEmptyValue(experience.jobTitle)}</h4>
                    <p className="company-name">{handleEmptyValue(experience.company)}</p>
                    <p className="date-range">
                      {handleEmptyValue(experience.startDate)} - {handleEmptyValue(experience.endDate, 'Present')}
                    </p>
                  </div>
                  <div className="action-buttons">
                    <button 
                      className="delete-button"
                      onClick={() => handleDelete('workExperience', index)}
                    >
                      <FaTrash />
                    </button>
                    <button 
                      className="edit-button"
                      onClick={() => handleEdit('workExperience', index)}
                    >
                      <FaPencilAlt />
                    </button>
                  </div>
                </div>
                
                <ul className="experience-details">
                  {experience.responsibilities && experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="no-data-message">No work experience added yet.</p>
          )}
        </div>
        
        {/* Education Section */}
        <div className="info-section">
          <div className="section-header">
            <h3>Education</h3>
            <button 
              className="edit-button"
              onClick={() => handleAdd('education')}
            >
              <FaPlus />
            </button>
          </div>
          
          {localResumeData.education && localResumeData.education.length > 0 ? (
            localResumeData.education.map((edu, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div className="icon-container education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="experience-title-container">
                    <h4>{handleEmptyValue(edu.degree)}</h4>
                    <p className="company-name">{handleEmptyValue(edu.institution)}</p>
                    <p className="date-range">
                      {handleEmptyValue(edu.startDate)} - {handleEmptyValue(edu.endDate, 'Present')}
                    </p>
                  </div>
                  <div className="action-buttons">
                    <button 
                      className="delete-button"
                      onClick={() => handleDelete('education', index)}
                    >
                      <FaTrash />
                    </button>
                    <button 
                      className="edit-button"
                      onClick={() => handleEdit('education', index)}
                    >
                      <FaPencilAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-data-message">No education added yet.</p>
          )}
        </div>
        
        {/* Skills Section */}
        <div className="info-section">
          <div className="section-header">
            <h3>Skills</h3>
            <button 
              className="edit-button"
              onClick={() => handleEdit('skills')}
            >
              <FaPencilAlt />
            </button>
          </div>
          
          <div className="tags-container">
            {localResumeData.skills && localResumeData.skills.length > 0 ? (
              localResumeData.skills.map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))
            ) : (
              <p className="no-data-message">No skills added yet.</p>
            )}
          </div>
        </div>
        
        {/* Languages Section */}
        <div className="info-section">
          <div className="section-header">
            <h3>Languages</h3>
            <button 
              className="edit-button"
              onClick={() => handleEdit('languages')}
            >
              <FaPencilAlt />
            </button>
          </div>
          
          <div className="tags-container">
            {localResumeData.languages && localResumeData.languages.length > 0 ? (
              localResumeData.languages.map((language, index) => (
                <span key={index} className="tag">{language}</span>
              ))
            ) : (
              <p className="no-data-message">No languages added yet.</p>
            )}
          </div>
        </div>
        
        {/* Navigation Buttons - Now connected to parent functions */}
        <div className="navigation-buttons">
          <button 
            className="back-button"
            onClick={onPrev}
          >
            <IoChevronBackOutline /> Back
          </button>
          <button 
            className="continue-button"
            onClick={onNext}
          >
            Continue <IoChevronForwardOutline />
          </button>
        </div>
      </div>

      {/* Edit Modal - This would need custom CSS as well */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">
              {editIndex !== null ? "Edit" : "Add"} {editMode === 'personalInfo' ? 'Personal Information' : 
                editMode === 'workExperience' ? 'Work Experience' : 
                editMode === 'education' ? 'Education' : 
                editMode === 'skills' ? 'Skills' : 'Languages'}
            </h3>
            
            {/* Personal Info Form */}
            {editMode === 'personalInfo' && (
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={formData.location || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Job Title</label>
                  <input 
                    type="text" 
                    name="jobTitle" 
                    value={formData.jobTitle || ''} 
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            
            {/* Work Experience Form */}
            {editMode === 'workExperience' && (
              <div className="form-vertical">
                <div className="form-group">
                  <label>Job Title</label>
                  <input 
                    type="text" 
                    name="jobTitle" 
                    value={formData.jobTitle || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input 
                      type="text" 
                      name="startDate" 
                      value={formData.startDate || ''} 
                      onChange={handleInputChange}
                      placeholder="e.g. Jan 2020"
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input 
                      type="text" 
                      name="endDate" 
                      value={formData.endDate || ''} 
                      onChange={handleInputChange}
                      placeholder="e.g. Present"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Responsibilities</label>
                  {formData.responsibilities && formData.responsibilities.map((resp, index) => (
                    <div key={index} className="responsibility-input">
                      <input 
                        type="text" 
                        value={resp} 
                        onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                      />
                      <button 
                        onClick={() => removeResponsibility(index)}
                        className="delete-button"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                  <button 
                    onClick={addResponsibility}
                    className="add-button"
                  >
                    <FaPlus size={10} /> Add Responsibility
                  </button>
                </div>
              </div>
            )}
            
            {/* Education Form */}
            {editMode === 'education' && (
              <div className="form-vertical">
                <div className="form-group">
                  <label>Degree</label>
                  <input 
                    type="text" 
                    name="degree" 
                    value={formData.degree || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Institution</label>
                  <input 
                    type="text" 
                    name="institution" 
                    value={formData.institution || ''} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input 
                      type="text" 
                      name="startDate" 
                      value={formData.startDate || ''} 
                      onChange={handleInputChange}
                      placeholder="e.g. Sep 2016"
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input 
                      type="text" 
                      name="endDate" 
                      value={formData.endDate || ''} 
                      onChange={handleInputChange}
                      placeholder="e.g. Jun 2020"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Skills Form */}
            {editMode === 'skills' && (
              <div className="form-group">
                <label>Skills (comma separated)</label>
                <textarea 
                  name="skills" 
                  value={formData.skills || ''} 
                  onChange={handleInputChange}
                  placeholder="e.g. JavaScript, React, Python, SQL"
                />
              </div>
            )}
            
            {/* Languages Form */}
            {editMode === 'languages' && (
              <div className="form-group">
                <label>Languages (comma separated)</label>
                <textarea 
                  name="languages" 
                  value={formData.languages || ''} 
                  onChange={handleInputChange}
                  placeholder="e.g. English (Native), Spanish (Intermediate)"
                />
              </div>
            )}
            
            <div className="modal-buttons">
              <button 
                onClick={() => setShowModal(false)}
                className="cancel-button"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="save-button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeStepTwo;