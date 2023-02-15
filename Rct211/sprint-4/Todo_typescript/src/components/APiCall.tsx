import axios, { AxiosResponse } from "axios";
import { TodoType } from "./Todo";

export const getData = async () => {
  let response: AxiosResponse<TodoType[]> = await axios.get(
    `http://localhost:8080/todos`
  );
  return response.data;
};


export const postTodos = async (todoItem: TodoType) => {
  let response: AxiosResponse<TodoType[]> = await axios.post(
    `http://localhost:8080/todos`,
    todoItem
  );
  return response.data;
};

export const deleteTodos=async(id: number)=>{
    let response: AxiosResponse<TodoType[]> = 
    await axios.delete(
        `http://localhost:8080/todos/${id}`,  )
return response.data;
}

export const editTodos=async(props: TodoType | undefined) =>{
    let res: AxiosResponse<TodoType[]> = await axios.patch(`http://localhost:8080/todos/${props?.id}`, props)
    return res.data
}

