import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./things.json"
import Card from "./card.js"

const allcards = data.things.map(
  (place) => {
    return <Card 
    title={place.title}
    imagelink={place.imagelink}
    text={place.text}/>
  }
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {allcards}
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
