
import './App.css';
import { useState } from "react"
import axios from "axios"

function App() {
  const [heroes, setHeroes] = useState([])






  // Vanilla JS 
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        return response.json()
      })
      .then(newResponse => {
        console.log(newResponse)
        setHeroes(newResponse)
      })
      .catch(err => {
        console.log(err);
      })
  }



  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        //! the data of the Response you always will find it in .data
        console.log(response.data)
        setHeroes(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }







  return (
    <div className="App">
      <h1>superheroes 🦸🦸‍♂️🦹🦹‍♂️</h1>
      <button onClick={fetchHeroes}>fetch heroes</button>
      <button onClick={axiosHeroes}>Axios heroes</button>

      <hr />
      {/* {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <th>Images</th>
          <th>Names</th>
          <th>Full Name</th>
          <th>publisher</th>
        </thead>
        <tbody>
          {
            heroes.map(hero => {
              return <tr key={hero.id}>
                <td><img src={hero.images.sm} alt={hero.name} width="80px" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                <td>{hero.biography.publisher}</td>
              </tr>
            })
          }

        </tbody>
      </table>


    </div>
  );
}

export default App;
