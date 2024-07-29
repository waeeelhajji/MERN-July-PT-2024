import { useState } from 'react';
import Display from './components/Display';
import './App.css';
import Form from './components/Form';

function App() {
  const [people, setPeople] = useState([
    {
      name: "Mario",
      height: 7,
      color: "red",
    },
    {
      name: "Luigi",
      height: 8,
      color: "green",
    },
    {
      name: "Princess Peach",
      height: 6,
      color: "pink",
    },
  ])

  const AddPersonToThObject = (newPerson) => {
    console.log(newPerson)
    //update of the state
    setPeople([...people, newPerson])
  }






  return (
    <fieldset className="App">

      <legend>App.js</legend>
      <h1>Lifting State 🏋️‍♂️</h1>
      {JSON.stringify(people)}

      <Form AddPersonToThObject={AddPersonToThObject} />

      <Display people={people} />

    </fieldset>
  );
}

export default App;
