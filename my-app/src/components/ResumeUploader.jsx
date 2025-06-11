import React, { useState, useRef } from 'react';
import UploadCloudIcon  from '../assets/icons/uploadIcon.png';

const ResumeUploader = ({ onFileUpload }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (file) => {
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type) || file.size > 2 * 1024 * 1024) {
      alert('Invalid file type or size!');
      return;
    }
    setUploadedFile(file);
    onFileUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-100');
    if (e.dataTransfer.files.length) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-gray-100');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-gray-100');
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    if (e.target.files.length) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    onFileUpload(null);
  };

  return (
    <div 
      className="border-2  hover:bg-red-50 border-dashed border-gray-300 rounded-xs p-8 flex flex-col items-center justify-center text-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept=".pdf,.doc,.docx"
        className="hidden"
      />
      
      {uploadedFile ? (
        <div className="flex flex-col items-center ">
          <svg className="w-12 h-12 text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <p className="mb-2 font-semibold">{uploadedFile.name}</p>
          <button 
            onClick={removeFile}
            className="text-red-600 underline cursor-pointer"
          >
            Remove
          </button>
        </div>
      ) : (
        <>
          <img src={UploadCloudIcon} alt="UploadCloudIcon" className='w-12 h-12'/>
          <p className="font-semibold mb-2">Drag and drop your resume here, or</p>
          <button 
            onClick={handleBrowseClick}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 mb-2 cursor-pointer"
          >
            Browse files
          </button>
          <p className="text-gray-500 text-sm">Supported formats: PDF, DOC, DOCX (Max size: 2MB)</p>
        </>
      )}
    </div>
  );
};

export default ResumeUploader; 