
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

  computeX() {
    return (this.props.parentX + this.props.imageWidth * this.props.sx / 4) ;
  }

  computeY() {
    return (this.props.parentY + this.props.imageHeight * this.props.sy / 2) ;
  }

  render() {
    let {r,g,b} = this.state.color;
    return (
      <div style={{
        position: 'absolute',
        left: `${this.computeX()}px`,
        top: `${this.computeY()}px`,
        backgroundColor: `rgb(${r},${g},${b})`,
        width: `${this.computeWidth()}px`,
        height: `${this.computeHeight()}px`,
        border: '3px solid white',
        boxSizing: 'border-box',
        display: 'none'
        }}
      >
      </div>
    );
  }
}
