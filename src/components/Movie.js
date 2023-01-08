import { NavLink } from "react-router-dom"
import { Image } from "./Image"
import { Description } from "./Description"
import './Movie.css'

export const Movie = (movie) =>{
    console.log(movie.data.name)
    return (
    <NavLink className = 'Single-Movie' to= {movie.data.name.replaceAll(' ','')}>
            <Image id = {movie.data.id} src = {movie.data.image} alt = {movie.data.description}/>
            <Description name = {movie.data.name} rating = {movie.data.rating}/>
        </NavLink>
    )
}