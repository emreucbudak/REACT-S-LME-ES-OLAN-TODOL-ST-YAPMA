import { useState } from 'react'
import AddTask from './AddTask'
import './App.css'
import Header from './Header'
import TaskList from './TaskList'

function App() {
  const [tasks,setTasks] = useState([])
  const onCreate = (name,title) => {
    const created = [
      ...tasks,{
        id: Math.round(Math.random()*9999999999999),
        name,
        title,
      }
    ]
    setTasks(created)
  }
  const deleteTaskByID = (id) => {
    const afterTask = tasks.filter((task) => {
      return task.id !== id
      // tasks.filter istenmeyen öğeleri çıkararak filtreleme yapar
    })
    setTasks(afterTask)

  }
  return (
    <>
    <Header/>
    <AddTask onCreate = {onCreate}/>
    <h1>Görevler</h1>
    <TaskList tasks={tasks} onDelete={deleteTaskByID}/>
    </>
  )
}

export default App
