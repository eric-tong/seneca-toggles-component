import React, {Component} from "react";
import SingleTogglesContainer from "./SingleTogglesContainer";
import ToggleQuestion from "../models/ToggleQuestion";
import {allCorrectResultMessage, incorrectResultMessage} from "../constants/Strings";
import {getSingleToggleHue, getTogglesCardStyle} from "../styles/TogglesCardStyles";
import ToggleOption from "../models/ToggleOption";

export interface TogglesCardProps {
    toggleQuestion: ToggleQuestion;
    defaultActiveAnswerIndices: (0 | 1)[];
}

export interface TogglesCardState {
    activeAnswerIndices: (0 | 1)[];
    currentScore: number;
}

export default class TogglesCard extends Component<TogglesCardProps, TogglesCardState> {
    state = {
        activeAnswerIndices: this.props.defaultActiveAnswerIndices.slice(0),
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
        return {
            currentScore: TogglesCard.getCurrentScore(state.activeAnswerIndices, props.toggleQuestion.options)
        };
    }

    static getCurrentScore = (activeAnswerIndices: (0 | 1)[], options: ToggleOption[]) => {
        if (options.length > 0) {
            const isCorrect = (activeAnswerIndex: 0 | 1, index: number) =>
                activeAnswerIndex == options[index].correctAnswerIndex;
            return activeAnswerIndices.filter(isCorrect).length;
        } else {
            return 0;
        }
    };

    private get percentageScore() {
        if (this.state.currentScore > 0) {
            return this.state.currentScore / this.props.toggleQuestion.options.length;
        } else {
            return 0;
        }
    }

    private get isAllCorrect() {
        return this.state.currentScore > 0 && this.state.currentScore == this.props.toggleQuestion.options.length;
    }

    private get className() {
        let className = "toggles-card";
        if (this.isAllCorrect) {
            className += " unclickable";
        }
        return className;
    }

    private get togglesCardStyle() {
        return getTogglesCardStyle(this.percentageScore);
    }

    private get singleToggleHue() {
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
            activeAnswerIndices: this.props.defaultActiveAnswerIndices.slice(0)
        });
    };
}