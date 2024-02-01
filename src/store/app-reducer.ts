export const appReducer = (state: initialStateType = initialState, action: ActionsType)=> {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-ERROR':
      return {...state, error: action.error}
    default:
      return {...state}
  }
}

//actions
export const setAppStatusAC = (status: string) =>
  ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) =>
  ({type: 'APP/SET-ERROR', error} as const)

//types
export type SetErrorActionType = ReturnType<typeof setAppErrorAC>

export type SetStatusActionType = ReturnType<typeof setAppStatusAC>

type ActionsType =
  | SetStatusActionType
  | SetErrorActionType

export type initialStateType = {
  status: StatusType,
  error: string | null
}

const initialState: initialStateType  = {
  status: 'idle',
  error: null
}

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'