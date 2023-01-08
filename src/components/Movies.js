import { useMoviesData } from "../hooks/useMoviesData"
import { Movie } from "./Movie"

export const Movies = () =>{
    const {isLoading,data,isError,error} = useMoviesData()
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <div className = 'movies-list'>
                {data.data[0]['Thriller-Movies'].map((movie)=>{
                    return (
                        <Movie data = {movie}/>
                    )
                })}
            </div>
            <div className = 'movies-list'>
                {data.data[1]['Romantic-Movies'].map((movie)=>{
                    return (
                        <Movie data = {movie}/>
                    )
                })}
            </div>
            <div className = 'movies-list'>
                {data.data[2]['Horror-Movies'].map((movie)=>{
                    return (
                        <Movie data = {movie}/>
                    )
                })}
            </div>
            <div className = 'movies-list'>
                {data.data[3]['Comedy-Movies'].map((movie)=>{
                    return (
                        <Movie data = {movie}/>
                    )
                })}
            </div>
            <div className = 'movies-list'>
                {data.data[4]['Action-Movies'].map((movie)=>{
                    return (
                        <Movie data = {movie}/>
                    )
                })}
            </div>
        </>
    )
}