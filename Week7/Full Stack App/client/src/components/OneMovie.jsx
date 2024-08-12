import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


const OneMovie = () => {

    const { id } = useParams()
    const [oneMovie, setOneMovie] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/api/${id}/movies`)
            .then(res => {
                console.log(res.data)
                setOneMovie(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])





    return (
        <div key={oneMovie._id}>
            <h3>{oneMovie.title}</h3>
            <img src={oneMovie.image} alt={oneMovie.title} width="250px" />
            <p>released : {oneMovie.releaseYear}</p>
            <p>have you see this ? {oneMovie.seen ? "yes" : "no"}</p>
        </div>
    )
}

export default OneMovie