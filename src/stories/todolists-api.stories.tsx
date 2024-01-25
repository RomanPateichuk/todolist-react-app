import React, {useEffect, useState} from 'react'
import {todolistsApi, todoListType} from "../api/todolists-api";


export default {
  title: 'API'
}

//todoLists

export const GetTodoLists = () => {

  const [state, setState] = useState<todoListType[]>([])
  useEffect(() => {
    todolistsApi.getTodolists().then((res) => {
      setState(res.data)
    })
  }, []);

  return <div>{JSON.stringify(state)}</div>

}

export const CreateTodolist = () => {

  const [titleValue, setTitleValue] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')

  const createToDoListHandler = () => {
    todolistsApi.createTodolist(titleValue).then((res) => {
      setResponse(JSON.stringify(res.data))
    }).catch((e) => {
      setError(JSON.stringify(e.message))
    })
  }

  return <div>
    {response || error}
    <input value={titleValue} onChange={(e) => setTitleValue(e.target.value)} type="text" placeholder='title'/>
    <button onClick={createToDoListHandler}>Send</button>
  </div>
}

export const DeleteTodolist = () => {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [toDoListId, setToDoListId] = useState<string>('')

  const deleteTodoListHandler = () => {
    todolistsApi.deleteTodolist(toDoListId).then((response) => {
      setResponse(JSON.stringify(response.data))
    }).catch((e) => {
        setError(JSON.stringify(e.message))
      }
    )
  }

  return <div>
    {error || response}
    <input value={toDoListId} type="text" placeholder='todolistId' onChange={(e) => setToDoListId(e.target.value)}/>
    <button onClick={deleteTodoListHandler}>Delete</button>
  </div>
}

export const UpdateTodolist = () => {
  const [toDolistId, setToDolistId] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')


  const updateToDoListHandler = () => {
    todolistsApi.updateTodolist(toDolistId, title).then((res) => {
      setResponse(JSON.stringify(res.data))
      setToDolistId('')
      setTitle('')
    }).catch((e) => {
      setError(JSON.stringify(e.message))
    })
  }

  return <div>
    {error || response}
    <input onChange={(e) => setToDolistId(e.target.value)} placeholder='todolistid' type="text"/>
    <input onChange={(e) => setTitle(e.target.value)} placeholder='title' type="text"/>
    <button onClick={updateToDoListHandler}>Update</button>
  </div>
}

// tasks

export const GetTasks = () => {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [toDoListId, setToDoListId] = useState<string>('')


  const getTasksHandler = () => {
    todolistsApi.getTasks(toDoListId).then(res => {
      setResponse(JSON.stringify(res.data))
      setToDoListId('')
    }).catch((e) => {
      setError(JSON.stringify(e.message))
    })
  }

  return <div>
    {response || error}
    <input value={toDoListId} type="text" placeholder='todolistid' onChange={(e) => setToDoListId(e.target.value)}/>
    <button onClick={getTasksHandler}>GetTask</button>
  </div>
}

export const CreateTask = () => {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [toDoListId, setToDoListId] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  const createTaskHandler = () => {
    todolistsApi.createTask(toDoListId, title).then(res => {
      setResponse(JSON.stringify(res.data))
    }).catch((e) => {
      setError(JSON.stringify(e.message))
    })
  }

  return <div>
    {response || error}
    <input value={toDoListId} type="text" placeholder='todolistid'
           onChange={
             (e) => setToDoListId(e.target.value)
           }/>
    <input value={title} type="text" placeholder='task title'
           onChange={
             (e) => setTitle(e.target.value)
           }/>
    <button onClick={createTaskHandler}>Create</button>
  </div>
}

export const DeleteTask = () => {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [taskId, setTaskId] = useState<string>('')
  const [toDoListId, setToDoListId] = useState<string>('')


  const deleteTaskHandler = () => {
    todolistsApi.deleteTask(toDoListId, taskId).then((res) => {
      setResponse(JSON.stringify(res.data))
      setTaskId('')
      setToDoListId('')
    }).catch((e) => {
      setError(JSON.stringify(e.message))
    })
  }

  return <div>
    {response || error}
    <input type="text" placeholder='todolistId' value={toDoListId} onChange={(e) => setToDoListId(e.target.value)}/>
    <input type="text" placeholder='taskId' value={taskId} onChange={(e) => setTaskId(e.target.value)}/>
    <button onClick={deleteTaskHandler}>DeleteTask</button>
  </div>
}

export const UpdateTask = () => {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [toDoListId, setToDoListId] = useState<string>('')
  const [taskId, setTaskId] = useState<string>('')

  const [taskTitle, setTaskTitle] = useState<string>('title 1')
  const [description, setDescription] = useState<string>('description 1')
  const [status, setStatus] = useState<number>(0)
  const [priority, setPriority] = useState<number>(0)
  // const [startDate, setStartDate] = useState<string>('')
  // const [deadline, setDeadline] = useState<string>('')

  const updateTaskHandler = () => {
    todolistsApi.updateTask(toDoListId, taskId, {
      deadline: '',
      description: description,
      priority: priority,
      startDate: '',
      status: status,
      title: taskTitle
    }
    ).then(res => {
      setResponse(JSON.stringify(res.data))
    }).catch((e) => {
      setError(JSON.stringify(e.message))
    })
  }

  return <div>
    {response || error}
    <input value={toDoListId} type="text" placeholder='todolistid' onChange={(e) => setToDoListId(e.target.value)}/>
    <input value={taskId} type="text" placeholder='task id' onChange={(e) => setTaskId(e.target.value)}/>


    <input value={taskTitle} type="text" placeholder='task title' onChange={(e) => setTaskTitle(e.target.value)}/>
    <input value={description} type="text" placeholder='task description' onChange={(e) => setDescription(e.target.value)}/>
    <input value={status} type="number" placeholder='task status' onChange={(e) => setStatus(+e.target.value)}/>
    <input value={priority} type="number" placeholder='task priority' onChange={(e) => setPriority(+e.target.value)}/>


    <button onClick={updateTaskHandler}>Update</button>
  </div>
}

