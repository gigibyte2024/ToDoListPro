import React, { useEffect, useState } from 'react';
import ReminderSettings from '../components/ReminderSettings';
import ProfileInfo from '../components/ProfileInfo';
import './Settings.css'; // Import external CSS

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode from class or localStorage if you use that
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div className="page-wrapper">
      <div className={`settings-container ${isDarkMode ? 'dark' : ''}`}>
        <h2 className="settings-title">Settings</h2>

        <ProfileInfo />
        <hr className={`settings-divider ${isDarkMode ? 'dark' : ''}`} />

        <ThemeToggle />
        <hr className={`settings-divider ${isDarkMode ? 'dark' : ''}`} />

        <ReminderSettings />
        <hr className={`settings-divider ${isDarkMode ? 'dark' : ''}`} />

        <button
          onClick={() => {
            localStorage.removeItem('user');
            window.location.href = '/login'; // redirect
          }}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
