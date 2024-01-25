import { TasksStateType } from '../tasks-reducer'
import { tasksReducer, removeTaskAC, addTaskAC, changeTaskStatusAC, changeTaskTitleAC } from '../tasks-reducer'
import { addTodoListAC, removeTodoListAC } from '../todolists-reducer'
import {TaskStatuses} from "../../api/todolists-api";


test('should remove task', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', description: '', status: TaskStatuses.New, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ],
    'todolistId2': [
      { id: '1', title: 'Book',status: TaskStatuses.Completed, description: '' , priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'Milk', status: TaskStatuses.Completed, description: '' , priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'Beer', status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ]
  }



  let action = removeTaskAC('2', 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(2)
  expect(endState['todolistId2'].every(t => t.id !== '2')).toBeTruthy()
  expect(endState['todolistId2'][0].id).toBe('1')
  expect(endState['todolistId2'][1].id).toBe('3')
})

test('should add task', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS',status: TaskStatuses.Completed, description: '' , priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', description: '',status: TaskStatuses.New, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ],
    'todolistId2': [
    { id: '1', title: 'CSS', description: '',status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    { id: '2', title: 'JS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    { id: '3', title: 'React', status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ]
  }

  let action = addTaskAC('juce', 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(4)
  expect(endState['todolistId2'][0].id).toBeDefined()
  expect(endState['todolistId2'][0].title).toBe('juce')
  expect(endState['todolistId2'][0].status).toBe(TaskStatuses.New)
})

test('status should be changed', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS',status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS',status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React',status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ],
    'todolistId2': [
      { id: '1', title: 'CSS',status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React',  status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ]
  }

  let action = changeTaskStatusAC('2', TaskStatuses.New, 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId2'][1].status).toBe(TaskStatuses.New)
  expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed)
})

test('title should be changed', () => {
  const startState: TasksStateType = {
    'todolistId1': [
      { id: '1', title: 'CSS',status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', status: TaskStatuses.New, description:'', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
    ],
    'todolistId2': [
      { id: '1', title: 'CSS',status: TaskStatuses.New, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', status: TaskStatuses.Completed, description: '', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', status: TaskStatuses.New, description:'', priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },

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
      { id: '1', title: 'CSS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', description: '',status: TaskStatuses.New, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },

    ],
    'todolistId2': [ { id: '1', title: 'CSS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', description: '',status: TaskStatuses.New, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },]
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
    'todolistId1': [ { id: '1', title: 'CSS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', description: '',status: TaskStatuses.New, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },],
    'todolistId2': [ { id: '1', title: 'CSS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '2', title: 'JS', description: '', status: TaskStatuses.Completed, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },
      { id: '3', title: 'React', description: '',status: TaskStatuses.New, priority: 0, startDate: '', deadline: '', todoListId: '', order: 0, addedDate: '' },]
  }

  const action = removeTodoListAC('todolistId2')
  const endState = tasksReducer(startState, action)

  const keys = Object.keys(endState)
  expect(keys.length).toBe(1)
  expect(endState['todolistId2']).toBeUndefined()

})
