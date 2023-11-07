import { addTodoListAC, changeTodoLisFiltertAC, changeTodoLisTitletAC, removeTodoListAC, todoListsReducer } from './todolists-reducer'
import { v1 } from 'uuid'
import { FilterValuesType, TodolistType } from '../App'

test('todolist shoud be remove', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ]

  const endState = todoListsReducer(startState, removeTodoListAC(todolistId1))
  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId2)
})

test('todolist shoud be added', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ]

  let action = addTodoListAC('What to do')

  const endState = todoListsReducer(startState, action)
  expect(endState.length).toBe(3)
})

test('todolist shoud be change its name', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodoListTitle = 'New Todolist'

  let startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ]

  let action = changeTodoLisTitletAC(newTodoListTitle, todolistId2)

  const endState = todoListsReducer(startState, action)
  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(newTodoListTitle)
})

test('todolist filter shoud be changed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodoListFilter: FilterValuesType = 'completed'

  let startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ]

  let action = changeTodoLisFiltertAC(newTodoListFilter, todolistId2)

  const endState = todoListsReducer(startState, action)
  expect(endState[0].filter).toBe('all')
  expect(endState[1].filter).toBe(newTodoListFilter)
})






