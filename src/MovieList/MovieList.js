import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import  './MovieList.css'

const MovieList=({movieList})=> {

    return (
        <div className='movie-List'>
            {movieList.map((movie)=>
             <MovieCard  film = {movie} />)}
           
           
        </div>
    )
}



export default MovieList

