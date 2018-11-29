import React from "react";
import {Component} from "react";
import SingleToggle from "./SingleToggle";

export interface SingleTogglesContainerProps {
    answerPairs: [string, string][];
}

export interface SingleTogglesContainerState {
    activeAnswerIndices: (0 | 1)[];
}

export default class SingleTogglesContainer extends Component<SingleTogglesContainerProps, SingleTogglesContainerState> {
    constructor(props: SingleTogglesContainerProps) {
        super(props);
        let defaultActiveAnswerIndices: (0 | 1)[] = Array.apply(null, new Array(10)).map(Number.prototype.valueOf, 1);
        this.state = {
            activeAnswerIndices: defaultActiveAnswerIndices
        };
    }

    render() {
        return (
            <div>
                {this.props.answerPairs.map((answerPair, singleToggleIndex) =>
                    <SingleToggle
                        key={singleToggleIndex}
                        answerPair={answerPair}
                        activeIndex={this.state.activeAnswerIndices[singleToggleIndex]}
                        onAnswerClick={(activeAnswerIndex) => this.onAnswerClick(singleToggleIndex, activeAnswerIndex)}/>
                )}
            </div>
        );
    }

    onAnswerClick = (singleToggleIndex: number, activeAnswerIndex: 0 | 1) => {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = activeAnswerIndex;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    };
}