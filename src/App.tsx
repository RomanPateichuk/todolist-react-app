import React, { useState } from 'react';
import { Todolist } from './Todolist'
import { v1 } from 'uuid'
import './App.css';

// import types 
import { TaskType } from './Todolist'

// type definitions
export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: 'CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
  ])
  let [filter, setFilter] = useState<FilterValuesType>('all')

  const removeTask = (id: string) => {
    let result = tasks.filter(task => task.id !== id)
    setTasks(result)
  }

  const addTask = (taskText: string) => {
    let newTask = {
      id: v1(),
      title: taskText,
      isDone: false
    }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value)
  }

  let tasksForTodolist = tasks

  if (filter === "completed") {
    tasksForTodolist = tasks.filter(task => task.isDone)
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter(task => !task.isDone)
  }
  if (filter === "all") {
    tasksForTodolist = tasks
  }

  return (
    <div className="App">
      <Todolist title="What learn" tasks={tasksForTodolist} removeTask={removeTask} addTask={addTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
