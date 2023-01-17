import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { WatchList } from './WatchList'
import { useContext, useEffect, useReducer } from 'react'
import { AuthContext } from './AuthProvider'

export const NavBar = () => {
    const tmp = localStorage.getItem('isLoggedIn')
    const { logout } = useContext(AuthContext)
    const { user } = useContext(AuthContext)

    const finalstylelink = ({ isActive }) => {
        return {
            textDecoration: 'none',
            color: 'black'
        }
    }

    return (
        <nav className='NAV'>
            <div className='INITIAL'>
                {tmp && <NavLink className='Inner' to='/home'>
                    <img src='https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt='Scope'></img>
                </NavLink>}
                {!tmp && <NavLink className='Inner' to='/'>
                    <img src='https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt='Scope'></img>
                </NavLink>}
            </div>
            <div className='MIDDLE1'>
                {tmp && <NavLink className='MOVIES' to='/movies'>MOVIES</NavLink>}
                {!tmp && <div className='MOVIES'>MOVIES</div>}
                <SearchBar />
            </div>
            {tmp && <div className='FINAL'>
                <NavLink className='insights' style={finalstylelink} to='/insights'>INSIGHTS</NavLink>
                <WatchList />
                <NavLink className='profile' style={finalstylelink} to='/profile'>{user.displayName}</NavLink>
                <button className='lobutton' onClick={() => { logout() }}>LOG OUT</button>
            </div>}
            {!tmp && <div className='Final'>
                <NavLink className='login' to='/login'>LOGIN</NavLink>
                <NavLink className='register' to='/register'>REGISTER</NavLink>
            </div>}
        </nav>
    )
}