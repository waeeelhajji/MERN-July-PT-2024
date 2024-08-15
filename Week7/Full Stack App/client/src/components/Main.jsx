import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom"

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/movies")
            .then(res => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const deleteMe = (MovieId) => {
        Axios.delete(`http://localhost:5000/api/${MovieId}/movies`)
            .then(res => {
                console.log(res.data)
                setMovies(movies.filter(movies => movies._id != MovieId));
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            {/* <p>{JSON.stringify(movies)}</p> */}
            {
                (movies) ?
                    movies.map((oneMovie) => {
                        return (
                            <div key={oneMovie._id}>
                                <Link to={"/movies/" + oneMovie._id}>
                                    <h3>{oneMovie.title}</h3>
                                </Link>
                                <img src={oneMovie.image} alt={oneMovie.title} width="150px" />
                                <p>released : {oneMovie.releaseYear}</p>
                                <p>have you see this ? {oneMovie.seen ? "yes" : "no"}</p>
                                <button onClick={() => { deleteMe(oneMovie._id) }}>Delete ❌</button>
                                <Link to={`/movies/${oneMovie._id}/update`}>Update</Link >
                            </div>
                        )
                    }) : <h1>Loading ...</h1>
            }

        </div>
    )
}

export default Main