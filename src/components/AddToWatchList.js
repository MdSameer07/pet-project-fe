import { useRecoilState } from 'recoil'
import { WatchListRecoil as WatchList } from '../Recoil/WatchListRecoil'
import './AddToWatchList.css'


export const AddToWatchList = ({ props }) => {

    const [moviesInWatchList, setMoviesInWatchList] = useRecoilState(WatchList)
    const idx = moviesInWatchList.findIndex((item) => item.name === props.movie.name)
    const movieInWatchList = idx >= 0 ? moviesInWatchList[idx] : undefined
    let newWatchList = undefined

    const addToWatchList = () => {
        newWatchList = [...moviesInWatchList,
        {
            id: props.movie.id,
            name: props.movie.name,
            director: props.movie.director,
            image: props.movie.image,
            duration: props.movie.duration,
            ott: props.movie.ott,
            category: props.movie.category
        }]

        setMoviesInWatchList(newWatchList)
        localStorage.setItem(localStorage.getItem('email'), JSON.stringify(newWatchList))
    }

    const removeFromWatchList = () => {
        console.log(idx)
        newWatchList = [...moviesInWatchList.slice(0, idx), ...moviesInWatchList.slice(idx + 1)]
        setMoviesInWatchList(newWatchList)
        localStorage.setItem(localStorage.getItem('email'), JSON.stringify(newWatchList))
    }
    if (movieInWatchList) {
        return (
            <div className='WholE' onClick={removeFromWatchList}>
                <div className='WatchList'>WatchList</div>
                <div className='avatar'>✔</div>
            </div>
        )
    } else {
        return (
            <div className='WholE' onClick={addToWatchList}>
                <div className='WatchList'>WatchList</div>
                <div className='avatar'>+</div>
            </div>
        )
    }
} 