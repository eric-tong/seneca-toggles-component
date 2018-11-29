import React from "react";
import {Component} from "react";
import SingleToggle from "./SingleToggle";

export interface SingleTogglesContainerProps {
    answerPairs: [string, string][];
}

export interface SingleTogglesContainerState {
    activeIndices: (0 | 1)[];
}

export default class SingleTogglesContainer extends Component<SingleTogglesContainerProps, SingleTogglesContainerState> {
    constructor(props: SingleTogglesContainerProps) {
        super(props);
        this.state = {
            activeIndices: []
        }
    }

    render() {
        return (
            <div>
                {this.props.answerPairs.map((answerPair, index) =>
                    <SingleToggle
                        key={index}
                        answerPair={answerPair}
                        activeIndex={this.state.activeIndices[index]}
                        onAnswerClick={() => {
                        }}/>
                    )}
            </div>
        );
    }
}