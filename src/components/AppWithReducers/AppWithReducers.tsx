import React, {useReducer} from 'react';
import {v1} from 'uuid'
import '../../App.css';
import {tasksReducer, removeTaskAC, addTaskAC, updateTaskAC, changeTaskTitleAC} from '../../store/tasks-reducer';
import {
  todoListsReducer,
  removeTodoListAC,
  addTodoListAC,
  changeTodoLisTitleAC,
  changeTodoLisFilterAC,
  FilterValuesType
} from '../../store/todolists-reducer';

//components
import {AddItemForm} from '../AddItemForm/AddItemForm'
import {Todolist} from '../common/Todolist'

// material ui
import MenuIcon from '@mui/icons-material/Menu'
import {AppBar, Box, Button, IconButton, Toolbar, Typography, Container, Grid, Paper} from '@mui/material';
import {TaskPriorities, TaskStatuses} from "../../api/todolists-api";

export const AppWithReducers: React.FC = () => {
  //
  //
  // to do
  // develop  with api
  //
  //

  let todolistId1 = v1()
  let todolistId2 = v1()

  let [toDoLists, dispatchToTodolistReducer] = useReducer(todoListsReducer, [
    {id: todolistId1, title: 'What to learn', filter: 'all', order: 0, addedDate: ''},
    {id: todolistId2, title: 'What to buy', filter: 'all', order: 0, addedDate: ''}
  ])

  let [tasksObj, dispatchToTaskReducer] = useReducer(tasksReducer, {
    [todolistId1]: [
      {id: v1(), title: 'CSS', description: '', status: TaskStatuses.Completed, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId1, order: 0, addedDate: ''},
      {id: v1(), title: 'JS', description: '', status: TaskStatuses.Completed, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId1, order: 0, addedDate: ''},
      {id: v1(), title: 'React', description: '', status: TaskStatuses.New, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId1, order: 0, addedDate: ''},
      {id: v1(), title: 'Redux', description: '', status: TaskStatuses.New, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId1, order: 0, addedDate: ''}],
    [todolistId2]: [
      {id: v1(), title: 'Book', description: '', status: TaskStatuses.New, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId2, order: 0, addedDate: ''},
      {id: v1(), title: 'Milk', description: '', status: TaskStatuses.New, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId2, order: 0, addedDate: ''},
      {id: v1(), title: 'Beer', description: '', status: TaskStatuses.New, priority: TaskPriorities.Later, startDate: '', deadline: '', todoListId: todolistId2, order: 0, addedDate: ''},
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

  const changeStatus = (id: string, status: TaskStatuses, todolistId: string) => {
    dispatchToTaskReducer(updateTaskAC(id, status, todolistId))
  }

  // actions to todolist reducer

  const changeFilter = (value: FilterValuesType, todolistId: string) => {
    dispatchToTodolistReducer(changeTodoLisFilterAC(value, todolistId))
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
    dispatchToTodolistReducer(changeTodoLisTitleAC(newTitle, toDoListId))
  }

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
            toDoLists.map(tl => {
              let tasksForTodolist = tasksObj[tl.id]

              if (tl.filter === 'completed') {
                tasksForTodolist = tasksForTodolist.filter(task => task.status === TaskStatuses.Completed)
              }
              if (tl.filter === 'active') {
                tasksForTodolist = tasksForTodolist.filter(task => task.status === TaskStatuses.New)
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


