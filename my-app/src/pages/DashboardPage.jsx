import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Briefcase,
  DollarSign,
  Star,
  ChevronRight,
  FileText as FileTextIcon,
  Bell
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import avatar from '../assets/icons/avatar.png';

const DashboardPage = () => {
  const stats = [
    { title: 'Total Applications', value: '24', change: '+12%', trend: 'up' },
    { title: 'Interviews', value: '08', change: '+5%', trend: 'up' },
    { title: 'Rejections', value: '04', change: '-2%', trend: 'down' },
    { title: 'Offers', value: '03', change: '+1', trend: 'up' }
  ];

  const recentActivities = [
    {
      id: 1,
      title: 'Application Sent',
      company: 'Google',
      time: '2 hours ago',
      type: 'application'
    },
    {
      id: 2,
      title: 'Interview Scheduled',
      company: 'Microsoft',
      time: '1 day ago',
      type: 'interview',
      date: 'Mon, 15 Jun 2023',
      timeSlot: '10:00 AM - 11:00 AM'
    },
    {
      id: 3,
      title: 'New Job Alert',
      company: 'Amazon',
      time: '2 days ago',
      type: 'alert',
      role: 'Senior UX Designer'
    }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      company: 'Microsoft',
      role: 'Product Designer',
      date: 'Mon, 15 Jun 2023',
      time: '10:00 AM - 11:00 AM',
      type: 'Virtual',
      avatar: avatar
    },
    {
      id: 2,
      company: 'Apple',
      role: 'UI/UX Designer',
      date: 'Wed, 17 Jun 2023',
      time: '02:30 PM - 03:30 PM',
      type: 'On-site',
      avatar: avatar
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      logo: 'G',
      logoColor: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'Facebook',
      location: 'Remote',
      type: 'Contract',
      salary: '$80 - $100/hr',
      posted: '1 week ago',
      logo: 'F',
      logoColor: 'bg-blue-50 text-blue-700'
    },
    {
      id: 3,
      title: 'Product Designer',
      company: 'Amazon',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $140k',
      posted: '3 days ago',
      logo: 'A',
      logoColor: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                            index === 0 ? 'bg-blue-100 text-blue-600' :
                                index === 1 ? 'bg-green-100 text-green-600' :
                                    index === 2 ? 'bg-red-100 text-red-600' :
                                        'bg-purple-100 text-purple-600'
                        }`}>
                          <Briefcase className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {stat.value}
                              <span className={`ml-2 text-sm font-normal ${
                                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                              }`}>
                            {stat.change}
                          </span>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Recent Activity & Upcoming Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentActivities.map((activity) => (
                      <div key={activity.id} className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                              activity.type === 'application' ? 'bg-blue-100 text-blue-600' :
                                  activity.type === 'interview' ? 'bg-green-100 text-green-600' :
                                      'bg-yellow-100 text-yellow-600'
                          }`}>
                            {activity.type === 'application' ? (
                                <FileTextIcon className="h-5 w-5" />
                            ) : activity.type === 'interview' ? (
                                <Calendar className="h-5 w-5" />
                            ) : (
                                <Bell className="h-5 w-5" />
                            )}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {activity.title} at {activity.company}
                            </p>
                            <p className="text-sm text-gray-500">
                              {activity.time}
                              {activity.date && (
                                  <span className="ml-2 flex items-center text-sm text-gray-500">
                              <Calendar className="mr-1 h-3 w-3" />
                                    {activity.date} • {activity.timeSlot}
                            </span>
                              )}
                              {activity.role && (
                                  <span className="ml-2 text-sm text-gray-500">
                              {activity.role}
                            </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-6 py-3 text-right">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    View all activity
                  </a>
                </div>
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Upcoming Interviews</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                            {interview.company.charAt(0)}
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-sm font-medium text-gray-900">{interview.role}</h3>
                            <p className="text-sm text-gray-500">{interview.company}</p>
                            <div className="mt-1 flex items-center text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{interview.date}</span>
                              <Clock className="h-3 w-3 ml-2 mr-1" />
                              <span>{interview.time}</span>
                            </div>
                            <div className="mt-1">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              interview.type === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {interview.type}
                          </span>
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-gray-500">
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-6 py-3 text-center">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    View all interviews
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recommended Jobs</h2>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                View all jobs
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {jobListings.map((job) => (
                  <div key={job.id} className="bg-white shadow overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${job.logoColor} flex items-center justify-center text-xl font-bold`}>
                          {job.logo}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                            <button className="text-gray-400 hover:text-gray-500">
                              <Star className="h-5 w-5" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">{job.company}</p>

                          <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Briefcase className="h-3 w-3 mr-1" />
                              {job.type}
                        </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <DollarSign className="h-3 w-3 mr-1" />
                              {job.salary}
                        </span>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-xs text-gray-500">Posted {job.posted}</span>
                            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
  );
};

export default DashboardPage;
