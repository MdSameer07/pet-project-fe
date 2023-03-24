import { NavLink } from "react-router-dom"
import { ImageComponent } from "./ImageComponent"
import { Description } from "./Description"
import './Movie.css'

export const Movie = ({data,onDelete}) => {
    console.log(data.id)
    const userLoggedIn = localStorage.getItem('userLoggedIn')
    const adminLoggedIn = localStorage.getItem('adminLoggedIn')
    const handleDelete = () =>{
        console.log("Reached mid Point")
        onDelete(data.id)
    }
    return (
        <>
        {userLoggedIn && <NavLink className='single-movie' to={data.name.replaceAll(' ', '') + '-' + (data.id)}>
            <ImageComponent id={data.id} src={data.image} alt={data.description} height='300px' width='100%' />
            <Description name={data.name} rating={data.rating} />
        </NavLink>}
        {adminLoggedIn && <div className = 'single-movie'>
            <ImageComponent id={data.id} src={data.image} alt={data.description} height='300px' width='100%'/>
            <Description id = {data.id} name = {data.name} rating={data.rating} onDelete={handleDelete}/>
            </div>}
        </>
    )
}