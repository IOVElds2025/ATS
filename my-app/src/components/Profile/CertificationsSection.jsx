import React from "react";
import { BadgeCheck } from "lucide-react"; // J’utilise Lucide pour l’icône de certification (tu peux remplacer par un autre si tu préfères)

const CertificationsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b-2 border-red-500 inline-block">
        Certifications
      </h3>
      <div className="flex items-start gap-3 mt-2">
        <BadgeCheck className="text-green-500 mt-1" size={20} />
        <div>
          <h4 className="text-md font-semibold text-gray-700">
            AWS Certified Solutions Architect
          </h4>
          <p className="text-gray-600">Amazon Web Services</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
