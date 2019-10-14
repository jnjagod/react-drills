import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: [1,3,5,7]
    } 
  }
  render() {
    const numbers = this.state.arr.map(el => (
      <h2>{el}</h2>
    ))
    return (
      <div className="App">
        {numbers}
      </div>
    );
  }
}

export default App;
