import React, { useEffect, useRef, useState } from 'react'
import Movie from '../models/movies';
import useApi from '../services/useApi'

export default function ListView() {

    const apiService = useApi();
    const superContainerRef = useRef();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    /*useEffect(async () => {
        const newMovies = await apiService.getMovies(1);
        setMovies(newMovies);
    }, [])*/

    useEffect(() => {
        superContainerRef.current.addEventListener('scroll', () => {
            const elem = superContainerRef.current;
            console.log(elem.scrollTop , elem.scrollHeight - elem.clientHeight);
            if(elem.scrollTop >= elem.scrollHeight - elem.clientHeight){
                setPage(prev => prev + 1);
            }
        })
    },[])

    useEffect(async () => {
        const newMovies = await apiService.getMovies(page);
        setMovies(prev => {
            const newState = [...prev, ...newMovies];
            return newState;
        })
    }, [page])

    return (
        <div className="superContainer" ref={superContainerRef}>
            <div className="floatLabel">Numero de peliculas: {movies.length}</div>
            <h2>Listado de peliculas</h2>
            <div className="listContainer">
                {
                    movies.map(movie => {
                        return <div className="listItem" key={movie.id}>
                            <h5 className="itemTitle">{movie.title}</h5>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
                            <p>Año de estreno: {new Date(Date.parse(movie.release_date)).getFullYear()}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
