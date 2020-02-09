import React from 'react';
import Brickimage from './brickimage';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      answered: false,
      answer: '',
    };
  }

  submissionCheck() {
    let div;
    const ans = this.state.answered;
    if (ans) {
      div = <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.text}</p>
      </div>
    } else {
      div = <p>{"Please try again."}</p>
    }
    return div
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      answer: event.target.answer
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      answered: !this.state.answered,
    });
  }

  render() {
    return <div>
   <Brickimage link={this.props.imagelink}/>

   <form onSubmit={this.handleSubmit}>
      <label>
          Name:
          <input type="text" answer={this.state.answer} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>

    {this.state.answered.toString()}
    {this.submissionCheck()}
    
    </div>;
  }
}
