
import React from 'react';import ThemeToggle from '../components/ThemeToggle';
import ReminderSettings from '../components/ReminderSettings';
import ProfileInfo from '../components/ProfileInfo';

export default function Settings() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <ProfileInfo />
      <hr className="my-4" />

      <ThemeToggle />
      <hr className="my-4" />

      <ReminderSettings />
      <hr className="my-4" />

      <button
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login'; // redirect
        }}
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
