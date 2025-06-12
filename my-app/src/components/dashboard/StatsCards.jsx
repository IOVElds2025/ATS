import React from 'react';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Applications Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Applications</h3>
          <span className="bg-blue-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">12 Active</span>
        </div>
        <div className="space-y-2 mt-2">
          <div className="flex justify-between items-center text-gray-700">
            <span>Under Review</span>
            <span className="font-semibold">5</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span>Interviews</span>
            <span className="font-semibold">3</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span>Offers</span>
            <span className="font-semibold">1</span>
          </div>
        </div>
      </div>

      {/* Profile Strength Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Profile Strength</h3>
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">85%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4 mt-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <p className="text-sm text-gray-600">Complete your profile to increase your chances of getting hired!</p>
      </div>

      {/* Job Matches Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Job Matches</h3>
          <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">New</span>
        </div>
        <div className="space-y-2 mt-2">
          <div className="flex justify-between items-center text-gray-700">
            <span>Today's Matches</span>
            <span className="font-semibold">8</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span>This Week</span>
            <span className="font-semibold">24</span>
          </div>
          <div className="flex justify-between items-center text-gray-700">
            <span>Saved Jobs</span>
            <span className="font-semibold">15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards; 