import React, { Component } from 'react'

export class Purecomp extends Component {
  render() {
    console.log("hello its pure");
    return (
      <div>
        
        i am regualr compund{this.props.name}
      </div>
    )
  }
}

export default Purecomp
