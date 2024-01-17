import React from 'react'
import { Task } from './Task'
import { action } from '@storybook/addon-actions'
export default {
  title: 'Task Component',
  component: Task
}

const changeTaskStatusCallback = action('status changed')
const removeTaskCallback = action('task deleted')
const changeTaskTitleCallback = action('changed title')



export const TaskBaseExample = (props: any) => {
  return <>
    <Task
      toDoListId={'todolistId1'}
      task={{ id: '1', isDone: true, title: 'CSS' }}
      removeTask={removeTaskCallback}
      changeStatus={changeTaskStatusCallback}
      changeTaskTitle={changeTaskTitleCallback}
    />

    <Task
      toDoListId={'todolistId2'}
      task={{ id: '1', isDone: false, title: 'React' }}
      removeTask={removeTaskCallback}
      changeStatus={changeTaskStatusCallback}
      changeTaskTitle={changeTaskTitleCallback}
    />


  </>
}