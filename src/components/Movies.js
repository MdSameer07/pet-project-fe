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
    return (
        <>
            <div className='movies-list'>
                {data.data[0]['thriller-Movies'].map((movie) => {
                    return (
                        <Movie data={movie} />
                    )
                })}
            </div>
            <div className='movies-list'>
                {data.data[1]['romance-Movies'].map((movie) => {
                    return (
                        <Movie data={movie} />
                    )
                })}
            </div>
            <div className='movies-list'>
                {data.data[2]['horror-Movies'].map((movie) => {
                    return (
                        <Movie data={movie} />
                    )
                })}
            </div>
            <div className='movies-list'>
                {data.data[4]['comedy-Movies'].map((movie) => {
                    return (
                        <Movie data={movie} />
                    )
                })}
            </div>
            <div className='movies-list'>
                {data.data[3]['action-Movies'].map((movie) => {
                    return (
                        <Movie data={movie} />
                    )
                })}
            </div>
        </>
    )
}