import React from 'react'
import './App.css'

// import types 
import { FilterValuesType } from './App'

// type definitions
export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: number) => void
  changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
  const { title, tasks, removeTask, changeFilter } = props
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {tasks.map(task => <li key={task.id}><input type="checkbox" checked={task.isDone} onChange={e => { }} /><span>{task.title}</span><button onClick={(e) => { removeTask(task.id) }}>X</button></li>)}
      </ul>
      <div>
        <button onClick={() => { changeFilter('all') }}>All</button>
        <button onClick={() => { changeFilter('active') }}>Aсtive</button>
        <button onClick={() => { changeFilter('completed') }}>Completed</button>
      </div>
    </div>
  )
}
