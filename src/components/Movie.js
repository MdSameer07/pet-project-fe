import { NavLink } from "react-router-dom"
import { Image1 } from "./Image1"
import { Description } from "./Description"
import './Movie.css'
// import React from 'react';
// import { Card } from 'antd';
// const { Meta } = Card;

export const Movie = (movie) =>{
    return (
    <NavLink className = 'Single-Movie' to= {movie.data.name.replaceAll(' ','')+'-'+(movie.data.category)+'-'+(movie.data.id)}>
            <Image1 id = {movie.data.id} src = {movie.data.image} alt = {movie.data.description} height = '300px' width = '100%'/>
            <Description name = {movie.data.name} rating = {movie.data.rating}/>
            {/* <Card
                hoverable
                style={{
                width: 450,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card> */}
        </NavLink>
    )
}