import React, { useState } from 'react';
import { v1 } from 'uuid'
import './App.css';

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

function App() {

  let todolistId1 = v1()
  let todolistId2 = v1()

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
  ])

  let [tasksObj, setTasks] = useState<TasksStateType>({
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

  const removeTask = (id: string, todolistId: string) => {
    let tasks = tasksObj[todolistId]
    let result = tasks.filter(task => task.id !== id)
    tasksObj[todolistId] = result
    setTasks({ ...tasksObj })
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
    setTasks({ ...tasksObj })
  }

  const changeTaskTitle = (newTitle: string, toDoListId: string, taskId: string) => {
    let task = tasksObj[toDoListId].find((e) => e.id === taskId)
    if (task) {
      task.title = newTitle
      setTasks({ ...tasksObj })
    }
  }

  const changeStatus = (id: string, isDone: boolean, todolistId: string) => {
    let tasks = tasksObj[todolistId]
    let task = tasks.find(task => task.id === id)
    if (task) {
      task.isDone = isDone
      setTasks({ ...tasksObj })
    }
  }

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
    delete tasksObj[todolistId]
    setTasks({ ...tasksObj })
  }

  const addTodoList = (title: string) => {
    const newTodoList: TodolistType = { id: v1(), title: title, filter: 'all' }
    setTodolists([newTodoList, ...todolists])
    setTasks({
      ...tasksObj,
      [newTodoList.id]: []
    })
  }

  const changeTodoListTitle = (newTitle: string, toDoListId: string) => {
    let todolist = todolists.find((e) => e.id === toDoListId)
    if (todolist) {
      todolist.title = newTitle
      setTodolists([...todolists])
    }
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

export default App;
