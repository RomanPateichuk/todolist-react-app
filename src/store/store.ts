import {applyMiddleware, combineReducers, createStore} from "redux";
import { tasksReducer } from "./tasks-reducer";
import { todoListsReducer } from "./todolists-reducer";
import {thunk} from "redux-thunk";
import {appReducer} from "./app-reducer";
import {authReducer} from "./auth-reducer";

const rootReducer = combineReducers(
  {
    tasks: tasksReducer,
    todolists: todoListsReducer,
    app: appReducer,
    auth: authReducer
  })

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


//@ts-ignore
window.store = store

