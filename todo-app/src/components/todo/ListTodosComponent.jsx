import {useEffect, useState} from "react";
import {deleteTodoApi, retrieveAllTodosApi, updateTodoApi} from "./api/TodoApiService";
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";


export function ListTodosComponent() {
    
    const authContext = useAuth()
    const userName = authContext.username

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState("")
    useEffect(() => refreshTodos(), [])

    function refreshTodos() {

        retrieveAllTodosApi(userName)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))

    }

    function deleteTodo(todo) {
        console.log("Delete Todo Is Called: " + todo.id + userName)
        deleteTodoApi(userName, todo.id)
            .then(() => {
                    console.log('ID:', todo.id);
                    setMessage(`Delete of todo "${todo.description}" successful`)
                    refreshTodos()
                }
            ).catch(error => console.log(error))
    }

    function navigateToUpdateTodo(todo) {
        navigate(`/todo/${todo.id}`)
    }

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div> }
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Done?</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => navigateToUpdateTodo(todo)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}