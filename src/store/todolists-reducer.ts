import {todolistsApi, todoListType} from '../api/todolists-api'
import {Dispatch} from "react";
import {setAppStatusAC, SetErrorActionType, SetStatusActionType, StatusType} from "./app-reducer";
import {handleServerAppError} from "../components/AppWithRedux/utils/error-utils";

const initialState: Array<TodoListDomainType> = []

export const todoListsReducer = (state: Array<TodoListDomainType> = initialState, action: ActionsType): Array<TodoListDomainType> => {
  switch (action.type) {
    case 'ADD-TODOLIST':
      return [{...action.todolist, filter: 'all', entityStatus: 'idle'}, ...state]
    case 'REMOVE-TODOLIST':
      return state.filter(e => e.id !== action.id)
    case 'CHANGE-TODOLIST-TITLE':
      return state.map(tl => tl.id === action.id ? {...tl, title: action.title}: tl)
    case 'CHANGE-TODOLIST-FILTER':
      return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
    case 'SET-TODOLISTS':
      return action.todolists.map(tl => ({...tl, filter: 'all', entityStatus: 'idle'}))
    case 'CHANGE-TODOLIST-STATUS':
      return state.map(tl => tl.id === action.id ? {...tl, entityStatus: action.status}: tl)
    default:
      return state
  }
}

//actions
export const removeTodoListAC = (todolistId: string) =>
  ({type: 'REMOVE-TODOLIST', id: todolistId} as const)
export const addTodoListAC = (todolist: todoListType) =>
  ({type: 'ADD-TODOLIST', todolist} as const)
export const changeTodoLisTitleAC = (title: string, id: string) =>
  ({type: 'CHANGE-TODOLIST-TITLE', title, id} as const)
export const changeTodoLisFilterAC = (filter: FilterValuesType, id: string) =>
  ({type: 'CHANGE-TODOLIST-FILTER', filter, id} as const)
export const setTodoListAC = (todolists: Array<todoListType>) =>
  ({type: 'SET-TODOLISTS', todolists} as const)
export const changeTodoListStatusAC = (id: string, status: StatusType) =>
  ({type: 'CHANGE-TODOLIST-STATUS', id ,status} as const)

//thunks
export const fetchTodolistsTC = () =>
  (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsApi.getTodolists().then((res) => {
      dispatch(setTodoListAC(res.data))
      dispatch(setAppStatusAC('succeeded'))
    }).catch(error =>{
        handleServerAppError(error, dispatch)
    })
  }

export const removeTodolistTC = (todolistId: string) =>
  (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    dispatch(changeTodoListStatusAC(todolistId, 'loading'))
    todolistsApi.deleteTodolist(todolistId).then((res) => {
      dispatch(removeTodoListAC(todolistId))
      dispatch(setAppStatusAC('succeeded'))
    })
  }

export const addTodolistTC = (title: string) =>
  (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsApi.createTodolist(title).then((res) => {
      dispatch(addTodoListAC(res.data.data.item))
      dispatch(setAppStatusAC('succeeded'))
    })
  }

export const changeTodolistTitleTC = (title: string, id: string) =>
  (dispatch: Dispatch<ActionsType>) => {
    todolistsApi.updateTodolist(id, title).then((res) => {
     dispatch(changeTodoLisTitleAC(title, id))
    })
  }

//types
export type addTodoListActionType = ReturnType<typeof addTodoListAC>

export type removeTodoListActionType = ReturnType<typeof removeTodoListAC>

export type SetTodoListsActionType = ReturnType<typeof setTodoListAC>

type ActionsType =
  | ReturnType<typeof removeTodoListAC>
  | ReturnType<typeof addTodoListAC>
  | ReturnType<typeof changeTodoLisTitleAC>
  | ReturnType<typeof changeTodoLisFilterAC>
  | ReturnType<typeof changeTodoListStatusAC>
  | ReturnType<typeof setTodoListAC>
  | SetStatusActionType
  | SetErrorActionType


export type FilterValuesType = 'all' | 'completed' | 'active'

export type TodoListDomainType = todoListType & {
  filter: FilterValuesType
  entityStatus: StatusType
}