import { useState } from 'react';

export default function SettingsPage() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [jobRecommendations, setJobRecommendations] = useState(true);

  return (
    <div className="bg-pattern min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm w-full sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-[audiowide] text-2xl tracking-tight">
              <span className="text-black">Hive</span>
              <span className="text-red-600">X</span>
              <span className="text-black">perience</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="inline-block w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="font-semibold">Ayoub Rahmoun</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Account Settings */}
        <section className="bg-white rounded-2xl shadow p-8 mb-6">
          <h2 className="text-xl font-bold mb-6">Account Settings</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Email Address</label>
            <input type="email" placeholder="Example@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Phone Number</label>
            <input type="tel" placeholder="+212 666666666" className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <button onClick={() => setShowPasswordModal(true)} className="text-red-600 hover:underline font-semibold">Change Password</button>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white rounded-2xl shadow p-8 mb-6">
          <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
          <div className="flex flex-col gap-6">
            {[{
              label: 'Email Notifications',
              desc: 'Receive email updates about your applications',
              value: emailNotifications,
              onChange: setEmailNotifications
            }, {
              label: 'Job Recommendations',
              desc: 'Receive personalized job recommendations',
              value: jobRecommendations,
              onChange: setJobRecommendations
            }].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <span className="font-semibold">{item.label}</span>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={item.value} onChange={() => item.onChange(!item.value)} />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer peer-checked:bg-red-600 transition-colors" />
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-transform" />
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-white rounded-2xl shadow p-8 mb-6 border-2 border-red-400">
          <h2 className="text-xl font-bold mb-4 text-red-600">Danger Zone</h2>
          <div className="flex items-center justify-between">
            <div>
              <button className="text-red-600 font-semibold hover:underline">Delete Account</button>
              <p className="text-gray-600 text-sm">Permanently delete your account and all associated data</p>
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">Delete Account</button>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-8 py-2 bg-[#2C3956] text-white rounded-lg font-semibold hover:bg-[#1d2536]">Save Change</button>
        </div>
      </main>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={() => setShowPasswordModal(false)}>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-2xl bg-white" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Change Password</h3>
              <button onClick={() => setShowPasswordModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button onClick={() => setShowPasswordModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Password</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// In your App.css or index.css:
// @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
// body { background-color: #f4f4f4; }
// .bg-pattern { background-image: url('https://www.transparenttextures.com/patterns/bedge-grunge.png'); background-repeat: repeat; }
