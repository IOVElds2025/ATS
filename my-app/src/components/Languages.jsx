import React, { useState } from 'react';

const Languages = ({ languages = [], onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const addLanguage = (value) => {
    if (!value.trim()) return;
    if (!languages.includes(value.trim())) {
      onChange([...languages, value.trim()]);
    }
    setInputValue('');
  };

  const removeLanguage = (languageToRemove) => {
    onChange(languages.filter(language => language !== languageToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addLanguage(inputValue);
    }
  };

  return (
    <div className="mb-8 flex flex-row w-full">
      <h3 className="text-xl font-bold w-1/2">Languages</h3>
      <div className='flex flex-col items-end w-1/2'>
        <input
          type="text"
          placeholder="Enter language"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {languages.map((language, index) => (
            <span
              key={index}
              className="bg-[#E84435] text-white px-4 py-1 rounded-lg font-semibold flex items-center"
            >
              {language}
              <span
                className="ml-2 cursor-pointer"
                onClick={() => removeLanguage(language)}
              >
                ×
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages; 