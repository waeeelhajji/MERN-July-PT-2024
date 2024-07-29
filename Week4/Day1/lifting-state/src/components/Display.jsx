import React from 'react'

const Display = (props) => {
    console.log(props.people)
    return (
        <fieldset>
            <legend>Display.jsx</legend>

            {
                props.people.map((person, i) => {
                    return <div key={i} style={{ backgroundColor: person.color }}>
                        <h3>{person.name}</h3>
                        <h3>{person.height}</h3>
                    </div>
                })
            }

        </fieldset>
    )
}

export default Display