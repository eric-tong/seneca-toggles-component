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
    render() {
        return (
            <SingleTogglesContainer
                answerPairs={this.getAnswerPairs()}
                activeAnswerIndices={this.state.activeAnswerIndices}
                onAnswerClick={this.onAnswerClick}/>
        );
    }

    getAnswerPairs: () => [string, string][] = () => {
        let toAnswerPair: (option: ToggleOption) => [string, string] = option => {return [option.correctAnswer, option.incorrectAnswer]};
        return this.props.toggleQuestion.options.map(toAnswerPair);
    };

    onAnswerClick = () => {

    }
}