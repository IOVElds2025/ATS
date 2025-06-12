import React from 'react';

const RecommendedJobs = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recommended for You</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View all
        </button>
      </div>
      {/* Placeholder for recommended jobs */}
      <div className="text-gray-500 text-center py-8">
        Loading recommended jobs...
      </div>
    </div>
  );
};

export default RecommendedJobs; 