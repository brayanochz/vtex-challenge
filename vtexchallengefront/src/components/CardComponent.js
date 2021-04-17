import React from 'react'
import { useHistory } from 'react-router'
import { getYear } from '../utils/dates'

export default function CardComponent({ movie }) {

    const history = useHistory();

    const redirectToDetails = () => {
        history.push(`/detail/${movie.id}`)
    }

    return (
        <div className="listItem" key={movie.id} onClick={redirectToDetails}>
            <h5 className="itemTitle">{movie.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}></img>
            <p>Año de estreno: {getYear(movie.release_date)}</p>
        </div>
    )
}
