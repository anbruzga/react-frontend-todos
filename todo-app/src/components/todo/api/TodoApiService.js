import axios from "axios";


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retrieveAllTodosApi
    = (username) => apiClient.get(`/users/${username}/todos`);

export const retrieveTodoApi
    = (id) => apiClient.get(`/todo/${id}`);

export const deleteTodoApi
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const updateTodoApi
    = (username, id) => apiClient.put(`/users/${username}/todos/${id}`);
