import React, { Component } from 'react';
import Newcomp from './higherorder';
export class Click extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      count: 0
    };
  }

  // Arrow function automatically binds 'this'
  updateclick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.updateclick}>{this.props.name}clicked {count} times</button>
      </div>
    );
  }
}

export default Newcomp (Click);
