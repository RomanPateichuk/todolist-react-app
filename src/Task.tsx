import React, { ChangeEvent, useCallback } from 'react'
import { TaskType } from './Todolist'
import { Checkbox, IconButton } from '@mui/material'
import { EditableSpan } from './EditableSpan'
import Delete from '@mui/icons-material/Delete';

type TaskPropsType = {
  removeTask: (id: string, todolistId: string) => void
  changeStatus: (id: string, isDone: boolean, todolistId: string) => void
  changeTaskTitle: (newTitle: string, toDoListId: string, taskId: string) => void
  toDoListId: string
  task: TaskType
}

export const Task = React.memo((props: TaskPropsType) => {
  const onRemoveHandler = () => {
    props.removeTask(props.task.id, props.toDoListId)
  }

  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeStatus(props.task.id, e.currentTarget.checked, props.toDoListId)
  }

  const saveEditContainer = useCallback((newText: string) => {
    props.changeTaskTitle(newText, props.toDoListId, props.task.id)
  }, [props, props.task.id, props.toDoListId, props.changeTaskTitle])

  return <li key={props.task.id} className={props.task.isDone ? 'is-done' : ''} >
    <Checkbox checked={props.task.isDone} onChange={onChangeStatusHandler} />
    <EditableSpan title={props.task.title} saveEdit={saveEditContainer} />
    <IconButton onClick={onRemoveHandler} aria-label="delete" size="small">
      <Delete fontSize="small" />
    </IconButton>
  </li>
})