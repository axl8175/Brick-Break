import React from 'react';

export default class Brickimage extends React.Component {
    props: {
      link: {
        type: String,
        default: "",
      }
    };
    render() {
      return <div>
      <img src={this.props.link}/>
      </div>;
    }
  }
