import React from 'react';
import './App.css';
import data from "./things.js";
import Card from "./card.js";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.allcards = data.things.map(this.renderPlace);

    this.state = {
      total: data.things.length,
      current: 0,
    };

    this.renderCurrent = this.renderCurrent.bind(this);
  }

  renderCurrent() {
    let place = data.things[this.state.current];
    return this.renderPlace(place);
  }

  renderPlace(place) {
    return <Card
    key={place.title}
    title={place.title}
    imagelink={place.locallink}
    text={place.text}/>
  }

  toNext() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderCurrent()}
          <button type="button"
            onClick={this.toNext}
          >
            Next
          </button>

        </header>
      </div>
    );
  }
}