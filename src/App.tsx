import React, {Component} from 'react';
import "./styles/base-styles.css";
import TogglesCard from "./components/TogglesCard";
import {demoToggleQuestion} from "./demo/DemoToggleQuestion";

export default class App extends Component {
    render() {
        return (
            <TogglesCard toggleQuestion={demoToggleQuestion} defaultActiveAnswerIndices={[1, 1, 0, 0]}/>
        );
    }
}