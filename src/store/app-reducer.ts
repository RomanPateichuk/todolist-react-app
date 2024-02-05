import {Dispatch} from "react";
import {authApi} from "../api/todolists-api";
import {handleServerAppError, handleServerNetworkAppError} from "../components/AppWithRedux/utils/error-utils";
import {setIsLoggedInAC} from "./auth-reducer";

const initialState: initialStateType  = {
  status: 'idle',
  error: null,
  initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: ActionsType)=> {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    case 'APP/SET-IS-INITIALIZED':
       return {...state, initialized: action.value}
    default:
      return {...state}
  }
}

//actions
export const setAppStatusAC = (status: string) =>
  ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) =>
  ({type: 'APP/SET-ERROR', error} as const)
export const setAppInitializedAC = (value: boolean) =>
  ({type: 'APP/SET-IS-INITIALIZED', value} as const)

//thunks
export const initializeAppTC = ()=> (dispatch: Dispatch<any>)=>{
  authApi.me().then(res=>{
    if(res.data.resultCode === 0){
        dispatch(setIsLoggedInAC(true))
    }
    else{
      dispatch(setIsLoggedInAC(false))
    }
  }).finally(()=>{
    dispatch(setAppInitializedAC(true))
  })
}

//types
export type SetErrorActionType = ReturnType<typeof setAppErrorAC>

export type SetStatusActionType = ReturnType<typeof setAppStatusAC>

type ActionsType =
  | SetErrorActionType
  | SetStatusActionType
  | ReturnType<typeof setAppInitializedAC>


export type initialStateType = {
  status: StatusType
  error: string | null
  initialized: boolean
}

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'