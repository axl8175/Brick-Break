import React from 'react';
import Brick from './brick';

export default class Brickimage extends React.Component {
  constructor(props) {
    super(props);

    // Temporarily starting with split, evetually will start with 1 large brick
    let brickList = [
      { u: 1, sx: -1, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      { u: 1, sx: 3, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      { u: 1, sx: 0, sy: 0, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      { u: 1, sx: 1, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      { u: 1, sx: 2, sy: 0, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
    ];
    let bricks = {};

    brickList.forEach(b => {
      bricks[this.keyOfBrick(b)] = b;
    });

    this.imageRef = React.createRef();

    this.state = {
      bricks,
      imageData: null,
    };
  }

  componentDidMount() {
    // Temporarily create a canvas to extract image data
    let canvas = document.createElement('canvas');
    let imgEl = this.imageRef.current;
    canvas.width = 800;
    canvas.height = 400;
    let context = canvas.getContext('2d');
    context.drawImage(imgEl, 0, 0, 800, 400);

    let imageData= context.getImageData(0, 0, 800, 400);

    this.setState({
      ...this.state,
      imageData,
    });
    console.log(this.state.imageData);
  }

  keyOfBrick(brick) {
    return [brick.u, brick.sx, brick.sy, brick.parentX, brick.parentY].toString();
  }

  renderBrick(brick) {
    return <Brick
      key={`${brick.u},${brick.sx},${brick.sy}`}
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

  subdivideBrick(brick) {
    // TODO:
    // remove brick

    // TODO:
    // make top left
    // make top right
    // make bottom left
    // make bottom
    // make bottom right

    // update state with new bricks
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
          ref={this.imageRef}
          style={{ height: "100%", width: "100%" }}
        />
        {Object.values(this.state.bricks).map(this.renderBrick)}
      </div>;
  }
}
