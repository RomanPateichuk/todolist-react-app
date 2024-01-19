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
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    'todolistId2': [
      { id: '1', title: 'Book', isDone: false },
      { id: '2', title: 'milk', isDone: true },
      { id: '3', title: 'tea', isDone: false },
    ]
  },
  todolists: [
    { id: 'todolistId1', title: 'What to learn', filter: 'all' },
    { id: 'todolistId2', title: 'What to buy', filter: 'all' }
  ],



}

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootState)


export const ReduxStoreProviderDecorator = (story: any) => {
  return <Provider store={storyBookStore}>{story()}</Provider>
}