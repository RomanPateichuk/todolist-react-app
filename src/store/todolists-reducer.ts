import { v1 } from 'uuid'
import { FilterValuesType, TodolistType } from '../App'
import { Todolist } from '../Todolist'

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
  changeTodoListFilterActionType

export const todoListsReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
  switch (action.type) {
    case 'ADD-TODOLIST':
      return [
        ...state,
        { id: action.todolistId, title: action.title, filter: 'all' }
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
    default: throw new Error('I dont understand')
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



