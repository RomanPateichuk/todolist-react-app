import {ChangeEvent, KeyboardEvent, useState} from "react";

export const useAddItemForm = (
  onItemAdded: (title: string) => void
)=>{

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
      onItemAdded(taskText.trim())
      setTaskText('')
    }
    else {
      setError("Title is required")
    }
  }

  return {
    taskText,
    onKeyPressHandler,
    onChangeInput,
    error,
    callAddTask,
  }
}