
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
        border: `${0.01*this.props.width}px solid gray`,
        boxSizing: 'border-box',
        }}
      >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Concrete_wall.jpg/220px-Concrete_wall.jpg"
        width={this.props.width}
        height={this.props.height}
        style={{opacity: "0.1"}}
        />
      </div>
    );
  }
}
