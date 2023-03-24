import { useParams } from "react-router"
import { useMovieDataByCategory } from "../hooks/useMovieDataByCategory";
import { Movie } from "./Movie";
import './Movies.css'

export const GenrePages = () => {
    const category = useParams().category;
    const mapping = { 'thriller': 1, 'romance': 5, 'horror': 2, 'action': 3, 'comedy': 4 }
    const {isLoading,data,isError,error} = useMovieDataByCategory(mapping[category])
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    console.log(data)

    return (
        <div className = 'genre-movies-list'>
            {data.map((movie)=>{
                return (
                    <Movie data = {movie}/>
                )
            })}
        </div>
    )
    // const { isLoading, data, isError, error } = useMoviesData()
    // if (isLoading) {
    //     return <h2>Loading...</h2>
    // }
    // if (isError) {
    //     return <h2>{error.message}</h2>
    // }
    // return (
    //     <div className='genre-movies-list'>
    //         {data.data[mapping[category]][categoryMovies].map((movie) => {
    //             return (
    //                 <Movie data={movie} />
    //             )
    //         })}
    //     </div>
    // )
}