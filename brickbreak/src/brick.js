
import React from 'react';

export default class Brick extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {
        r: 0,
        g: 0,
        b: 0,
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
    return (
      <div style={{
        position: 'absolute',
        left: '0',
        top: '0',
        color: 'black',
        width: '30px',
        height: '30px',
        }}
      >
        x
      </div>
    );
  }
}
