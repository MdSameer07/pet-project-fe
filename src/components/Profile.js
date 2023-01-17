import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import './Profile.css'

export const Profile = () => {
    const { user } = useContext(AuthContext)
    const email = localStorage.getItem('email')
    return (
        <div className='Profile'>
            <div className='Name'>Name : {user.displayName}</div>
            <div className='Email'>Email : {email}</div>
        </div>
    )
}