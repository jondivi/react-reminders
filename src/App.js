import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState} from 'react';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Reminder 1',
        date: '01-05-2024',
        time: '3:00 PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Reminder 2',
        date: 'February 13th',
        time: '3:05 PM',
        reminder: true,
    }, 
    {
        id: 3,
        text: 'Reminder 3',
        date: 'February 14th',
        time: '5:00 PM',
        reminder: false,
    },
    {
      id: 4,
      text: 'Reminder 4',
      date: 'February 15th',
      time: '3:07 PM',
      reminder: true,
  },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  console.log(`Reminder has been assigned ID ${id}`);
  console.log(task )  

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id));
  console.log('deleted reminder', id)
} 

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } :task))
  console.log('Toggled reminder on/off',id)
}
  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  />
      ) : (
        'No Reminders Left'
      )}  
    </div>
  );
}

export default App;
