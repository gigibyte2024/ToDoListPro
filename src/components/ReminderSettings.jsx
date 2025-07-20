import React, { useState } from 'react';

export default function ReminderSettings() {
  const [enabled, setEnabled] = useState(localStorage.getItem('reminder') === 'true');
  const [time, setTime] = useState(localStorage.getItem('reminderTime') || '10');

  const toggleReminder = () => {
    const newState = !enabled;
    setEnabled(newState);
    localStorage.setItem('reminder', newState);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    localStorage.setItem('reminderTime', e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span>Enable Reminders</span>
        <input type="checkbox" checked={enabled} onChange={toggleReminder} />
      </div>

      {enabled && (
        <div className="mt-2">
          <label className="block text-sm">Reminder before task (minutes):</label>
          <input
            type="number"
            value={time}
            onChange={handleTimeChange}
            className="p-2 border rounded bg-gray-100 dark:bg-gray-800 w-full"
          />
        </div>
      )}
    </div>
  );
}
