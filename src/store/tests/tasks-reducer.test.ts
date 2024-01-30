import {
  addTaskAC,
  updateTaskAC,
  removeTaskAC,
  setTasksAC,
  tasksReducer,
  TasksStateType
} from "../tasks-reducer"
import {
  addTodoListAC,
  removeTodoListAC,
  setTodoListAC,
  TodoListDomainType,
  todoListsReducer
} from "../todolists-reducer"
import {TaskStatuses} from "../../api/todolists-api";


let startState: TasksStateType = {}

beforeEach(() => {
    startState = {
      'todolistId1': [
        {
          id: '1',
          title: 'CSS',
          description: '',
          status: TaskStatuses.Completed,
          priority: 0,
          startDate: '',
          deadline: '',
          todoListId: '',
          order: 0,
          addedDate: ''
        },
        {
          id: '2',
          title: 'JS',
          description: '',
          status: TaskStatuses.Completed,
          priority: 0,
          startDate: '',
          deadline: '',
          todoListId: '',
          order: 0,
          addedDate: ''
        },
        {
          id: '3',
          title: 'React',
          description: '',
          status: TaskStatuses.New,
          priority: 0,
          startDate: '',
          deadline: '',
          todoListId: '',
          order: 0,
          addedDate: ''
        },
      ],
      'todolistId2': [
        {
          id: '1',
          title: 'Book',
          status: TaskStatuses.Completed,
          description: '',
          priority: 0,
          startDate: '',
          deadline: '',
          todoListId: '',
          order: 0,
          addedDate: ''
        },
        {
          id: '2',
          title: 'Milk',
          status: TaskStatuses.Completed,
          description: '',
          priority: 0,
          startDate: '',
          deadline: '',
          todoListId: '',
          order: 0,
          addedDate: ''
        },
        {
          id: '3',
          title: 'Beer',
          status: TaskStatuses.New,
          description: '',
          priority: 0,
          startDate: '',
          deadline: '',
          todoListId: '',
          order: 0,
          addedDate: ''
        },
      ]
    }
  }
)


test('ids should be equals', () => {
  const startTasksState: TasksStateType = {}
  const startTodoListsState: Array<TodoListDomainType> = []
  const action = addTodoListAC({
    id: '',
    title: 'new todolist',
    order: 0,
    addedDate: ''
  })

  const endTasksState = tasksReducer(startTasksState, action)
  const endTodoListsState = todoListsReducer(startTodoListsState, action)

  const keys = Object.keys(endTasksState)
  const idFromTasks = keys[0]
  const idFromTodoLists = endTodoListsState[0].id

  expect(idFromTasks).toBe(action.todolist.id)
  expect(idFromTodoLists).toBe(action.todolist.id)
})

test('should remove task', () => {
  let action = removeTaskAC('2', 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(2)
  expect(endState['todolistId2'].every(t => t.id !== '2')).toBeTruthy()
  expect(endState['todolistId2'][0].id).toBe('1')
  expect(endState['todolistId2'][1].id).toBe('3')
})

test('should add task', () => {
  let action = addTaskAC({
    todoListId: 'todolistId2',
    title: 'juce',
    status: TaskStatuses.New,
    addedDate: '',
    deadline: '',
    description: '',
    order: 0,
    priority: 0,
    startDate: '',
    id: 'id exists'
  })
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(4)
  expect(endState['todolistId2'][0].id).toBeDefined()
  expect(endState['todolistId2'][0].title).toBe('juce')
  expect(endState['todolistId2'][0].status).toBe(TaskStatuses.New)
})

test('status should be changed', () => {
  let action = updateTaskAC('2', {status: TaskStatuses.New}, 'todolistId2')
  const endState = tasksReducer(startState, action)

  expect(endState['todolistId2'][1].status).toBe(TaskStatuses.New)
  expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed)
})

// test('title should be changed', () => {
//   let action = updateTaskAC('todolistId2', {title: 'Milkyway'}, '2')
//   const endState = tasksReducer(startState, action)
//
//   expect(endState['todolistId2'][1].title).toBe('Milkyway')
//   expect(endState['todolistId1'][1].title).toBe('JS')
// })
//
test('new property with new array should be added when new todolist is added', () => {
  let action = addTodoListAC({
    id: 'todolistId123',
    title: 'new todolist',
    order: 0,
    addedDate: ''
  })


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
  const action = removeTodoListAC('todolistId2')
  const endState = tasksReducer(startState, action)

  const keys = Object.keys(endState)
  expect(keys.length).toBe(1)
  expect(endState['todolistId2']).toBeUndefined()

})


test('empty arrays should be added when we set todolists', () => {
  const action = setTodoListAC(startState['todolistId1'])

  const endState = tasksReducer({}, action)

  const keys = Object.keys(endState)

  expect(keys.length).toBe(3)
  expect(endState['1']).toStrictEqual([])
  expect(endState['2']).toStrictEqual([])


})

test('tasks should be added for todolists', () => {
  const action = setTasksAC('todolistId1', startState['todolistId1'])

  const endState = tasksReducer({
    'todolistId2': [],
    'todolistId1': [],
  }, action)



  expect(endState['todolistId1'].length).toBe(3)
  expect(endState['todolistId2'].length).toBe(0)


})