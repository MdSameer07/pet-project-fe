import { useMoviesData } from "../hooks/useMoviesData"
import { Movie } from "./Movie"

export const Movies = () => {
    const { isLoading, data, isError, error } = useMoviesData()
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    const genres = {0:'thriller-Movies',1:'romance-Movies',2:'horror-Movies',3:'action-Movies',4:'comedy-Movies'}
    const movies = []
    const length = data.data.length
    for(let i=0;i<length;i++){
        const len = data.data[i][genres[i]].length
        for(let j=0;j<len;j++){
            movies.push(data.data[i][genres[i]][j])
        }
    }
    return (
            <div className = 'genre-movies-list'>
                {movies.map((movie)=>{
                    return(
                        <Movie data={movie} />
                    )
                })}
            </div>
    )
}