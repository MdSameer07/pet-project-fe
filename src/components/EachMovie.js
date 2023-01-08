import { useParams } from "react-router";
export const EachMovie = () =>{
    console.log('Movie Description')
    const name = useParams().name;
    console.log(name)
}