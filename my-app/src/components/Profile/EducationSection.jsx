import React from "react";
import { GraduationCap } from "lucide-react"; // Tu peux aussi utiliser Heroicons ou Font Awesome si tu préfères

const EducationSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block">
        Education
      </h3>
      <div className="flex items-start gap-3 mt-2">
        <GraduationCap className="text-blue-600 mt-1" size={20} />
        <div>
          <h4 className="text-md font-semibold text-gray-700">
            Bachelor of Science in Computer Science
          </h4>
          <p className="text-gray-600">University of Technology</p>
          <p className="text-gray-500 italic">Jun 2017 – Dec 2019</p>
          <p className="text-gray-600">
            Graduated with honors. Specialized in Software Engineering and Data
            Structures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
