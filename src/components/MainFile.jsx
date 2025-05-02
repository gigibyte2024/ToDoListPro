import React, { useState, useRef, useEffect } from 'react';
import watermelon from './watermelon.png';
import Image45 from './Image45.png';


export default function Main() {
    const [tasksByDate, setTasksByDate] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [newTask, setNewTask] = useState({
        name: '',
        urgent: false,
        important: false,
        date: ''
    });

    const [isEditingHovered, setIsEditingHovered] = useState(false);
    const [isEditingEmpty, setIsEditingEmpty] = useState(true);
    const editableRef = useRef(null);

    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        setCurrentDay(dayNames[today.getDay()]);
    }, []);

    const handleEditableInput = () => {
        const text = editableRef.current?.innerText || '';
        setIsEditingEmpty(text.trim() === '');
    };

    const handleAddTask = () => {
        if (!newTask.name.trim() || !newTask.date) return;

        const task = { ...newTask, id: Date.now() };

        setTasksByDate(prev => {
            const updated = { ...prev };
            if (!updated[newTask.date]) updated[newTask.date] = [];
            updated[newTask.date].push(task);
            return updated;
        });

        setNewTask({ name: '', urgent: false, important: false, date: selectedDate });
    };

    const determineQuadrant = (task) => {
        const { urgent, important } = task;
        if (urgent && important) return 'do';
        if (!urgent && important) return 'schedule';
        if (urgent && !important) return 'delegate';
        return 'delete';
    };

    const renderTasks = (category) => {
        const tasks = tasksByDate[selectedDate] || [];
        return tasks
            .filter(task => determineQuadrant(task) === category)
            .map(task => (
                <div
                    key={task.id}
                    style={{
                        backgroundColor: '#333',
                        margin: '6px 0',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'white',
                        fontFamily: 'Poppins, sans-serif'
                    }}
                >
                    <input
                        type="checkbox"
                        onChange={() => {
                            const updated = { ...tasksByDate };
                            updated[selectedDate] = updated[selectedDate].filter(t => t.id !== task.id);
                            setTasksByDate(updated);
                        }}
                        title="Mark as done"
                        style={{ width: '18px', height: '18px' }}
                    />
                    <div>
                        <strong>{task.name}</strong><br />
                        <span style={{ fontSize: '12px', color: '#aaa' }}>{task.date}</span>
                    </div>
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
                <img
                    src={Image45}
                    alt="Banner"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
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
                <div className="comment-container" style={{ position: 'relative', display: 'inline-block' }}>
                    <img
                        src={watermelon}
                        alt="Watermelon"
                        style={{
                            height: '15vh',
                            width: '15vh',
                            transform: 'rotate(50deg)',
                            filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.7))'
                        }}
                    />
                    <div className="add-comment-hover" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        color: '#aaa',
                        fontSize: '14px',
                        marginTop: '4px',
                        visibility: 'hidden'
                    }}>
                        Add comment
                    </div>
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
                        style={{
                            position: 'relative',
                            minHeight: '24px',
                            marginTop: '6px'
                        }}
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
                    {/* Clock Box */}
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

                    {/* Spotify Embed Below Clock */}
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
                
                {/* Right Side - Weekly To-Do Boxes */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    flex: 2,
                    fontFamily: 'Poppins, sans-serif',
                    color: '#ddd'
                }}>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <div key={day} style={{
                            backgroundColor: '#1e2b23',
                            borderRadius: '12px',
                            padding: '20px',
                            border: '1px solid #3a5641'
                        }}>
                            <h4 style={{ color: '#9be79e', marginBottom: '10px' }}>💚 {day}</h4>
                            {[1, 2, 3, 4].map((_, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '10px'
                                }}>
                                    <input type="checkbox" style={{
                                        width: '16px',
                                        height: '16px',
                                        marginRight: '10px'
                                    }} />
                                    <span style={{ color: '#ccc', fontSize: '14px' }}>To-do</span>
                                </div>
                                
                            ))}
                        </div>
                        
                    ))}
                    
                </div>
                
            </div>

            
            

            {selectedDate && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    padding: '0 20px',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif'
                }}>

                    
                    <div>
                        <h4>Do It (Urgent + Important)</h4>
                        {renderTasks('do')}
                    </div>
                    <div>
                        <h4>Schedule (Not Urgent + Important)</h4>
                        {renderTasks('schedule')}
                    </div>
                    <div>
                        <h4>Delegate (Urgent + Not Important)</h4>
                        {renderTasks('delegate')}
                    </div>
                    <div>
                        <h4>Delete (Not Urgent + Not Important)</h4>
                        {renderTasks('delete')}
                    </div>
                </div>
            )}
        </>
    );
}
