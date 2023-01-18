import { Image1 } from './Image1'
import './MovieDescription.css'
import React from 'react';
import { Descriptions } from 'antd';
import { AddToWatchList } from './AddToWatchList';

export const MovieDescription = (movie) => {
    return (
        <>
            <div className='descp-image'>
                <Image1 id={movie.movie.id} src={movie.movie.image} alt={movie.movie.description} width='69%' height='500px' />
            </div>
            <div className='whole-description'>
                <div className='movie-description'>
                    <Descriptions
                        title="Movie Description :"
                        bordered
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1, }}>
                        <Descriptions.Item label={<strong>Name :</strong>}><div className='values'>{movie.movie.name}</div></Descriptions.Item>
                        <Descriptions.Item label={<strong>Director :</strong>}><div className='values'>{movie.movie.director}</div></Descriptions.Item>
                        <Descriptions.Item label={<strong>ReleaseDate :</strong>}><div className='values'>{movie.movie.releasedate}</div></Descriptions.Item>
                        <Descriptions.Item label={<strong>Duration :</strong>}><div className='values'>{movie.movie.duration}</div></Descriptions.Item>
                        <Descriptions.Item label={<strong>Rating :</strong>}><div className='values'>{movie.movie.rating}</div></Descriptions.Item>
                        <Descriptions.Item label={<strong>Genre :</strong>}><div className='values'>{movie.movie.category}</div></Descriptions.Item>
                        <Descriptions.Item label={<strong>Description:</strong>}><div className='values'>{movie.movie.description}</div></Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
            <div className='atwl-button'>
                <AddToWatchList props={movie} />
            </div>

        </>
    )
}