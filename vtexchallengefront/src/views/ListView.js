import React, { useEffect, useRef, useState } from 'react'
import CardComponent from '../components/CardComponent';
import Movie from '../models/movies';
import useApi from '../services/useApi'

export default function ListView() {

    const apiService = useApi();
    const superContainerRef = useRef();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        superContainerRef.current.addEventListener('scroll', () => {
            const elem = superContainerRef.current;
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
                        return <CardComponent movie={movie} />
                    })
                }
            </div>
        </div>
    )
}
