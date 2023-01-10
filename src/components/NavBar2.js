import './NavBar2.css'
import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'
import { WatchList } from './WatchList'

export const NavBar2 = () =>{

    const finalstylelink = ({isActive}) =>{
        return {
            textDecoration:'none',
            color:'black'
        }
    }

    return(
        <nav className = 'Nav'>
                <div className = 'Initial'>
                    <NavLink className = 'Inner' to = '/'>
                        <img src = 'https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt = 'Scope'></img>
                    </NavLink>
                </div>
                <div className = 'Middle1'>
                    <NavLink className = 'movies' to = '/movies'>MOVIES</NavLink>
                    <SearchBar/>
                </div>
                <div className = 'Final'>
                    <NavLink style = {finalstylelink} to = '/insights'>INSIGHTS</NavLink>
                    <WatchList/>
                    <NavLink style = {finalstylelink}>PROFILE</NavLink>
                </div>
        </nav>
    )
}