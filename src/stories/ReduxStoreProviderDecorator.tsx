// import React from 'react';
// import { Provider } from "react-redux"
// import {  AppRootState } from '../store/store'
// import { combineReducers, createStore } from 'redux';
// import { tasksReducer } from '../store/tasks-reducer';
// import {todoListsReducer} from '../store/todolists-reducer';
// import {appReducer} from "../store/app-reducer";
// import {TaskPriorities, TaskStatuses} from "../api/todolists-api";
//
const Store = {
  title: 'ReduxStoreProviderDecorator'
}

export default Store

// const rootReducer = combineReducers(
//   {
//     tasks: tasksReducer,
//     todolists: todoListsReducer,
//     app: appReducer
//   })
//
// const initialGlobalState: AppRootState = {
//   tasks: {
//     'todolistId1': [
//       { id: '1', title: 'CSS', status: TaskStatuses.New, description: '', priority: TaskPriorities.Low, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
//       { id: '2', title: 'JS', status: TaskStatuses.New, description: '', priority: TaskPriorities.Low, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
//       { id: '3', title: 'React', status: TaskStatuses.New, description: '', priority: TaskPriorities.Low, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' }
//     ],
//     'todolistId2': [
//       { id: '1', title: 'CSS',status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
//       { id: '2', title: 'JS', status: TaskStatuses.New, description: '',  priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
//       { id: '3', title: 'React', status: TaskStatuses.New, description: '',  priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' }
//     ]
//   },
//   todolists: [
//     { id: 'todolistId1', title: 'What to learn',  addedDate: '', order: 0, filter: 'all',   entityStatus: 'idle' },
//     { id: 'todolistId2', title: 'What to buy',  addedDate: '', order: 0, filter: 'all',   entityStatus: 'idle' }
//   ],
//   app: {
//    status: 'idle',
//    error: null
//  }
// }
//
// export const storyBookStore = createStore(rootReducer, initialGlobalState)
//
// export const ReduxStoreProviderDecorator = (story: any) => {
//   return <Provider store={storyBookStore}>{story()}</Provider>
// }

