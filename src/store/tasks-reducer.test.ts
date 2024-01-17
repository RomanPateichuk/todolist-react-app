import { TasksStateType } from '../App/App'
import { tasksReducer, removeTaskAC, addTaskAC, changeTaskStatusAC, changeTaskTitleAC } from './tasks-reducer'
import { addTodoListAC, removeTodoListAC } from './todolists-reducer'


test('should remove task', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: true },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    'todolistId2': [
      { id: '1', title: 'Book', isDone: true },
      { id: '2', title: 'Milk', isDone: true },
      { id: '3', title: 'Beer', isDone: false },
    ]
  }

  let action = removeTaskAC('2', 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(2)
  expect(endState['todolistId2'].every(t => t.id != '2')).toBeTruthy()
  expect(endState['todolistId2'][0].id).toBe('1')
  expect(endState['todolistId2'][1].id).toBe('3')
})

test('should add task', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: true },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    'todolistId2': [
      { id: '1', title: 'Book', isDone: true },
      { id: '2', title: 'Milk', isDone: true },
      { id: '3', title: 'Beer', isDone: false },
    ]
  }

  let action = addTaskAC('juce', 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(4)
  expect(endState['todolistId2'][0].id).toBeDefined()
  expect(endState['todolistId2'][0].title).toBe('juce')
  expect(endState['todolistId2'][0].isDone).toBe(false)
})

test('status should be changed', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    'todolistId2': [
      { id: '1', title: 'Book', isDone: false },
      { id: '2', title: 'Milk', isDone: true },
      { id: '3', title: 'Beer', isDone: false },
    ]
  }

  let action = changeTaskStatusAC('2', false, 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId2'][1].isDone).toBeFalsy()
  expect(endState['todolistId1'][1].isDone).toBeTruthy()
})

test('title should be changed', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    'todolistId2': [
      { id: '1', title: 'Book', isDone: false },
      { id: '2', title: 'Milk', isDone: true },
      { id: '3', title: 'Beer', isDone: false },
    ]
  }

  let action = changeTaskTitleAC('Milkyway', 'todolistId2', '2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId2'][1].title).toBe('Milkyway')
  expect(endState['todolistId1'][1].title).toBe('JS')
})

test('new property with new array should be added when new todolist is added', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', isDone: false },
      { id: '2', title: 'JS', isDone: true },
      { id: '3', title: 'React', isDone: false },
    ],
    'todolistId2': [
      { id: '1', title: 'Book', isDone: false },
      { id: '2', title: 'Milk', isDone: true },
      { id: '3', title: 'Beer', isDone: false },
    ]
  }
  let action = addTodoListAC('new todolist')
  const endState = tasksReducer(startState, action)
  const keys = Object.keys(endState)
  const newKey = keys.find(k => k !== 'todolistId1' && k !== 'todolistId2')

  if (!newKey) {
    throw Error("new key should be added")
  }

  expect(keys.length).toBe(3)
  expect(endState[newKey]).toEqual([])
})

test('property with todolist shoud be deleted', () => {
  const startState: TasksStateType = {
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
  }

  const action = removeTodoListAC('todolistId2')
  const endState = tasksReducer(startState, action)

  const keys = Object.keys(endState)
  expect(keys.length).toBe(1)
  expect(endState['todolistId2']).toBeUndefined()

})
