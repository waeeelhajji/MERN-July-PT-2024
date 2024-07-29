import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const Hero = () => {
    const { id } = useParams()
    console.log(id)
    const [hero, setHero] = useState(null)
    const nav = useNavigate()

    // const GetHero = () => {
    // }

    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
            .then(res => {
                setHero(res.data)
            })
            .catch(err => {
                console.log(err)
                nav('/error')
            })
    }, [])



    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            {/* {JSON.stringify(hero)}
             */
            }
            {/* {Ternary } */}
            {
                hero ? (
                    <div>
                        <h1>{hero.name}</h1>

                        <img src={hero.images.sm} alt={hero.name} />
                    </div>

                ) : <h2>Loading ....</h2>
            }





        </fieldset>
    )
}

export default Hero