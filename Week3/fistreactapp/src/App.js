import './App.css';
import Person from './components/Person';


function App() {
  const x = 5
  const name = "bob"
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const objPerson = {
    name: "John",
    age: 56
  }


  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <p><h1>Welcome Again To ReactJS ❌❌❌</h1></p>
        <p>Person info : {JSON.stringify(objPerson)}</p>
        <p>number : {x} </p>
        {/* <Person info={name} /> */}
      </div>
      Animals : <ol>
        {
          animals.map((eachAnimal) => {
            return <li>{eachAnimal} is cool</li>
          })
        }
      </ol>
      <Person num={x} />
    </fieldset>
  );
}

export default App;






























