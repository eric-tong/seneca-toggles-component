import React, {Component} from 'react';
import "./styles/base-styles.css";
import TogglesCard from "./components/TogglesCard";
import ToggleQuestion from "./models/ToggleQuestion";
import ToggleOption from "./models/ToggleOption";

class App extends Component {
    render() {
        return (
            <TogglesCard toggleQuestion={new ToggleQuestion("", new ToggleOption("", ""))}/>
        );
    }
}

export default App;
