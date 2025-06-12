import React from 'react';

const ApplicationCard = ({ title, company, date, status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review':
        return 'bg-[#E6D8C3] text-[#7C5B2E]';
      case 'Interview':
        return 'bg-green-200 text-green-700';
      case 'Offer':
        return 'bg-blue-200 text-blue-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="border rounded-xl p-6 bg-white flex justify-between items-center">
      <div>
        <div className="font-bold text-xl mb-1">{title}</div>
        <div className="text-lg">{company}</div>
        <div className="text-gray-500 text-sm mt-1">{date}</div>
      </div>
      <span className={`${getStatusColor(status)} px-6 py-2 rounded-full font-medium`}>
        {status}
      </span>
    </div>
  );
};

const RecentApplications = ({ showDetailed, onToggleDetailed }) => {
  const applications = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      date: 'Applied 2 days ago',
      status: 'Under Review'
    },
    {
      title: 'Full Stack Engineer',
      company: 'Innovate Solutions',
      date: 'Interview scheduled for tomorrow',
      status: 'Interview'
    },
    {
      title: 'Software Architect',
      company: 'Global Tech',
      date: 'Offer received 1 week ago',
      status: 'Offer'
    }
  ];

  if (showDetailed) {
    return (
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Applications</h2>
          <button 
            onClick={onToggleDetailed}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View less
          </button>
        </div>
        <div className="space-y-4">
          {applications.map((app, index) => (
            <ApplicationCard key={index} {...app} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Applications</h2>
        <button 
          onClick={onToggleDetailed}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default RecentApplications; 