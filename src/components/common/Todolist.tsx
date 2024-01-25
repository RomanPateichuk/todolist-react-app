import React, { useCallback } from 'react'
import '../../App.css'

// components
import { EditableSpan } from './EditableSpan'
import { AddItemForm } from '../AddItemForm/AddItemForm'
import { Task } from './Task'

// material ui
import Delete from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material'
import {TaskStatuses, TaskType} from "../../api/todolists-api";
import {FilterValuesType} from "../../store/todolists-reducer";

type PropsType = {
  title: string
  tasks: Array<TaskType>
  filter: FilterValuesType
  id: string
  removeTask: (id: string, todolistId: string) => void
  changeFilter: (value: FilterValuesType, todolistId: string) => void
  addTask: (taskText: string, todolistId: string) => void
  changeStatus: (id: string, status: TaskStatuses, todolistId: string) => void
  removeTodolist: (id: string) => void
  changeTaskTitle: (newTitle: string, toDoListId: string, taskId: string) => void
  changeTodoListTitle: (newTitle: string, toDoListId: string) => void
}

export const Todolist = React.memo(function (props: PropsType) {
  const { title, tasks, filter, id,
    removeTask, changeFilter, addTask, changeStatus,
    removeTodolist, changeTaskTitle, changeTodoListTitle } = props

  console.log("TodoList is called");
  const onAllClickHandler = useCallback(() => changeFilter('all', id), [changeFilter, id])
  const onActivecliCkHandler = useCallback(() => changeFilter('active', id), [changeFilter, id])
  const onCompletedClickHandler = useCallback(() => changeFilter('completed', id), [changeFilter, id])
  const onRemoveTodolist = useCallback(() => removeTodolist(id), [removeTodolist, id])


  const addTaskContainer = useCallback((title: string) => {
    addTask(title, id)
  }, [addTask, id])

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
            return <Task key={task.id}
              toDoListId={id}
              task={task}
              removeTask={removeTask}
              changeStatus={changeStatus}
              changeTaskTitle={changeTaskTitle} />
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
})








