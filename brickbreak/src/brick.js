
import React from 'react';

export default class Brick extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.x);
    console.log(this.props.y);

  }


  render() {
    let {r,g,b} = this.props.color
    return (
      <div
       onClick={this.props.onClick}
       style={{
        position: 'absolute',
        left: `${this.props.x}px`,
        top: `${this.props.y}px`,
        backgroundColor: `rgb(${r},${g},${b})`,
        width: `${this.props.width}px`,
        height: `${this.props.height}px`,
        border: '3px solid white',
        boxSizing: 'border-box',
        }}
      >
      </div>
    );
  }
}
