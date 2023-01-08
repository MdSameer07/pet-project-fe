import { Movie } from "./Movie"
import { useMoviesData } from "../hooks/useMoviesData"
import './Movies.css'

export const ThrillerMovies = () =>{
    const {isLoading,data,isError,error} = useMoviesData()
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    console.log(data.data[0]["Thriller-Movies"][0])
    return(
            <div className = 'movies-list'>
                {data.data[0]['Thriller-Movies'].map((movie)=>{
                    return (
                        <Movie data = {movie}/>
                    )
                })}
            </div>
    )
}