import { useQuery } from 'react-query'
import axios from 'axios'

const fetchMovieData = () => {
    return axios.get('http://localhost:4000/Movies')
}

export const useMovieData = (idx1,typeOfMovie,idx2) => {
    const { isLoading,data } =  useQuery('Each-Movie', fetchMovieData)
    if(isLoading){
        return <h2>Loading</h2>
    }
    return data.data[idx1][typeOfMovie][idx2]
}