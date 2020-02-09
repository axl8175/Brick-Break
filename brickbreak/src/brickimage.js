import React from 'react';
import Brick from './brick';

export default class Brickimage extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "0 auto",
      }}>
        <img src={this.props.link} alt="brick"
          style={{ height: "100%", width: "100%" }}
        />
        <Brick
          imageWidth={800}
          imageHeight={400}
        />
      </div>;
  }
}
