
import React from 'react';

export default class Brick extends React.Component {

  render() {
    let {r,g,b} = this.props.color
    return (
      <div
       onMouseMove={this.props.onClick}
       style={{
        position: 'absolute',
        left: `${this.props.x}px`,
        top: `${this.props.y}px`,
        backgroundColor: `rgb(${r},${g},${b})`,
        width: `${this.props.width}px`,
        height: `${this.props.height}px`,
        boxSizing: 'border-box',
        }}
      >
      </div>
    );
  }
}
