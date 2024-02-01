import {
  addTodoListAC,
  changeTodoLisFilterAC,
  changeTodoLisTitleAC, changeTodoListStatusAC,
  removeTodoListAC,
  setTodoListAC,
  todoListsReducer
} from '../todolists-reducer'
import {v1} from 'uuid'
import {FilterValuesType, TodoListDomainType} from '../todolists-reducer'
import {StatusType} from "../app-reducer";

let startState: Array<TodoListDomainType> = []
let todolistId1 = v1()
let todolistId2 = v1()

beforeEach(() => {
    startState = [
      {id: todolistId1, title: 'What to learn', entityStatus: 'idle', filter: 'all', addedDate: '', order: 0},
      {id: todolistId2, title: 'What to buy', entityStatus: 'idle',filter: 'all', addedDate: '', order: 0}
    ]
  }
)


test('todolist should be remove', () => {
  const endState = todoListsReducer(startState, removeTodoListAC(todolistId1))
  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistId2)
})

test('todolist should be added', () => {

  let action = addTodoListAC({
  id: '',
  order: 0,
  addedDate: '',
  title: ''
  }
  )

  const endState = todoListsReducer(startState, action)
  expect(endState.length).toBe(3)
})

test('todolist should be change its name', () => {

  let newTodoListTitle = 'New Todolist'
  let action = changeTodoLisTitleAC(newTodoListTitle, todolistId2)

  const endState = todoListsReducer(startState, action)
  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(newTodoListTitle)
})

test('todolist filter should be changed', () => {


  let newTodoListFilter: FilterValuesType = 'completed'


  let action = changeTodoLisFilterAC(newTodoListFilter, todolistId2)

  const endState = todoListsReducer(startState, action)
  expect(endState[0].filter).toBe('all')
  expect(endState[1].filter).toBe(newTodoListFilter)
})

test('todolist  should be set to the state', () => {
  const action = setTodoListAC(startState)
  const endState = todoListsReducer([], action)
  expect(endState.length).toBe(2)
})


test('correct entity status of toolist should be changed', () => {
    let newStatus: StatusType = 'loading'
    const action = changeTodoListStatusAC(todolistId2, newStatus)
    const endState = todoListsReducer(startState, action)
    expect(endState[0].entityStatus).toBe('idle')
    expect(endState[1].entityStatus).toBe(newStatus)
})



