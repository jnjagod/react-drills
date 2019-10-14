import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterStr: '',
      arr: ['cheese', 'jam', 'sauce', 'lettuce']
    }
  }

  handleChange(filter) {
    this.setState({
      filterStr: filter
    })
  }

  render() {
    let array = this.state.arr.filter(e => (e.includes(this.state.filterStr))).map(e => (
      <h2>{e}</h2>
    ))
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {array}
      </div>
    );
  }
}

export default App;
