import { useRecoilState } from 'recoil'
import { WatchListRecoil } from '../Recoil/WatchListRecoil'
import './WatchListItem.css'

export const WatchListItem = ({props}) =>{
    console.log(props.ott)
    const newTab = url =>{
        window.open(url)
    }
    const [WatchListItems,setWatchListItems] = useRecoilState(WatchListRecoil)
    let newWatchList = undefined;
    const removeMovie = () =>{
        console.log('reached')
        const idx = WatchListItems.findIndex((item)=>item.name===props.name)
        newWatchList = [...WatchListItems.slice(0,idx),...WatchListItems.slice(idx+1)]
        setWatchListItems(newWatchList)
    }
    return(
        <div className = 'Movie'>
            <div className = 'Image'>
                <img src = {props.image} alt = 'movie'/>
            </div>
            <div className = 'description'>
                <p>{props.name}</p>
                <p>{props.duration}</p>
            </div>
            <div className = 'linkremove'>
                <div className = 'ott' onClick = {()=>newTab(props.ott)}>Watch Now</div>
                <p className = 'remove' onClick = {removeMovie}>Remove</p>
            </div>
        </div>
    )
}