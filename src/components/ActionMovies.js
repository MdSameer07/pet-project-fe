import { Movie } from "./Movie"
import { useMoviesData } from "../hooks/useMoviesData"
import './Movies.css'

export const ActionMovies = () =>{
    const {isLoading,data,isError,error} = useMoviesData()
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return(
        <div className = 'movies-list'>
            {data.data[3]['action-Movies'].map((movie)=>{
                return (
                    <Movie data = {movie}/>
                )
            })}
        </div>
    )
}