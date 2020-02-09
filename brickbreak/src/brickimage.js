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
          u={1}
          sx={1}
          sy={1}
          parentX={0}
          parentY={0}
          r={0}
          g={0}
          b={200}
          imageWidth={800}
          imageHeight={400}
        />
      </div>;
  }
}
