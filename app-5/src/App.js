import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from './component/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'https://www.thewrap.com/wp-content/uploads/2016/05/may-the-4th-star-wars-day-5.jpg'}/>
      </div>
    );
  }
}

export default App;
