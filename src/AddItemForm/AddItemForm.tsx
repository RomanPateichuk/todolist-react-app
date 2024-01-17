import React from "react"
import '../App.css'

//material ui
import { IconButton, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import {useAddItemForm} from "./hooks/useAddItemForm";

type AddItemFromProps = {
  addItem: (taskText: string) => void
}

export const AddItemForm = React.memo(function (props: AddItemFromProps) {

  const { taskText, onKeyPressHandler, onChangeInput, error, callAddTask } = useAddItemForm(props.addItem)

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