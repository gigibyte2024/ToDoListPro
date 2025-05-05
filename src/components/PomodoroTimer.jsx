import React, { useState, useEffect } from 'react';

export default function PomodoroTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div>
            <h1 style={{ fontSize: '40px', margin: '10px 0' }}>{formatTime(timeLeft)}</h1>
            <button onClick={() => setIsRunning(!isRunning)} style={{
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '10px'
            }}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
        </div>
    );
}
