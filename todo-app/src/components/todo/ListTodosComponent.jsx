export function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth() + 2, today.getDay() + 1)

    const todos = [
        {id: 1, description: 'Learn React', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn Gradle', done: false, targetDate: targetDate},
        {id: 4, description: 'Learn Docker', done: false, targetDate: targetDate},
    ]

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
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