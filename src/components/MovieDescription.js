// import { Image } from "./Image"
import { Image1 } from './Image1'
import './MovieDescription.css'
import React from 'react';
import { Descriptions } from 'antd';

export const MovieDescription = (movie) =>{
    // return (
    //     <div className = 'Body'>
    //         <div className = 'Image'>
    //             <Image id = {movie.movie.id} src = {movie.movie.image} alt = {movie.movie.description} width = '70%'/>
    //         </div>
    //         <div className = 'basic-details'>
    //             <div className = 'name'>
    //                 {movie.movie.name}
    //             </div>
    //             <div className = 'rating'>
    //                 {movie.movie.rating}
    //             </div>
    //         </div>
    //         <div className = 'Description'>
    //             <div className = 'Summary'>
    //                 {movie.movie.description}
    //             </div>
    //         </div>
    //     </div>
    // )
    console.log('Description')
    return (
        <>
            <div className = 'image'>
                <Image1 id = {movie.movie.id} src = {movie.movie.image} alt = {movie.movie.description} width = '69%'/>
            </div>
            <div className = 'Description'>
                <div className = 'Movie-Description'>
                    <Descriptions
                        title="Movie Description"
                        bordered
                        column={{xxl: 4,xl: 3,lg: 3,md: 3,sm: 2,xs: 1,}}>
                        <Descriptions.Item label="Name"><div className = 'values'>{movie.movie.name}</div></Descriptions.Item>
                        <Descriptions.Item label="Director"><div className = 'values'>{movie.movie.director}</div></Descriptions.Item>
                        <Descriptions.Item label="ReleaseDate"><div className = 'values'>{movie.movie.releasedate}</div></Descriptions.Item>
                        <Descriptions.Item label="Duration"><div className = 'values'>{movie.movie.duration}</div></Descriptions.Item>
                        <Descriptions.Item label="Rating"><div className = 'values'>{movie.movie.rating}</div></Descriptions.Item>
                        <Descriptions.Item label="Genre"><div className = 'values'>{movie.movie.category}</div></Descriptions.Item>
                        <Descriptions.Item label="Description"><div className = 'values'>{movie.movie.description}</div></Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
            <div className = 'button'>
                <div className = 'wl'>Add To WatchList</div>
            </div>
        </>
    )
}