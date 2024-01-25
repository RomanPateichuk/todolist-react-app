import React from 'react';
import '../../App.css';

//components
import {AddItemForm} from '../AddItemForm/AddItemForm'
// import types
import {Todolist} from './Todolist'

// material ui
import MenuIcon from '@mui/icons-material/Menu'
import {AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material';
import {useTodolists} from "./hooks/useTodolist";
import {useTasks} from "./hooks/useTasks";


export function AppWithCustomHooks() {
  const {
    tasksObj,
    changeStatus,
    changeTaskTitle,
    addTask,
    removeTask,
    completeRemoveTasksForTodolist,
    addStateForNewTodolist
  } = useTasks()

  const {
    todolists,
    changeFilter,
    removeTodoList,
    changeTodoListTitle,
    addTodoList
  } = useTodolists(completeRemoveTasksForTodolist, addStateForNewTodolist)

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
        </AppBar>
      </Box>
      <Container fixed>
        <Grid container style={{padding: '2rem'}}>
          <AddItemForm addItem={addTodoList}/>
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
                <Paper style={{padding: '1rem'}}>
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


