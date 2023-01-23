import './BodyFooter.css'
import { NavLink } from 'react-router-dom'

export const BodyFooter = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    return (
        <div className='body-footer'>
            {isLoggedIn && <>
                <h3 className='body-footer-title'>Genres</h3>
                <div className='filters'>
                    <NavLink className='options' to='/thriller'>THRILLER</NavLink>
                    <NavLink className='options' to='/horror'>HORROR</NavLink>
                    <NavLink className='options' to='/action'>ACTION</NavLink>
                    <NavLink className='options' to='/comedy'>COMEDY</NavLink>
                    <NavLink className='options' to='/romance'>ROMANCE</NavLink>
                </div>
            </>}
            {!isLoggedIn && <>
                <p className='body-footer-top'>Find The Best Thriller,Horror,Comedy,Action,Romance Movies To Watch.</p>
                <p className='body-footer-bottom'>Login or Sign Up Now To Start Your Journey.</p>
            </>}
        </div>
    )
    // if (isLoggedIn) {
    //     return (
    //         <div className='body-footer'>
    //             <h3 className='body-footer-title'>Genres</h3>
    //             <div className='filters'>
    //                 <NavLink className='options' to='/thriller'>THRILLER</NavLink>
    //                 <NavLink className='options' to='/horror'>HORROR</NavLink>
    //                 <NavLink className='options' to='/action'>ACTION</NavLink>
    //                 <NavLink className='options' to='/comedy'>COMEDY</NavLink>
    //                 <NavLink className='options' to='/romance'>ROMANCE</NavLink>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='body-footer'>
    //             <p className='body-footer-top'>Find The Best Thriller,Horror,Comedy,Action,Romance Movies To Watch.</p>
    //             <p className='body-footer-bottom'>Login or Sign Up Now To Start Your Journey.</p>
    //         </div>
    //     )
    // }
}