import React, {Component} from "react";
import SingleToggle from "./SingleToggle";

export interface SingleTogglesContainerProps {
    answerPairs: [string, string][];
    activeAnswerIndices: (0 | 1)[];
    onAnswerClick: (singleToggleIndex: number, selectedAnswerIndex: 0 | 1) => void;
}

export default class SingleTogglesContainer extends Component<SingleTogglesContainerProps> {
    render() {
        return (
            <div className="single-toggles-container">
                {this.props.answerPairs.map((answerPair, singleToggleIndex) =>
                    <SingleToggle
                        key={singleToggleIndex}
                        answerPair={answerPair}
                        activeIndex={this.props.activeAnswerIndices[singleToggleIndex]}
                        onAnswerClick={(selectedAnswerIndex) => this.props.onAnswerClick(singleToggleIndex, selectedAnswerIndex)}/>
                )}
            </div>
        );
    }
}