import React, {Component} from "react";
import SingleTogglesContainer from "./SingleTogglesContainer";
import ToggleQuestion from "../models/ToggleQuestion";
import {allCorrectResultMessage, incorrectResultMessage} from "../constants/Strings";
import {getTogglesCardStyle} from "../styles/TogglesCardStyles";

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
        const currentScore = this.currentScore;
        const percentageScore = currentScore / this.props.toggleQuestion.options.length;
        const isAllCorrect = currentScore == this.props.toggleQuestion.options.length;

        const togglesCardStyle = getTogglesCardStyle(percentageScore);

        return (
            <div className="toggles-card" style={togglesCardStyle}>
                <p className="statement">{this.props.toggleQuestion.statement}</p>
                <SingleTogglesContainer
                    answerPairs={this.props.toggleQuestion.answerPairs}
                    activeAnswerIndices={this.state.activeAnswerIndices}
                    onSingleToggleClick={this.onAnswerClick}/>
                <p className="result">{isAllCorrect ? allCorrectResultMessage : incorrectResultMessage}</p>
            </div>
        );
    }

    get defaultActiveAnswerIndices() {
        return this.props.defaultActiveAnswerIndices ? this.props.defaultActiveAnswerIndices : this.props.toggleQuestion.incorrectAnswerIndices;
    }

    get currentScore() {
        return this.state.activeAnswerIndices.filter(this.isCorrect).length;
    }

    isCorrect = (activeAnswerIndex: 0 | 1, index: number) =>
        activeAnswerIndex == this.props.toggleQuestion.options[index].correctAnswerIndex;

    onAnswerClick = (singleToggleIndex: number) => {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = activeAnswerIndices[singleToggleIndex] ? 0 : 1;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    };
}