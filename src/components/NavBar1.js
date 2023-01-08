import './NavBar.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () =>{

    const finalstylelink = ({isActive}) =>{
        return {
            textDecoration:'none',
            color:'red',
        }
    }

    return(
        <nav className = 'Nav'>
                <div className = 'Initial'>
                    <img src = 'https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg' alt = 'Scope'></img>
                </div>
                <div className = 'Middle1'>
                    <div>MOVIES</div>
                    <div>SHOWS</div>
                </div>
                <div className = 'Final'>
                    <NavLink style = {finalstylelink} to = '/login'>LOGIN</NavLink>
                    <NavLink style = {finalstylelink} to = '/register'>REGISTER</NavLink>
                </div>
        </nav>
    )
}