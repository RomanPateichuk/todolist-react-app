import React, { useState, ChangeEvent, KeyboardEvent } from "react"
import './App.css'

//material ui
import { IconButton, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

type AddItemFromProps = {
  addItem: (taskText: string) => void
}

export const AddItemForm = React.memo(function (props: AddItemFromProps) {
  console.log('AddItemFrom is called');
  const { addItem } = props
  let [error, setError] = useState<string | null>(null)
  let [taskText, setTaskText] = useState('')
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null)
    }
    if (e.code === 'Enter') {
      callAddTask()
    }
  }

  const callAddTask = () => {
    if (taskText.trim() !== '') {
      addItem(taskText.trim())
      setTaskText('')
    }
    else {
      setError("Title is required")
    }
  }

  return (
    <div className="add-task-wrapper">
      <TextField type="text"
        label={'Type value'}
        variant={'standard'}
        error={!!error}
        value={taskText}
        onChange={onChangeInput}
        onKeyDown={onKeyPressHandler}
        helperText={error} />
      <IconButton color={'info'} onClick={callAddTask}>
        <AddIcon />
      </IconButton>
    </div>
  )
})