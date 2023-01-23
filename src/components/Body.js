import './Body.css'
import { BodyFooter } from './BodyFooter'

export const Body = () => {
    return (
        <>
            <div className='whole-body'>
                <p className='body-heading'>
                    Movie Suggestions By Mood And Feelings
                </p>
                <p className='body-side-heading'>
                    Dwell into any emotion.We got you covered with the very best movies recommendations for any mood or feeling.
                </p>
            </div>
            <BodyFooter />
        </>
    )
}