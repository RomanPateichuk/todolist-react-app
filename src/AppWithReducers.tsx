import React, { useReducer } from 'react';
import { v1 } from 'uuid'
import './App.css';
import { tasksReducer, removeTaskAC, addTaskAC, changeTaskStatusAC, changeTaskTitleAC } from './store/tasks-reducer';
import { todoListsReducer, removeTodoListAC, addTodoListAC, changeTodoLisTitletAC, changeTodoLisFiltertAC } from './store/todolists-reducer';

//components
import { AddItemForm } from './AddItemForm'
import { Todolist } from './Todolist'

// material ui
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';

// import types 
import { TaskType } from './Todolist'

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

function AppWithReducers() {

  let todolistId1 = v1()
  let todolistId2 = v1()

  let [todolists, dispatchToTodolistReducer] = useReducer(todoListsReducer, [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ])

  let [tasksObj, dispatchToTaskReducer] = useReducer(tasksReducer, {
    [todolistId1]: [
      { id: v1(), title: 'CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'React', isDone: false },
      { id: v1(), title: 'Redux', isDone: false },],
    [todolistId2]: [
      { id: v1(), title: 'Book', isDone: true },
      { id: v1(), title: 'Milk', isDone: true },
      { id: v1(), title: 'Beer', isDone: false },
    ]
  })

  // actions to tasks reducer

  const removeTask = (id: string, todolistId: string) => {
    dispatchToTaskReducer(removeTaskAC(id, todolistId))
  }

  const addTask = (taskText: string, todolistId: string) => {
    dispatchToTaskReducer(addTaskAC(taskText, todolistId))
  }

  const changeTaskTitle = (newTitle: string, toDoListId: string, taskId: string) => {
    dispatchToTaskReducer(changeTaskTitleAC(newTitle, toDoListId, taskId))
  }

  const changeStatus = (id: string, isDone: boolean, todolistId: string) => {
    dispatchToTaskReducer(changeTaskStatusAC(id, isDone, todolistId))
  }

  // actions to todolist reducer

  const changeFilter = (value: FilterValuesType, todolistId: string) => {
    dispatchToTodolistReducer(changeTodoLisFiltertAC(value, todolistId))
  }

  const removeTodoList = (todolistId: string) => {
    const action = removeTodoListAC(todolistId)
    dispatchToTodolistReducer(action)
    dispatchToTaskReducer(action)

  }

  const addTodoList = (title: string) => {
    const action = addTodoListAC(title)
    dispatchToTodolistReducer(action)
    dispatchToTaskReducer(action)
  }

  const changeTodoListTitle = (newTitle: string, toDoListId: string) => {
    dispatchToTodolistReducer(changeTodoLisTitletAC(newTitle, toDoListId))
  }

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
              let tasksForTodolist = tasksObj[tl.id]

              if (tl.filter === 'completed') {
                tasksForTodolist = tasksForTodolist.filter(task => task.isDone)
              }
              if (tl.filter === 'active') {
                tasksForTodolist = tasksForTodolist.filter(task => !task.isDone)
              }
              if (tl.filter === 'all') {
                tasksForTodolist = tasksObj[tl.id]
              }

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
}

export default AppWithReducers;
