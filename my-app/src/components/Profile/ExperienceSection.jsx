import React from "react";
import { Briefcase } from "lucide-react"; // Tu peux utiliser Lucide React ou Heroicons

const ExperienceSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block">
        Experience
      </h3>
      <div className="flex items-start gap-3 mt-2">
        <Briefcase className="text-orange-500 mt-1" size={20} />
        <div>
          <h4 className="text-md font-semibold text-gray-700">
            Software Engineer
          </h4>
          <p className="text-gray-600">Digital Innovations Ltd.</p>
          <p className="text-gray-500 italic">Jun 2017 – Dec 2019</p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Developed web apps using JavaScript and Python</li>
            <li>Optimized queries for 30% faster load times</li>
            <li>Participated in agile development processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
