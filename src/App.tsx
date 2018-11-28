import React, { Component } from 'react';
import SingleToggle from "./components/SingleToggle";
import "./styles/base-styles.css";

class App extends Component {
  render() {
    return (
      <SingleToggle optionsContent={["Option 1", "Option 2"]} />
    );
  }
}

export default App;
