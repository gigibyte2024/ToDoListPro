import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="flex justify-between items-center">
      <span>Dark Mode</span>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}
      >
        {darkMode ? 'On' : 'Off'}
      </button>
    </div>
  );
}
