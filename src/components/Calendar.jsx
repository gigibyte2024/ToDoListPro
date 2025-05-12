import React, { useState } from 'react';

export default function Calendar() {
    const [tasks, setTasks] = useState({
        daily: [{ checked: false, text: '' }],
        weekly: [{ checked: false, text: '' }],
        monthly: [{ checked: false, text: '' }],
    });

    const [editing, setEditing] = useState({ section: '', index: -1 });

    const toggleCheck = (section, index) => {
        const updated = { ...tasks };
        updated[section][index].checked = !updated[section][index].checked;
        setTasks(updated);
    };

    const handleTextChange = (section, index, value) => {
        const updated = { ...tasks };
        updated[section][index].text = value;
        setTasks(updated);
    };

    const handleBlur = () => {
        setEditing({ section: '', index: -1 });
    };

    const addNewTask = (section) => {
        const updated = { ...tasks };
        updated[section].push({ checked: false, text: '' });
        setTasks(updated);
        setEditing({ section, index: updated[section].length - 1 });
    };

    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#121212', fontFamily: 'Poppins, sans-serif', color: '#d4fcdc', overflow: 'hidden' }}>
            {/* Navbar */}
            <nav style={{
                height: '60px',
                borderBottom: '1px solid #2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 20px',
                backgroundColor: '#1e1e1e'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🍉</span>
                    <h1 style={{ fontSize: '1.2rem' }}>Weekly Planner</h1>
                </div>
                <div>
                    <span style={{ fontSize: '0.9rem', color: '#aaa' }}>Private ▾</span>
                </div>
            </nav>

            {/* Main Layout */}
            <div style={{ display: 'flex', height: 'calc(100% - 60px)' }}>
                {/* Left To-Do List */}
                <div style={{ width: '25%', borderRight: '1px solid #2a2a2a', padding: '20px', overflowY: 'auto' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>✅ To do list</h2>

                    {['daily', 'weekly', 'monthly'].map((section, i) => (
                        <div key={i} style={{ marginBottom: '25px' }}>
                            <p style={{ fontWeight: 'bold', color: '#7FFFD4' }}>
                                ▾ {section.charAt(0).toUpperCase() + section.slice(1)}
                            </p>
                            {tasks[section].map((task, index) => (
                                <div key={index} style={{ marginBottom: '10px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="checkbox"
                                            checked={task.checked}
                                            onChange={() => toggleCheck(section, index)}
                                            style={{ marginRight: '8px' }}
                                        />
                                        {editing.section === section && editing.index === index ? (
                                            <input
                                                type="text"
                                                value={task.text}
                                                onChange={(e) => handleTextChange(section, index, e.target.value)}
                                                onBlur={handleBlur}
                                                onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
                                                autoFocus
                                                style={{
                                                    backgroundColor: '#1e1e1e',
                                                    border: '1px solid #444',
                                                    color: '#d4fcdc',
                                                    padding: '4px',
                                                    width: '100%',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        ) : (
                                            <span
                                                onClick={() => setEditing({ section, index })}
                                                style={{ cursor: 'pointer', flex: 1 }}
                                            >
                                                {task.text || 'Anything you want'}
                                            </span>
                                        )}
                                    </label>
                                </div>
                            ))}
                            <p
                                onClick={() => addNewTask(section)}
                                style={{ color: '#888', cursor: 'pointer' }}
                            >
                                + Add 
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Calendar */}
                <div style={{ width: '75%', padding: '20px', boxSizing: 'border-box' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>📅 Calendar</h2>
                    <iframe
                        src="https://calendar.google.com/calendar/u/0/embed?pli=1"
                        style={{
                            width: '100%',
                            height: 'calc(100% - 40px)',
                            border: 'none',
                            borderRadius: '10px',
                            filter: 'invert(1) hue-rotate(180deg)'
                        }}
                        title="Google Calendar"
                        frameBorder="0"
                        scrolling="no"
                    />
                </div>
            </div>
        </div>
    );
}
