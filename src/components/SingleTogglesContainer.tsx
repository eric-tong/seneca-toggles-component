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
        let toZero: () => 0 | 1 = () => 0;
        this.state = {
            activeIndices: new Array(this.props.answerPairs.length).map(toZero)
        };
    }

    render() {
        return (
            <div>
                {this.props.answerPairs.map((answerPair, singleToggleIndex) =>
                    <SingleToggle
                        key={singleToggleIndex}
                        answerPair={answerPair}
                        activeIndex={this.state.activeIndices[singleToggleIndex]}
                        onAnswerClick={(activeAnswerIndex) => this.onAnswerClick(singleToggleIndex, activeAnswerIndex)}/>
                )}
            </div>
        );
    }

    onAnswerClick = (singleToggleIndex: number, activeAnswerIndex: 0 | 1) => {
        this.setState(prevState => {
            let activeIndices = prevState.activeIndices;
            activeIndices[singleToggleIndex] = activeAnswerIndex;
            return {activeIndices: activeIndices};
        });
    };
}