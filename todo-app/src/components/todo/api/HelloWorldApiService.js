import axios from "axios";


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export function retrieveHelloWorld() {
    return apiClient.get('/hello-world')
}

// this is alternative to above
export const retrieveHelloWorldBean
    = () => apiClient.get('/hello-world-bean')


export const retrieveHelloWorldWithPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`);

