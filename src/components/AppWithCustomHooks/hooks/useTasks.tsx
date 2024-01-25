import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {v1} from "uuid";
import {TasksStateType} from "../types";

export function useTasks() {
  let [tasksObj, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      {id: v1(), title: 'CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'React', isDone: false},
      {id: v1(), title: 'Redux', isDone: false},],
    [todolistId2]: [
      {id: v1(), title: 'Book', isDone: true},
      {id: v1(), title: 'Milk', isDone: true},
      {id: v1(), title: 'Beer', isDone: false},
    ]
  })

  const removeTask = (id: string, todolistId: string) => {
    let tasks = tasksObj[todolistId]
    tasksObj[todolistId] = tasks.filter(task => task.id !== id)
    setTasks({...tasksObj})
  }

  const addTask = (taskText: string, todolistId: string) => {
    let task = {
      id: v1(),
      title: taskText,
      isDone: false
    }
    let tasks = tasksObj[todolistId]
    let newTasks = [task, ...tasks]
    tasksObj[todolistId] = newTasks
    setTasks({...tasksObj})
  }

  const changeTaskTitle = (newTitle: string, toDoListId: string, taskId: string) => {
    let task = tasksObj[toDoListId].find((e) => e.id === taskId)
    if (task) {
      task.title = newTitle
      setTasks({...tasksObj})
    }
  }

  const changeStatus = (id: string, isDone: boolean, todolistId: string) => {
    let tasks = tasksObj[todolistId]
    let task = tasks.find(task => task.id === id)
    if (task) {
      task.isDone = isDone
      setTasks({...tasksObj})
    }
  }

  const completeRemoveTasksForTodolist = (id: string)=>{
    delete tasksObj[id]
    setTasks({...tasksObj})
  }

  const addStateForNewTodolist = (newTodoListId: string)=>{
    setTasks({
      ...tasksObj,
      [newTodoListId]: []
    })
  }

  return {
    tasksObj,
    setTasks,
    changeStatus,
    changeTaskTitle,
    addTask,
    removeTask,
    completeRemoveTasksForTodolist,
    addStateForNewTodolist
  }
}