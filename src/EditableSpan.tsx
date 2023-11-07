import React, { ChangeEvent, useState } from 'react';

// material ui
import { Button, TextField } from '@mui/material';

type EditableSpanPropsType = {
  title: string
  saveEdit: (newText: string) => void
};

export const EditableSpan = (props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.title);

  const activateEditMode = () => {
    setEditMode(true)
    setValue(props.title)
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onSaveNewText = () => {
    props.saveEdit(value)
    setEditMode(false)
  }

  return editMode
    ? <div className='add-task-wrapper'>
      <TextField autoFocus value={value} onChange={onChangeValueHandler} />
      <Button onClick={onSaveNewText} variant="outlined">save</Button>
    </div>
    : <span onDoubleClick={activateEditMode}>{props.title}</span>
};
