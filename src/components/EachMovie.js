import { useParams } from "react-router";
import { useMoviesData } from "../hooks/useMoviesData";
import { MovieDescription } from "./MovieDescription";
export const EachMovie = () => {

    const mapping = { 'thriller': 0, 'romance': 1, 'horror': 2, 'action': 3, 'comedy': 4 }
    const thing = useParams().id;
    const arr = thing.split('-')
    const id = arr[arr.length - 1]
    const tmp = useParams().category;
    const cat = tmp === 'movies' ? arr[arr.length - 2] + '-Movies' : tmp + '-Movies'
    const category = tmp !== 'movies' ? tmp : arr[arr.length - 2]
    const { isLoading, data, isError, error } = useMoviesData()
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <MovieDescription movie={data.data[mapping[category]][cat][id - 1]} />
    )


}