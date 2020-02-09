
import React from 'react';

export default class Brick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {
        r: this.props.r,
        g: this.props.g,
        b: this.props.b,
      },
      u: this.props.u,
    };
  }

  computeFactor() {
    return 1/2**(this.state.u);
  }

  computeWidth() {
    return this.props.imageWidth*this.computeFactor();
  }

  computeHeight() {
    return this.props.imageHeight*this.computeFactor();
  }

  computeX(parentX) {
    return parentX + this.computeFactor() * this.props.sx ;
  }

  computeY(parentY) {
    return parentY + this.computeFactor() * this.props.sy ;
  }

  render() {
    let {r,g,b} = this.state.color;
    return (
      <div style={{
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: `rgb(${r},${g},${b})`,
        width: '30px',
        height: '30px',
        }}
      >
      </div>
    );
  }
}
