import {useAppWithRedux} from "../AppWithRedux/hooks/useAppWithRedux";
import {TaskStatuses, TaskType} from "../../api/todolists-api";
import {Grid, Paper} from "@mui/material";
import {Todolist} from "./Todolist";
import React, {useEffect} from "react";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {fetchTodolistsTC} from "../../store/todolists-reducer";
import {useNavigate} from "react-router-dom";

export const Todolists =  () => {

  const {
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
  } = useAppWithRedux()

  const navigate = useNavigate()
  const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
  if(!isLoggedIn){
    navigate('/login')
  }
  return <div>
    <Grid container style={{padding: '2rem'}}>
      <AddItemForm addItem={addTodoList}/>
    </Grid>
    <Grid container spacing={3}>
      {
        isLoggedIn && todolists.map(tl => {
          let allTodoListsTasks = tasks[tl.id]
          let tasksForTodolist = allTodoListsTasks

          if (tl.filter === 'completed') {
            tasksForTodolist = tasksForTodolist.filter(task => task.status === TaskStatuses.Completed)
          }
          if (tl.filter === 'active') {
            tasksForTodolist = tasksForTodolist.filter(task => task.status === TaskStatuses.New)
          }
          if (tl.filter === 'all') {
            tasksForTodolist = allTodoListsTasks
          }

          return <Grid item key={tl.id}>
            <Paper style={{padding: '1rem'}}>
              <Todolist
                id={tl.id}
                title={tl.title}
                entityStatus={tl.entityStatus}
                tasks={tasksForTodolist}
                filter={tl.filter}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
                changeStatus={changeStatus}
                removeTodolist={removeTodoList}
                changeTaskTitle={changeTaskTitle}
                changeTodoListTitle={changeTodoListTitle}
              />
            </Paper>
          </Grid>
        })
      }
    </Grid>
  </div>
}


//types
export type FilterValuesType = 'all' | 'completed' | 'active'

export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}