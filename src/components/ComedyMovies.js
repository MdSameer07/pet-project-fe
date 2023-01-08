import { Movie } from "./Movie"
import { useMoviesData } from "../hooks/useMoviesData"
import './Movies.css'

export const ComedyMovies = () =>{
    const {isLoading,data,isError,error} = useMoviesData()
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    // console.log(data.data[0]['Thriller-Movies'][0].name)
    return(
        <div className = 'movies-list'>
            {data.data[3]['Comedy-Movies'].map((movie)=>{
                return (
                    <Movie data = {movie}/>
                )
            })}
        </div>
    )
}