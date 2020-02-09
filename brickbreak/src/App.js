import React from 'react';
import './App.css';
import data from "./things.js";
import Card from "./card.js";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.allcards = data.things.map(this.renderPlace);

  }

  renderPlace(place) {
    return <Card
    key={place.title}
    title={place.title}
    imagelink={place.locallink}
    text={place.text}/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.allcards}
        </header>
      </div>
    );
  }
}