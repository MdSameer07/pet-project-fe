import {useQuery} from 'react-query'
import axios from 'axios'

const fetchMoviesData = () =>{
    return axios.get('http://localhost:4000/Movies')
}

export const useMoviesData = () =>{
    return useQuery('Movies',fetchMoviesData)
}