
// import React, { useState } from 'react';
// import Image11 from './Imagei11.png';
// import Image10 from './Image10.webp';

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




import React, { useState } from 'react';
import Image11 from './Imagei11.png';
import Image10 from './Image10.webp';

export default function Main() {
    const [tasksByDate, setTasksByDate] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [newTask, setNewTask] = useState({
        name: '',
        urgent: false,
        important: false,
        date: ''
    });

    const handleAddTask = () => {
        if (!newTask.name.trim() || !newTask.date) return;

        const task = {
            ...newTask,
            id: Date.now()
        };

        setTasksByDate(prev => {
            const updatedTasks = { ...prev };
            if (!updatedTasks[newTask.date]) {
                updatedTasks[newTask.date] = [];
            }
            updatedTasks[newTask.date].push(task);
            return updatedTasks;
        });

        setNewTask({
            name: '',
            urgent: false,
            important: false,
            date: selectedDate // preserve selected date
        });
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
            <div style={{ position: 'relative', width: 'auto' }}>
                <img src={Image11} style={{ width: '100%', height: '29vh', display: 'block' }} alt="Banner" />
                <img src={Image10} style={{ position: 'absolute', top: '20vh', left: '20px', height: '15vh', width: '14vh' }} alt="Teddy" />
            </div>

            <div style={{
                display: 'inline-block', textAlign: 'center', position: 'relative',
                padding: '10px 20px',
                border: '2px solid white',
                borderRadius: '8px',
                marginTop: '50px',
                animation: 'pulseBorder 2s infinite'
            }}>
                <h3 style={{
                    color: 'white',
                    fontSize: '40px',
                    margin: 0
                }}>To-do</h3>
                <div style={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    backgroundColor: '#00ffff',
                    animation: 'underlineMove 2s infinite linear',
                }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
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
                        setSelectedDate(e.target.value); // set currently selected date
                    }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={handleAddTask}
                    style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        backgroundColor: 'rgb(248, 211, 177, 0.5)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginTop: '22px',
                        width: '10vh',
                        alignItems: 'center'
                    }}
                >
                    Add Task
                </button>
            </div>

            {selectedDate && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '0 20px', color: 'white' }}>
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
                    <div>
                        <h1>
                            HELLLLLLL
                        </h1>
                    </div>
                </div>
            )}
        </>
    );
}
