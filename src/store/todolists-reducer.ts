import {v1} from 'uuid'
import {todolistsApi, todoListType} from '../api/todolists-api'
import {Dispatch} from "react";
import {addTaskAC} from "./tasks-reducer";

export type removeTodoListActionType = {
  type: 'REMOVE-TODOLIST'
  id: string
}

export type addTodoListActionType = {
  type: 'ADD-TODOLIST'
  todolist: todoListType
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

export type TodoListDomainType = todoListType & {
  filter: FilterValuesType
}

export const todoListsReducer = (state: Array<TodoListDomainType> = initialState, action: ActionsType): Array<TodoListDomainType> => {
  switch (action.type) {
    case 'ADD-TODOLIST':
      const newTodolist: TodoListDomainType = {...action.todolist, filter: 'all'}
      return [
        newTodolist,
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
        return {
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
  return {type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodoListAC = (todolist: todoListType): addTodoListActionType => {
  return {type: 'ADD-TODOLIST', todolist}
}

export const changeTodoLisTitletAC = (title: string, id: string): changeTodoListTitleActionType => {
  return {type: 'CHANGE-TODOLIST-TITLE', title, id}
}

export const changeTodoLisFiltertAC = (filter: FilterValuesType, id: string): changeTodoListFilterActionType => {
  return {type: 'CHANGE-TODOLIST-FILTER', filter, id}
}

export const setTodoListAC = (todolists: Array<todoListType>): SetTodoListsActionType => {
  return {type: 'SET-TODOLISTS', todolists}
}

export const fetchTodolistsTC = () => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.getTodolists().then((res) => {
      dispatch(setTodoListAC(res.data))
    })
  }
}

export const removeTodolistTC = (todolistId: string) => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.deleteTodolist(todolistId).then((res) => {
      dispatch(removeTodoListAC(todolistId))
    })
  }
}

export const addTodolistTC = (title: string) => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.createTodolist(title).then((res) => {
      dispatch(addTodoListAC(res.data.data.item))
    })
  }
}

export const changeTodolistTitleTC = (title: string, id: string) => {
  return (dispatch: Dispatch<any>) => {
    todolistsApi.updateTodolist(id, title).then((res) => {
     dispatch(changeTodoLisTitletAC(title, id))
    })
  }
}



