import {createContext, useContext, useState} from "react";

export const AuthContext =  createContext()

export const useAuth = () =>  useContext(AuthContext)


export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)


    function login(username, password) {
        if (username === 'Tony' && password === '1234') {
            setAuthenticated(true)
            setUsername('Tony')
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false;
        }

    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, setUsername}}>
            {children}
        </AuthContext.Provider>

    )
}

