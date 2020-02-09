
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
