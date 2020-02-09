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

    this.imageWidth = 800;
    this.imageHeight = 400;

    brickList.forEach(b => {
      bricks[this.keyOfBrick(b)] = b;
    });

    this.imageRef = React.createRef();
    this.getAverageColor = this.getAverageColor.bind(this);
    this.renderBrick = this.renderBrick.bind(this);

    this.state = {
      bricks,
      averageColor: null,
    };
  }

  componentDidMount() {
    let avg = this.getAverageColor(0, 0, 800, 400);
    console.log(avg);
    this.setState({
      ...this.state,
      averageColor: avg,
    });
  }

  subdivideBrick(brick) {
    let newBricks = [];
    let bricku = brick.u + 1;
      // TODO:
      // make top left
      // make top right
      // make bottom left
      // make bottom
      // make bottom right
    let B = {
      u:bricku,
      sx: 1,
      sy: 1,
      parentX: this.computeX(brick.parentX, 1),
      parentY: this.computeY(brick.parentY, 1),
      r: 180, g: 70, b: 10,
    };


    return newBricks;
  }

  updateBricks(brickKey){
    // TODO:
    // remove brick
    let updatedBricks = this.state.bricks;
    let brick = updatedBricks[brickKey];
    let newBricks = this.subdivideBrick(brick);

    delete updatedBricks[brickKey];

    for (let i = 0; i < newBricks.length; i++) {
      let brick = newBricks[i]
      let brickKey = this.keyOfBrick(brick);

      updatedBricks[brickKey] = brick;
    }

    // update state with new bricks
    this.setState({
      ...this.state,
      bricks: updatedBricks
    })
  }

  computeFactor(u) {
    return 1/2**(u);
  }

  computeWidth(u) {
    return this.imageWidth*this.computeFactor(u);
  }

  computeHeight(u) {
    return this.imageHeight*this.computeFactor(u);
  }

  computeX(parentX, sx) {
    return (parentX + this.imageWidth * sx / 4) ;
  }

  computeY(parentY, sy) {
    return (parentY + this.imageHeight * sy / 2) ;
  }

  getAverageColor(x, y, w, h) {
    // Temporarily create a canvas to extract image data
    let canvas = document.createElement('canvas');
    let imgEl = this.imageRef.current;
    canvas.width = 800;
    canvas.height = 400;
    let context = canvas.getContext('2d');
    context.drawImage(imgEl, 0, 0, 800, 400);

    let imageData= context.getImageData(x, y, w, h).data;

    const average = {r:0, b:0, g:0};
    for (let i = 0; i < imageData.length; i += 4) {
      average.r += imageData[i];
      average.g += imageData[i+1];
      average.b += imageData[i+2];
    }
    const dividend = imageData.length/4;
    average.r = Math.floor(average.r / dividend);
    average.g = Math.floor(average.g / dividend);
    average.b = Math.floor(average.b / dividend);

    return average;
  }

  keyOfBrick(brick) {
    return [brick.u, brick.sx, brick.sy, brick.parentX, brick.parentY].toString();
  }

  renderBrick(brick) {
    return <Brick
      key={`${brick.u},${brick.sx},${brick.sy}`}
      x={this.computeX(brick.parentX, brick.sx)}
      y={this.computeY(brick.parentY, brick.sy)}
      width={this.computeWidth(brick.u)}
      height={this.computeHeight(brick.u)}
      color={{r: brick.r, g: brick.g, b: brick.b}}
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
          ref={this.imageRef}
          style={{ height: "100%", width: "100%" }}
        />
        {Object.values(this.state.bricks).map(this.renderBrick)}
      </div>;
  }
}
