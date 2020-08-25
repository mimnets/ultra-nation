import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=> setCountries(data))
    .catch(error=> console.log(error))
    // .then(data=>console.log(data))
  }, [])
  
  const handleAddCountry = (country) => {
    // console.log('country addedd', country)
    const newSelectedCountries = [...selectedCountries, country];
    setSelectedCountries(newSelectedCountries);
  }

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h4>County addedd : {selectedCountries.length}</h4>
      <ul>
        {
          countries.map(country => <Country country ={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
