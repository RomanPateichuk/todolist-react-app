import { Button, IconButton, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import React, { useState, ChangeEvent, KeyboardEvent } from "react"
import './App.css'

type AddItemFromProps = {
  addItem: (taskText: string) => void
}

export function AddItemForm(props: AddItemFromProps) {
  const { addItem } = props
  let [error, setError] = useState<string | null>(null)
  let [taskText, setTaskText] = useState('')
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
}