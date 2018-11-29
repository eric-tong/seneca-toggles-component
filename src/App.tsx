import React, { Component } from 'react';
import "./styles/base-styles.css";
import SingleTogglesContainer from "./components/SingleTogglesContainer";

class App extends Component {
  render() {
      const answerPairs: [string, string][] = [
          ["Answer 1-1", "Answer 1-2"],
          ["Answer 2-1", "Answer 2-2"],
          ["Answer 3-1", "Answer 3-2"],
          ["Answer 4-1", "Answer 4-2"]
      ];
    return (
      <SingleTogglesContainer answerPairs={answerPairs}/>
    );
  }
}

export default App;
