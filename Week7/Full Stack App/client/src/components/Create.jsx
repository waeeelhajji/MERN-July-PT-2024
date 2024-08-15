import React, { useState } from 'react'
import axios from "axios"
import { redirect, useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [releaseYear, setReleaseYear] = useState(1888)
    const [seen, setSeen] = useState(false)
    const [errors, setErrors] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("cool")
        const tempObj = {
            title,
            image,
            releaseYear,
            seen
        }
        axios.post("http://localhost:5000/api/movies", tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                navigate("/")
            })
            .catch(err => {
                console.log("❌❌❌❌", err.response.data.errors.title.message)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }




    return (
        <div>
            <h1>Create Movie</h1>
            title : {JSON.stringify(title)} <br />
            image : {JSON.stringify(image)}<br />
            releaseYear : {JSON.stringify(releaseYear)}<br />
            seen : {JSON.stringify(seen)}<br />
            <div>
                {errors.map((err, i) => {
                    return <p key={i} style={{ color: "red" }}>{err}</p>
                })}
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    title:
                    <input value={title} type="text" onChange={e => { setTitle(e.target.value) }} />
                </div>
                <div>
                    Image:
                    <input value={image} type="text" onChange={e => { setImage(e.target.value) }} />
                </div>
                <div>
                    release Year :
                    <input value={releaseYear} type="number" onChange={e => { setReleaseYear(e.target.value) }} />
                </div>
                <div>
                    have you see this ? :
                    <input checked={seen} type="checkbox" onChange={e => { setSeen(e.target.checked) }} />
                </div>
                <input type="submit" value="Add Movie" />
            </form>

        </div>
    )
}

export default Create