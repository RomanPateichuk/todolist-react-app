import React, { useState } from 'react';
import { Todolist } from './Todolist'
import './App.css';

// import types 
import { TaskType } from './Todolist'

// type definitions
export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ])
  let [filter, setFilter] = useState<FilterValuesType>('all')

  const removeTask = (id: number) => {
    let result = tasks.filter(task => task.id !== id)
    setTasks(result)
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
      <Todolist title="What learn" tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter} />
    </div>
  );
}

export default App;
