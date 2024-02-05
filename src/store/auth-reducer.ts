import {
  addTodoListActionType,
  removeTodoListActionType,
  SetTodoListsActionType
} from './todolists-reducer'
import {
  authApi,
  LoginParamsType,
  TaskPriorities,
  TaskStatuses,
  TaskType,
  todolistsApi,
  UpdateTaskModelType
} from "../api/todolists-api";
import {Dispatch} from "react";
import {AppRootState} from "./store";
import {setAppErrorAC, SetErrorActionType, setAppStatusAC, SetStatusActionType} from "./app-reducer";
import {handleServerAppError, handleServerNetworkAppError} from "../components/AppWithRedux/utils/error-utils";
import {addTaskAC} from "./tasks-reducer";

const initialState = {
  isLoggedIn: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'LOGIN/SET-IS-LOGGED-IN':
      return {...state, isLoggedIn: action.value}
    default:
      return state
  }
}

//actions
export const setIsLoggedInAC = (value: boolean) =>
  ({type: 'LOGIN/SET-IS-LOGGED-IN', value} as const)

//thunks
export const loginTC = (data: LoginParamsType) =>
  (dispatch: Dispatch<ActionsType>) => {
   dispatch(setAppStatusAC('loading'))
   authApi.login(data)
     .then((res)=>{
       if(res.data.resultCode === 0){
         dispatch(setIsLoggedInAC(true))
         dispatch(setAppStatusAC('succeeded'))
       }
       else{
         handleServerAppError(res.data, dispatch)
       }
     }).catch((error) =>{
     handleServerNetworkAppError(error, dispatch)
   })
  }

export const logoutTC = () =>
  (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authApi.logout()
      .then((res)=>{
        if(res.data.resultCode === 0){
          dispatch(setIsLoggedInAC(false))
          dispatch(setAppStatusAC('succeeded'))
        }
        else{
          handleServerAppError(res.data, dispatch)
        }
      }).catch((error) =>{
      handleServerNetworkAppError(error, dispatch)
    })
  }

//types
export type initialStateType = {
  isLoggedIn: boolean
}
type ActionsType =
  | ReturnType<typeof setIsLoggedInAC>
  // | ReturnType<typeof addTaskAC>
  // | ReturnType<typeof updateTaskAC>
  // | ReturnType<typeof changeTaskTitleAC>
  // | ReturnType<typeof setTasksAC>
  | SetErrorActionType
  | SetStatusActionType
  | addTodoListActionType
  | removeTodoListActionType
  | SetTodoListsActionType

export type UpdateDomainTaskModelType = {
  title?: string,
  description?: string,
  status?: TaskStatuses,
  priority?: TaskPriorities,
  startDate?: string,
  deadline?: string
}


