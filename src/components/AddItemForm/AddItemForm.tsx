import React from "react"
import '../../App.css'

//material ui
import {IconButton, TextField} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import {useAddItemForm} from "./hooks/useAddItemForm";

type AddItemFromProps = {
  addItem: (taskText: string) => void
  disabled?: boolean
}

export const AddItemForm: React.FC<AddItemFromProps> = React.memo(function ({addItem, disabled = false}) {

  const {taskText, onKeyPressHandler, onChangeInput, error, callAddTask} = useAddItemForm(addItem)

  return (
    <div className="add-task-wrapper">
      <TextField type="text"
                 disabled={disabled}
                 label={'Type value'}
                 variant={'standard'}
                 error={!!error}
                 value={taskText}
                 onChange={onChangeInput}
                 onKeyDown={onKeyPressHandler}
                 helperText={error}/>
      <IconButton color={'info'} onClick={callAddTask} disabled={disabled}>
        <AddIcon/>
      </IconButton>
    </div>
  )
})