import React from 'react'
import '../../App.css';

//components
import {AddItemForm} from '../AddItemForm/AddItemForm'
import {Todolist} from '../common/Todolist'

// material ui
import MenuIcon from '@mui/icons-material/Menu'
import {AppBar, Box, Button, IconButton, Toolbar, Typography, Container, Grid, Paper} from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
// import types 
import {TaskStatuses, TaskType} from '../../api/todolists-api'
import {useAppWithRedux} from "./hooks/useAppWithRedux";
import ErrorSnackBar from "../common/ErrorSnackBar";
import {useSelector} from "react-redux";
import {AppRootState} from "../../store/store";

// type definitions
export type FilterValuesType = 'all' | 'completed' | 'active'
export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

export const AppWithRedux = React.memo(() => {

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

  // @ts-ignore
  const status = useSelector<AppRootState, string>(state=> state.app.status)

  return (
    <div className='App'>
      <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{mr: 2}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
              News
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
          {status === 'loading' && <LinearProgress color="inherit" />}
        </AppBar>
      </Box>
      <Container fixed>
        <Grid container style={{padding: '2rem'}}>
          <AddItemForm addItem={addTodoList}/>
          <ErrorSnackBar/>
        </Grid>
        <Grid container spacing={3}>
          {
            todolists.map(tl => {
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
      </Container>
    </div>
  );
})


