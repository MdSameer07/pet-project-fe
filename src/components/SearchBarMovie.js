import "./SearchBarMovie.css"

export const SearchBarMovie = ({movie}) => {

    return(
        <div className='movie'>
            <div className='movie-image'>
                <img src = {movie.image} alt = {movie.name}/>
            </div>
            <div className='movie-description'>
                <h3>{movie.name}</h3>
                <p>{movie.rating}</p>
            </div>
        </div>
    )
}