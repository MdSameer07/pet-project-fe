import { NavLink } from "react-router-dom"
import { ImageComponent } from "./ImageComponent"
import { Description } from "./Description"
import './Movie.css'

export const Movie = (movie) => {
    return (
        <NavLink className='single-movie' to={movie.data.name.replaceAll(' ', '') + '-' + (movie.data.category) + '-' + (movie.data.id)}>
            <ImageComponent id={movie.data.id} src={movie.data.image} alt={movie.data.description} height='300px' width='100%' />
            <Description name={movie.data.name} rating={movie.data.rating} />
        </NavLink>
    )
}