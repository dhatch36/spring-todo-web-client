import axios from 'axios';
import Todo from "./Todo";

const base_url = 'https://dontah06.herokuapp.com/api/todos';

export const getTodos = async () => {
    try{
        let response = await axios.get(base_url);
        let{data}= await axios.get(base_url);
        console.log("Response", response);
        console.log("data", response.data);
        console.log("data", data);
        return response.data;
    }
    catch(error) {
            return error;
    }

};

export const getTodoById = (id: number) => {

}

export const postTodoById = (todo: Todo) => {

}

export const updateTodoById = (todo: Todo) => {

}

export const deleteTodoById = (id: number) => {

}