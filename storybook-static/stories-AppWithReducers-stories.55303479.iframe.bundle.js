"use strict";(self.webpackChunktodolist_app=self.webpackChunktodolist_app||[]).push([[801],{"./src/stories/AppWithReducers.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AppWithReduxBaseExample:()=>AppWithReduxBaseExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AppWithReducers_stories});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/App.css");var Menu=__webpack_require__("./node_modules/@mui/icons-material/Menu.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),AppBar=__webpack_require__("./node_modules/@mui/material/AppBar/AppBar.js"),Toolbar=__webpack_require__("./node_modules/@mui/material/Toolbar/Toolbar.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AppWithReducers=()=>(0,jsx_runtime.jsxs)("div",{className:"App",children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{flexGrow:1},children:(0,jsx_runtime.jsx)(AppBar.Z,{position:"static",children:(0,jsx_runtime.jsxs)(Toolbar.Z,{children:[(0,jsx_runtime.jsx)(IconButton.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,jsx_runtime.jsx)(Menu.Z,{})}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"News"}),(0,jsx_runtime.jsx)(Button.Z,{color:"inherit",children:"Login"})]})})}),(0,jsx_runtime.jsxs)(Container.Z,{fixed:!0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,style:{padding:"2rem"}}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,spacing:3})]})]});try{AppWithReducers.displayName="AppWithReducers",AppWithReducers.__docgenInfo={description:"",displayName:"AppWithReducers",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AppWithReducers/AppWithReducers.tsx#AppWithReducers"]={docgenInfo:AppWithReducers.__docgenInfo,name:"AppWithReducers",path:"src/components/AppWithReducers/AppWithReducers.tsx#AppWithReducers"})}catch(__react_docgen_typescript_loader_error){}var _AppWithReduxBaseExam,_AppWithReduxBaseExam2,_AppWithReduxBaseExam3,store=__webpack_require__("./src/store/store.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js");const AppWithReducers_stories={parameters:{storySource:{source:"import { AppWithReducers } from '../components/AppWithReducers';\nimport { store } from \"../store/store\";\nimport { Provider } from \"react-redux\";\n// import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator'\nexport default {\n  title: 'AppWithReducers Component',\n  component: AppWithReducers\n  // decorators: [ReduxStoreProviderDecorator]\n};\n\nexport const AppWithReduxBaseExample = () => {\n  return <>\r\n    <Provider store={store}>\r\n    <AppWithReducers />\r\n      </Provider>\r\n  </>;\n};\nAppWithReduxBaseExample.parameters = {\n  ...AppWithReduxBaseExample.parameters,\n  docs: {\n    ...AppWithReduxBaseExample.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  return <>\\r\\n    <Provider store={store}>\\r\\n    <AppWithReducers />\\r\\n      </Provider>\\r\\n  </>;\\n}\",\n      ...AppWithReduxBaseExample.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"app-with-redux-base-example":{startLoc:{col:39,line:11},endLoc:{col:1,line:17},startBody:{col:39,line:11},endBody:{col:1,line:17}}}}},title:"AppWithReducers Component",component:AppWithReducers},AppWithReduxBaseExample=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(es.zt,{store:store.h,children:(0,jsx_runtime.jsx)(AppWithReducers,{})})});AppWithReduxBaseExample.parameters={...AppWithReduxBaseExample.parameters,docs:{...null===(_AppWithReduxBaseExam=AppWithReduxBaseExample.parameters)||void 0===_AppWithReduxBaseExam?void 0:_AppWithReduxBaseExam.docs,source:{originalSource:"() => {\n  return <>\r\n    <Provider store={store}>\r\n    <AppWithReducers />\r\n      </Provider>\r\n  </>;\n}",...null===(_AppWithReduxBaseExam2=AppWithReduxBaseExample.parameters)||void 0===_AppWithReduxBaseExam2||null===(_AppWithReduxBaseExam3=_AppWithReduxBaseExam2.docs)||void 0===_AppWithReduxBaseExam3?void 0:_AppWithReduxBaseExam3.source}}};const __namedExportsOrder=["AppWithReduxBaseExample"]},"./src/api/todolists-api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fm:()=>TaskStatuses,fs:()=>todolistsApi});const instance=__webpack_require__("./node_modules/axios/lib/axios.js").Z.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.1/",headers:{"API-KEY":"a04742fc-b015-48d6-8ae1-43c8264c6140"}}),todolistsApi={getTodolists:()=>instance.get("todo-lists"),createTodolist:titleValue=>instance.post("todo-lists",{title:titleValue}),deleteTodolist:uri=>instance.delete("todo-lists/".concat(uri)),updateTodolist:(uri,title)=>instance.put("todo-lists/".concat(uri),{title}),getTasks:todolistId=>instance.get("todo-lists/".concat(todolistId,"/tasks")),createTask:(todolistId,title)=>instance.post("todo-lists/".concat(todolistId,"/tasks"),{title}),deleteTask:(todolistId,taskId)=>instance.delete("/todo-lists/".concat(todolistId,"/tasks/").concat(taskId)),updateTask:(toDoListId,taskId,model)=>instance.put("/todo-lists/".concat(toDoListId,"/tasks/").concat(taskId),model)};let TaskStatuses=function(TaskStatuses){return TaskStatuses[TaskStatuses.New=0]="New",TaskStatuses[TaskStatuses.InProgress=1]="InProgress",TaskStatuses[TaskStatuses.Completed=2]="Completed",TaskStatuses[TaskStatuses.Draft=3]="Draft",TaskStatuses}({})},"./src/store/app-reducer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B1:()=>setAppErrorAC,m5:()=>appReducer,nw:()=>setAppStatusAC});const appReducer=function(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"APP/SET-STATUS":return{...state,status:action.status};case"APP/SET-ERROR":return{...state,error:action.error};default:return{...state}}},setAppStatusAC=status=>({type:"APP/SET-STATUS",status}),setAppErrorAC=error=>({type:"APP/SET-ERROR",error}),initialState={status:"idle",error:null}},"./src/store/store.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>store});var redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/redux/es/redux.js"),_tasks_reducer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/store/tasks-reducer.ts"),_todolists_reducer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/store/todolists-reducer.ts"),redux_thunk__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/redux-thunk/dist/redux-thunk.mjs"),_app_reducer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/store/app-reducer.ts");const rootReducer=(0,redux__WEBPACK_IMPORTED_MODULE_3__.UY)({tasks:_tasks_reducer__WEBPACK_IMPORTED_MODULE_0__.fR,todolists:_todolists_reducer__WEBPACK_IMPORTED_MODULE_1__.pS,app:_app_reducer__WEBPACK_IMPORTED_MODULE_2__.m5}),store=(0,redux__WEBPACK_IMPORTED_MODULE_3__.MT)(rootReducer,(0,redux__WEBPACK_IMPORTED_MODULE_3__.md)(redux_thunk__WEBPACK_IMPORTED_MODULE_4__.I));window.store=store},"./src/store/tasks-reducer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rX:()=>addTaskTC,lB:()=>fetchTasksTC,Pi:()=>removeTaskTC,fR:()=>tasksReducer,ms:()=>updateTaskTC});var todolists_api=__webpack_require__("./src/api/todolists-api.ts"),app_reducer=__webpack_require__("./src/store/app-reducer.ts");const handleServerAppError=(data,dispatch)=>{data.messages.length?dispatch((0,app_reducer.B1)(data.messages[0])):dispatch((0,app_reducer.B1)("Some error occurred")),dispatch((0,app_reducer.nw)("failed"))},handleServerNetworkAppError=(error,dispatch)=>{dispatch((0,app_reducer.B1)(error.message?error.message:"Some error occurred")),dispatch((0,app_reducer.nw)("failed"))},initialState={},tasksReducer=function(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"REMOVE-TASK":return{...state,[action.toDoListId]:state[action.toDoListId].filter((task=>task.id!==action.taskId))};case"ADD-TASK":return{...state,[action.task.todoListId]:[action.task,...state[action.task.todoListId]]};case"UPDATE-TASK":return{...state,[action.todolistId]:state[action.todolistId].map((task=>task.id===action.taskId?{...task,...action.model}:task))};case"ADD-TODOLIST":return{...state,[action.todolist.id]:[]};case"REMOVE-TODOLIST":const stateCopy={...state};return delete stateCopy[action.id],stateCopy;case"SET-TODOLISTS":{const copyState={...state};return action.todolists.forEach((tl=>{copyState[tl.id]=[]})),copyState}case"SET-TASKS":return{...state,[action.todolistId]:action.tasks};default:return state}},fetchTasksTC=todolistId=>dispatch=>{dispatch((0,app_reducer.nw)("loading")),todolists_api.fs.getTasks(todolistId).then((res=>{dispatch(((todolistId,tasks)=>({type:"SET-TASKS",tasks,todolistId}))(todolistId,res.data.items)),dispatch((0,app_reducer.nw)("succeeded"))}))},removeTaskTC=(todolistId,id)=>dispatch=>{todolists_api.fs.deleteTask(todolistId,id).then((res=>{dispatch({type:"REMOVE-TASK",taskId:id,toDoListId:todolistId})}))},addTaskTC=(todolistId,title)=>dispatch=>{dispatch((0,app_reducer.nw)("loading")),todolists_api.fs.createTask(todolistId,title).then((res=>{0===res.data.resultCode?(dispatch({type:"ADD-TASK",task:res.data.data.item}),dispatch((0,app_reducer.nw)("succeeded"))):handleServerAppError(res.data,dispatch)})).catch((error=>{handleServerNetworkAppError(error,dispatch)}))},updateTaskTC=(taskId,domainModel,todolistId)=>(dispatch,getState)=>{const task=getState().tasks[todolistId].find((t=>t.id===taskId));if(!task)return void dispatch((0,app_reducer.B1)("task not found in the state"));const apiModel={deadline:task.deadline,description:task.description,priority:task.priority,startDate:task.startDate,title:task.title,status:task.status,...domainModel};todolists_api.fs.updateTask(todolistId,taskId,apiModel).then((res=>{0===res.data.resultCode?dispatch(((taskId,model,todolistId)=>({type:"UPDATE-TASK",taskId,model,todolistId}))(taskId,domainModel,todolistId)):handleServerAppError(res.data,dispatch)})).catch((error=>{handleServerNetworkAppError(error,dispatch)}))}},"./src/store/todolists-reducer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ds:()=>removeTodolistTC,MS:()=>addTodolistTC,Ot:()=>changeTodolistTitleTC,TH:()=>fetchTodolistsTC,pS:()=>todoListsReducer,ug:()=>changeTodoLisFilterAC});var _api_todolists_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/api/todolists-api.ts"),_app_reducer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/store/app-reducer.ts");const initialState=[],todoListsReducer=function(){let state=arguments.length>0&&void 0!==arguments[0]?arguments[0]:initialState,action=arguments.length>1?arguments[1]:void 0;switch(action.type){case"ADD-TODOLIST":return[{...action.todolist,filter:"all",entityStatus:"idle"},...state];case"REMOVE-TODOLIST":return state.filter((e=>e.id!==action.id));case"CHANGE-TODOLIST-TITLE":return state.map((tl=>tl.id===action.id?{...tl,title:action.title}:tl));case"CHANGE-TODOLIST-FILTER":return state.map((tl=>tl.id===action.id?{...tl,filter:action.filter}:tl));case"SET-TODOLISTS":return action.todolists.map((tl=>({...tl,filter:"all",entityStatus:"idle"})));case"CHANGE-TODOLIST-STATUS":return state.map((tl=>tl.id===action.id?{...tl,entityStatus:action.status}:tl));default:return state}},changeTodoLisFilterAC=(filter,id)=>({type:"CHANGE-TODOLIST-FILTER",filter,id}),fetchTodolistsTC=()=>dispatch=>{dispatch((0,_app_reducer__WEBPACK_IMPORTED_MODULE_1__.nw)("loading")),_api_todolists_api__WEBPACK_IMPORTED_MODULE_0__.fs.getTodolists().then((res=>{dispatch({type:"SET-TODOLISTS",todolists:res.data}),dispatch((0,_app_reducer__WEBPACK_IMPORTED_MODULE_1__.nw)("succeeded"))}))},removeTodolistTC=todolistId=>dispatch=>{dispatch((0,_app_reducer__WEBPACK_IMPORTED_MODULE_1__.nw)("loading")),dispatch({type:"CHANGE-TODOLIST-STATUS",id:todolistId,status:"loading"}),_api_todolists_api__WEBPACK_IMPORTED_MODULE_0__.fs.deleteTodolist(todolistId).then((res=>{dispatch((todolistId=>({type:"REMOVE-TODOLIST",id:todolistId}))(todolistId)),dispatch((0,_app_reducer__WEBPACK_IMPORTED_MODULE_1__.nw)("succeeded"))}))},addTodolistTC=title=>dispatch=>{dispatch((0,_app_reducer__WEBPACK_IMPORTED_MODULE_1__.nw)("loading")),_api_todolists_api__WEBPACK_IMPORTED_MODULE_0__.fs.createTodolist(title).then((res=>{dispatch({type:"ADD-TODOLIST",todolist:res.data.data.item}),dispatch((0,_app_reducer__WEBPACK_IMPORTED_MODULE_1__.nw)("succeeded"))}))},changeTodolistTitleTC=(title,id)=>dispatch=>{_api_todolists_api__WEBPACK_IMPORTED_MODULE_0__.fs.updateTodolist(id,title).then((res=>{dispatch(((title,id)=>({type:"CHANGE-TODOLIST-TITLE",title,id}))(title,id))}))}},"./src/App.css":()=>{}}]);