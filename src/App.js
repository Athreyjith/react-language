// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Classcomp from "./compounds/classcomp";
import Funcomp from "./compounds/funcomp";
import Click from "./compounds/click";
import Onmouse from "./compounds/onmouse";
import Parent from "./compounds/parent";
function App() {
  return (
    <div><h1>hello 1</h1>
        <h1>hello</h1>
        <Classcomp/>
        <Funcomp/>  
       <Click/>
        <Onmouse/>
        <Parent/>
    </div>

  );
}

export default App;
