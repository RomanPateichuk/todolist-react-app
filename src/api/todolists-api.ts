import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  headers: {
    "API-KEY": "a04742fc-b015-48d6-8ae1-43c8264c6140"
  }
})

export type todoListType = {
  id: string,
  title: string,
  addedDate: string,
  order: number
}

export type UpdateTodolistResponse = {
  data: {},
  messages: string[],
  fieldsErrors: string[],
  resultCode: number
}

type ResponseType<D> = {
  resultCode: number,
  messages: string[],
  data: D
}

type TaskType = {
  description: string,
  title: string,
  completed: boolean,
  status: number,
  priority: number,
  startDate: string,
  deadline: string,
  id: string,
  todoListId: string,
  order: number,
  addedDate: string
}

type GetTaskResponse = {
items:TaskType[],
  totalCount: number,
  error: string | null
}

type UpdateTaskModelType = {
  title: string,
  description:string,
  status: number,
  priority: number,
  startDate: string,
  deadline: string
}

export const todolistsApi = {
  getTodolists() {
    return instance.get<todoListType[]>('todo-lists')
  },

  createTodolist(titleValue: string) {
    return instance.post<ResponseType<{ item: todoListType }>>('todo-lists', {
      title: titleValue
    })
  },

  deleteTodolist(uri: string) {
    return instance.delete<ResponseType<{}>>(`todo-lists/${uri}`)
  },

  updateTodolist(uri: string, title: string) {
    return instance.put<UpdateTodolistResponse>(`todo-lists/${uri}`, {
      title
    })
  },

  getTasks(todolistId: string){
    return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
},

  createTask(todolistId: string, title: string){
    return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {
      title
    })
  },

  deleteTask(todolistId: string, taskId: string){
    return instance.delete(`/todo-lists/${todolistId}/tasks/${taskId}`)
  },

  updateTask(toDoListId: string, taskId: string, model: UpdateTaskModelType){
      return instance.put<ResponseType<{}>>(`/todo-lists/${toDoListId}/tasks/${taskId}`, model)
  }

}