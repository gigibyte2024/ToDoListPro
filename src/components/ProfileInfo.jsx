import React, { useState, useEffect } from 'react';

export default function ProfileInfo() {
  const [name, setName] = useState(localStorage.getItem('username') || '');

  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('username', e.target.value);
  };

  return (
    <div>
      <label className="block text-sm font-medium">Username:</label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className="mt-1 p-2 border rounded w-full bg-gray-100 dark:bg-gray-800"
      />
    </div>
  );
}
