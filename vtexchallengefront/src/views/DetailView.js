import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import CastComponent from '../components/CastComponent';
import useApi from '../services/useApi';
import { getYear } from '../utils/dates';

export default function DetailView() {
    const params = useParams();
    const apiService = useApi();
    const history = useHistory();
    const [details, setDetails] = useState({});
    const [credits, setCredits] = useState([]);

    useEffect(async () => {
        if (params.id) {
            const details = await apiService.getMovie(params.id);
            console.log(details);
            setDetails(details);
        }
    }, [params])

    useEffect(async () => {
        if (details.id) {
            const credits = await apiService.getCredits(details.id);
            console.log(credits);
            setCredits(credits);
        }
    }, [details])

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <div className="detailContainer">
                <div className="deatilImage">
                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}></img>
                </div>
                <div className="detailInfoContainer">
                    <div className="subHead">
                        <a className="button" onClick={goBack} >Regresar</a>
                    </div>
                    <h3>
                        {details?.title}
                    </h3>
                    <p>
                        Año de estreno: {getYear(details?.release_date)}
                    </p>
                    <div>
                        <h3>Generos:</h3>
                        <ol>
                            {details?.genres?.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ol>
                    </div>
                    <CastComponent casts={credits} />
                </div>
            </div>
        </div>
    )
}
