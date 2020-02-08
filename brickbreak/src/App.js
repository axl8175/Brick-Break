import React from 'react';
import './App.css';
import data from "./things.json";
import Card from "./card.js";

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
        {allcards}
      </header>
    </div>
  );
}

export default App;
