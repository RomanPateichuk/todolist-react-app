import { addTodoListAC, changeTodoLisFiltertAC, changeTodoLisTitletAC, removeTodoListAC, todoListsReducer } from '../todolists-reducer'
import { v1 } from 'uuid'
import { FilterValuesType, TodoListDomainType } from '../todolists-reducer'

test('todolist should be remove', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let startState: Array<TodoListDomainType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all',  addedDate: '', order: 0 },
    { id: todolistId2, title: 'What to buy', filter: 'all',  addedDate: '', order: 0 }
  ]



  const endState = todoListsReducer(startState, removeTodoListAC(todolistId1))
  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId2)
})

test('todolist should be added', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let startState: Array<TodoListDomainType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all',  addedDate: '', order: 0 },
    { id: todolistId2, title: 'What to buy', filter: 'all',  addedDate: '', order: 0 }
  ]

  let action = addTodoListAC('What to do')

  const endState = todoListsReducer(startState, action)
  expect(endState.length).toBe(3)
})

test('todolist should be change its name', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodoListTitle = 'New Todolist'

  let startState: Array<TodoListDomainType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all',  addedDate: '', order: 0 },
    { id: todolistId2, title: 'What to buy', filter: 'all',  addedDate: '', order: 0 }
  ]

  let action = changeTodoLisTitletAC(newTodoListTitle, todolistId2)

  const endState = todoListsReducer(startState, action)
  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(newTodoListTitle)
})

test('todolist filter should be changed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodoListFilter: FilterValuesType = 'completed'

  let startState: Array<TodoListDomainType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all',  addedDate: '', order: 0 },
    { id: todolistId2, title: 'What to buy', filter: 'all',  addedDate: '', order: 0 }
  ]

  let action = changeTodoLisFiltertAC(newTodoListFilter, todolistId2)

  const endState = todoListsReducer(startState, action)
  expect(endState[0].filter).toBe('all')
  expect(endState[1].filter).toBe(newTodoListFilter)
})






