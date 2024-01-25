import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {FilterValuesType, TodolistType} from "../types";
import {v1} from "uuid";

export function useTodolists(onTodoListRemove: (id: string)=> void, onTodoListAdded: (id: string) => void) {
  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'}
  ])

  const changeFilter = (value: FilterValuesType, todolistId: string) => {
    let todolist = todolists.find(tl => tl.id === todolistId)
    if (todolist) {
      todolist.filter = value
      setTodolists([...todolists])
    }
  }

  const removeTodoList = (todolistId: string) => {
    let filteredTodoList = todolists.filter(tl => tl.id !== todolistId)
    setTodolists([...filteredTodoList])
    onTodoListRemove(todolistId)
  }

  const changeTodoListTitle = (newTitle: string, toDoListId: string) => {
    let todolist = todolists.find((e) => e.id === toDoListId)
    if (todolist) {
      todolist.title = newTitle
      setTodolists([...todolists])
    }
  }

  const addTodoList = (title: string) => {
    const newTodoList: TodolistType = {id: v1(), title: title, filter: 'all'}
    setTodolists([newTodoList, ...todolists])
    onTodoListAdded(newTodoList.id)
  }

  return {todolists, changeFilter, removeTodoList, changeTodoListTitle, addTodoList}

}