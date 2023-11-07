import React, { ChangeEvent } from 'react'
import './App.css'

// components
import { EditableSpan } from './EditableSpan'
import { AddItemForm } from './AddItemForm'

// material ui
import Delete from '@mui/icons-material/Delete';
import { Button, Checkbox, IconButton } from '@mui/material'

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
        <IconButton onClick={onRemoveTodolist}>
          <Delete />
        </IconButton>
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

            return <li key={task.id} className={task.isDone ? 'is-done' : ''} >
              <Checkbox checked={task.isDone} onChange={onChangeStatusHandler} />
              <EditableSpan title={task.title} saveEdit={saveEditContainer} />
              <IconButton onClick={onRemoveHandler} aria-label="delete" size="small">
                <Delete fontSize="small" />
              </IconButton>
            </li>
          })
        }
      </ul>
      <div>
        <Button
          variant={filter === 'all' ? 'contained' : 'text'}
          onClick={onAllClickHandler}>All
        </Button>
        <Button
          variant={filter === 'active' ? 'contained' : 'text'}
          onClick={onActivecliCkHandler}>
          Aсtive
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'text'}
          onClick={onCompletedClickHandler}>
          Completed
        </Button>
      </div>
    </div>
  )
}




