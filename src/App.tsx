import React, { Component } from 'react';
import SingleToggle from "./components/SingleToggle";
import "./styles/base-styles.css";

class App extends Component {
  render() {
    return (
      <SingleToggle answerPair={["Answer 1", "Answer 2"]} activeIndex={0}/>
    );
  }
}

export default App;
