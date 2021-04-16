import React, { useEffect, useRef, useState } from 'react'
import Movie from '../models/movies';
import useApi from '../services/useApi'

export default function ListView() {

    const apiService = useApi();
    const [movies, setMovies] = useState([Movie]);

    useEffect(async () => {
        const newMovies = await apiService.getMovies(1);
        setMovies(newMovies);
    }, [])


    return (
        <div >
            <h2>Listado de peliculas</h2>
            <div className="listContainer">
                {
                    movies.map(movie => {
                        return <div className="listItem" key={movie.id}>
                            <h6>{movie.title}</h6>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
                            <p>{movie.release_date}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
