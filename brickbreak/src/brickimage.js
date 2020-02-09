import React from 'react';
import Brick from './brick';
import _ from 'lodash';

export default class Brickimage extends React.Component {
  constructor(props) {
    super(props);

    let brickList = [
      {
        u: 0,
        x: 0,
        y: 0,
        width: 800,
        height: 400,
        sx: 0,
        sy: 0,
        parentX: 0,
        parentY: 0,
        color: {
         r: 180, g: 70, b: 10,
        },
        // parentWidth: 1600,
        // parentHeight: 800,
      },
      // { u: 1, sx: -1, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      // { u: 1, sx: 3, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      // { u: 1, sx: 0, sy: 0, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      // { u: 1, sx: 1, sy: 1, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
      // { u: 1, sx: 2, sy: 0, parentX: 0, parentY: 0, r: 180, g: 70, b: 10, },
    ];
    let bricks = {};

    this.imageWidth = 800;
    this.imageHeight = 400;

    brickList.forEach(b => {
      let key = this.keyOfBrick(b);
      // console.log(key);
      bricks[key] = b;
    });

    this.imageRef = React.createRef();
    this.getAverageColor = this.getAverageColor.bind(this);
    this.renderBrick = this.renderBrick.bind(this);
    this.setAverageColor = this.setAverageColor.bind(this);

    this.state = {
      bricks,
      averageColor: null,
    };

    this.updateBricks = _.throttle(function updateBricks(brickKey){

      let updatedBricks = {...this.state.bricks};
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
    }, 20);
  }

  componentDidMount() {
  }

  setAverageColor() {
    let avg = this.getAverageColor(0, 0, 800, 400);
    this.setState({
      ...this.state,
      averageColor: avg,
    });
  }

  subdivideBrick(brick) {
    let bricku = brick.u + 1;
    if (brick.height < 20 || bricku >= 7) {
      return [];
    }
    let parentX = this.computeX(brick.width, brick.parentX,brick.sx);
    let parentY = this.computeY(brick.height, brick.parentY,brick.sy);

    let width = this.computeWidth(bricku);
    let height = this.computeHeight(bricku);

    let make = (sx, sy) => {
      let x = this.computeX(width, parentX, sx);
      let y = this.computeY(height, parentY, sy);
      let color = this.getAverageColor(x, y, width, height);
      if (!color) return null;
      return {
        u:bricku,
        x,
        y,
        width,
        height,
        sx,
        sy,
        parentX,
        parentY,
        color,
      };
    };
    // console.log(`x:${brick.x},w:${brick.width}`);
    let tl = make(0, 0);
    let tr = make(2, 0);
    let bl = make(-1, 1);
    let b = make(1, 1);
    let br = make(3, 1);

    let newBricks = _.compact([tl,tr,bl,b,br]);

    return newBricks;
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

  computeX(width, parentX, sx) {
    return (parentX + width * sx / 2) ;
  }

  computeY(height, parentY, sy) {
    return (parentY + height * sy ) ;
  }

  getAverageColor(x, y, w, h) {
    // Temporarily create a canvas to extract image data
    let canvas = document.createElement('canvas');
    let imgEl = this.imageRef.current;
    canvas.width = 800;
    canvas.height = 400;
    let context = canvas.getContext('2d');
    context.drawImage(imgEl, 0, 0, 800, 400);

    if (x < 0) {
      x = 0;
    }
    if (x + w > 800) {
      w = 800 - x;
    }
    if (y + h > 400) {
      h = 400 - y;
    }
    if (w === 0 || h === 0) {
      return null;
    }

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
    let update = () => this.updateBricks(this.keyOfBrick(brick))
    return <Brick
      key={this.keyOfBrick(brick)}
      x={brick.x}
      y={brick.y}
      width={brick.width}
      height={brick.height}
      color={brick.color}
      onClick={update}
    />
  }



  render() {
    let bricks = (this.props.answered)
      ? []
      : Object.values(this.state.bricks).map(this.renderBrick);
    return <div style={{
        position: "relative",
        width: "800px",
        height: "400px",
        margin: "0 auto",
        overflow: "hidden",
      }}>
        <img src={this.props.link} alt="brick"
          ref={this.imageRef}
          onLoad={this.setAverageColor}
          style={{ height: "100%", width: "100%" }}
        />
        {bricks}
      </div>;
  }
}
