import React, { useState } from 'react'

const AnotherCom = (props) => {
    const ninja = {
        name: "Raphael",
        powerLevel: 100
    };
    const [ninjaObj, setNinjaObj] = useState(ninja);
    // ninja level up
    const ninjaLevelUP = () => {
        setNinjaObj({ ...ninjaObj, powerLevel: ninjaObj.powerLevel + 1 });
    };


    console.log("----------", props)
    return (
        <div>
            {JSON.stringify(ninjaObj)}
            <p>Ninja's power is {ninjaObj.powerLevel}</p>

            <button onClick={ninjaLevelUP}>level up</button>
        </div>
    )
}

export default AnotherCom