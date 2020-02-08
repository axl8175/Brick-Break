
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
      u: 0,
      sx: 0,
      sy: 0,
      imageWidth: this.props.imageWidth,
      imageHeight: this.props.imageHeight,
    };
  }

  computeFactor() {
    return 1/2**(this.state.u);
  }

  computeWidth() {
    return this.imageWidth*this.computeFactor();
  }

  computeHeight() {
    return this.imageHeight*this.computeFactor();
  }

  computeX(parentX, sx) {
    return parentX + this.computeFactor() * sx ;
  }

  computeY(parentY, sy) {
    return parentY + this.computeFactor() * sy ;
  }

  render() {
    return (
      <div style={{
        position: 'absolute',

        }}
        />
    );
  }
}
