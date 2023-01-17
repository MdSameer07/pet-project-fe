import { selector } from 'recoil'
import { WatchListRecoil } from './WatchListRecoil'

export const WatchListLength = selector({
    key: 'WatchList-Length',
    get: ({ get }) => {
        const watchListItems = get(WatchListRecoil)
        return watchListItems.length
    }
})