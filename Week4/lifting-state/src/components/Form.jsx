import React, { useState } from 'react'

const Form = (props) => {
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [color, setColor] = useState("")



    const createPerson = (e) => {
        e.preventDefault()
        const newPerson = {
            name,
            height,
            color
        }
        console.log(newPerson)
        props.AddPersonToThObject(newPerson)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            name : {JSON.stringify(name)}<br />
            Height : {JSON.stringify(height)} <br />
            Color : {JSON.stringify(color)}<br />
            <form onSubmit={createPerson}>
                <div>
                    name :
                    <input type="text" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    height :
                    <input type="number" onChange={(e) => { setHeight(e.target.value) }} />
                </div>
                <div>
                    color :
                    <input type="text" onChange={(e) => { setColor(e.target.value) }} />
                </div>
                <button> Add this Person to the Party List 🥳</button>
            </form>
        </fieldset>
    )
}

export default Form