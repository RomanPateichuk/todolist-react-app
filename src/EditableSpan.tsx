import React, { ChangeEvent, useState } from 'react';

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
    ? <div>
      <input type="text" autoFocus value={value} onChange={onChangeValueHandler} />
      <button onClick={onSaveNewText}>save</button>
    </div>
    : <span onDoubleClick={activateEditMode}>{props.title}</span>
};
