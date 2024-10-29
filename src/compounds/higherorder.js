import React from "react";
const Newcomp = Originalcomp=>{
    class Newclass extends React.Component{
        render(){
            return <Originalcomp name="user "/>
        }
    }
    return Newclass
}
export default Newcomp;