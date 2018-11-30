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
        this.state = {
            activeAnswerIndices: this.defaultActiveAnswerIndices
        };
    }

    render() {
        return (
            <div className="toggles-card">
                <div className="statement">{this.props.toggleQuestion.statement}</div>
                <SingleTogglesContainer
                    answerPairs={this.answerPairs}
                    activeAnswerIndices={this.state.activeAnswerIndices}
                    onAnswerClick={this.onAnswerClick}/>
            </div>
        );
    }

    get defaultActiveAnswerIndices() {
        return this.props.toggleQuestion.options.map(option => option.correctAnswerIndex ? 0 : 1);
    }

    get answerPairs() {
        let toAnswerPair = (option: ToggleOption) => option.answerPair;
        return this.props.toggleQuestion.options.map(toAnswerPair);
    };

    get currentScore() {
        return this.state.activeAnswerIndices.filter(this.isCorrect).length;
    }

    isCorrect = (activeAnswerIndex: 0|1, index: number) =>
        activeAnswerIndex == this.props.toggleQuestion.options[index].correctAnswerIndex;

    onAnswerClick = (singleToggleIndex: number, selectedAnswerIndex: 0 | 1) => {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = selectedAnswerIndex;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    };
}