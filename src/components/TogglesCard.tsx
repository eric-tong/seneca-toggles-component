import React, {Component} from "react";

export interface TogglesCardProps {
    answerPairs: [string, string][];
    activeAnswerIndices: (0 | 1)[];
    onAnswerClick: (singleToggleIndex: number, selectedAnswerIndex: 0 | 1) => void;
}

export default class TogglesCard extends Component<TogglesCardProps> {
    render() {
        return (
            <div>
            </div>
        );
    }
}