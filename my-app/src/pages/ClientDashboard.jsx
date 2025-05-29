import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
          
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Applications</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Interviews</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Saved Jobs</h3>
              <p className="text-3xl font-bold text-purple-600">0</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 text-center">No recent activity to display</p>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Jobs</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 text-center">No job recommendations yet</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClientDashboard; 