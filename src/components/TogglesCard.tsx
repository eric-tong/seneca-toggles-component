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
        activeAnswerIndices: [],
        currentScore: 0
    };

    render() {
        return (
            <div className={this.className} style={this.togglesCardStyle}>
                <p className="statement">{this.props.toggleQuestion.statement}</p>
                <SingleTogglesContainer
                    answerPairs={this.props.toggleQuestion.answerPairs}
                    activeAnswerIndices={this.state.activeAnswerIndices}
                    onSingleToggleClick={this.onAnswerClick}
                    hue={this.singleToggleHue}/>
                <p className="result">{this.isAllCorrect ? allCorrectResultMessage : incorrectResultMessage}</p>
                {this.isAllCorrect ? <div className="reset" onClick={this.reset}>Reset</div> : null}
            </div>
        );
    }

    static getDerivedStateFromProps(props: TogglesCardProps, state: TogglesCardState) {
        let activeAnswerIndices = state.activeAnswerIndices;
        if (TogglesCard.shouldResetIndices(activeAnswerIndices, props)) {
            activeAnswerIndices = TogglesCard.getDefaultActiveIndices(props);
        }

        return {
            activeAnswerIndices: activeAnswerIndices,
            currentScore: TogglesCard.getCurrentScore(activeAnswerIndices, props)
        };
    }

    static shouldResetIndices = (activeAnswerIndices: (0 | 1)[], props: TogglesCardProps) => {
        return activeAnswerIndices.length != props.toggleQuestion.options.length;
    };

    static getDefaultActiveIndices = (props: TogglesCardProps) => {
        return props.defaultActiveAnswerIndices ? props.defaultActiveAnswerIndices : props.toggleQuestion.incorrectAnswerIndices;
    };

    static getCurrentScore = (activeAnswerIndices: (0 | 1)[], props: TogglesCardProps) => {
        const isCorrect = (activeAnswerIndex: 0 | 1, index: number) =>
            activeAnswerIndex == props.toggleQuestion.options[index].correctAnswerIndex;
        return activeAnswerIndices.filter(isCorrect).length;
    };

    get percentageScore() {
        return this.state.currentScore / this.props.toggleQuestion.options.length;
    }

    get isAllCorrect() {
        return this.state.currentScore == this.props.toggleQuestion.options.length;
    }

    get className() {
        let className = "toggles-card";
        if (this.isAllCorrect) {
            className += " unclickable";
        }
        return className;
    }

    get togglesCardStyle() {
        return getTogglesCardStyle(this.percentageScore);
    }

    get singleToggleHue() {
        return getSingleToggleHue(this.percentageScore);
    }

    private onAnswerClick = (singleToggleIndex: number) => {
        if (!this.isAllCorrect) {
            this.switchToggleAtIndex(singleToggleIndex);
        }
    };

    private switchToggleAtIndex = (singleToggleIndex: number) => {
        this.setState(prevState => {
            let activeAnswerIndices = prevState.activeAnswerIndices;
            activeAnswerIndices[singleToggleIndex] = activeAnswerIndices[singleToggleIndex] ? 0 : 1;
            return {activeAnswerIndices: activeAnswerIndices};
        });
    };

    private reset = () => {
        this.setState({
            activeAnswerIndices: TogglesCard.getDefaultActiveIndices(this.props)
        });
    };
}