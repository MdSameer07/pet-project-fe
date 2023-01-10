import { useState } from "react"
import { useRecoilValue } from "recoil"
import { WatchListLength } from "../Recoil/WatchListLength"
import { WatchListRecoil } from "../Recoil/WatchListRecoil"
import { WatchListItem } from "./WatchListItem"
import './WatchList.css'

export const WatchList = () =>{
    const watchListItems = useRecoilValue(WatchListRecoil)
    const watchListLength = useRecoilValue(WatchListLength)
    const [displayWatchList,setDisplayWatchList] = useState(false)

    const showWatchList = () =>{
        setDisplayWatchList((prev)=>!prev)
    }

    return(
        <div className = 'WATCHLIST'>
            <div className = 'watchlist-button' onClick = {showWatchList}>
                <span className = 'watchlist-1'>WatchList</span>
                <span>{watchListLength}</span>
            </div>
            {displayWatchList && watchListLength>0 && (
                <div className = 'watchlist-2'>
                    {watchListItems.map((item) => (
                        <WatchListItem props = {item}/>
                    ))}
                </div>
            )}
        </div>
    )
}