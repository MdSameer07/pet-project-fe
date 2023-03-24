import { useMoviesData } from "../hooks/useMoviesData"
import { Movie } from "./Movie"

export const Movies = () => {
    // const {data}  = useMoviesData()
    // console.log(data)
    // const genres = {0:'thriller-Movies',1:'romance-Movies',2:'horror-Movies',3:'action-Movies',4:'comedy-Movies'}
    // const getAllMovies = () =>{
    //     const allmovies = []
    //     const length = data.data.length
    //     for(let i=0;i<length;i++){
    //         const len = data.data[i][genres[i]].length
    //         for(let j=0;j<len;j++){
    //             allmovies.push(data.data[i][genres[i]][j])
    //         }
    //     }
    //     return allmovies
    // }
    // const movies = useMemo(()=>getAllMovies(),data)

    const {data:movies,isLoading,error} = useMoviesData()
    if(isLoading){
        console.log("Is Loading movies data")
    } else if(error){
        console.log(error)
    }
    return (
            <div className = 'genre-movies-list'>
                {movies && movies.map((movie)=>{
                    return(
                        <Movie data={movie} />
                    )
                })}
            </div>
    )
}