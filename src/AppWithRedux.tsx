import React, { useCallback } from 'react'
import { removeTaskAC, addTaskAC, changeTaskStatusAC, changeTaskTitleAC } from './store/tasks-reducer';
import { removeTodoListAC, addTodoListAC, changeTodoLisTitletAC, changeTodoLisFiltertAC } from './store/todolists-reducer';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

//components
import { AddItemForm } from './AddItemForm'
import { Todolist } from './Todolist'

// material ui
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';

// import types 
import { TaskType } from './Todolist'
import { AppRootState } from './store/store';

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

const AppWithRedux = React.memo(() => {
  console.log("App is called");
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

  const changeStatus = useCallback((id: string, isDone: boolean, todolistId: string) => {
    dispatch(changeTaskStatusAC(id, isDone, todolistId))
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

  return (
    <div className='App'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container fixed>
        <Grid container style={{ padding: '2rem' }}>
          <AddItemForm addItem={addTodoList} />
        </Grid>
        <Grid container spacing={3}>
          {
            todolists.map(tl => {
              let allTodoListsTasks = tasks[tl.id]
              let tasksForTodolist = allTodoListsTasks

              return <Grid item key={tl.id}>
                <Paper style={{ padding: '1rem' }}>
                  <Todolist
                    id={tl.id}
                    title={tl.title}
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

export default AppWithRedux;
