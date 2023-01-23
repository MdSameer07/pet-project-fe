import { useParams } from "react-router";
import { useMovieData } from "../hooks/useMovieData";
import { MovieDescription } from "./MovieDescription";

export const EachMovieDescription = () => {
    const mapping = { 'thriller': 0, 'romance': 1, 'horror': 2, 'action': 3, 'comedy': 4 }
    const movieId = useParams().id;
    const arr = movieId.split('-')
    const id = arr[arr.length - 1]
    const urlCategory = useParams().category;
    const typeOfMovie = urlCategory === 'movies' ? arr[arr.length - 2] + '-Movies' : urlCategory + '-Movies'
    const category = urlCategory !== 'movies' ? urlCategory : arr[arr.length - 2]
    const data = useMovieData(mapping[category],typeOfMovie,id-1)
    return (
        <MovieDescription movie={data}/>
    )
}