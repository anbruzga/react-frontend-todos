import {Link, useParams} from "react-router-dom";

export function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}!</h1>
            <div className="WelcomeComponent">
                <Link to="/todos">Manage your todos</Link>
            </div>
        </div>
    )
}