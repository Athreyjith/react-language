import React, { Component } from 'react'
import Newcomp from './higherorder';
export class Onmouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0 
      }
    }
    mouseonit = ()=>{
        this.setState({count : this.state.count + 1});
    };
    
  render() {
      const {count} = this.state;
    return (
      <div>
        <button onMouseEnter={ this.mouseonit}>{this.props.name}incremnt {count} times</button>
      </div>
    )
  }
}

export default Newcomp(Onmouse);
