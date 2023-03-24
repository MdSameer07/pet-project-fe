import './BodyFooter.css'
import { NavLink } from 'react-router-dom'
import { FeedBack } from './FeedBack'

export const BodyFooter = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const userLoggedIn = localStorage.getItem('userLoggedIn')
    const adminLoggedIn = localStorage.getItem('adminLoggedIn')
    return (
        <div className='body-footer'>
            {isLoggedIn && userLoggedIn && <>
                <h3 className='body-footer-title'>Genres</h3>
                <div className='filters'>
                    <NavLink className='options' to='/thriller'>THRILLER</NavLink>
                    <NavLink className='options' to='/horror'>HORROR</NavLink>
                    <NavLink className='options' to='/action'>ACTION</NavLink>
                    <NavLink className='options' to='/comedy'>COMEDY</NavLink>
                    <NavLink className='options' to='/romance'>ROMANCE</NavLink>
                </div>
                <div className = "feedback-section">
                    <h3 className="body-feedback"> Give FeedBack</h3>
                    <FeedBack/>
                </div>
            </>
            }
            {isLoggedIn && adminLoggedIn && <>
            <p className = "body-footer-top">Add Or Delete Movies Now!!</p>
            <p className = "body-footer-bottom">Check User FeedBacks As Well</p>
            </>}
            {!isLoggedIn && <>
                <p className='body-footer-top'>Find The Best Thriller,Horror,Comedy,Action,Romance Movies To Watch.</p>
                <p className='body-footer-bottom'>Login or Sign Up Now To Start Your Journey.</p>
            </>}
        </div>
    )
}