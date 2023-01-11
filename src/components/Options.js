import './Options.css'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { IsLoggedIn } from '../Recoil/IsLoggedIn'

export const Options = () =>{
    const isLoggedIn = useRecoilValue(IsLoggedIn)
    if(isLoggedIn){
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
    }else{
        return (
            <div className = 'Body2'>
                <p className = 'top'>Find The Best Thriller,Horror,Comedy,Action,Romance Movies To Watch.</p>
                <p className = 'bottom'>Login or Sign Up Now To Start Your Journey.</p>
            </div>
        )
    }
}