import { NavLink } from "react-router-dom"
import { Image1 } from "./Image1"
import { Description } from "./Description"
import './Movie.css'

export const Movie = (movie) => {
    return (
        <NavLink className='Single-Movie' to={movie.data.name.replaceAll(' ', '') + '-' + (movie.data.category) + '-' + (movie.data.id)}>
            <Image1 id={movie.data.id} src={movie.data.image} alt={movie.data.description} height='300px' width='100%' />
            <Description name={movie.data.name} rating={movie.data.rating} />
        </NavLink>
    )
}