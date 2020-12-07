import React from 'react'
import './MovieCard.css'
import StarRating from './StarRating/StarRating'

const MovieCard=({film})=> {

    return (
        <div className='movie-card'>
            <div>
                <StarRating rate={film.rating} />
            </div>
            <img src={film.image}
             alt="{film.name}"/>
            <h2>{film.name}</h2>
            <p>{film.date}</p>
            

            
        </div>
    )
}

export default MovieCard
