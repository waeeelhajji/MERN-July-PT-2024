import './App.css';
import Error from './components/Error';
import Hero from './components/Hero';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      {/* <a href="/home"> Home </a> */}
      {/* NO anchor TAG in REACT  */}
      <Link to="/Home ">Home  🏠</Link>
      <Link to="/Hero ">Hero 🦸‍♀️</Link>
      <h1>🦹🦹‍♂️🦹‍♀️routing With Heroes 🦸‍♀️🦸‍♂️🦸</h1>
      {/* THEATER STAGE  */}
      <Routes>
        {/* ACT 1 - HOME */}
        <Route path='/home' element={<Home />} />
        {/* ACT 2 - Hero */}
        <Route path='/hero/:id' element={<Hero />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </fieldset>
  );
}

export default App;
