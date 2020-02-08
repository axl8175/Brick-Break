import React from 'react';
import Brickimage from './brickimage';

export default class Card extends React.Component {
    props: {
      title: {
        type: String,
        default: "",
      }
    };
    render() {
      return <div>
      <Brickimage link={this.props.imagelink}/>
      <div>Hello, {this.props.title}</div>

      </div>;
    }
  }
