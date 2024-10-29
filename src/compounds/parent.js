import React, { Component } from 'react'
import Reg from './reg';
import Purecomp from './purecomp';
export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "athrey"
      }
    }
    componentDidMount(){
        setInterval (()=>{
            this.setState({
                name : "athrey"
            });
        },3000) ;
    }
  render() {
    console.log("hello its parent");
    return (
      <div>
        
        this is parent class
        <Reg name ={this.state.name}/>
        <Purecomp name= {this.state.name}/>

      </div>
    )
  }
}

export default Parent
