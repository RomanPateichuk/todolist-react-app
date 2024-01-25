import React from 'react';
import { Provider } from "react-redux"
import {  AppRootState } from '../store/store'
import { combineReducers, createStore } from 'redux';
import { tasksReducer } from '../store/tasks-reducer';
import { todoListsReducer } from '../store/todolists-reducer';

export default {
  title: 'ReduxStoreProviderDecorator'
}
const rootReducer = combineReducers(
  {
    tasks: tasksReducer,
    todolists: todoListsReducer
  })

const initialGlobalState = {
  tasks: {
    'todolistId1': [
      { id: '1', title: 'CSS',completed: true, description: '', status: 0, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', completed: true, description: '', status: 0, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', completed: false, description: '', status: 0, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' }
    ],
    'todolistId2': [
      { id: '1', title: 'CSS',completed: true, description: '', status: 0, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', completed: true, description: '', status: 0, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', completed: false, description: '', status: 0, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' }
    ]
  },
  todolists: [
    { id: 'todolistId1', title: 'What to learn', filter: 'all',  addedDate: '', order: 0 },
    { id: 'todolistId2', title: 'What to buy', filter: 'all',  addedDate: '', order: 0 }
  ],



}

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootState)


export const ReduxStoreProviderDecorator = (story: any) => {
  return <Provider store={storyBookStore}>{story()}</Provider>
}