import React, { ChangeEvent } from 'react'
import { AddItemForm } from './AddItemForm'
import './App.css'
import { EditableSpan } from './EditableSpan'

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
  id: string
  removeTask: (id: string, todolistId: string) => void
  changeFilter: (value: FilterValuesType, todolistId: string) => void
  addTask: (taskText: string, todolistId: string) => void
  changeStatus: (id: string, isDone: boolean, todolistId: string) => void
  removeTodolist: (id: string) => void
  changeTaskTitle: (newTitle: string, toDoListId: string, taskId: string) => void
  changeTodoListTitle: (newTitle: string, toDoListId: string) => void
}

export function Todolist(props: PropsType) {

  const onAllClickHandler = () => changeFilter('all', id)
  const onActivecliCkHandler = () => changeFilter('active', id)
  const onCompletedClickHandler = () => changeFilter('completed', id)
  const onRemoveTodolist = () => removeTodolist(id)

  const { title, tasks, filter, id, removeTask, changeFilter, addTask, changeStatus, removeTodolist, changeTaskTitle, changeTodoListTitle } = props

  const addTaskContainer = (title: string) => {
    addTask(title, id)
  }

  const changeTodoListTitleContainer = (newTitle: string) => {
    changeTodoListTitle(newTitle, id)
  }

  return (
    <div>
      <h3>
        <EditableSpan title={title} saveEdit={changeTodoListTitleContainer} />
        <button onClick={onRemoveTodolist}>x</button>
      </h3>
      <AddItemForm addItem={addTaskContainer} />
      <ul>
        {
          tasks.map(task => {
            const onRemoveHandler = () => {
              removeTask(task.id, id)
            }

            const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              changeStatus(task.id, e.currentTarget.checked, id)
            }

            const saveEditContainer = (newText: string) => {
              changeTaskTitle(newText, id, task.id)
            }

            return <li className={task.isDone ? 'is-done' : ''} key={task.id}>
              <input type="checkbox" checked={task.isDone} onChange={onChangeStatusHandler} />
              <EditableSpan title={task.title} saveEdit={saveEditContainer} />
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




