import { v1 } from 'uuid'
import {todolistsApi, todoListType} from '../api/todolists-api'
import {Dispatch} from "react";

export type removeTodoListActionType = {
  type: 'REMOVE-TODOLIST'
  id: string
}

export type addTodoListActionType = {
  type: 'ADD-TODOLIST'
  title: string
  todolistId: string
}

export type changeTodoListTitleActionType = {
  type: 'CHANGE-TODOLIST-TITLE',
  id: string,
  title: string
}

export type changeTodoListFilterActionType = {
  type: 'CHANGE-TODOLIST-FILTER',
  id: string,
  filter: FilterValuesType
}

type ActionsType = removeTodoListActionType |
  addTodoListActionType |
  changeTodoListTitleActionType |
  changeTodoListFilterActionType |
  SetTodoListsActionType

export type SetTodoListsActionType = {
  type: 'SET-TODOLISTS'
  todolists: Array<todoListType>

}

const initialState: Array<TodoListDomainType> = []

export type FilterValuesType = 'all' | 'completed' | 'active'

export type TodoListDomainType  = todoListType & {
  filter: FilterValuesType
}

export const todoListsReducer = (state: Array<TodoListDomainType> = initialState, action: ActionsType): Array<TodoListDomainType> => {
  switch (action.type) {
    case 'ADD-TODOLIST':
      return [
        {
          id: action.todolistId,
          title: action.title,
          filter: 'all',
          addedDate: '',
          order: 0
        },
        ...state
      ]
    case 'REMOVE-TODOLIST': {
      return state.filter(e => e.id !== action.id)
    }
    case 'CHANGE-TODOLIST-TITLE': {
      let toDoList = state.find(e => e.id === action.id)
      if (toDoList) {
        toDoList.title = action.title
      }
      return [...state]
    }
    case 'CHANGE-TODOLIST-FILTER': {
      let toDoList = state.find(e => e.id === action.id)
      if (toDoList) {
        toDoList.filter = action.filter
      }
      return [...state]
    }

    case 'SET-TODOLISTS': {
       return action.todolists.map(tl => {
         return{
           ...tl,
           filter: 'all'
         }
       })
    }

    default:
      return state
  }
}

export const removeTodoListAC = (todolistId: string): removeTodoListActionType => {
  return { type: 'REMOVE-TODOLIST', id: todolistId }
}

export const addTodoListAC = (title: string): addTodoListActionType => {
  return { type: 'ADD-TODOLIST', title, todolistId: v1() }
}

export const changeTodoLisTitletAC = (title: string, id: string): changeTodoListTitleActionType => {
  return { type: 'CHANGE-TODOLIST-TITLE', title, id }
}

export const changeTodoLisFiltertAC = (filter: FilterValuesType, id: string): changeTodoListFilterActionType => {
  return { type: 'CHANGE-TODOLIST-FILTER', filter, id }
}

export const setTodoListAC = (todolists: Array<todoListType>): SetTodoListsActionType =>{
  return {type: 'SET-TODOLISTS', todolists}
}

export const fetchTodolistsThunk = (dispatch: Dispatch<any>)=>{
  todolistsApi.getTodolists().then((res)=>{
    dispatch(setTodoListAC(res.data))
  })
}

// export const fetchTodolistsTC = ()=>{
//   return (dispatch: Dispatch<any>)=>{
//     todolistsApi.getTodolists().then((res)=>{
//       dispatch(setTodoListAC(res.data))
//     })
//
// }




