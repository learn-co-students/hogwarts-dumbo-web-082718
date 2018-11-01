import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer.js";
// import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogContainer />
      </div>
    );
  }
}

export default App;
