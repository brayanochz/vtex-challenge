import React from 'react'
import { useParams } from 'react-router'

export default function DetailView() {
    const params = useParams()
    return (
        <div>
            Detalle de peliculas: 
            {params.id}
        </div>
    )
}
