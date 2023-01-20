import { atom } from 'recoil'

export const WatchListRecoil = atom({
    key: 'WatchList',
    default: JSON.parse(localStorage.getItem(localStorage.getItem('email')))
})