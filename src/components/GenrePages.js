import { useParams } from "react-router"
import { useMoviesData } from "../hooks/useMoviesData";
import { Movie } from "./Movie";
import './Movies.css'

export const GenrePages = () => {
    const category = useParams().category;
    const cat = category + '-Movies'
    const mapping = { 'thriller': 0, 'romance': 1, 'horror': 2, 'action': 3, 'comedy': 4 }
    const { isLoading, data, isError, error } = useMoviesData()
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div className='genre-movies-list'>
            {data.data[mapping[category]][cat].map((movie) => {
                return (
                    <Movie data={movie} />
                )
            })}
        </div>
    )
}