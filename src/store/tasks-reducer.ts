import {v1} from 'uuid'
import {
  addTodoListActionType,
  removeTodoListActionType,
  setTodoListAC,
  SetTodoListsActionType
} from './todolists-reducer'
import {TaskPriorities, TaskStatuses, TaskType, todolistsApi, UpdateTaskModelType} from "../api/todolists-api";
import {Dispatch} from "react";
import {AppRootState} from "./store";

type removeTaskActionType = {
  type: 'REMOVE-TASK'
  taskId: string
  toDoListId: string
}

type addTaskActionType = {
  type: 'ADD-TASK'
  task: TaskType

}

type changeTaskTitleActionType = {
  type: 'CHANGE-TASK-TITLE'
  newTitle: string
  toDoListId: string
  taskId: string
}

type UpdateTaskActionType = {
  type: 'UPDATE-TASK'
  taskId: string
  model: UpdateDomainTaskModelType,
  todolistId: string
}

export type SetTasksActionType = {
  type: 'SET-TASKS'
  tasks: Array<TaskType>
  todolistId: string
}

type ActionsType =
  removeTaskActionType
  | addTaskActionType
  | changeTaskTitleActionType
  | UpdateTaskActionType
  | addTodoListActionType
  | removeTodoListActionType
  | SetTodoListsActionType
  | SetTasksActionType

const initialState = {}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      const stateCopy = {...state}
      let tasks = stateCopy[action.toDoListId]
      stateCopy[action.toDoListId] = tasks.filter(task => task.id !== action.taskId)
      return stateCopy
    }
    case 'ADD-TASK': {
      const stateCopy = {...state}
      let task = action.task
      let tasks = stateCopy[task.todoListId]
      stateCopy[task.todoListId] = [task, ...tasks]
      return stateCopy
    }
    case 'UPDATE-TASK': {
      let todolistTasks = state[action.todolistId]
      state[action.todolistId] = todolistTasks.map(task => task.id === action.taskId
        ? {...task, ...action.model} : task)
      return ({...state})
    }
    case 'CHANGE-TASK-TITLE': {
      let todolistTasks = state[action.toDoListId]
      state[action.toDoListId] = todolistTasks.map(task => task.id === action.taskId
        ? {...task, title: action.newTitle} : task)
      return ({...state})
    }

    case 'ADD-TODOLIST': {
      const stateCopy = {...state}
      stateCopy[action.todolist.id] = []
      return stateCopy
    }
    case 'REMOVE-TODOLIST': {
      const stateCopy = {...state}
      delete stateCopy[action.id]
      return stateCopy
    }

    case 'SET-TODOLISTS' : {
      const copyState = {...state}
      action.todolists.forEach(tl => {
        copyState[tl.id] = []
      })

      return copyState
    }

    case 'SET-TASKS': {
      const copyState = {...state}
      copyState[action.todolistId] = action.tasks
      return copyState
    }

    default:
      return state
  }
}

export const removeTaskAC = (taskId: string, toDoListId: string): removeTaskActionType => {
  return {type: 'REMOVE-TASK', taskId, toDoListId}
}

export const addTaskAC = (task: TaskType): addTaskActionType => {
  return {type: 'ADD-TASK', task}
}

export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string): UpdateTaskActionType => {
  return {type: 'UPDATE-TASK', taskId, model, todolistId}
}

export const changeTaskTitleAC = (newTitle: string, toDoListId: string, taskId: string): changeTaskTitleActionType => {
  return {type: 'CHANGE-TASK-TITLE', newTitle, toDoListId, taskId}
}

export const setTasksAC = (todolistId: string, tasks: Array<TaskType>): SetTasksActionType => {
  return {type: 'SET-TASKS', tasks, todolistId}
}

export const fetchTasksTC = (todolistId: string) => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.getTasks(todolistId).then((res) => {
      dispatch(setTasksAC(todolistId, res.data.items))
    })
  }
}

export const removeTaskTC = (todolistId: string, id: string) => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.deleteTask(todolistId, id).then((res) => {
      dispatch(removeTaskAC(id, todolistId))
    })
  }
}

export const addTaskTC = (todolistId: string, title: string) => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.createTask(todolistId, title).then((res) => {
      dispatch(addTaskAC(res.data.data.item))
    })
  }
}

export type UpdateDomainTaskModelType = {
  title?: string,
  description?: string,
  status?: TaskStatuses,
  priority?: TaskPriorities,
  startDate?: string,
  deadline?: string
}


export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) => {
  return (dispatch: Dispatch<any>, getState: () => AppRootState) => {

    const state = getState()

    const task = state.tasks[todolistId].find(t=> t.id === taskId)
    if(!task){
      console.warn("task not found in the state")
      return
    }

    const apiModel: UpdateTaskModelType = {
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
      title: task.title,
      status: task.status,
      ...domainModel
    }

    todolistsApi.updateTask(todolistId, taskId, apiModel).then((res) => {
      dispatch(updateTaskAC(taskId, domainModel, todolistId))
    })
  }
}





