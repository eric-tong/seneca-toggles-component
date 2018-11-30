import React, {Component} from "react";
import SingleTogglesContainer from "./SingleTogglesContainer";
import ToggleQuestion from "../models/ToggleQuestion";
import {allCorrectResultMessage, incorrectResultMessage} from "../constants/Strings";

export interface TogglesCardProps {
    toggleQuestion: ToggleQuestion;
    defaultActiveAnswerIndices?: (0 | 1)[];
}

export interface TogglesCardState {
    activeAnswerIndices: (0 | 1)[];
}

export default class TogglesCard extends Component<TogglesCardProps, TogglesCardState> {
    state = {
        activeAnswerIndices: this.defaultActiveAnswerIndices
    };

    render() {
        return (
            <div className="toggles-card">
                <div className="statement">{this.props.toggleQuestion.statement}</div>
                <SingleTogglesContainer
                    answerPairs={this.props.toggleQuestion.answerPairs}
                    activeAnswerIndices={this.state.activeAnswerIndices}
                    onAnswerClick={this.onAnswerClick}/>
                <div className="result">{this.isAllCorrect ? allCorrectResultMessage : incorrectResultMessage}</div>
            </div>
        );
    }

    get defaultActiveAnswerIndices() {
        return this.props.defaultActiveAnswerIndices ? this.props.defaultActiveAnswerIndices : this.props.toggleQuestion.incorrectAnswerIndices;
    }

    get isAllCorrect() {
        return this.currentScore == this.props.toggleQuestion.options.length;
    }

    get currentScore() {
        return this.state.activeAnswerIndices.filter(this.isCorrect).length;
    }

    isCorrect = (activeAnswerIndex: 0 | 1, index: number) =>
        activeAnswerIndex == this.props.toggleQuestion.options[index].correctAnswerIndex;

    onAnswerClick = (singleToggleIndex: number, selectedAnswerIndex: 0 | 1) => {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = selectedAnswerIndex;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    };
}