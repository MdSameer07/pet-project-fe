import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { WatchList } from './WatchList'
import { auth } from '../Firebase'
import { useRecoilState } from 'recoil'
import { UserDetails } from '../Recoil/UserDetails'
import { useEffect } from 'react'

export const NavBar = () => {
    const tmp = localStorage.getItem('isLoggedIn')
    const [user,setUser] = useRecoilState(UserDetails)
    const navigate = useNavigate()

    console.log(user)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user.displayName)
        })
    })
    
    const logout = () =>{
        auth.signOut().then(() => {
            setUser(null)
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('email')
            navigate('/')
        })
    }

    const finalstylelink = ({ isActive }) => {
        return {
            textDecoration: 'none',
            color: 'black'
        }
    }

    return (
        <nav className='nav-total'>
            <div className='nav-logo'>
                {tmp && <NavLink className='logo' to='/home'>
                    <img src='https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt='Scope'></img>
                </NavLink>}
                {!tmp && <NavLink className='logo' to='/'>
                    <img src='https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt='Scope'></img>
                </NavLink>}
            </div>
            <div className='nav-movies'>
                {tmp && <NavLink className='movies' to='/movies'>MOVIES</NavLink>}
                {!tmp && <div className='movies'>MOVIES</div>}
                <SearchBar />
            </div>
            {tmp && <div className='nav-end-after-login'>
                <NavLink className='insights' style={finalstylelink} to='/insights'>INSIGHTS</NavLink>
                <WatchList />
                <NavLink className='profile' style={finalstylelink} to='/profile'>PROFILE</NavLink>
                <button className='logout-button' onClick={() => { logout() }}>LOG OUT</button>
            </div>}
            {!tmp && <div className='nav-end-before-login'>
                <NavLink className='login' to='/login'>LOGIN</NavLink>
                <NavLink className='register' to='/register'>REGISTER</NavLink>
            </div>}
        </nav>
    )
}