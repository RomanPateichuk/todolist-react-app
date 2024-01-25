import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store/store";
import {useCallback} from "react";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../../store/tasks-reducer";
import {
  addTodoListAC,
  changeTodoLisFiltertAC,
  changeTodoLisTitletAC,
  removeTodoListAC
} from "../../../store/todolists-reducer";
import {FilterValuesType, TasksStateType, TodolistType} from "../AppWithRedux";
import {TaskStatuses} from "../../../api/todolists-api";

export const useAppWithRedux = () =>{
  console.log("AppWithCustomHooks is called");
  const dispatch = useDispatch()
  const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
  const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)


  // actions to tasks reducer

  const removeTask = useCallback((id: string, todolistId: string) => {
    dispatch(removeTaskAC(id, todolistId))
  }, [dispatch])

  const addTask = useCallback((taskText: string, todolistId: string) => {
    dispatch(addTaskAC(taskText, todolistId))
  }, [dispatch])

  const changeTaskTitle = useCallback((newTitle: string, toDoListId: string, taskId: string) => {
    dispatch(changeTaskTitleAC(newTitle, toDoListId, taskId))
  }, [dispatch])

  const changeStatus = useCallback((id: string, status: TaskStatuses, todolistId: string) => {
    dispatch(changeTaskStatusAC(id, status, todolistId))
  }, [dispatch])

  // actions to todolist reducer

  const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
    dispatch(changeTodoLisFiltertAC(value, todolistId))
  }, [dispatch])

  const removeTodoList = useCallback((todolistId: string) => {
    dispatch(removeTodoListAC(todolistId))
  }, [dispatch])

  const addTodoList = useCallback((title: string) => {
    dispatch(addTodoListAC(title))
  }, [dispatch])

  const changeTodoListTitle = useCallback((newTitle: string, toDoListId: string) => {
    dispatch(changeTodoLisTitletAC(newTitle, toDoListId))
  }, [dispatch])

  return {
    todolists,
    tasks,
    removeTask,
    changeTaskTitle,
    changeTodoListTitle,
    addTodoList,
    removeTodoList,
    changeFilter,
    changeStatus,
    addTask

  }

}