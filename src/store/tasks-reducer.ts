import {
  addTodoListActionType,
  removeTodoListActionType,
  SetTodoListsActionType
} from './todolists-reducer'
import {TaskPriorities, TaskStatuses, TaskType, todolistsApi, UpdateTaskModelType} from "../api/todolists-api";
import {Dispatch} from "react";
import {AppRootState} from "./store";

const initialState = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK':
      return {...state, [action.toDoListId]: state[action.toDoListId].filter(task => task.id !== action.taskId)}
    case 'ADD-TASK':
      return {...state, [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]}
    case 'UPDATE-TASK':
      return ({...state, [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId
          ? {...task, ...action.model} : task)})
    case 'ADD-TODOLIST':
      return {...state, [action.todolist.id]: []}
    case 'REMOVE-TODOLIST':
      const stateCopy = {...state}
      delete stateCopy[action.id]
      return stateCopy
    case 'SET-TODOLISTS' : {
      const copyState = {...state}
      action.todolists.forEach(tl => {
        copyState[tl.id] = []
      })
      return copyState
    }
    case 'SET-TASKS':
      return {...state, [action.todolistId]: action.tasks}

    default:
      return state
  }
}

//actions
export const removeTaskAC = (taskId: string, toDoListId: string) =>
  ({type: 'REMOVE-TASK', taskId, toDoListId} as const)
export const addTaskAC = (task: TaskType) => ({type: 'ADD-TASK', task} as const)
export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) =>
  ({type: 'UPDATE-TASK', taskId, model, todolistId} as const)
export const changeTaskTitleAC = (newTitle: string, toDoListId: string, taskId: string) =>
  ({type: 'CHANGE-TASK-TITLE', newTitle, toDoListId, taskId} as const)
export const setTasksAC = (todolistId: string, tasks: Array<TaskType>) =>
  ({type: 'SET-TASKS', tasks, todolistId} as const)

//thunks
export const fetchTasksTC = (todolistId: string) =>
  (dispatch: Dispatch<ActionsType>) => {
    todolistsApi.getTasks(todolistId).then((res) => {
      dispatch(setTasksAC(todolistId, res.data.items))
    })
  }

export const removeTaskTC = (todolistId: string, id: string) =>
  (dispatch: Dispatch<ActionsType>) => {
    todolistsApi.deleteTask(todolistId, id).then((res) => {
      dispatch(removeTaskAC(id, todolistId))
    })
  }

export const addTaskTC = (todolistId: string, title: string) =>
  (dispatch: Dispatch<ActionsType>) => {
    todolistsApi.createTask(todolistId, title).then((res) => {
      dispatch(addTaskAC(res.data.data.item))
    })
  }

export type UpdateDomainTaskModelType = {
  title?: string,
  description?: string,
  status?: TaskStatuses,
  priority?: TaskPriorities,
  startDate?: string,
  deadline?: string
}

export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) =>
  (dispatch: Dispatch<any>, getState: () => AppRootState) => {

    const state = getState()

    const task = state.tasks[todolistId].find(t => t.id === taskId)
    if (!task) {
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

//types
export type TasksStateType = {
  [key: string]: Array<TaskType>
}
type ActionsType =
  | ReturnType<typeof removeTaskAC>
  | ReturnType<typeof addTaskAC>
  | ReturnType<typeof updateTaskAC>
  | ReturnType<typeof changeTaskTitleAC>
  | ReturnType<typeof setTasksAC>
  | addTodoListActionType
  | removeTodoListActionType
  | SetTodoListsActionType




