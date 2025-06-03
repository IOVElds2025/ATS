import React from "react";
import { Languages } from "lucide-react"; // ou une autre icône si tu préfères

const LanguagesSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block">
        Languages
      </h3>
      <div className="flex items-start gap-3 mt-2">
        <Languages className="text-purple-500 mt-1" size={20} />
        <div className="flex-1">
          {/* English */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <p className="text-gray-700 font-medium">English</p>
              <p className="text-gray-500 text-sm">Professional</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
            </div>
          </div>
          {/* Spanish */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-gray-700 font-medium">Spanish</p>
              <p className="text-gray-500 text-sm">Native</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesSection;
