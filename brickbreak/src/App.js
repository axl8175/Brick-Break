import React from 'react';
import './App.css';
import data from "./things.js";
import Card from "./card.js";

const allcards = data.things.map(
  (place) => {
    return <Card
    key={place.title}
    title={place.title}
    imagelink={place.locallink}
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
