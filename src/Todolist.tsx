import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import './App.css'

// import types 
import { FilterValuesType } from './App'

// type definitions
export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (taskText: string) => void
}

export function Todolist(props: PropsType) {

  let [taskText, setTaskText] = useState('')

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      callAddTask()
    }
  }
  const callAddTask = () => {
    addTask(taskText)
    setTaskText('')
  }

  const onAllClickHandler = () => changeFilter('all')
  const onActivecliCkHandler = () => changeFilter('active')
  const onCompletedClickHandler = () => changeFilter('completed')

  const { title, tasks, removeTask, changeFilter, addTask } = props
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type="text" value={taskText}
          onChange={onChangeInput}
          onKeyDown={onKeyPressHandler} />
        <button onClick={callAddTask}>+</button>
      </div>
      <ul>
        {
          tasks.map(task => {
            const onRemoveHandler = () => {
              removeTask(task.id)
            }
            return <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
              <button onClick={onRemoveHandler}>X</button>
            </li>
          })
        }
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActivecliCkHandler}>Aсtive</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  )
}
