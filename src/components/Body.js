import './Body.css'
import { Options } from './Options'

export const Body = () =>{
    return(
        <>
        <div className = 'outer'>
            <p className = 'main'>
                Movie Suggestions By Mood And Feelings
            </p>
            <p className = 'side'>
                Dwell into any emotion.We got you covered with the very best movies recommendations for any mood or feeling.
            </p>
        </div>
        <Options/>
        </>
    )
}