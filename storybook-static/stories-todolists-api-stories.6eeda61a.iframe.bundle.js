/*! For license information please see stories-todolists-api-stories.6eeda61a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktodolist_app=self.webpackChunktodolist_app||[]).push([[266],{"./src/stories/todolists-api.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CreateTask:()=>CreateTask,CreateTodolist:()=>CreateTodolist,DeleteTask:()=>DeleteTask,DeleteTodolist:()=>DeleteTodolist,GetTasks:()=>GetTasks,GetTodoLists:()=>GetTodoLists,UpdateTask:()=>UpdateTask,UpdateTodolist:()=>UpdateTodolist,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _GetTodoLists$paramet,_GetTodoLists$paramet2,_GetTodoLists$paramet3,_CreateTodolist$param,_CreateTodolist$param2,_CreateTodolist$param3,_DeleteTodolist$param,_DeleteTodolist$param2,_DeleteTodolist$param3,_UpdateTodolist$param,_UpdateTodolist$param2,_UpdateTodolist$param3,_GetTasks$parameters,_GetTasks$parameters2,_GetTasks$parameters3,_CreateTask$parameter,_CreateTask$parameter2,_CreateTask$parameter3,_DeleteTask$parameter,_DeleteTask$parameter2,_DeleteTask$parameter3,_UpdateTask$parameter,_UpdateTask$parameter2,_UpdateTask$parameter3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/api/todolists-api.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import React, { ChangeEvent, useEffect, useState } from 'react';\nimport { todolistsApi, todoListType } from \"../api/todolists-api\";\nexport default {\n  title: 'API'\n};\n\n//todoLists\n\nexport const GetTodoLists = () => {\n  const [state, setState] = useState<todoListType[]>([]);\n  useEffect(() => {\n    todolistsApi.getTodolists().then(res => {\n      setState(res.data);\n    });\n  }, []);\n  return <div>{JSON.stringify(state)}</div>;\n};\nexport const CreateTodolist = () => {\n  const [titleValue, setTitleValue] = useState<string>('');\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const createToDoListHandler = () => {\n    todolistsApi.createTodolist(titleValue).then(res => {\n      setResponse(JSON.stringify(res.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={titleValue} onChange={e => setTitleValue(e.target.value)} type=\"text\" placeholder='title' />\r\n    <button onClick={createToDoListHandler}>Send</button>\r\n  </div>;\n};\nexport const DeleteTodolist = () => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const deleteTodoListHandler = () => {\n    todolistsApi.deleteTodolist(toDoListId).then(response => {\n      setResponse(JSON.stringify(response.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {error || response}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistId' onChange={e => setToDoListId(e.target.value)} />\r\n    <button onClick={deleteTodoListHandler}>Delete</button>\r\n  </div>;\n};\nexport const UpdateTodolist = () => {\n  const [toDolistId, setToDolistId] = useState<string>('');\n  const [title, setTitle] = useState<string>('');\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const updateToDoListHandler = () => {\n    todolistsApi.updateTodolist(toDolistId, title).then(res => {\n      setResponse(JSON.stringify(res.data));\n      setToDolistId('');\n      setTitle('');\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {error || response}\r\n    <input onChange={e => setToDolistId(e.target.value)} placeholder='todolistid' type=\"text\" />\r\n    <input onChange={e => setTitle(e.target.value)} placeholder='title' type=\"text\" />\r\n    <button onClick={updateToDoListHandler}>Update</button>\r\n  </div>;\n};\n\n// tasks\n\nexport const GetTasks = () => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const getTasksHandler = () => {\n    todolistsApi.getTasks(toDoListId).then(res => {\n      setResponse(JSON.stringify(res.data));\n      setToDoListId('');\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\r\n    <button onClick={getTasksHandler}>GetTask</button>\r\n  </div>;\n};\nexport const CreateTask = () => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const [title, setTitle] = useState<string>('');\n  const createTaskHandler = () => {\n    todolistsApi.createTask(toDoListId, title).then(res => {\n      setResponse(JSON.stringify(res.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\r\n    <input value={title} type=\"text\" placeholder='task title' onChange={e => setTitle(e.target.value)} />\r\n    <button onClick={createTaskHandler}>Create</button>\r\n  </div>;\n};\nexport const DeleteTask = () => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [taskId, setTaskId] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const deleteTaskHandler = () => {\n    todolistsApi.deleteTask(toDoListId, taskId).then(res => {\n      setResponse(JSON.stringify(res.data));\n      setTaskId('');\n      setToDoListId('');\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input type=\"text\" placeholder='todolistId' value={toDoListId} onChange={e => setToDoListId(e.target.value)} />\r\n    <input type=\"text\" placeholder='taskId' value={taskId} onChange={e => setTaskId(e.target.value)} />\r\n    <button onClick={deleteTaskHandler}>DeleteTask</button>\r\n  </div>;\n};\nexport const UpdateTask = () => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const [taskId, setTaskId] = useState<string>('');\n  const [taskTitle, setTaskTitle] = useState<string>('title 1');\n  const [description, setDescription] = useState<string>('description 1');\n  const [status, setStatus] = useState<number>(0);\n  const [priority, setPriority] = useState<number>(0);\n  const [startDate, setStartDate] = useState<string>('');\n  const [deadline, setDeadline] = useState<string>('');\n  const updateTaskHandler = () => {\n    todolistsApi.updateTask(toDoListId, taskId, {\n      deadline: '',\n      description: description,\n      priority: priority,\n      startDate: '',\n      status: status,\n      title: taskTitle\n    }).then(res => {\n      setResponse(JSON.stringify(res.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\r\n    <input value={taskId} type=\"text\" placeholder='task id' onChange={e => setTaskId(e.target.value)} />\r\n\r\n\r\n    <input value={taskTitle} type=\"text\" placeholder='task title' onChange={e => setTaskTitle(e.target.value)} />\r\n    <input value={description} type=\"text\" placeholder='task description' onChange={e => setDescription(e.target.value)} />\r\n    <input value={status} type=\"number\" placeholder='task status' onChange={e => setStatus(+e.target.value)} />\r\n    <input value={priority} type=\"number\" placeholder='task priority' onChange={e => setPriority(+e.target.value)} />\r\n\r\n\r\n    <button onClick={updateTaskHandler}>Update</button>\r\n  </div>;\n};\nGetTodoLists.parameters = {\n  ...GetTodoLists.parameters,\n  docs: {\n    ...GetTodoLists.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [state, setState] = useState<todoListType[]>([]);\\n  useEffect(() => {\\n    todolistsApi.getTodolists().then(res => {\\n      setState(res.data);\\n    });\\n  }, []);\\n  return <div>{JSON.stringify(state)}</div>;\\n}\",\n      ...GetTodoLists.parameters?.docs?.source\n    }\n  }\n};\nCreateTodolist.parameters = {\n  ...CreateTodolist.parameters,\n  docs: {\n    ...CreateTodolist.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [titleValue, setTitleValue] = useState<string>('');\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const createToDoListHandler = () => {\\n    todolistsApi.createTodolist(titleValue).then(res => {\\n      setResponse(JSON.stringify(res.data));\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {response || error}\\r\\n    <input value={titleValue} onChange={e => setTitleValue(e.target.value)} type=\\\"text\\\" placeholder='title' />\\r\\n    <button onClick={createToDoListHandler}>Send</button>\\r\\n  </div>;\\n}\",\n      ...CreateTodolist.parameters?.docs?.source\n    }\n  }\n};\nDeleteTodolist.parameters = {\n  ...DeleteTodolist.parameters,\n  docs: {\n    ...DeleteTodolist.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const [toDoListId, setToDoListId] = useState<string>('');\\n  const deleteTodoListHandler = () => {\\n    todolistsApi.deleteTodolist(toDoListId).then(response => {\\n      setResponse(JSON.stringify(response.data));\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {error || response}\\r\\n    <input value={toDoListId} type=\\\"text\\\" placeholder='todolistId' onChange={e => setToDoListId(e.target.value)} />\\r\\n    <button onClick={deleteTodoListHandler}>Delete</button>\\r\\n  </div>;\\n}\",\n      ...DeleteTodolist.parameters?.docs?.source\n    }\n  }\n};\nUpdateTodolist.parameters = {\n  ...UpdateTodolist.parameters,\n  docs: {\n    ...UpdateTodolist.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [toDolistId, setToDolistId] = useState<string>('');\\n  const [title, setTitle] = useState<string>('');\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const updateToDoListHandler = () => {\\n    todolistsApi.updateTodolist(toDolistId, title).then(res => {\\n      setResponse(JSON.stringify(res.data));\\n      setToDolistId('');\\n      setTitle('');\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {error || response}\\r\\n    <input onChange={e => setToDolistId(e.target.value)} placeholder='todolistid' type=\\\"text\\\" />\\r\\n    <input onChange={e => setTitle(e.target.value)} placeholder='title' type=\\\"text\\\" />\\r\\n    <button onClick={updateToDoListHandler}>Update</button>\\r\\n  </div>;\\n}\",\n      ...UpdateTodolist.parameters?.docs?.source\n    }\n  }\n};\nGetTasks.parameters = {\n  ...GetTasks.parameters,\n  docs: {\n    ...GetTasks.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const [toDoListId, setToDoListId] = useState<string>('');\\n  const getTasksHandler = () => {\\n    todolistsApi.getTasks(toDoListId).then(res => {\\n      setResponse(JSON.stringify(res.data));\\n      setToDoListId('');\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {response || error}\\r\\n    <input value={toDoListId} type=\\\"text\\\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\\r\\n    <button onClick={getTasksHandler}>GetTask</button>\\r\\n  </div>;\\n}\",\n      ...GetTasks.parameters?.docs?.source\n    }\n  }\n};\nCreateTask.parameters = {\n  ...CreateTask.parameters,\n  docs: {\n    ...CreateTask.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const [toDoListId, setToDoListId] = useState<string>('');\\n  const [title, setTitle] = useState<string>('');\\n  const createTaskHandler = () => {\\n    todolistsApi.createTask(toDoListId, title).then(res => {\\n      setResponse(JSON.stringify(res.data));\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {response || error}\\r\\n    <input value={toDoListId} type=\\\"text\\\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\\r\\n    <input value={title} type=\\\"text\\\" placeholder='task title' onChange={e => setTitle(e.target.value)} />\\r\\n    <button onClick={createTaskHandler}>Create</button>\\r\\n  </div>;\\n}\",\n      ...CreateTask.parameters?.docs?.source\n    }\n  }\n};\nDeleteTask.parameters = {\n  ...DeleteTask.parameters,\n  docs: {\n    ...DeleteTask.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const [taskId, setTaskId] = useState<string>('');\\n  const [toDoListId, setToDoListId] = useState<string>('');\\n  const deleteTaskHandler = () => {\\n    todolistsApi.deleteTask(toDoListId, taskId).then(res => {\\n      setResponse(JSON.stringify(res.data));\\n      setTaskId('');\\n      setToDoListId('');\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {response || error}\\r\\n    <input type=\\\"text\\\" placeholder='todolistId' value={toDoListId} onChange={e => setToDoListId(e.target.value)} />\\r\\n    <input type=\\\"text\\\" placeholder='taskId' value={taskId} onChange={e => setTaskId(e.target.value)} />\\r\\n    <button onClick={deleteTaskHandler}>DeleteTask</button>\\r\\n  </div>;\\n}\",\n      ...DeleteTask.parameters?.docs?.source\n    }\n  }\n};\nUpdateTask.parameters = {\n  ...UpdateTask.parameters,\n  docs: {\n    ...UpdateTask.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [response, setResponse] = useState<string>('');\\n  const [error, setError] = useState<string>('');\\n  const [toDoListId, setToDoListId] = useState<string>('');\\n  const [taskId, setTaskId] = useState<string>('');\\n  const [taskTitle, setTaskTitle] = useState<string>('title 1');\\n  const [description, setDescription] = useState<string>('description 1');\\n  const [status, setStatus] = useState<number>(0);\\n  const [priority, setPriority] = useState<number>(0);\\n  const [startDate, setStartDate] = useState<string>('');\\n  const [deadline, setDeadline] = useState<string>('');\\n  const updateTaskHandler = () => {\\n    todolistsApi.updateTask(toDoListId, taskId, {\\n      deadline: '',\\n      description: description,\\n      priority: priority,\\n      startDate: '',\\n      status: status,\\n      title: taskTitle\\n    }).then(res => {\\n      setResponse(JSON.stringify(res.data));\\n    }).catch(e => {\\n      setError(JSON.stringify(e.message));\\n    });\\n  };\\n  return <div>\\r\\n    {response || error}\\r\\n    <input value={toDoListId} type=\\\"text\\\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\\r\\n    <input value={taskId} type=\\\"text\\\" placeholder='task id' onChange={e => setTaskId(e.target.value)} />\\r\\n\\r\\n\\r\\n    <input value={taskTitle} type=\\\"text\\\" placeholder='task title' onChange={e => setTaskTitle(e.target.value)} />\\r\\n    <input value={description} type=\\\"text\\\" placeholder='task description' onChange={e => setDescription(e.target.value)} />\\r\\n    <input value={status} type=\\\"number\\\" placeholder='task status' onChange={e => setStatus(+e.target.value)} />\\r\\n    <input value={priority} type=\\\"number\\\" placeholder='task priority' onChange={e => setPriority(+e.target.value)} />\\r\\n\\r\\n\\r\\n    <button onClick={updateTaskHandler}>Update</button>\\r\\n  </div>;\\n}\",\n      ...UpdateTask.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"get-todo-lists":{startLoc:{col:28,line:9},endLoc:{col:1,line:17},startBody:{col:28,line:9},endBody:{col:1,line:17}},"create-todolist":{startLoc:{col:30,line:18},endLoc:{col:1,line:34},startBody:{col:30,line:18},endBody:{col:1,line:34}},"delete-todolist":{startLoc:{col:30,line:35},endLoc:{col:1,line:51},startBody:{col:30,line:35},endBody:{col:1,line:51}},"update-todolist":{startLoc:{col:30,line:52},endLoc:{col:1,line:72},startBody:{col:30,line:52},endBody:{col:1,line:72}},"get-tasks":{startLoc:{col:24,line:76},endLoc:{col:1,line:93},startBody:{col:24,line:76},endBody:{col:1,line:93}},"create-task":{startLoc:{col:26,line:94},endLoc:{col:1,line:112},startBody:{col:26,line:94},endBody:{col:1,line:112}},"delete-task":{startLoc:{col:26,line:113},endLoc:{col:1,line:133},startBody:{col:26,line:113},endBody:{col:1,line:133}},"update-task":{startLoc:{col:26,line:134},endLoc:{col:1,line:173},startBody:{col:26,line:134},endBody:{col:1,line:173}}}}},title:"API"},GetTodoLists=()=>{const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.getTodolists().then((res=>{setState(res.data)}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:JSON.stringify(state)})},CreateTodolist=()=>{const[titleValue,setTitleValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[response||error,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:titleValue,onChange:e=>setTitleValue(e.target.value),type:"text",placeholder:"title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.createTodolist(titleValue).then((res=>{setResponse(JSON.stringify(res.data))})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"Send"})]})},DeleteTodolist=()=>{const[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[toDoListId,setToDoListId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[error||response,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:toDoListId,type:"text",placeholder:"todolistId",onChange:e=>setToDoListId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.deleteTodolist(toDoListId).then((response=>{setResponse(JSON.stringify(response.data))})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"Delete"})]})},UpdateTodolist=()=>{const[toDolistId,setToDolistId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[title,setTitle]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[error||response,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{onChange:e=>setToDolistId(e.target.value),placeholder:"todolistid",type:"text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{onChange:e=>setTitle(e.target.value),placeholder:"title",type:"text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.updateTodolist(toDolistId,title).then((res=>{setResponse(JSON.stringify(res.data)),setToDolistId(""),setTitle("")})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"Update"})]})},GetTasks=()=>{const[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[toDoListId,setToDoListId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[response||error,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:toDoListId,type:"text",placeholder:"todolistid",onChange:e=>setToDoListId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.getTasks(toDoListId).then((res=>{setResponse(JSON.stringify(res.data)),setToDoListId("")})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"GetTask"})]})},CreateTask=()=>{const[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[toDoListId,setToDoListId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[title,setTitle]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[response||error,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:toDoListId,type:"text",placeholder:"todolistid",onChange:e=>setToDoListId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:title,type:"text",placeholder:"task title",onChange:e=>setTitle(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.createTask(toDoListId,title).then((res=>{setResponse(JSON.stringify(res.data))})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"Create"})]})},DeleteTask=()=>{const[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[taskId,setTaskId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[toDoListId,setToDoListId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[response||error,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",placeholder:"todolistId",value:toDoListId,onChange:e=>setToDoListId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",placeholder:"taskId",value:taskId,onChange:e=>setTaskId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.deleteTask(toDoListId,taskId).then((res=>{setResponse(JSON.stringify(res.data)),setTaskId(""),setToDoListId("")})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"DeleteTask"})]})},UpdateTask=()=>{const[response,setResponse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[toDoListId,setToDoListId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[taskId,setTaskId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[taskTitle,setTaskTitle]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("title 1"),[description,setDescription]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("description 1"),[status,setStatus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[priority,setPriority]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[startDate,setStartDate]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[deadline,setDeadline]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[response||error,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:toDoListId,type:"text",placeholder:"todolistid",onChange:e=>setToDoListId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:taskId,type:"text",placeholder:"task id",onChange:e=>setTaskId(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:taskTitle,type:"text",placeholder:"task title",onChange:e=>setTaskTitle(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:description,type:"text",placeholder:"task description",onChange:e=>setDescription(e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:status,type:"number",placeholder:"task status",onChange:e=>setStatus(+e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{value:priority,type:"number",placeholder:"task priority",onChange:e=>setPriority(+e.target.value)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_1__.fs.updateTask(toDoListId,taskId,{deadline:"",description,priority,startDate:"",status,title:taskTitle}).then((res=>{setResponse(JSON.stringify(res.data))})).catch((e=>{setError(JSON.stringify(e.message))}))},children:"Update"})]})};GetTodoLists.parameters={...GetTodoLists.parameters,docs:{...null===(_GetTodoLists$paramet=GetTodoLists.parameters)||void 0===_GetTodoLists$paramet?void 0:_GetTodoLists$paramet.docs,source:{originalSource:"() => {\n  const [state, setState] = useState<todoListType[]>([]);\n  useEffect(() => {\n    todolistsApi.getTodolists().then(res => {\n      setState(res.data);\n    });\n  }, []);\n  return <div>{JSON.stringify(state)}</div>;\n}",...null===(_GetTodoLists$paramet2=GetTodoLists.parameters)||void 0===_GetTodoLists$paramet2||null===(_GetTodoLists$paramet3=_GetTodoLists$paramet2.docs)||void 0===_GetTodoLists$paramet3?void 0:_GetTodoLists$paramet3.source}}},CreateTodolist.parameters={...CreateTodolist.parameters,docs:{...null===(_CreateTodolist$param=CreateTodolist.parameters)||void 0===_CreateTodolist$param?void 0:_CreateTodolist$param.docs,source:{originalSource:"() => {\n  const [titleValue, setTitleValue] = useState<string>('');\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const createToDoListHandler = () => {\n    todolistsApi.createTodolist(titleValue).then(res => {\n      setResponse(JSON.stringify(res.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={titleValue} onChange={e => setTitleValue(e.target.value)} type=\"text\" placeholder='title' />\r\n    <button onClick={createToDoListHandler}>Send</button>\r\n  </div>;\n}",...null===(_CreateTodolist$param2=CreateTodolist.parameters)||void 0===_CreateTodolist$param2||null===(_CreateTodolist$param3=_CreateTodolist$param2.docs)||void 0===_CreateTodolist$param3?void 0:_CreateTodolist$param3.source}}},DeleteTodolist.parameters={...DeleteTodolist.parameters,docs:{...null===(_DeleteTodolist$param=DeleteTodolist.parameters)||void 0===_DeleteTodolist$param?void 0:_DeleteTodolist$param.docs,source:{originalSource:"() => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const deleteTodoListHandler = () => {\n    todolistsApi.deleteTodolist(toDoListId).then(response => {\n      setResponse(JSON.stringify(response.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {error || response}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistId' onChange={e => setToDoListId(e.target.value)} />\r\n    <button onClick={deleteTodoListHandler}>Delete</button>\r\n  </div>;\n}",...null===(_DeleteTodolist$param2=DeleteTodolist.parameters)||void 0===_DeleteTodolist$param2||null===(_DeleteTodolist$param3=_DeleteTodolist$param2.docs)||void 0===_DeleteTodolist$param3?void 0:_DeleteTodolist$param3.source}}},UpdateTodolist.parameters={...UpdateTodolist.parameters,docs:{...null===(_UpdateTodolist$param=UpdateTodolist.parameters)||void 0===_UpdateTodolist$param?void 0:_UpdateTodolist$param.docs,source:{originalSource:"() => {\n  const [toDolistId, setToDolistId] = useState<string>('');\n  const [title, setTitle] = useState<string>('');\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const updateToDoListHandler = () => {\n    todolistsApi.updateTodolist(toDolistId, title).then(res => {\n      setResponse(JSON.stringify(res.data));\n      setToDolistId('');\n      setTitle('');\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {error || response}\r\n    <input onChange={e => setToDolistId(e.target.value)} placeholder='todolistid' type=\"text\" />\r\n    <input onChange={e => setTitle(e.target.value)} placeholder='title' type=\"text\" />\r\n    <button onClick={updateToDoListHandler}>Update</button>\r\n  </div>;\n}",...null===(_UpdateTodolist$param2=UpdateTodolist.parameters)||void 0===_UpdateTodolist$param2||null===(_UpdateTodolist$param3=_UpdateTodolist$param2.docs)||void 0===_UpdateTodolist$param3?void 0:_UpdateTodolist$param3.source}}},GetTasks.parameters={...GetTasks.parameters,docs:{...null===(_GetTasks$parameters=GetTasks.parameters)||void 0===_GetTasks$parameters?void 0:_GetTasks$parameters.docs,source:{originalSource:"() => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const getTasksHandler = () => {\n    todolistsApi.getTasks(toDoListId).then(res => {\n      setResponse(JSON.stringify(res.data));\n      setToDoListId('');\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\r\n    <button onClick={getTasksHandler}>GetTask</button>\r\n  </div>;\n}",...null===(_GetTasks$parameters2=GetTasks.parameters)||void 0===_GetTasks$parameters2||null===(_GetTasks$parameters3=_GetTasks$parameters2.docs)||void 0===_GetTasks$parameters3?void 0:_GetTasks$parameters3.source}}},CreateTask.parameters={...CreateTask.parameters,docs:{...null===(_CreateTask$parameter=CreateTask.parameters)||void 0===_CreateTask$parameter?void 0:_CreateTask$parameter.docs,source:{originalSource:"() => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const [title, setTitle] = useState<string>('');\n  const createTaskHandler = () => {\n    todolistsApi.createTask(toDoListId, title).then(res => {\n      setResponse(JSON.stringify(res.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\r\n    <input value={title} type=\"text\" placeholder='task title' onChange={e => setTitle(e.target.value)} />\r\n    <button onClick={createTaskHandler}>Create</button>\r\n  </div>;\n}",...null===(_CreateTask$parameter2=CreateTask.parameters)||void 0===_CreateTask$parameter2||null===(_CreateTask$parameter3=_CreateTask$parameter2.docs)||void 0===_CreateTask$parameter3?void 0:_CreateTask$parameter3.source}}},DeleteTask.parameters={...DeleteTask.parameters,docs:{...null===(_DeleteTask$parameter=DeleteTask.parameters)||void 0===_DeleteTask$parameter?void 0:_DeleteTask$parameter.docs,source:{originalSource:"() => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [taskId, setTaskId] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const deleteTaskHandler = () => {\n    todolistsApi.deleteTask(toDoListId, taskId).then(res => {\n      setResponse(JSON.stringify(res.data));\n      setTaskId('');\n      setToDoListId('');\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input type=\"text\" placeholder='todolistId' value={toDoListId} onChange={e => setToDoListId(e.target.value)} />\r\n    <input type=\"text\" placeholder='taskId' value={taskId} onChange={e => setTaskId(e.target.value)} />\r\n    <button onClick={deleteTaskHandler}>DeleteTask</button>\r\n  </div>;\n}",...null===(_DeleteTask$parameter2=DeleteTask.parameters)||void 0===_DeleteTask$parameter2||null===(_DeleteTask$parameter3=_DeleteTask$parameter2.docs)||void 0===_DeleteTask$parameter3?void 0:_DeleteTask$parameter3.source}}},UpdateTask.parameters={...UpdateTask.parameters,docs:{...null===(_UpdateTask$parameter=UpdateTask.parameters)||void 0===_UpdateTask$parameter?void 0:_UpdateTask$parameter.docs,source:{originalSource:"() => {\n  const [response, setResponse] = useState<string>('');\n  const [error, setError] = useState<string>('');\n  const [toDoListId, setToDoListId] = useState<string>('');\n  const [taskId, setTaskId] = useState<string>('');\n  const [taskTitle, setTaskTitle] = useState<string>('title 1');\n  const [description, setDescription] = useState<string>('description 1');\n  const [status, setStatus] = useState<number>(0);\n  const [priority, setPriority] = useState<number>(0);\n  const [startDate, setStartDate] = useState<string>('');\n  const [deadline, setDeadline] = useState<string>('');\n  const updateTaskHandler = () => {\n    todolistsApi.updateTask(toDoListId, taskId, {\n      deadline: '',\n      description: description,\n      priority: priority,\n      startDate: '',\n      status: status,\n      title: taskTitle\n    }).then(res => {\n      setResponse(JSON.stringify(res.data));\n    }).catch(e => {\n      setError(JSON.stringify(e.message));\n    });\n  };\n  return <div>\r\n    {response || error}\r\n    <input value={toDoListId} type=\"text\" placeholder='todolistid' onChange={e => setToDoListId(e.target.value)} />\r\n    <input value={taskId} type=\"text\" placeholder='task id' onChange={e => setTaskId(e.target.value)} />\r\n\r\n\r\n    <input value={taskTitle} type=\"text\" placeholder='task title' onChange={e => setTaskTitle(e.target.value)} />\r\n    <input value={description} type=\"text\" placeholder='task description' onChange={e => setDescription(e.target.value)} />\r\n    <input value={status} type=\"number\" placeholder='task status' onChange={e => setStatus(+e.target.value)} />\r\n    <input value={priority} type=\"number\" placeholder='task priority' onChange={e => setPriority(+e.target.value)} />\r\n\r\n\r\n    <button onClick={updateTaskHandler}>Update</button>\r\n  </div>;\n}",...null===(_UpdateTask$parameter2=UpdateTask.parameters)||void 0===_UpdateTask$parameter2||null===(_UpdateTask$parameter3=_UpdateTask$parameter2.docs)||void 0===_UpdateTask$parameter3?void 0:_UpdateTask$parameter3.source}}};const __namedExportsOrder=["GetTodoLists","CreateTodolist","DeleteTodolist","UpdateTodolist","GetTasks","CreateTask","DeleteTask","UpdateTask"]},"./src/api/todolists-api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fm:()=>TaskStatuses,fs:()=>todolistsApi,xy:()=>TaskPriorities});const instance=__webpack_require__("./node_modules/axios/lib/axios.js").Z.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.1/",headers:{"API-KEY":"a04742fc-b015-48d6-8ae1-43c8264c6140"}});let TaskStatuses=function(TaskStatuses){return TaskStatuses[TaskStatuses.New=0]="New",TaskStatuses[TaskStatuses.InProgress=1]="InProgress",TaskStatuses[TaskStatuses.Completed=2]="Completed",TaskStatuses[TaskStatuses.Draft=3]="Draft",TaskStatuses}({}),TaskPriorities=function(TaskPriorities){return TaskPriorities[TaskPriorities.Low=0]="Low",TaskPriorities[TaskPriorities.Middle=1]="Middle",TaskPriorities[TaskPriorities.Hi=2]="Hi",TaskPriorities[TaskPriorities.Urgently=3]="Urgently",TaskPriorities[TaskPriorities.Later=4]="Later",TaskPriorities}({});const todolistsApi={getTodolists:()=>instance.get("todo-lists"),createTodolist:titleValue=>instance.post("todo-lists",{title:titleValue}),deleteTodolist:uri=>instance.delete("todo-lists/".concat(uri)),updateTodolist:(uri,title)=>instance.put("todo-lists/".concat(uri),{title}),getTasks:todolistId=>instance.get("todo-lists/".concat(todolistId,"/tasks")),createTask:(todolistId,title)=>instance.post("todo-lists/".concat(todolistId,"/tasks"),{title}),deleteTask:(todolistId,taskId)=>instance.delete("/todo-lists/".concat(todolistId,"/tasks/").concat(taskId)),updateTask:(toDoListId,taskId,model)=>instance.put("/todo-lists/".concat(toDoListId,"/tasks/").concat(taskId),model)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);