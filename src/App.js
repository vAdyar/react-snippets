import Header from "./components/ToDo-List/Header";
import Footer from "./components/ToDo-List/Footer";
import About  from "./components/ToDo-List/About";
import Tasks from "./components/ToDo-List/Tasks";
import AddTask from "./components/ToDo-List/AddTask";
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DataFetching from "./components/API/DataFetching";
import ContextTest from "./components/ContextHook/ContextTest";
import CounterOne from "./components/ReducerHook/CounterOne";
import Reducer from "./components/ReducerHook/Reducer";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () =>  {
    const res = await fetch('http://localhost:5000/tasks/')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) =>  {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

// Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()
  setTasks([...tasks, data])

  // const id = Math.floor(Math.random() * 10000 + 1)
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

// Delete a task
const deleteTask = async (id) => {
    // console.log('delete' , id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks( tasks.filter((task) => task.id !== id ))
}

// Toggle reminder CSS
const toggleReminder = async (id) => {
  // console.log('toggle', id);
  const taskToToggle = await fetchTask(id)
  const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTask),
  })

  // const data = await res.json()

  setTasks( tasks.map((task) => 
        task.id === id ? {...task, reminder 
          : !task.reminder} : task)
  )}

  return (
    <Router>
    <div className="container">
      <Header 
        title = 'Vikas' 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd = {showAddTask}
        />
      
        <Route path="/" exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Tasks to display' }
          </>
        )}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/api' component={DataFetching}></Route>
        <Route path='/context' component={ContextTest}></Route>
        <Route path='/reducer' component={Reducer}></Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
