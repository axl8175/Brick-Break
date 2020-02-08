import React from 'react';

export default class Brickimage extends React.Component {
    render() {
      return <div>
      <img src={this.props.link} alt="brick"/>
      </div>;
    }
  }
