
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
      x: 0,
      y: 0,
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

  computeX() {
    return 0;
  }

  computeY() {
    return 0;
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
