import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./security/AuthContext";

export function LoginComponent() {

    const defaultUsername = "Tony"

    const [username, setUsername] = useState(defaultUsername)
    const [password, setPassword] = useState("")

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    // Walk-around for Dom editing itself and Virtual Dom editing Dom - concurrent modification (sort of)
    function usernameChanged(event) {
        setUsername(event.target.value)
    }

    function passwordChanged(event) {
        setPassword(event.target.value)
    }

    function submitAction() {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to Login</h1>

            {showErrorMessage && <div className="ErrorMessage" >Authentication Failed. Please check the
                credentials!
            </div> }


            <form className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={usernameChanged}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={passwordChanged}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={submitAction}>Login</button>
                </div>
            </form>
        </div>
    )
}