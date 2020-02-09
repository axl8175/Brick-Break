import React from 'react';
import Brick from './brick';

export default class Brickimage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bricks: [
        { u: 1, sx: -1, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
        { u: 1, sx: 3, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
        { u: 1, sx: 0, sy: 0, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
        { u: 1, sx: 1, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
        { u: 1, sx: 2, sy: 0, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      ]
    }
  }

  renderBrick(brick) {
    return <Brick
      u={brick.u}
      sx={brick.sx}
      sy={brick.sy}
      parentX={brick.parentX}
      parentY={brick.parentY}
      r={brick.r}
      g={brick.g}
      b={brick.b}
      imageWidth={800}
      imageHeight={400}
    />
  }

  render() {
    return <div style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "0 auto",
        overflow: "hidden",
      }}>
        <img src={this.props.link} alt="brick"
          style={{ height: "100%", width: "100%" }}
        />
        {this.state.bricks.map(this.renderBrick)}
      </div>;
  }
}
