import React from 'react';
import Brickimage from './brickimage';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answered: false,
    };
  }

  render() {
    return <div>
    <Brickimage link={this.props.imagelink}/>
    <h1>{this.props.title}</h1>
    <p>{this.props.text}</p>
    </div>;
  }
}
