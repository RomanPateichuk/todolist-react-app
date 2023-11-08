import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks-reducer";
import { todoListsReducer } from "./todolists-reducer";

const rootReducer = combineReducers(
  {
    tasks: tasksReducer,
    todolists: todoListsReducer
  })

export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)



//@ts-ignore
window.store = store

