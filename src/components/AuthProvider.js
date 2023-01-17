import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { auth } from "../Firebase"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    }, [])
    const logout = () => {
        auth.signOut().then(() => {
            setUser(null)
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('email')
            navigate('/')
        })
    }
    return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>

}