import React, { useState } from 'react'
import AnotherCom from './AnotherCom'

const Person = (props) => {
    //? CREATE STATE FOR THIS COMPONENT
    //!      State
    //!        |   Change state
    //!       V      V            default state
    const [number, setNumber] = useState(20)

    const incrementNumber = () => {
        setNumber(number + 1)
    }

    console.log("What is this props", props)
    return (
        <fieldset>
            <legend>Person.jsx</legend>
            Person Number : {number}

            {/* <AnotherCom anotherProps={props.num} /> */}
            <button onClick={incrementNumber}> Increment </button>
        </fieldset>
    )
}

export default Person


