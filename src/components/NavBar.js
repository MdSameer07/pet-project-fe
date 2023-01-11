import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { WatchList } from './WatchList'
import { useRecoilValue } from 'recoil'
import { IsLoggedIn } from '../Recoil/IsLoggedIn'

export const NavBar = () =>{

    const isLoggedIn = useRecoilValue(IsLoggedIn)

    const finalstylelink = ({isActive}) =>{
        return {
            textDecoration:'none',
            color:'black'
        }
    }

    return(
        <nav className = 'NAV'>
                <div className = 'INITIAL'>
                    {isLoggedIn && <NavLink className = 'Inner' to = '/home'>
                        <img src = 'https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt = 'Scope'></img>
                    </NavLink>}
                    {!isLoggedIn && <NavLink className = 'Inner' to = '/'>
                        <img src = 'https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt = 'Scope'></img>
                    </NavLink>}
                </div>
                <div className = 'MIDDLE1'>
                    {isLoggedIn && <NavLink className = 'MOVIES' to = '/movies'>MOVIES</NavLink>}
                    {!isLoggedIn && <div className = 'MOVIES'>MOVIES</div>}
                    <SearchBar/>
                </div>
                {isLoggedIn && <div className = 'FINAL'>
                    <NavLink style = {finalstylelink} to = '/insights'>INSIGHTS</NavLink>
                    <WatchList/>
                    <NavLink style = {finalstylelink}>PROFILE</NavLink>
                </div>}
                {!isLoggedIn && <div className = 'Final'>
                    <NavLink className = 'login' to = '/login'>LOGIN</NavLink>
                    <NavLink className = 'register' to = '/register'>REGISTER</NavLink>
                </div>}
        </nav>
    )
}