import React from 'react';

export default class Card extends React.Component {
    props: {
      title: {
        type: String,
        default: "",
      }
    };
    render() {
      return <div>
      <img src={this.props.imagelink}/>
      Hello, {this.props.title}</div>;
    }
  }
