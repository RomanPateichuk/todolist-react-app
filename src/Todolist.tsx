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
  filter: FilterValuesType
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (taskText: string) => void
  changeStatus: (id: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

  let [taskText, setTaskText] = useState('')
  let [error, setError] = useState<string | null>(null)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.code === 'Enter') {
      callAddTask()
    }
  }
  const callAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText.trim())
      setTaskText('')
    }
    else {
      setError("Title is required")
    }
  }

  const onAllClickHandler = () => changeFilter('all')
  const onActivecliCkHandler = () => changeFilter('active')
  const onCompletedClickHandler = () => changeFilter('completed')

  const { title, tasks, filter, removeTask, changeFilter, addTask, changeStatus } = props
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type="text"
          className={error ? 'error' : ''}
          value={taskText}
          onChange={onChangeInput}
          onKeyDown={onKeyPressHandler} />
        <button onClick={callAddTask}>+</button>
        {error && <div className='error-message'>{error}</div>}
      </div>
      <ul>
        {
          tasks.map(task => {
            const onRemoveHandler = () => {
              removeTask(task.id)
            }

            const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
              changeStatus(task.id, e.currentTarget.checked)
            }

            return <li className={task.isDone ? 'is-done' : ''} key={task.id}>
              <input type="checkbox" checked={task.isDone} onChange={onChangeCheckboxHandler} />
              <span>{task.title}</span>
              <button onClick={onRemoveHandler}>X</button>
            </li>
          })
        }
      </ul>
      <div>
        <button
          className={filter === 'all' ? 'active-filter' : ''}
          onClick={onAllClickHandler}>All
        </button>
        <button
          className={filter === 'active' ? 'active-filter' : ''}
          onClick={onActivecliCkHandler}>
          Aсtive
        </button>
        <button
          className={filter === 'completed' ? 'active-filter' : ''}
          onClick={onCompletedClickHandler}>
          Completed
        </button>
      </div>
    </div>
  )
}
