import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from './components/Todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ''
    }
  }

  handleInput = value => this.setState({input: value})

  handleAdd = () => this.setState({
    list: [...this.state.list, this.state.input],
    input: ''
  })


  render() {
    let list = this.state.list.map((elem, i) => <Todo key={i} task={elem}/>)
    return (
      <div className="App">
        <h1>My To do List</h1>
        <div>
          <input value={this.state.input} onChange={e => this.handleInput(e.target.value)}></input>
          <button onClick={this.handleAdd}>Add</button>
          <br/>
          {list}
        </div>
      </div>
    );
  }
}

export default App;
