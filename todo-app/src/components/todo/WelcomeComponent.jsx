import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import {
    retrieveHelloWorld,
    retrieveHelloWorldBean,
    retrieveHelloWorldWithPathVariable
} from "./api/HelloWorldApiService";

export function WelcomeComponent() {
    const {username} = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        console.log("called")
        retrieveHelloWorld()
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally( () => console.log('cleanup'))

    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }

    function callHelloWorldRestApiBean() {
        console.log("called")

       retrieveHelloWorldBean()
            .then((response) => successfulResponseBean(response))
            .catch((error) => errorResponseBean(error))
            .finally( () => console.log('cleanup'))

    }

    function successfulResponseBean(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponseBean(error) {
        console.log(error)
    }


    function callHelloWorldRestApiBeanWithVariable() {
        console.log("called")

        retrieveHelloWorldWithPathVariable('Tony')
            .then((response) => successfulResponseBean(response))
            .catch((error) => errorResponseBean(error))
            .finally( () => console.log('cleanup'))

    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}!</h1>
            <div className="WelcomeComponent">
                <Link to="/todos">Manage your todos</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>

                <button className="btn btn-success m-5" onClick={callHelloWorldRestApiBean}>
                    Call Hello World Bean
                </button>

                <button className="btn btn-success m-5" onClick={callHelloWorldRestApiBeanWithVariable}>
                    Call Hello World Bean
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}