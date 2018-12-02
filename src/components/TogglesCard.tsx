import React, {Component} from "react";
import SingleTogglesContainer from "./SingleTogglesContainer";
import ToggleQuestion from "../models/ToggleQuestion";
import {allCorrectResultMessage, incorrectResultMessage} from "../constants/Strings";
import {getSingleToggleHue, getTogglesCardStyle} from "../styles/TogglesCardStyles";

export interface TogglesCardProps {
    toggleQuestion: ToggleQuestion;
    defaultActiveAnswerIndices?: (0 | 1)[];
}

export interface TogglesCardState {
    activeAnswerIndices: (0 | 1)[];
    currentScore: number;
}

export default class TogglesCard extends Component<TogglesCardProps, TogglesCardState> {
    state = {
        activeAnswerIndices: this.defaultActiveAnswerIndices,
        currentScore: 0
    };

    render() {
        return (
            <div className="toggles-card" style={this.togglesCardStyle}>
                <p className="statement">{this.props.toggleQuestion.statement}</p>
                <SingleTogglesContainer
                    answerPairs={this.props.toggleQuestion.answerPairs}
                    activeAnswerIndices={this.state.activeAnswerIndices}
                    onSingleToggleClick={this.onAnswerClick}
                    hue={this.singleToggleHue}/>
                <p className="result">{this.isAllCorrect ? allCorrectResultMessage : incorrectResultMessage}</p>
            </div>
        );
    }

    static getDerivedStateFromProps(props: TogglesCardProps, state: TogglesCardState) {
        const isCorrect = (activeAnswerIndex: 0 | 1, index: number) =>
            activeAnswerIndex == props.toggleQuestion.options[index].correctAnswerIndex;

        return {
            currentScore: state.activeAnswerIndices.filter(isCorrect).length
        };
    }

    get togglesCardStyle() {
        return getTogglesCardStyle(this.percentageScore);
    }

    get singleToggleHue() {
        return getSingleToggleHue(this.percentageScore);
    }

    get percentageScore() {
        return this.state.currentScore / this.props.toggleQuestion.options.length;
    }

    get isAllCorrect() {
        return this.state.currentScore == this.props.toggleQuestion.options.length;
    }

    get defaultActiveAnswerIndices() {
        return this.props.defaultActiveAnswerIndices ? this.props.defaultActiveAnswerIndices : this.props.toggleQuestion.incorrectAnswerIndices;
    }

    onAnswerClick = (singleToggleIndex: number) => {
        if (!this.isAllCorrect) {
            this.switchToggleAtIndex(singleToggleIndex);
        }
    };

    private switchToggleAtIndex(singleToggleIndex: number) {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = activeAnswerIndices[singleToggleIndex] ? 0 : 1;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    }
}