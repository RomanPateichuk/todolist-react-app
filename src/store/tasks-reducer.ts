import {v1} from 'uuid'
import {addTodoListActionType, removeTodoListActionType} from './todolists-reducer'
import {TaskStatuses, TaskType} from "../api/todolists-api";

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
  status: TaskStatuses
  todolistId: string
}

type ActionsType = removeTaskActionType | addTaskActionType | changeTaskTitleActionType | changeTaskStatusActionType | addTodoListActionType | removeTodoListActionType

const initialState = {}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      const stateCopy = { ...state }
      let tasks = stateCopy[action.toDoListId]
      stateCopy[action.toDoListId] = tasks.filter(task => task.id !== action.taskId)
      return stateCopy
    }
    case 'ADD-TASK': {
      const stateCopy = { ...state }
      let task = {
        id: v1(),
        title: action.taskText,
        completed: false,
        description: '',
        status: 0,
        priority: 0,
        startDate: '',
        deadline: '',
        todoListId: action.toDoListId,
        order: 0,
        addedDate: ''
      }
      let tasks = stateCopy[action.toDoListId]
      stateCopy[action.toDoListId] = [task, ...tasks]
      return stateCopy
    }
    case 'CHANGE-TASK-STATUS': {
          let todolistTasks = state[action.todolistId]
      state[action.todolistId] = todolistTasks.map(task => task.id === action.taskId
        ? { ...task, status: action.status } : task)
      return ({...state})
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

export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, todolistId: string): changeTaskStatusActionType => {
  return { type: 'CHANGE-TASK-STATUS', taskId, status, todolistId }
}

export const changeTaskTitleAC = (newTitle: string, toDoListId: string, taskId: string): changeTaskTitleActionType => {
  return { type: 'CHANGE-TASK-TITLE', newTitle, toDoListId, taskId }
}






