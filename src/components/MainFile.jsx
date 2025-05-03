// Main.jsx
import React, { useState, useRef, useEffect } from 'react';
import watermelon from './watermelon.png';
import Image45 from './Image45.png';

export default function Main() {
    const [tasksByDate, setTasksByDate] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [newTaskText, setNewTaskText] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const editableRef = useRef(null);
    const [isEditingHovered, setIsEditingHovered] = useState(false);
    const [isEditingEmpty, setIsEditingEmpty] = useState(true);

    useEffect(() => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        setCurrentDay(dayNames[today.getDay()]);
    }, []);

    const handleEditableInput = () => {
        const text = editableRef.current?.innerText || '';
        setIsEditingEmpty(text.trim() === '');
    };

    const [tasks, setTasks] = useState({});
const [editingTask, setEditingTask] = useState(null);

const updateTask = (day, index, value) => {
    setTasks(prev => ({
        ...prev,
        [day]: {
            ...prev[day],
            [index]: value
        }
    }));
};

    const [expandedDay, setExpandedDay] = useState(null);
    const [notes, setNotes] = useState({});
    
    const toggleDay = (day) => {
        if (expandedDay === day) {
            setExpandedDay(null); // Close the section if clicked again
        } else {
            setExpandedDay(day); // Open the section for the clicked day
        }
    };
    
    const handleNoteChange = (day, value) => {
        setNotes(prev => ({
            ...prev,
            [day]: value
        }));
    };
    


    const handleAddTask = (day) => {
        if (!newTaskText.trim()) return;
        const task = { id: Date.now(), name: newTaskText, done: false };

        setTasksByDate(prev => {
            const updated = { ...prev };
            if (!updated[day]) updated[day] = [];
            updated[day].push(task);
            return updated;
        });

        setNewTaskText('');
    };

    const handleToggleTask = (day, taskId) => {
        const updated = { ...tasksByDate };
        updated[day] = updated[day].map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
        );
        setTasksByDate(updated);
    };

    const renderTasks = (day) => {
        return (tasksByDate[day] || []).map(task => (
            <div key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => handleToggleTask(day, task.id)}
                    style={{ marginRight: '10px', width: '16px', height: '16px' }}
                />
                <span style={{ textDecoration: task.done ? 'line-through' : 'none', color: '#ccc' }}>
                    {task.name}
                </span>
            </div>
        ));
    };

    return (
        <>
            {/* Top Navbar */}
            <div style={{
                backgroundColor: '#1f1f1f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px',
                borderBottom: '1px solid #333',
                fontFamily: 'Poppins, sans-serif'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ fontSize: '24px', color: 'white', cursor: 'pointer' }}>&#9776;</div>
                    <img src={watermelon} alt="Logo" style={{ height: '30px', width: '30px', transform: 'rotate(50deg)' }} />
                    <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Weekly-Planner</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{
                        fontSize: '14px',
                        backgroundColor: '#333',
                        color: '#ccc',
                        padding: '4px 10px',
                        borderRadius: '6px'
                    }}>
                        Private
                    </span>
                    <button style={{
                        fontSize: '14px',
                        backgroundColor: '#222',
                        color: '#fff',
                        padding: '4px 10px',
                        border: '1px solid #444',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}>
                        Share
                    </button>
                </div>
            </div>

            {/* Banner */}
            <div style={{ width: '100%', height: '30vh', overflow: 'hidden' }}>
                <img src={Image45} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Watermelon Image + Title */}
            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingLeft: '100px',
                marginTop: '-70px',
                fontFamily: 'Poppins, sans-serif'
            }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={watermelon} alt="Watermelon"
                        style={{
                            height: '15vh',
                            width: '15vh',
                            transform: 'rotate(50deg)',
                            filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.7))'
                        }}
                    />
                </div>

                <div style={{ padding: '5px 10px', marginTop: '5px' }}>
                    <h3 style={{
                        color: "#F5F5F5",
                        fontSize: '30px',
                        margin: 0,
                        fontFamily: 'Georgia, serif'
                    }}>
                        Weekly-Planner
                    </h3>

                    <div
                        onMouseEnter={() => setIsEditingHovered(true)}
                        onMouseLeave={() => setIsEditingHovered(false)}
                        style={{ position: 'relative', minHeight: '24px', marginTop: '6px' }}
                    >
                        <div
                            ref={editableRef}
                            contentEditable
                            onInput={handleEditableInput}
                            suppressContentEditableWarning
                            style={{
                                color: '#eee',
                                fontSize: '14px',
                                fontFamily: 'Poppins, sans-serif',
                                outline: 'none',
                                minHeight: '24px'
                            }}
                        ></div>
                        {(isEditingHovered && isEditingEmpty) && (
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                fontSize: '14px',
                                fontStyle: 'italic',
                                color: '#ccc',
                                pointerEvents: 'none'
                            }}>
                                Write anything or add comments here 
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <hr style={{ border: '1px solid grey', width: '100%', margin: '0' }} />
            <hr style={{ border: '1px solid grey', width: '100%', marginBottom: '0px' }} />

            {/* Clock, Spotify, and To-Do Boxes */}
            <div style={{
                display: 'flex',
                padding: '40px 60px',
                gap: '30px',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between'
            }}>
                {/* Left Side - Clock and Spotify */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Clock */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        height: '250px'
                    }}>
                        <iframe
                            src="https://widgetbox.app/embed/clock/digital/661c12ed-30a0-4fba-a790-5f9e0f3118a0"
                            title="Clock"
                            style={{
                                border: 'none',
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>

                    {/* Spotify */}
                    <div style={{
                        marginTop: '20px',
                        width: '100%',
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/5cmSk2LLhQ3uHB6I26X9kI?utm_source=generator" 
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

             {/* Middle - Weekly Boxes */}
<div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    flex: 2,
    fontFamily: 'Poppins, sans-serif',
    color: '#ddd'
}}>
    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
        <div key={day} style={{
            backgroundColor: '#1e2b23',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid #3a5641'
        }}>
            <h4 style={{
                color: '#fff',
                marginBottom: '10px',
                textTransform: 'uppercase',
                color: '#4caf50',
                padding: '4px 8px',
                borderRadius: '6px',
                display: 'inline-block'
            }}>
                💚 <u>{day.toLowerCase()}</u>
            </h4>

            {[0, 1, 2, 3].map(index => {
                const task = tasks?.[day]?.[index] || '';
                const isEditing = editingTask?.day === day && editingTask.index === index;

                return (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <input type="checkbox" style={{ marginRight: '10px' }} />
                        {isEditing ? (
                            <input
                                autoFocus
                                type="text"
                                value={task}
                                onChange={(e) => updateTask(day, index, e.target.value)}
                                onBlur={() => setEditingTask(null)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') setEditingTask(null);
                                }}
                                style={{
                                    flex: 1,
                                    backgroundColor: '#26352b',
                                    border: '1px solid #444',
                                    borderRadius: '6px',
                                    color: '#fff',
                                    padding: '4px 8px',
                                    fontSize: '14px'
                                }}
                            />
                        ) : (
                            <span
                                onClick={() => setEditingTask({ day, index })}
                                style={{ cursor: 'pointer', color: '#bbb' }}
                            >
                                {task || 'To-do'}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    ))}

    {/* Embedded Widget as Separate Grid Item */}
    <div style={{
        // backgroundColor: '#1e2b23',
        // borderRadius: '12px',
        // border: '1px solid #3a5641',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <iframe
            src="https://indify.co/widgets/live/progressBar/4A0VVlLBouwnnppaRnAT"
            title="Progress Bar"
            style={{
                border: 'none',
                width: '100%',
                height: '100%',
                borderRadius: '8px'
            }}
        ></iframe>
    </div>
</div>


                {/* Right Panel Placeholder */}
                {/* Right Side - Weekly To-Do's */}
{/* Right Side - Weekly To-Do's */}
{/* Right Side - Weekly To-Do's */}
<div style={{
    flex: 1,
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
    color: '#ccc',
}}>
    <h3 style={{ marginBottom: '30px', color: '#9be79e' }}>Weekly to-do's</h3>
    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1, cursor: 'pointer' }} onClick={() => toggleDay(day)}>
                        <span style={{ marginRight: '8px' }}>{expandedDay === day ? '▼' : '►'}</span>
                        <span style={{
                            backgroundColor: '#1e2b23',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            flexGrow: 1
                        }}>{day}</span>
                    </div>
                    <input type="checkbox" />
                </div>

                {expandedDay === day && (
                    <div style={{ marginTop: '8px' }}>
                        <textarea
                            placeholder="Add Something..."
                            value={notes[day] || ''}
                            onChange={(e) => handleNoteChange(day, e.target.value)}
                            style={{
                                width: '100%',
                                backgroundColor: '#333',
                                color: 'white',
                                border: '1px solid #555',
                                borderRadius: '6px',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                )}
            </li>
        ))}
    </ul>

    {/* Pomofocus Embed */}
    <div style={{ marginTop: '40px' }}>
        <h4 style={{ color: '#9be79e', marginBottom: '10px' }}>Pomodoro Timer</h4>
        <iframe
            src="https://pomofocus.io/"
            style={{
                width: '100%',
                height: '300px',
                minHeight: '200px',  // Match height to task boxes
                border: 'none',
                borderRadius: '10px',
                overflow: 'hidden'
            }}
            title="Pomofocus Timer"
        />
    </div>
</div>





            </div>
        </>
    );
}
