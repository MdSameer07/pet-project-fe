import './NavBar2.css'
import { NavLink } from 'react-router-dom'
import { SearchBar } from './SearchBar'

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
                    <img src = 'https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt = 'Scope'></img>
                </div>
                <div className = 'Middle1'>
                    {/* <div className = 'movies'>MOVIES</div> */}
                    <NavLink className = 'movies' to = '/movies'>MOVIES</NavLink>
                    <SearchBar/>
                </div>
                <div className = 'Final'>
                    <NavLink style = {finalstylelink} to = '/insights'>INSIGHTS</NavLink>
                    <NavLink style = {finalstylelink} to = '/login'>WATCHLIST</NavLink>
                    <NavLink style = {finalstylelink} to = '/register'>PROFILE</NavLink>
                </div>
        </nav>
    )
}