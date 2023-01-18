import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import './Profile.css'

export const Profile = () => {
    const { user } = useContext(AuthContext)
    const email = localStorage.getItem('email')
    return (
        <div className='profile-page'>
            <div className='name'>Name : {user.displayName}</div>
            <div className='email'>Email : {email}</div>
        </div>
    )
}