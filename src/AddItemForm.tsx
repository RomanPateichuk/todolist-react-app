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
    <div>
      <input type="text"
        className={error ? 'error' : ''}
        value={taskText}
        onChange={onChangeInput}
        onKeyDown={onKeyPressHandler} />
      <button onClick={callAddTask}>+</button>
      {error && <div className='error-message'>{error}</div>}
    </div>
  )
}