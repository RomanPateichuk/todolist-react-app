import { TasksStateType, TodolistType } from "../App"
import { tasksReducer } from "./tasks-reducer"
import { addTodoListAC, todoListsReducer } from "./todolists-reducer"


test('ids shoud be quals', () => {
  const startTasksState: TasksStateType = {}
  const startTodolistsState: Array<TodolistType> = []
  const action = addTodoListAC('new todolist')

  const endTasksState = tasksReducer(startTasksState, action)
  const endTodolistsState = todoListsReducer(startTodolistsState, action)

  const keys = Object.keys(endTasksState)
  const idFromTasks = keys[0]
  const idFromTodolists = endTodolistsState[0].id

  expect(idFromTasks).toBe(action.todolistId)
  expect(idFromTodolists).toBe(action.todolistId)
})