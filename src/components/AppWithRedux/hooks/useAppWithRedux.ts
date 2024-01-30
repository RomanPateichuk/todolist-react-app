import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store/store";
import {useCallback, useEffect} from "react";
import {addTaskTC, removeTaskTC, updateTaskTC} from "../../../store/tasks-reducer";
import {
  addTodolistTC,
  changeTodoLisFilterAC,
  changeTodolistTitleTC,
  fetchTodolistsTC,
  removeTodolistTC
} from "../../../store/todolists-reducer";
import {FilterValuesType, TasksStateType, TodolistType} from "../AppWithRedux";
import {TaskStatuses} from "../../../api/todolists-api";

export const useAppWithRedux = () =>{
  console.log("AppWithCustomHooks is called");
  const dispatch = useDispatch<any>()
  const todolists = useSelector<AppRootState, Array<TodolistType>>(state => state.todolists)
  const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)


  useEffect(()=>{
    dispatch(fetchTodolistsTC())
  },[])
  
  // actions to tasks reducer

  const removeTask = useCallback((id: string, todolistId: string) => {
    const thunk = removeTaskTC(todolistId, id )
    dispatch(thunk)

    // removeTaskThunk(dispatch, todolistId, id )

  }, [dispatch])

  const addTask = useCallback((taskText: string, todolistId: string) => {
    const thunk = addTaskTC(todolistId, taskText)
    dispatch(thunk)
  }, [dispatch])

  const changeTaskTitle = useCallback((newTitle: string, toDoListId: string, taskId: string) => {
    dispatch(updateTaskTC(taskId, {title: newTitle}, toDoListId))
  }, [dispatch])

  const changeStatus = useCallback((id: string, status: TaskStatuses, todolistId: string) => {
    dispatch(updateTaskTC(id, {status}, todolistId))
  }, [dispatch])

  // actions to todolist reducer

  const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
    dispatch(changeTodoLisFilterAC(value, todolistId))
  }, [dispatch])

  const removeTodoList = useCallback((todolistId: string) => {
    dispatch(removeTodolistTC(todolistId))
  }, [dispatch])

  const addTodoList = useCallback((title: string) => {
    dispatch(addTodolistTC(title))
  }, [dispatch])

  const changeTodoListTitle = useCallback((newTitle: string, toDoListId: string) => {
    dispatch(changeTodolistTitleTC(newTitle, toDoListId ))
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