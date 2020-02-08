
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
    };
  }

  computeFactor() {
    return 1;
  }

  computeWidth() {
    return 0;
  }

  computeHeight() {
    return 0;
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
