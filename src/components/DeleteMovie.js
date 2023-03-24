import { useEffect, useState } from "react"
import { useMoviesData } from "../hooks/useMoviesData"
import { Movie } from "./Movie"

export const DeleteMovie = () =>{
    const [response,setResponse] = useState([])
    useEffect(()=>{
        fetchMovies()
    },[])
    useEffect(()=>{
        console.log(response)
    },[response])
    const fetchMovies = async() =>{
        const response = await fetch('/user/get-all-moviess',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            }
        })
        if (!response.ok){
            return
        }
        const data = await response.json()
        const movies = data.movie
        setResponse(movies)
    }

    const handleDelete = (movieId) =>{
        console.log("Reached highest Point")
        setResponse(response.filter((movie)=>movie.id!=movieId))
        console.log(response)
    }

    return (
        <div className = "genre-movies-list">
            {response & response.map((movie)=>{
                return (
                    <Movie data = {movie} onDelete={handleDelete}/>
                )
            })}
        </div>
    )
}