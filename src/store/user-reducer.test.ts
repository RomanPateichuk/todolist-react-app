import { userReducer } from "./user-reducer";

test('user reducer should increment only age', () => {
  const startState = { age: 20, childrenCount: 2, name: 'Roman' }
  const endState = userReducer(startState, { type: 'INCREMENT-AGE' })
  expect(endState.age).toBe(21)
})

test('user reducer should increment only childrenCount', () => {
  const startState = { age: 20, childrenCount: 2, name: 'Roman' }
  const endState = userReducer(startState, { type: 'INCREMENT-CHILDREN-COUNT' })
  expect(endState.childrenCount).toBe(3)
})

test('user reducer should change name of user', () => {
  const startState = { age: 20, childrenCount: 2, name: 'Roman' }
  const newName = "Viktor"
  const endState = userReducer(startState, { type: 'CHANGE-NAME', newName })
  expect(endState.name).toBe(newName)
}) 