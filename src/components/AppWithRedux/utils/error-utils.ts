import {setAppErrorAC, setAppStatusAC, SetErrorActionType, SetStatusActionType} from "../../../store/app-reducer";
import {ResponseType} from "../../../api/todolists-api";
import {Dispatch} from "react";


export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetErrorActionType | SetStatusActionType>)=>{
  if(data.messages.length){
    dispatch(setAppErrorAC(data.messages[0]))
  }
  else{
    dispatch(setAppErrorAC('Some error occurred'))
  }
  dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkAppError = (error: {message: string}, dispatch: Dispatch<SetErrorActionType | SetStatusActionType>)=>{
   dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
  dispatch(setAppStatusAC('failed'))
}