
// import React, { useState } from 'react';
// import Image11 from './Imagei11.png';
// import watermelon from './watermelon.webp';

// export default function Main() {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState({
//         name: '',
//         urgent: false,
//         important: false,
//         date: ''
//     });

//     const handleAddTask = () => {
//         if (!newTask.name.trim()) return;

//         const task = {
//             ...newTask,
//             id: Date.now()
//         };

//         setTasks([...tasks, task]);
//         setNewTask({
//             name: '',
//             urgent: false,
//             important: false,
//             date: ''
//         });
//     };

//     const determineQuadrant = (task) => {
//         const { urgent, important } = task;
//         if (urgent && important) return 'do';
//         if (!urgent && important) return 'schedule';
//         if (urgent && !important) return 'delegate';
//         return 'delete';
//     };

//     const renderTasks = (category) => {
//         return tasks
//           .filter(task => determineQuadrant(task) === category)
//           .map(task => (
//             <div
//               key={task.id}
//               style={{
//                 backgroundColor: '#333',
//                 margin: '6px 0',
//                 padding: '10px 14px',
//                 borderRadius: '10px',
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',
//                 gap: '10px',
//                 color: 'white',
//               }}
//             >
//               <input
//                 type="checkbox"
//                 onChange={() => setTasks(tasks.filter(t => t.id !== task.id))}
//                 title="Mark as done"
//                 style={{ width: '18px', height: '18px' }}
//               />
//               <div>
//                 <strong>{task.name}</strong><br />
//                 <span style={{ fontSize: '12px', color: '#aaa' }}>{task.date}</span>
//               </div>
//             </div>
//           ));
//       };
      

//     return (
//         <>
//             <div style={{ position: 'relative', width: 'auto' }}>
//                 <img src={Image11} style={{ width: '100%', height: '29vh', display: 'block' }} alt="Banner" />
//                 <img src={Image10} style={{ position: 'absolute', top: '20vh', left: '20px', height: '15vh', width: '14vh' }} alt="Teddy" />
//             </div>

//             <div style={{ display: 'inline-block',textAlign:'center',position: 'relative', 
//     padding: '10px 20px', 
//     border: '2px solid white', 
//     borderRadius: '8px', 
//     marginTop: '50px', 
//     animation: 'pulseBorder 2s infinite' 
// }}>
//     <h3 style={{ 
//         color: 'white', 
//         fontSize: '40px', 
//         margin: 0 
//     }}>To-do</h3>
//     <div style={{
//         content: '""',
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         height: '2px',
//         // width: '100%',
//         backgroundColor: '#00ffff',
//         animation: 'underlineMove 2s infinite linear',
//         // padding:'10vh'
//     }} />
// </div>


//             <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '10px', flexWrap: 'wrap',alignItems:'flex-end' }}>
//                 <input
//                     type="text"
//                     placeholder="Task name"
//                     value={newTask.name}
//                     onChange={e => setNewTask({ ...newTask, name: e.target.value })}
//                 />
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={newTask.urgent}
//                         onChange={e => setNewTask({ ...newTask, urgent: e.target.checked })}
//                     /> Urgent
//                 </label>
//                 <label>
//                     <input
//                         type="checkbox"
//                         checked={newTask.important}
//                         onChange={e => setNewTask({ ...newTask, important: e.target.checked })}
//                     /> Important
//                 </label>
//                 <input
//                     type="date"
//                     value={newTask.date}
//                     onChange={e => setNewTask({ ...newTask, date: e.target.value })}
//                 />
//             </div>
// <div style={{ display: 'flex',justifyContent:'center' }}>
//     <button 
//       onClick={handleAddTask}
//       style={{
//         padding: '10px 12px',
//         fontSize: '14px',
//         backgroundColor: 'rgb(248, 211, 177, 0.5)',
//         color: '#000',
//         border: 'none',
//         borderRadius: '6px',
//         cursor: 'pointer',
//         marginTop: '22px' ,
//         width:'10vh',
        
//         alignItems:'center'
//       }}
//     >
//       Add Task
//     </button>
//   </div>

            

//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '0 20px', color: 'white' }}>
//                 <div>
//                     <h4>Do It (Urgent + Important)</h4>
//                     {renderTasks('do')}
//                 </div>
//                 <div>
//                     <h4>Schedule (Not Urgent + Important)</h4>
//                     {renderTasks('schedule')}
//                 </div>
//                 <div>
//                     <h4>Delegate (Urgent + Not Important)</h4>
//                     {renderTasks('delegate')}
//                 </div>
//                 <div>
//                     <h4>Delete (Not Urgent + Not Important)</h4>
//                     {renderTasks('delete')}
//                 </div>
//                 {/* <div className='google-calendar'>
//                 <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&src=a2h5YXRpLmJhdHJhMjAyNEBuc3QucmlzaGlob29kLmVkdS5pbg&src=ZW4taW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&color=%230B8043" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
//                 </div> */}
                


//             </div>
//         </>
//     );
// }


// ...imports remain the same
import React, { useState, useRef } from 'react';
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

            {/* Banner Image */}
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

            {/* Watermelon Image + Title Below Banner */}
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
                {/* Watermelon with hover comment */}
                <div
                    className="comment-container"
                    style={{
                        position: 'relative',
                        display: 'inline-block'
                    }}
                >
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
                    <div
                        className="add-comment-hover"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            color: '#aaa',
                            fontSize: '14px',
                            marginTop: '4px',
                            visibility: 'hidden'
                        }}
                    >
                        Add comment
                    </div>
                </div>

                {/* Heading */}
                <div style={{ padding: '5px 10px', marginTop: '5px' }}>
                    <h3 style={{
                        color: "#F5F5F5",
                        fontSize: '30px',
                        margin: 0,
                        fontFamily: 'Georgia, serif'
                    }}>
                        Weekly-Planner
                    </h3>

                    {/* Editable content area with placeholder */}
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

            {/* Task Input Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                gap: '10px',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                fontFamily: 'Poppins, sans-serif'
            }}>
                <input
                    type="text"
                    placeholder="Task name"
                    value={newTask.name}
                    onChange={e => setNewTask({ ...newTask, name: e.target.value })}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={newTask.urgent}
                        onChange={e => setNewTask({ ...newTask, urgent: e.target.checked })}
                    /> Urgent
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={newTask.important}
                        onChange={e => setNewTask({ ...newTask, important: e.target.checked })}
                    /> Important
                </label>
                <input
                    type="date"
                    value={newTask.date}
                    onChange={e => {
                        setNewTask({ ...newTask, date: e.target.value });
                        setSelectedDate(e.target.value);
                    }}
                />
            </div>

            {/* Add Task Button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={handleAddTask}
                    style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        backgroundColor: 'rgba(248, 211, 177, 0.5)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginTop: '22px',
                        width: '10vh',
                        fontFamily: 'Poppins, sans-serif'
                    }}
                >
                    Add Task
                </button>
            </div>

            {/* Task Display Grid */}
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

            {/* CSS for comment hover */}
            <style>{`
                .comment-container:hover .add-comment-hover {
                    visibility: visible;
                }
            `}</style>
        </>
    );
}



