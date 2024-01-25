import { TasksStateType } from "../tasks-reducer"
import { tasksReducer } from "../tasks-reducer"
import { addTodoListAC, todoListsReducer } from "../todolists-reducer"
import {TodoListDomainType} from "../todolists-reducer";


test('ids should be equals', () => {
  const startTasksState: TasksStateType = {}
  const startTodoListsState: Array<TodoListDomainType> = []
  const action = addTodoListAC('new todolist')

  const endTasksState = tasksReducer(startTasksState, action)
  const endTodoListsState = todoListsReducer(startTodoListsState, action)

  const keys = Object.keys(endTasksState)
  const idFromTasks = keys[0]
  const idFromTodoLists = endTodoListsState[0].id

  expect(idFromTasks).toBe(action.todolistId)
  expect(idFromTodoLists).toBe(action.todolistId)
})