import React, {ChangeEvent, useCallback} from 'react'
import {TaskStatuses, TaskType} from '../../api/todolists-api'
import {Checkbox, IconButton} from '@mui/material'
import {EditableSpan} from './EditableSpan'
import Delete from '@mui/icons-material/Delete';

type TaskPropsType = {
  removeTask: (id: string, todolistId: string) => void
  changeStatus: (id: string, status: TaskStatuses , todolistId: string) => void
  changeTaskTitle: (newTitle: string, toDoListId: string, taskId: string) => void
  toDoListId: string
  task: TaskType
}

export const Task = React.memo((props: TaskPropsType) => {
  const onRemoveHandler = () => {
    props.removeTask(props.task.id, props.toDoListId)
  }

  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newIsDoneValue = e.currentTarget.checked
    props.changeStatus(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, props.toDoListId)
  }

  const saveEditContainer = useCallback((newText: string) => {
    props.changeTaskTitle(newText, props.toDoListId, props.task.id)
  }, [props])

  return <li key={props.task.id} className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''} >
    <Checkbox checked={props.task.status === TaskStatuses.Completed} onChange={onChangeStatusHandler} />
    <EditableSpan title={props.task.title} saveEdit={saveEditContainer} />
    <IconButton onClick={onRemoveHandler} aria-label="delete" size="small">
      <Delete fontSize="small" />
    </IconButton>
  </li>
})