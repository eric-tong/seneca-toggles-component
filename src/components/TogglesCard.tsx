import React, {Component} from "react";
import SingleTogglesContainer from "./SingleTogglesContainer";
import ToggleQuestion from "../models/ToggleQuestion";
import ToggleOption from "../models/ToggleOption";

export interface TogglesCardProps {
    toggleQuestion: ToggleQuestion;
}

export interface TogglesCardState {
    activeAnswerIndices: (0 | 1)[];
}

export default class TogglesCard extends Component<TogglesCardProps, TogglesCardState> {
    constructor(props: TogglesCardProps) {
        super(props);
        let defaultActiveAnswerIndices: (0 | 1)[] = Array.apply(null, new Array(this.props.toggleQuestion.options.length)).map(Number.prototype.valueOf, 1);
        this.state = {
            activeAnswerIndices: defaultActiveAnswerIndices
        };
    }

    render() {
        return (
            <div className="toggles-card">
                <div className="statement">{this.props.toggleQuestion.statement}</div>
                <SingleTogglesContainer
                    answerPairs={this.getAnswerPairs()}
                    activeAnswerIndices={this.state.activeAnswerIndices}
                    onAnswerClick={this.onAnswerClick}/>
            </div>
        );
    }

    getAnswerPairs: () => [string, string][] = () => {
        let toAnswerPair = (option: ToggleOption) => option.answerPair;
        return this.props.toggleQuestion.options.map(toAnswerPair);
    };

    onAnswerClick = (singleToggleIndex: number, selectedAnswerIndex: 0 | 1) => {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = selectedAnswerIndex;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    };
}