import './TodoApp.css'
import {useState} from "react";

export default function TodoApp() {
    return (
        <div className="TodoApp">
            Todo Management Application
            <LoginComponent/>
            {/*<WelcomeComponent/>*/}
        </div>
    )

}



function LoginComponent() {

    const defaultUsername = "Tony"

    const [username, setUsername] = useState(defaultUsername)
    const [password, setPassword] = useState("")

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    // Walk-around for Dom editing itself and Virtual Dom editing Dom - concurrent modification (sort of)
    function usernameChanged(event) {
        setUsername(event.target.value)
    }

    function passwordChanged(event) {
        setPassword(event.target.value)
    }

    function submitAction() {
        if (username === 'Tony' && password === '1234') {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="Login">

            {showSuccessMessage && <div className="SuccessMessage" hidden={!showSuccessMessage}>Authenticated Successfully</div>}
            <div className="ErrorMessage" hidden={!showErrorMessage} >Authentication Failed. Please check the credentials!</div>


            <form className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={usernameChanged} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={passwordChanged} />
                </div>
                <div>
                    <button type="button" name="login" onClick={submitAction}>Login</button>
                </div>
            </form>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="WelcomeComponent">
            Welcome Component
        </div>
    )
}