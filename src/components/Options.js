import './Options.css'
import { NavLink } from 'react-router-dom'

export const Options = () =>{
    return (
        <div className = 'Body2'>
            <h3 className = 'title'>Genres</h3>
            <div className = 'filters'>
                <NavLink className = 'options' to = '/thriller'>THRILLER</NavLink>
                <NavLink className = 'options' to = '/horror'>HORROR</NavLink>
                <NavLink className = 'options' to = '/action'>ACTION</NavLink>
                <NavLink className = 'options' to = '/comedy'>COMEDY</NavLink>
                <NavLink className = 'options' to = '/romance'>ROMANCE</NavLink>
            </div>
        </div>
    )
}