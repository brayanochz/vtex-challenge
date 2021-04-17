import React, { useEffect } from 'react'

export default function CastComponent({ casts }) {

    const defaultImage = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";

    return (
        <>
            <h3>Elenco</h3>
            <div className="castContainer">
                {
                    casts?.map(cast => {
                        return <div className="castItem">
                            <img width={150} height={200} src={cast?.profile_path ? `https://image.tmdb.org/t/p/w200${cast?.profile_path}` : defaultImage}></img>
                            <p>{cast.name}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}
