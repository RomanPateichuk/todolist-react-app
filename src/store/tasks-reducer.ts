import { v1 } from 'uuid'
import { TasksStateType } from '../App/App'
import { addTodoListActionType, removeTodoListActionType } from './todolists-reducer'

type removeTaskActionType = {
  type: 'REMOVE-TASK'
  taskId: string
  toDoListId: string
}

type addTaskActionType = {
  type: 'ADD-TASK'
  taskText: string
  toDoListId: string
}

type changeTaskTitleActionType = {
  type: 'CHANGE-TASK-TITLE'
  newTitle: string
  toDoListId: string
  taskId: string
}

type changeTaskStatusActionType = {
  type: 'CHANGE-TASK-STATUS'
  taskId: string
  isDone: boolean
  todolistId: string
}

type ActionsType = removeTaskActionType | addTaskActionType | changeTaskTitleActionType | changeTaskStatusActionType | addTodoListActionType | removeTodoListActionType

const initialState = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      const stateCopy = { ...state }
      let tasks = stateCopy[action.toDoListId]
      let result = tasks.filter(task => task.id !== action.taskId)
      stateCopy[action.toDoListId] = result
      return stateCopy
    }
    case 'ADD-TASK': {
      const stateCopy = { ...state }
      let task = {
        id: v1(),
        title: action.taskText,
        isDone: false
      }
      let tasks = stateCopy[action.toDoListId]
      let newTasks = [task, ...tasks]
      stateCopy[action.toDoListId] = newTasks
      return stateCopy
    }
    case 'CHANGE-TASK-STATUS': {
      let todolistTasks = state[action.todolistId]
      state[action.todolistId] = todolistTasks.map(task => task.id === action.taskId
        ? { ...task, isDone: action.isDone } : task)
      return ({ ...state })
    }
    case 'CHANGE-TASK-TITLE': {
      let todolistTasks = state[action.toDoListId]
      state[action.toDoListId] = todolistTasks.map(task => task.id === action.taskId
        ? { ...task, title: action.newTitle } : task)
      return ({ ...state })
    }

    case 'ADD-TODOLIST': {
      const stateCopy = { ...state }
      stateCopy[action.todolistId] = []
      return stateCopy
    }
    case 'REMOVE-TODOLIST': {
      const stateCopy = { ...state }
      delete stateCopy[action.id]
      return stateCopy
    }

    default:
      return state
  }
}

export const removeTaskAC = (taskId: string, toDoListId: string): removeTaskActionType => {
  return { type: 'REMOVE-TASK', taskId, toDoListId }
}

export const addTaskAC = (taskText: string, toDoListId: string): addTaskActionType => {
  return { type: 'ADD-TASK', taskText, toDoListId }
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusActionType => {
  return { type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId }
}

export const changeTaskTitleAC = (newTitle: string, toDoListId: string, taskId: string): changeTaskTitleActionType => {
  return { type: 'CHANGE-TASK-TITLE', newTitle, toDoListId, taskId }
}






